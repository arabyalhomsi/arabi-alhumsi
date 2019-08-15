const express = require('express')
const OAuth2Server = require('oauth2-server')
const AccessDeniedError = require('oauth2-server/lib/errors/access-denied-error');
const Request = OAuth2Server.Request
const Response = OAuth2Server.Response
const bodyParser = require('body-parser')

let server = new OAuth2Server({
    model: require('./model'),
    requireClientAuthentication: {password: false}
})

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/token', function (req, res) {

    let oRequest = new Request(req)
    let oResponse = new Response(res)

    server.token(oRequest, oResponse)
    .then((code) => {
        res.send(code)
    })
    .catch((err) => {
        if (err instanceof AccessDeniedError) {
            // The resource owner denied the access request.
            console.log('AccessDeniedError')
          } else {
            // Access was not granted due to some other error condition.
            console.log('Access was not granted due to some other error condition.')

          }

        res.send(err)
    })
})

app.listen(8080)