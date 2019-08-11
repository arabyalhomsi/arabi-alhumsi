const express = require('express')
const OAuth2Server = require('oauth2-server')
const AccessDeniedError = require('oauth2-server/lib/errors/access-denied-error');
const Request = OAuth2Server.Request
const Response = OAuth2Server.Response
const util = require('util')
const qs = require('qs')

let server = new OAuth2Server({
    model: require('./model')
})

const app = express()

app.post('/authorize', (req, res) => {
    let oRequest = new Request(req)
    let oResponse = new Response(res)

    server.authorize(oRequest, oResponse)
    .then((code) => {
        console.log(code)
    })
    .catch((err) => {
        if (err instanceof AccessDeniedError) {
            // The resource owner denied the access request.
          } else {
            // Access was not granted due to some other error condition.
          }
    })
})

app.listen(8080)