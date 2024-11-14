const bcrypt = require("bcrypt");
const { userModel } = require("../model/db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

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

    // password match and generating token

    const passwordMatch = await bcrypt.compare(password, response.password);

    if (passwordMatch) {
      const token = jwt.sign(
        {
          id: response._id.toString(),
        },
        JWT_SECRET
      );
      console.log("token---", token);

      res.json({
        message: "User has signed in!",
        Token: token,
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
