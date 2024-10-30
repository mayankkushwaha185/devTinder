const express =require('express')

const app = express()
const {userAuth, admin} = require("./middlewares/authMiddleware")

app.use("/admin", admin)

app.get("/admin/getData", (req,res)=>{
    console.log("get data")
    res.send("user data send")
})
app.get ("/admin/deleteUser", (req, res)=>{
    console.log("")
    res.send("User Deleted")
})

app.get("/user/data", userAuth, (req,res)=>{
    res.send("user data send")
})
app.get("/user/login", (req,res)=>{
    res.send("user LOgin")
})

app.get("/user/delete", userAuth, (req,res)=>{
    res.send("user data deleted")
})

app.listen(3000, ()=>{
    console.log("Server is Running on server 0n port 3000")
})