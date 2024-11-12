const bcrypt = require("bcrypt");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../auth");
const { userModel } = require("../model/db");

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check for the user

    const response = await userModel.findOne({ email: email });

    if (!response) {
      return res.status(400).json({
        message: "User not found!",
      });
    }

    // comparing password
    const passwordMatch = await bcrypt.compare(password, response.password);

    // token generating
    if (passwordMatch) {
      const token = jwt.sign(
        {
          id: response._id.toString(),
        },
        JWT_SECRET
      );
      res.json({
        Token: token,
        message: "User has signed in!",
      });
    } else {
      res.status(400).json({
        message: "Invalid credentials!",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Signin failed",
      error: error.message,
    });
  }
};
