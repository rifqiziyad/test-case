const express = require("express");
const Route = express.Router();

const routes = require("../module/routes");

Route.use("/form", routes);

module.exports = Route;
