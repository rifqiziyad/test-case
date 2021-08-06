const express = require("express");
const Route = express.Router();

const authRouter = require("../modules/auth/auth_routes");
const productRouter = require("../modules/product/product_routes");
const cartRouter = require("../modules/cart/cart_routes");

Route.use("/auth", authRouter);
Route.use("/product", productRouter);
Route.use("/cart", cartRouter);

module.exports = Route;
