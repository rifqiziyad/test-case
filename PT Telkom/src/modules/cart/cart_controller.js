const helper = require("../../helpers/wrapper");
const jwt = require("jsonwebtoken");
const cartModel = require("./cart_model");

module.exports = {
  createData: async (req, res) => {
    try {
      let id;
      let token = req.headers.authorization;
      token = token.split(" ")[1];
      jwt.verify(token, "RAHASIA", (error, result) => {
        id = result.user_id;
      });
      const { productId, qty } = req.body;
      const setData = {
        user_id: id,
        product_id: productId,
        quantity: qty,
      };
      const checkProductById = await cartModel.getProductByCondition(productId);
      if (checkProductById.length > 0) {
        if (checkProductById[0].user_id != id) {
          const result = await cartModel.createData(setData);
          return helper.response(res, 200, "Success Create Cart", result);
        } else {
          return helper.response(
            res,
            403,
            `Product Id = ${productId} can't be added to cart`,
            null
          );
        }
      } else {
        return helper.response(
          res,
          404,
          `Product Id = ${productId} Not Found`,
          null
        );
      }
    } catch (error) {
      return helper.response(res, 400, "Bad Request", error);
    }
  },
  getCartDataByUserId: async (req, res) => {
    try {
      let id;
      let token = req.headers.authorization;
      token = token.split(" ")[1];
      jwt.verify(token, "RAHASIA", (error, result) => {
        id = result.user_id;
      });

      const result = await cartModel.getCartByUserId(id);
      return helper.response(res, 200, "Success Get Cart Data", result);
    } catch (error) {
      return helper.response(res, 400, "Bad Request", error);
    }
  },
  updateData: async (req, res) => {
    try {
      let userId;
      let token = req.headers.authorization;
      token = token.split(" ")[1];
      jwt.verify(token, "RAHASIA", (error, result) => {
        userId = result.user_id;
      });
      const { productId, qty } = req.body;
      const setData = {
        quantity: qty,
      };
      const checkProductById = await cartModel.getProductByCondition(
        productId,
        userId
      );

      if (checkProductById.length > 0) {
        const result = await cartModel.updateData(setData, productId, userId);
        return helper.response(res, 200, "Success Update Cart Data", result);
      } else {
        return helper.response(
          res,
          404,
          `Product Id = ${productId} Not Found`,
          null
        );
      }
    } catch (error) {
      console.log(error);
      return helper.response(res, 400, "Bad Request", error);
    }
  },
};
