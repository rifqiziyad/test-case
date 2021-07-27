const express = require('express')
const Route = express.Router()

const { register, login, getAllUserData } = require('./controller')

Route.post('/register', register)
Route.post('/login', login)
Route.get('/user', getAllUserData)

module.exports = Route
