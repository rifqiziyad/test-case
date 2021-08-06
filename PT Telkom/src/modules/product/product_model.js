const connection = require("../../config/mysql");

module.exports = {
  createData: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO product SET ?",
        setData,
        (error, result) => {
          if (!error) {
            const newResult = {
              id: result.insertId,
              ...setData,
            };
            resolve(newResult);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
  getDataAll: (limit, offset, search, sort) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM product WHERE product_name LIKE '%${search}%' ORDER BY ${sort} LIMIT ? OFFSET ?`,
        [limit, offset],
        (error, result) => {
          console.log(error);
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  getDataCount: (search) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT COUNT(*) AS total FROM product WHERE product_name LIKE '%${search}%'`,
        (error, result) => {
          !error ? resolve(result[0].total) : reject(new Error(error));
        }
      );
    });
  },
  getDataByCondition: (condition) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM product WHERE ?",
        condition,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  updateData: (setData, condition) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE product SET ? WHERE ?",
        [setData, condition],
        (error, result) => {
          if (!error) {
            const newResult = {
              ...condition,
              ...setData,
            };
            resolve(newResult);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
  deleteData: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM product WHERE product_id = ?",
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
};
