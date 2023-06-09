const mongoose = require("mongoose"); 
const { ObjectId } = require("mongodb");

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true 
    },
    companyName: {
        type: String,
        required:true 
    },
    userId: { 
        type: ObjectId,
        ref: 'users'
    },

   
},{
    timestamps: true
});

const Product = new mongoose.model('productsagain', productSchema)

module.exports = { Product };