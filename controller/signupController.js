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
  // parsing the data to the body
  const parseDataWithSuccess = requireBody.safeParse(req.body);

  // error in validation
  if (!parseDataWithSuccess.success) {
    res.status(403).json({
      message: "Incorrect format!",
      error: parseDataWithSuccess.error,
    });
  }

  // get the email , name from the req body
  const { email, password, name } = req.body;

  // password hashing

  let errorThrown = false;

  try {
    const passwordHashed = await bcrypt.hash(password, 5);
    console.log(passwordHashed);

    // create new user
    await userModel.create({
      email: email,
      password: passwordHashed,
      name: name,
    });
  } catch (e) {
    res.json({
      message: "User already exists!",
    });
    errorThrown = true;
  }

  if (!errorThrown) {
    res.status(200).json({
      message: "User has Signed Up!",
    });
  }
};
