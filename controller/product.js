const { Product } = require("../model/product");

const createProduct = async (req, res) => {
  const newProduct = new Product({
    productName: req.body.productName,
    price: req.body.price,
    companyName:req.body.companyName,
    userId: req.body.userId,
  });

  const data = await newProduct.save();

  return res.send({ message: "Product has been created", data: data });
};


module.exports = { createProduct };
