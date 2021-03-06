const express = require('express')
const Route = express.Router()

const {
  register,
  login,
  getAllUserData,
  createRoomChat,
  createRoomChatNewMember,
  getRoomChat,
  deleteRoomChat,
  createMessage,
  getMessage
} = require('./controller')

Route.post('/register', register)
Route.post('/login', login)
Route.get('/user', getAllUserData)
Route.post('/create-chat', createRoomChat)
Route.post('/create-chat-member', createRoomChatNewMember)
Route.get('/room-chat/:id', getRoomChat)
Route.delete('/room-chat', deleteRoomChat)
Route.post('/message', createMessage)
Route.get('/message/:number', getMessage)

module.exports = Route
