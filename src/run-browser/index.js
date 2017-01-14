var nightmare = require('nightmare')({
  show: true,
  waitTimeout: 1000*60*60*24
})

nightmare
  .goto('http://localhost:3000')
  .wait('.close') // attached when hotword is detected. See server.js
  .end().then(result => {
    console.log('shutdown nightmare instance')
  })

