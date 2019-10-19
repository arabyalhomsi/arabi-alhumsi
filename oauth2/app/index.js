const express = require('express')
const OAuth2Server = require('oauth2-server')
const AccessDeniedError = require('oauth2-server/lib/errors/access-denied-error');
const Request = OAuth2Server.Request
const Response = OAuth2Server.Response
const bodyParser = require('body-parser')
const cors = require('cors')
const seed = require('./seed')

let server = new OAuth2Server({
    model: require('./model'),
    requireClientAuthentication: {password: false}
})

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const whitelist = [
  'http://localhost:4002',
]

const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }
  } else {
    corsOptions = { origin: false }
  }
  callback(null, corsOptions)
}

app.use(cors(corsOptionsDelegate))


app.post('/token', function (req, res) {

    let oRequest = new Request(req)
    let oResponse = new Response(res)

    server.token(oRequest, oResponse)
    .then((code) => {
      console.log(code)
        res.send(code)
    })
    .catch((err) => {
        if (err instanceof AccessDeniedError) {
            console.log(err)
            // The resource owner denied the access request.
            console.log('AccessDeniedError')
          } else {
            console.log(err)
            // Access was not granted due to some other error condition.
            console.log('Access was not granted due to some other error condition.')

          }

        res.send(err)
    })
})

const { exec } = require('child_process');

exec('db-migrate up', async (err, stdout, stderr) => {
    if (err) {
        return;
    }

    await seed()
    console.log('migrated and seeded')
});



app.listen(8080)