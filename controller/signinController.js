const bcrypt = require("bcrypt");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { userModel } = require("../model/db");

exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  // Find the user in the database by email
  const user = await userModel.findOne({ email: email });

  if (!user) {
    return res.status(403).json({ message: "Invalid Credentials!" });
  }

  // Compare the provided password
  const passwordMatch = await bcrypt.compare(password, user.password);

  // If password matches, generate a JWT token and return it
  if (passwordMatch) {
    const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET);

    res.json({ token, message: "You are signed in!" });
  } else {
    res.status(403).json({ message: "Invalid Credentials!" });
  }
};
