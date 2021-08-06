const helper = require("../helpers/wrapper");
const jwt = require("jsonwebtoken");

module.exports = {
  authentication: (req, res, next) => {
    let token = req.headers.authorization;

    if (token) {
      token = token.split(" ")[1];
      jwt.verify(token, "RAHASIA", (error, result) => {
        if (
          (error && error.name === "JsonWebTokenError") ||
          (error && error.name === "TokenExpiredError")
        ) {
          return helper.response(res, 403, error.message);
        } else {
          console.log("Middleware auth is running");
          next();
        }
      });
    } else {
      return helper.response(res, 401, "Please login first !");
    }
  },
};
