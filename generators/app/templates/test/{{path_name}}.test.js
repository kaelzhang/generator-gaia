const test = require('ava')
// const log = require('util').debuglog('{{name}}')
const {Client} = require('gaia')

const {GreeterService} = new Client(process.cwd())
// GAIA_SERVER_HOST is an env created by gaia-cli
.connect(process.env.GAIA_SERVER_HOST)

test('SayHi', async t => {
  const {greetings} = await GreeterService.SayHi({
    name: 'World'
  })

  t.is(greetings, 'Hello World')
})
