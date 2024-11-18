const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./Models/user");
const cookieParser = require("cookie-parser");

app.use(express.json());
// app.use(express.cookieParser);
app.use(cookieParser());
const authRouter = require("../src/routes/auth");
const profileRouter = require("../src/routes/profile");
const requestRouter = require("../src/routes/request");

app.use("/", authRouter);
app.use("/", requestRouter);
app.use("/", profileRouter);

// app.get("/profile", async (req, res) => {
//   const cookie = req.cookies;
//   const { token } = cookie;

//   console.log(cookie);
//   res.send("reading cookies");
// });

app.delete("/user", async (req, res) => {
  const UserId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(UserId);
    res.send("user deleted succesfully");
  } catch {
    res.status(400).send("Something went wrong");
  }
});
app.patch("/user", async (req, res) => {
  const UserId = req.body.userId;
  const data = req.body;

  try {
    const user = await User.findByIdAndUpdate({ _id: UserId }, data);
    res.send("User Data Updated Succesfully");
  } catch {
    res.status(400).send("Something went wrong");
  }
});

connectDB()
  .then(() => {
    console.log("connected to Database");
    app.listen(3000, () => {
      console.log("Server is Running on server 0n port 3000");
    });
  })
  .catch((err) => {
    console.error("not connected to db ");
  });
