const express = require("express");
const Route = express.Router();
const { authentication } = require("../../middleware/auth");

const {
  createData,
  getCartDataByUserId,
  updateData,
} = require("./cart_controller");

Route.post("/", authentication, createData);
Route.get("/", authentication, getCartDataByUserId);
Route.patch("/", authentication, updateData);

module.exports = Route;
