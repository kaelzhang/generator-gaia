const test = require('ava')
// const log = require('util').debuglog('{{name}}')
const {Client} = require('gaia')

const {GreeterService} = new Client(process.cwd())
.connect(`localhost:${process.env.SERVICE_PORT}`)

test('SayHi', async t => {
  const {message} = await GreeterService.SayHi({
    name: 'World'
  })

  t.is(message, 'Hello World')
})
