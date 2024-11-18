const express = require("express");
const profileRouter = express.Router();
const { userAuth } = require("../middlewares/authMiddleware");

profileRouter.get("/profile", userAuth, async (req, res) => {
  const { token } = req.cookies;

  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
});

module.exports = profileRouter;
