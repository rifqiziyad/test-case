const express = require('express')
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const socket = require('socket.io')
const routerNavigation = require('./routes/index')
const morgan = require('morgan')

const app = express()
const port = process.env.PORT

app.use(morgan('dev'))
app.use(cors())
app.options('*', cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/backend', routerNavigation)

const server = require('http').createServer(app)

const io = socket(server, {
  cors: {
    origin: '*'
  },
  path: '/backend/socket.io'
})

io.on('connection', (socket) => {
  console.log('Socket.io Connect !')

  socket.on('globalMessage', (data) => {
    console.log(data)
    io.emit('chatMessage', data)
  })
})

server.listen(port, () => {
  console.log(`Express app is listen on port ${port} !`)
})
