const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const routerNavigation = require("./routes/");

const app = express();
const port = process.env.PORT;

app.use(morgan("dev"));
app.use(cors());
app.options("*", cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use("/backend", routerNavigation);
app.use("/backend/api", express.static("src/uploads"));

app.listen(port, () => {
  console.log(`Express app is listen on port ${port}`);
});
