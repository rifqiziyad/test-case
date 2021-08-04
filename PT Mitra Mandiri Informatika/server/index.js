const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const routerNavigation = require("./routes/index");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT;

app.use(morgan("dev"));
app.use(cors());
app.options("*", cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/server", routerNavigation);

const server = require("http").createServer(app);

server.listen(port, () => {
  console.log(`Express app is listen on port ${port} !`);
});
