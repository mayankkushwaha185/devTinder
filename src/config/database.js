const mongoose = require("mongoose")

const connectDB = async ()=>{
 await mongoose.connect("mongodb+srv://mayankkushwaha185:lYOfMWt0OpAMLmNl@cluster0.htdv3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0") 
}

connectDB().then(()=>{
    console.log("conect to db")
}).catch(err=>{
    console.error("not conected ");
})