
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://uhasham71:hasham123@cluster0.0qzsvze.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true //FALTU KI WARNING SE BACHNE K LIYE
}).then(() => {
    console.log("Connection Successful")
}).catch((e) => {
    console.log(e)
})