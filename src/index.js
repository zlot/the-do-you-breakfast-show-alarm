import snowboy from 'snowboy'
import { detector } from './snowboy-setup'
import express from 'express'
import ioServer from 'socket.io'
import babelify from 'express-babelify-middleware'

let app = express()
const http = require('http').Server(app)
const io = ioServer(http)

// babelify middleware
app.use('/index.js', babelify('src/client/index.js'))

app.use(express.static('src/client/'))

detector.on('hotword', (index, hotword) => {
  console.log('got hotword!')
  io.emit('hotword')
})

http.listen(3000, () => {
  console.log('server listening on 3000')
})
