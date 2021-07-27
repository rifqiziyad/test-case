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
      return helper.response(res, 400, 'Success Get All User Data', result)
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  }
}
