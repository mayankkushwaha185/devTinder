const express =require('express')

const app = express()

app.use("/hello",(req, res)=>{
    res.send("heloo")
})
app.use("/",(req, res)=>{
    res.send("heloosd")
})
app.use("/",(req, res)=>{
    res.send("hefdsgloosd")
})


app.listen(3000)