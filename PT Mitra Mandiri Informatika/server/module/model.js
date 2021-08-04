const connection = require("../config/mysql");

module.exports = {
  createData: (data) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO employee SET ?", data, (error, result) => {
        if (!error) {
          const newData = {
            ...data,
          };
          resolve(newData);
        } else {
          reject(new Error(error));
        }
      });
    });
  },
  getData: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT employee.ID, employee.NAME, employee.BIRTH_DATE,position.NAME AS POSITION, employee.ID_NUMBER AS NIP, employee.GENDER, employee.POSITION_ID FROM `employee` JOIN position ON employee.POSITION_ID = position.ID WHERE employee.IS_DELETE = 0",
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  getDataById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM `employee` JOIN position ON employee.POSITION_ID = position.ID WHERE employee.IS_DELETE = 0 AND employee.ID = ?",
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  getEmployeeById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM `employee` WHERE IS_DELETE = 0 AND ID = ?",
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  getDataPositionByIdNumber: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM `employee` WHERE ID_NUMBER = ?",
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  getAllDataPosition: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM `position`", (error, result) => {
        !error ? resolve(result) : reject(new Error(error));
      });
    });
  },
  updateData: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE employee SET ? WHERE ID = ?",
        [setData, id],
        (error, result) => {
          if (!error) {
            const newResult = {
              id: id,
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
};
