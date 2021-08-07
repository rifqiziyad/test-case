const connection = require("../../config/mysql");

module.exports = {
  createData: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO cart SET ?", setData, (error, result) => {
        if (!error) {
          const newResult = {
            cart_id: result.insertId,
            ...setData,
          };
          resolve(newResult);
        } else {
          reject(new Error(error));
        }
      });
    });
  },
  getUserDataConditions: (data) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM user WHERE ?", data, (error, result) => {
        !error ? resolve(result) : reject(new Error(error));
      });
    });
  },
  getCartByUserId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT product.product_name, product.product_city, product.product_price, product.product_image, cart.quantity AS product_quantity FROM cart JOIN product ON cart.product_id = product.product_id WHERE cart.user_id = ?`,
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  getProductByCondition: (productId) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM product WHERE product_id = ?",
        productId,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  checkCartByCondition: (productId, userId) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM cart WHERE product_id = ? AND user_id = ?",
        [productId, userId],
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  checkCartByCartId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM cart WHERE cart_id = ?",
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  updateData: (setData, productId, userId) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE cart SET ? WHERE product_id = ? AND user_id = ?",
        [setData, productId, userId],
        (error, result) => {
          if (!error) {
            const newResult = {
              product_id: productId,
              user_id: userId,
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
        "DELETE FROM cart WHERE cart_id = ?",
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
};
