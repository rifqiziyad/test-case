const express = require("express");
const Route = express.Router();

const {
  createData,
  getData,
  updateData,
  deleteData,
  getDataPosition,
} = require("./controller");

Route.post("/:id", createData);
Route.get("/", getData);
Route.get("/position", getDataPosition);
Route.patch("/update/:id", updateData);
Route.patch("/delete/:id", deleteData);

module.exports = Route;
