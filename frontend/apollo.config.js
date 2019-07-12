const path = require('path')

// Load .env files
const { loadEnv } = require('vue-cli-plugin-apollo/utils/load-env')
const env = loadEnv([
  path.resolve(__dirname, '.env'),
  path.resolve(__dirname, '.env.local')
])

module.exports = {
  client: {
    name: "arabialhumsi-client",
    service: {
      name: env.VUE_APP_APOLLO_ENGINE_SERVICE,
      url: "http://localhost:4000/graphql",
    },
    // service: env.VUE_APP_APOLLO_ENGINE_SERVICE,
    // includes: ['src/**/*.{js,jsx,ts,tsx,vue,gql}']
  },
  // service: {
  //   endpoint: {
  //     name: 'arabyalhomsi-webserver',
  //     url: "http://localhost:4000/graphql/"
  //   },
  //   // localSchemaFile: './graphql/posts.gql'
  //   // name: env.VUE_APP_APOLLO_ENGINE_SERVICE,
  //   // localSchemaFile: path.resolve(__dirname, './node_modules/.temp/graphql/schema.json')
  // },
  // engine: {
  //   endpoint: process.env.APOLLO_ENGINE_API_ENDPOINT,
  //   apiKey: env.VUE_APP_APOLLO_ENGINE_KEY
  // }
}
