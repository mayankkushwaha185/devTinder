const mongoose = require("mongoose");
const validtor = require("validator");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true, lowercase: true },
    lastName: { type: String, required: true },
    emailId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate(value) {
        if (!validtor.isEmail(value)) {
          throw new Error("Invalid email address:" + vlaue);
        }
      },
    },
    password: {
      type: String,
      required: true,
      validate(value) {
        if (!validtor.isStrongPassword(value)) {
          throw new Error("Enter a strong password:" + vlaue);
        }
      },
    },
    age: { type: String },
    gender: { type: String },
    photoUrl: {
      type: String,
      validate(value) {
        if (!validtor.isURL(value)) {
          throw new Error("Invalid Photo URL:" + vlaue);
        }
      },
    },
    skills: { type: [String] },
  },
  { timestamps: true }
);

userSchema.methods.getJWT = async function () {
  const user = this;

  const token = await jwt.sign({ _id: user._id }, "Mayankl0", {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("user", userSchema);

module.exports = User;
