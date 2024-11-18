// const admin = (res, req, next) => {
//   const token = "xyz";
//   const adminAuthrised = token === "xyz";
//   console.log("auth is checking");
//   if (!adminAuthrised) {
//     res.status(401).send("admin not authorised");
//   } else {
//     next();
//   }
// };
// const userAuth = (res, req, next) => {
//   const token = "xyz";
//   const adminAuthrised = token === "xyz2";
//   console.log("auth is checking");
//   if (!adminAuthrised) {
//     res.status(401).send("user not authorised");
//   } else {
//     next();
//   }
const jwt = require("jsonwebtoken");
const User = require("../Models/user");

const userAuth = async (req, res, next) => {
  // Read the token from the req cookies

  const { token } = req.cookies;
  if (!token) {
    throw new Error("Token is not found");
  }

  const decodedobj = await jwt.verify(token, "Mayankl0");
  const { _id } = decodedobj;

  const user = await User.findById(_id);
  if (!user) {
    throw new Error("User not found");
  }
  req.user = user;
  next();

  // Validate the token
  // Find the user
};

module.exports = { userAuth };
