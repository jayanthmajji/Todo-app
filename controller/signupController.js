const { Router } = require("express");
const bcrypt = require("bcrypt");
const zod = require("zod");
const { userModel } = require("../model/db");

exports.signUp = async (req, res) => {
  // input validation
  const requireBody = zod.object({
    email: zod.string().min(3).max(100).email(),
    password: zod
      .string()
      .min(5)
      .max(100)
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
      ),
    name: zod.string().min(3).max(100),
  });
  // parsing the data in the body
  const parseDatawithSuccess = requireBody.safeParse(req.body);

  if (!parseDatawithSuccess.success) {
    res.json({
      message: "Incorrect format!",
      error: parseDatawithSuccess.error,
    });
    return;
  }

  const { email, password, name } = req.body;
  // password hashing

  let thrownError = false;
  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword);

    await userModel.create({
      email: email,
      password: hashedPassword,
      name: name,
    });
  } catch (e) {
    res.json({
      message: "User already exits!",
    });
    thrownError = true;
  }
  if (!thrownError) {
    res.json({
      message: "user has signed up!",
    });
  }
};
