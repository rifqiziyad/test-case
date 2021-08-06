const helper = require("../../helpers/wrapper");
const bcrypt = require("bcrypt");
const authModel = require("./auth_model");
const jwt = require("jsonwebtoken");

module.exports = {
  register: async (req, res) => {
    try {
      const { userEmail, userPassword, userName } = req.body;
      const salt = bcrypt.genSaltSync(10);
      const encryptPassword = bcrypt.hashSync(userPassword, salt);
      const getDataConditions = await authModel.getDataConditions({
        user_email: userEmail,
      });
      const setData = {
        user_name: userName,
        user_email: userEmail,
        user_password: encryptPassword,
      };
      if (getDataConditions.length === 0) {
        const result = await authModel.register(setData);
        delete result.user_password;
        return helper.response(res, 200, "Success register account ", result);
      } else {
        return helper.response(res, 404, `${userEmail} Registered`);
      }
    } catch (error) {
      return helper.response(res, 400, "Bad Request", error);
    }
  },
  login: async (req, res) => {
    try {
      const { userEmail, userPassword } = req.body;
      const checkEmailUser = await authModel.getDataConditions({
        user_email: userEmail,
      });

      if (checkEmailUser.length > 0) {
        const checkPassword = bcrypt.compareSync(
          userPassword,
          checkEmailUser[0].user_password
        );
        if (checkPassword) {
          const payload = checkEmailUser[0];
          delete payload.user_password;
          const token = jwt.sign({ ...payload }, "RAHASIA", {
            expiresIn: "24h",
          });
          const result = { ...payload, token };
          return helper.response(res, 200, "Succes login !", result);
        } else {
          return helper.response(res, 404, "Wrong password");
        }
      } else {
        return helper.response(res, 404, "Email / Account not registered");
      }
    } catch (error) {
      return helper.response(res, 400, "Bad Request", error);
    }
  },
};
