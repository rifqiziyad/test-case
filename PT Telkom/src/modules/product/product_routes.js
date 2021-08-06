const express = require("express");
const Route = express.Router();
const uploadFile = require("../../middleware/uploads");
const { authentication } = require("../../middleware/auth");

const {
  createData,
  getAllData,
  getDataById,
  updateData,
  deleteData,
} = require("./product_controller");

Route.post("/", authentication, uploadFile, createData);
Route.get("/", authentication, getAllData);
Route.get("/getbyid/", authentication, getDataById);
Route.patch("/:id", authentication, uploadFile, updateData);
Route.delete("/:id", authentication, deleteData);

module.exports = Route;
