const express =require('express')
const connectDB = require("./config/database")
const app = express()
const User = require("./Models/user")

app.use(express.json())

app.post("/signup", async (req, res)=>{
    console.log(req.body)



    // Creating new user instance
    const user = new User(req.body)

     try {
            await user.save()
            res.send("user added succesfully")
     }catch (err){
         res.status(400).send("Error saving the user:" + err.message)
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