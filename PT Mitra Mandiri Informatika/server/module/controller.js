const helper = require("../helper/wrapper");
const model = require("./model");

module.exports = {
  createData: async (req, res) => {
    try {
      const { name, birthDate, idNumber, gender } = req.body;
      const { id } = req.params;

      const setData = {
        NAME: name,
        BIRTH_DATE: birthDate,
        POSITION_ID: id,
        ID_NUMBER: idNumber,
        GENDER: gender,
      };
      const checkNIP = await model.getDataPositionByIdNumber(idNumber);
      if (checkNIP.length <= 0) {
        const result = await model.createData(setData);
        return helper.response(res, 200, "Success Get Data", result);
      } else {
        return helper.response(res, 404, "NIP already exists");
      }
    } catch (error) {
      return helper.response(res, 400, "Bad Request", error);
    }
  },
  getData: async (req, res) => {
    try {
      const result = await model.getData();
      return helper.response(res, 200, "Success Get Data", result);
    } catch (error) {
      return helper.response(res, 400, "Bad Request", error);
    }
  },
  getDataPosition: async (req, res) => {
    try {
      const result = await model.getAllDataPosition();
      return helper.response(res, 200, "Success Get Data", result);
    } catch (error) {
      return helper.response(res, 400, "Bad Request", error);
    }
  },
  updateData: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, birthDate, idNumber, gender, positionId } = req.body;
      const getDataById = await model.getDataById(id);
      const setData = {
        NAME: name !== undefined ? name : getDataById[0].NAME,
        BIRTH_DATE:
          birthDate !== undefined ? birthDate : getDataById[0].BIRTH_DATE,
        POSITION_ID:
          positionId !== undefined ? positionId : getDataById[0].POSITION_ID,
        ID_NUMBER: idNumber !== undefined ? idNumber : getDataById[0].ID_NUMBER,
        GENDER: gender !== undefined ? gender : getDataById[0].GENDER,
      };

      const result = await model.updateData(setData, id);
      return helper.response(res, 200, "Success Update Data", result);
    } catch (error) {
      return helper.response(res, 400, "Bad Request", error);
    }
  },
  deleteData: async (req, res) => {
    try {
      const { id } = req.params;
      const setData = {
        IS_DELETE: 1,
      };
      const checkDataById = await model.getEmployeeById(id);
      if (checkDataById.length > 0) {
        const result = await model.updateData(setData, id);
        return helper.response(res, 200, "Success Delete Data", result);
      } else {
        return helper.response(res, 404, "ID Not Found ");
      }
    } catch (error) {
      return helper.response(res, 400, "Bad Request", error);
    }
  },
};
