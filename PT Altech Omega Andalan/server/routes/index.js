const express = require('express')
const Route = express.Router()

const userRouter = require('../module/routes')

Route.use('/chat', userRouter)

module.exports = Route
