const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;
  if (!firstName || !lastName) {
    throw new Error("Name is not correctly filed");
  } else if (firstName.length < 4 || lastName.length > 50) {
    throw new Error("Name Length should be Between 4 to 50 words");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Email ID is not valid");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Your Password is not strong");
  }
};

module.exports = {
  validateSignUpData,
};
