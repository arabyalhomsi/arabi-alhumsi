const OAuth2Server = require('oauth2-server');


const server = new OAuth2Server({
    model: require('./model')
})

