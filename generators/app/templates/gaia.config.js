// const {join} = require('path')
const env = require('@ostai/env')

module.exports = {
  server: {
    controller_root: 'app/service'
  },

  port: env('SERVICE_PORT', env.integer, 50053),

  // docker: {
  //   name: 'ost.ai/app-service'
  // }
}
