const helper = require('../helpers/wrapper')
const model = require('./model')

module.exports = {
  register: async (req, res) => {
    try {
      const { userEmail, userName, userPassword } = req.body
      const setData = {
        user_email: userEmail,
        user_name: userName,
        user_password: userPassword
      }
      const checkDataUserByEmail = await model.checkDataUser({
        user_email: userEmail
      })

      if (checkDataUserByEmail.length === 0) {
        const result = await model.register(setData)
        return helper.response(res, 200, 'Success Register Account', result)
      } else {
        return helper.response(res, 404, `${userEmail} Registered`)
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  login: async (req, res) => {
    try {
      const { userEmail, userPassword } = req.body
      const result = await model.checkDataUser({ user_email: userEmail })
      if (result.length > 0) {
        if (result[0].user_password === userPassword) {
          delete result[0].user_password
          return helper.response(res, 200, 'Login Success', result)
        } else {
          return helper.response(res, 403, 'Wrong Password')
        }
      } else {
        return helper.response(res, 404, `${userEmail} Not Found`)
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  getAllUserData: async (req, res) => {
    try {
      let { id, search } = req.query
      if (search === undefined) search = ''
      const result = await model.getAllUserData(id, search)
      return helper.response(res, 200, 'Success Get All User Data', result)
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  createRoomChat: async (req, res) => {
    try {
      const userId = req.query.id
      const roomChatNumber = parseInt(Math.random() * 100000)
      const setData = {
        room_chat_number: roomChatNumber,
        user_id: userId
      }
      const result = await model.createRoomChat(setData)
      return helper.response(res, 200, 'Success Room Chat', result)
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  getRoomChat: async (req, res) => {
    try {
      const userId = req.params.id
      const result = await model.getRoomChat({ user_id: userId })
      return helper.response(res, 200, 'Success Get Room Chat Data', result)
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  deleteRoomChat: async (req, res) => {
    try {
      const { roomChatNumber } = req.query
      const codition = {
        room_chat_number: roomChatNumber
      }
      const checkRoomChatData = await model.getRoomChat(codition)
      if (checkRoomChatData.length > 0) {
        const result = await model.deleteRoomChat(codition)
        return helper.response(res, 200, 'Success Delete Room Chat', result)
      } else {
        return helper.response(res, 404, 'Room Chat Not Found')
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  createMessage: async (req, res) => {
    try {
      const { roomChatNumber, userId, message } = req.body
      const setData = {
        room_chat_number: roomChatNumber,
        user_id: userId,
        message: message
      }
      const result = await model.createMessage(setData)
      return helper.response(res, 200, 'Success Create Chat', result)
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  getMessage: async (req, res) => {
    try {
      const roomChatNumber = req.params.number
      const result = await model.getMessage({
        room_chat_number: roomChatNumber
      })
      return helper.response(res, 200, 'Success Get Chat', result)
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  }
}
