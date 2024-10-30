const mongoose = require("mongoose")

const connectDB = async ()=>{
 await mongoose.connect("mongodb+srv://mayankkushwaha185:lYOfMWt0OpAMLmNl@cluster0.htdv3.mongodb.net/devTinder") 
}

module.exports = connectDB;