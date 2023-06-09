const express = require("express");
const productRouter = express.Router();
const {
  createProduct,
} = require("../controller/product");

productRouter.post("/api/createProduct", createProduct);

module.exports = productRouter;
