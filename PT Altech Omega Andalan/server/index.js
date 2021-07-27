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

server.listen(port, () => {
  console.log(`Express app is listen on port ${port} !`)
})
