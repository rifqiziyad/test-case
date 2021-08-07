const express = require("express");
const Route = express.Router();
const { authentication } = require("../../middleware/auth");

const {
  createData,
  getCartDataByUserId,
  updateData,
  deleteData,
} = require("./cart_controller");

Route.post("/", authentication, createData);
Route.get("/", authentication, getCartDataByUserId);
Route.patch("/", authentication, updateData);
Route.delete("/:id", authentication, deleteData);

module.exports = Route;
