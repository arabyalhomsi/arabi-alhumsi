const db = require('./database')
const InvalidClientError = require('oauth2-server/lib/errors/invalid-client-error')
const ServerError = require('oauth2-server/lib/errors/server-error');
const IsPasswordCorrect = require('./helpers/IsPasswordCorrect')
const jwt = require('jsonwebtoken')

const model = {
    async generateAccessToken (client, user, scope) {
        const payload = {
            user_id: user.id,
            client_id: client.id,
            scope: scope
        }

        try {
            let jwtGenerated = await jwt.sign(payload, process.env.SECRET, { algorithm: 'HS256' });
            return jwtGenerated
        } catch (error) {
            throw new ServerError(error)
        }

    },
    async generateRefreshToken (client, user, scope) {
        const payload = {
            user_id: user.id,
            client_id: client.id,
            scope: scope
        }

        try {
            let jwtGenerated = await jwt.sign(payload, process.env.SECRET, { algorithm: 'HS512' });
            return jwtGenerated
        } catch (error) {
            throw new ServerError(error)
        }
    },
    async getAuthorizationCode (authorizationCode) {
        let code = await db.code.findOne({
            where: {
                code: authorizationCode
            }
        })
        let user = await db.user.findOne({
            where: {
                id: code.user_id
            }
        })
        
        user = user || {}

        let client = await db.client.findOne({
            where: {
                id: code.client_id
            }
        })
        return {
            code: code.code,
            expiresAt: code.expires_at,
            redirectUri: code.redirect_uri,
            scope: code.scope,
            client: client,
            user: user
        }
    },
    async saveAuthorizationCode(code, client, user) {

        let savedCode = await db.code.create({
            code: code.authorizationCode,
            scope: code.scope,
            redirect_uri: code.redirectUris,
            expires_at: code.expiresAt,
            client_id: client.id,
            user_id: user.id
        })

        return {
            authorizationCode: savedCode.code,
            expiresAt: savedCode.expires_at,
            redirectUri: savedCode.redirect_uri,
            scope: savedCode.scope,
            client: client,
            user: user
        }
    },
    getAccessToken (accessToken) {

        let fns = [
            db.token.findOne({
                where: {
                    access_token: accessToken
                }
            })
        ]

        return Promise.all(fns)
        .then(async function (token) {
            let user = await db.user.findOne({
                where: {
                    id: token.user_id
                }
            })
            let client = await db.client.findOne({
                where: {
                    id: token.client_id
                }
            })

            return {
                accessToken: token.access_token,
                accessTokenExpiresAt: token.access_token_expires_at,
                scope: token.scope,
                client: client,
                user: user
            }
        })
    },
    async saveToken (token, client, user) {

        let savedToken = await db.token.create({
            scope: token.scope,
            access_token: token.accessToken,
            access_token_expires_at: token.accessTokenExpiresAt,
            refresh_token: token.refreshToken,
            refresh_token_expires_at: token.refreshTokenExpiresAt,
            client_id: client.id,
            user_id: user.id
        })

        return {
            accessToken: savedToken.access_token,
            accessTokenExpiresAt: savedToken.access_token_expires_at,
            refreshToken: savedToken.refresh_token,
            refreshTokenExpiresAt: savedToken.refresh_token_expires_at,
            scope: savedToken.scope,
            client: client,
            user: user
        }
             
    },
    async getClient (clientID, clientSecret) {
        
        let q = {
            where: {
                id: clientID
            }
        }

        if (clientSecret) {
            q.where['secret'] = clientSecret
        }

        let client = await db.client.findOne(q)

        return {
            id: client.id,
            redirectUris: client.redirect_uris,
            grants: JSON.parse(client.grants)
        }
    },
    async getUser (username, password) {

        try {
            let user = await db.user.findOne({
                where: {
                    username
                }
            })

            if (await IsPasswordCorrect(password, user.password)) 
                return {
                    id: user.id,
                    username: user.username
                }
            
        } catch (error) {
            throw new InvalidClientError(error)
        }        
    },
    async revokeAuthorizationCode (code) {
        let destroyed = await db.code.destroy({
            where: {
                code: code.code
            }
        })

        return destroyed
    }

}

module.exports = model