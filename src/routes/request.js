const express = require("express");
const requestRouter = express.Router();
// const User = require("./Models/user");
const User = require("../Models/user");
const { userAuth } = require("../middlewares/authMiddleware");

requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
  const user = req.user;
  // Sending a Connection Request
  console.log("Sending connection request");
  res.send(user.firstName + " is sending Request");
});

module.exports = requestRouter;
