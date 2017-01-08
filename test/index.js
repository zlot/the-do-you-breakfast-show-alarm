const tape = require('tape')

tape.test('1+1 equals 2', t => {
  t.true(1+1 === 2)
  t.end()
})
