const express = require("express");
const route = express.Router();
const authRoute = require("./authRoute")
const categoryRoute = require("./categoryRoute")
const productRoute = require("./productRoute");


route.get("/", (req, res) => {
  res.status(200).send("Healthy");
});

route.use("/auth", authRoute);
route.use("/category", categoryRoute);
route.use("/product", productRoute);

module.exports = route;