const Sequelize = require('sequelize')

class Database {
    constructor() {
        this.sequelize = new Sequelize(
            process.env.PGDATABASE,
            process.env.PGUSER,
            process.env.PGPASSWORD
        ,{
            host: process.env.PGHOST,
            dialect: 'postgres'
        })

        this.user = this.getUserInstance()

        this.token = this.getTokenInstance()

        this.code = this.getCodeInstance()

        this.client = this.getClientInstance()
    }

    getUserInstance() {
        return this.sequelize.define('user', {
            username: Sequelize.STRING,
            password: Sequelize.STRING
        }, {
            freezeTableName: true,
            timestamps: false,
            tableName: 'auth_user'
        })
    }

    getTokenInstance() {
        return this.sequelize.define('token', {
            scope: Sequelize.STRING,
            access_token: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            refresh_token: Sequelize.STRING,
            access_token_expires_at: Sequelize.DATE,
            refresh_token_expires_at: Sequelize.DATE,
            client_id: Sequelize.STRING,
            user_id: Sequelize.INTEGER
        }, {
            freezeTableName: true,
            timestamps: false,
            tableName: 'oauth_tokens'
        })
    }

    getClientInstance() {
        return this.sequelize.define('client', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            secret: Sequelize.STRING,
            redirect_uris: Sequelize.STRING,
            grants: Sequelize.STRING,
            access_token_lifetime: Sequelize.INTEGER,
            refresh_access_token_lifetime: Sequelize.INTEGER,
        }, {
            freezeTableName: true,
            timestamps: false,
            tableName: 'oauth_clients'
        })
    }

    getCodeInstance() {
        return this.sequelize.define('code', {
            redirect_uri: Sequelize.STRING,
            code: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            expires_at: Sequelize.DATE,
            scope: Sequelize.STRING,
            client_id: Sequelize.STRING,
            user_id: Sequelize.INTEGER
        }, {
            freezeTableName: true,
            timestamps: false,
            tableName: 'oauth_codes'
        })
    }
    
}


module.exports = new Database() 
