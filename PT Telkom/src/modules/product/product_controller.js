const helper = require("../../helpers/wrapper");
const productModel = require("./product_model");
const fs = require("fs");
const jwt = require("jsonwebtoken");

module.exports = {
  createData: async (req, res) => {
    try {
      let id;
      let token = req.headers.authorization;
      token = token.split(" ")[1];
      jwt.verify(token, "RAHASIA", (error, result) => {
        id = result.user_id;
      });
      const { productName, productCity, productPrice } = req.body;
      const setData = {
        user_id: id,
        product_name: productName,
        product_city: productCity,
        product_price: productPrice,
        product_image: req.file ? req.file.filename : "",
      };
      const result = await productModel.createData(setData);
      return helper.response(res, 200, "Success Create Product", result);
    } catch (error) {
      return helper.response(res, 400, "Bad Request", error);
    }
  },
  getAllData: async (req, res) => {
    try {
      let { page, limit, search, sort } = req.query;
      if (page === undefined || page === "") {
        page = 1;
      }
      if (limit === undefined || limit === "") {
        limit = 4;
      }
      if (search === undefined || search === "") {
        search = "";
      }
      if (sort === undefined || sort === "") {
        sort = "product_price ASC";
      }
      page = parseInt(page);
      limit = parseInt(limit);
      const totalData = await productModel.getDataCount(search);
      const totalPage = Math.ceil(totalData / limit);
      const offset = page * limit - limit;

      const pageInfo = {
        page,
        totalPage,
        limit,
        totalData,
      };
      const result = await productModel.getDataAll(limit, offset, search, sort);
      return helper.response(res, 200, "Succes Get Data", result, pageInfo);
    } catch (error) {
      return helper.response(res, 400, "Bad Request", error);
    }
  },
  getDataById: async (req, res) => {
    try {
      const { id } = req.query;
      const result = await productModel.getDataByCondition({
        product_id: id,
      });
      if (result.length > 0) {
        return helper.response(
          res,
          200,
          `Success Get Product Data By Id: ${id}`,
          result
        );
      } else {
        return helper.response(
          res,
          404,
          `Data Product By Id: ${id} Not Found`,
          null
        );
      }
    } catch (error) {
      return helper.response(res, "Bad Request", 400, error);
    }
  },
  updateData: async (req, res) => {
    try {
      const { id } = req.params;
      const { productName, productCity, productPrice } = req.body;
      const setData = {
        product_name: productName,
        product_city: productCity,
        product_price: productPrice,
        product_image: req.file ? req.file.filename : "",
      };
      const condition = {
        product_id: id,
      };
      const checkDataById = await productModel.getDataByCondition(condition);
      if (checkDataById.length > 0) {
        const imageToDelete = checkDataById[0].product_image;
        const isImageExist = fs.existsSync(`src/uploads/${imageToDelete}`);

        if (isImageExist && imageToDelete) {
          fs.unlink(`src/uploads/${imageToDelete}`, (err) => {
            if (err) throw err;
          });
          console.log("Success Delete Image");
        }

        const result = await productModel.updateData(setData, condition);
        return helper.response(res, 200, "Success Update Data Product", result);
      } else {
        return helper.response(
          res,
          404,
          `Data Product By Id: ${id} Not Found`,
          null
        );
      }
    } catch (error) {
      return helper.response(res, "Bad Request", 400, error);
    }
  },
  deleteData: async (req, res) => {
    try {
      const { id } = req.params;
      const condition = {
        product_id: id,
      };
      const checkDataById = await productModel.getDataByCondition(condition);
      if (checkDataById.length > 0) {
        console.log(checkDataById);
        const imageToDelete = checkDataById[0].product_image;
        const isImageExist = fs.existsSync(`src/uploads/${imageToDelete}`);

        if (isImageExist && imageToDelete) {
          fs.unlink(`src/uploads/${imageToDelete}`, (err) => {
            if (err) throw err;
          });
          console.log("Success Delete Image");
        }

        const result = await productModel.deleteData(id);
        return helper.response(
          res,
          200,
          "Success Delete Data Product",
          checkDataById
        );
      } else {
        return helper.response(
          res,
          404,
          `Data Product By Id: ${id} Not Found`,
          null
        );
      }
    } catch (error) {
      return helper.response(res, "Bad Request", 400, error);
    }
  },
};
