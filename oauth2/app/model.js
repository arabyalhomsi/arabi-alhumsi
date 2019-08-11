"use strict";

const Database = require('./database')
const db = new Database()


db.user.findAll().then((a) => {
    console.log(a)
})
console.log()

const model = {

    getAccessToken () {
        return 'asdas'
    },
    saveToken (token, client, user) {
        // let fns = [
        //     ({
        //         access_token: token.accessToken,
        //         expires_at: token.accessTokenExpiresAt,
        //         scope: token.scope,
        //         client_id: client.id,
        //         user_id: user.id
        //     }),
        //     db.saveRefreshToken({
        //         refresh_token: token.refreshToken,
        //         expires_at: token.refreshTokenExpiresAt,
        //         scope: token.scope,
        //         client_id: client.id,
        //         user_id: user.id
        //     })
        //     ];
        //     return Promise.all(fns);
        //     .spread(function(accessToken, refreshToken) {
        //         return {
        //         accessToken: accessToken.access_token,
        //         accessTokenExpiresAt: accessToken.expires_at,
        //         refreshToken: refreshToken.refresh_token,
        //         refreshTokenExpiresAt: refreshToken.expires_at,
        //         scope: accessToken.scope,
        //         client: {id: accessToken.client_id},
        //         user: {id: accessToken.user_id}
        //         };
        //     });
    },
    getClient (clientID, clientSecret) {

        return {
            client: {
                id: 'asdoasd-adasdma-sadasdas-asd',
                redirectUris: ['localhost:4002/about'],
                grants: ['password'],
            }
        }
    },
    getUser (username, password) {
        return {
            username: username,
            password: password
        }
    }

}

module.exports = model