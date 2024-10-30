const express =require('express')
const connectDB = require("./config/database")
const app = express()
const User = require("./Models/user")

app.post("/signup", async (req, res)=>{
    const userObj1 = {
        firstName: "Mayank",
        lastName:"Kushwaha",
        emailId:"maya@gamil.com",
        password:"pasw123"
    }
    const userObj2={
        firstName:"Manisha",
        lastName:"Singh",
        emailId:"manisha1999@gmail.com",
        password:"Paww"
    }
    // Creating new user instance
    const user = new User(userObj1)
    const user2 = new User(userObj2)

    try {
           await user.save()
           await user2.save()
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