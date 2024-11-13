const express =require('express')
const connectDB = require("./config/database")
const app = express()
const User = require("./Models/user")
const {validateSignUpData}= require("./utils/validation")
const bcrypt = require('bcrypt')
app.use(express.json())

app.post("/signup", async (req, res)=>{
    
    try {
    // Validation of data
    validateSignUpData(req)
    const {firstName,lastName,emailId,password} = req.body
    // Encrypt the password
    const passwordHash = await bcrypt.hash(password, 10)


    // Creating new user instance
    const user = new User({firstName,lastName,emailId, password:passwordHash,})

            await user.save()
            res.send("user added succesfully")
     }catch (err){
         res.status(400).send("Error saving the user:" + err.message)
     }
})

app.post("/login", async(req,res)=>{
    try{
        const {emailId, password}= req.body;
        const user = await User.findOne({emailId: emailId})
        if(!user){
            throw new Error("Invalid crendetials")
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log(password)
        console.log(user)
        if(isPasswordValid){
            res.send("Login Succesfully")
        }else {
            throw new Error ("Invalid crendetials")
        }}
        catch (err){
            res.status(400).send("Error saving the user:" + err.message)
        }
    })

app.delete("/user", async (req,res)=>{
    const UserId =req.body.userId;
    try{
        const user = await User.findByIdAndDelete(UserId)
        res.send("user deleted succesfully")
    }catch{
        res.status(400).send("Something went wrong")
    }
})
app.patch("/user", async (req,res)=>{
const UserId = req.body.userId;
const data = req.body;

try{
    const user= await User.findByIdAndUpdate({_id:UserId}, data)
    res.send("User Data Updated Succesfully")
}catch{
    res.status(400).send("Something went wrong")
}


})

connectDB().then(()=>{
    console.log("connected to Database")
    app.listen(3000, ()=>{
        console.log("Server is Running on server 0n port 3000")
    })
}).catch(err=>{
    console.error("not connected to db ");
})