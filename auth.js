const jwt = require("jsonwebtoken");
const JWT_SECRET = require("./config");

// create a auth function for user authentication

function auth(req, res, next) {
  const token = req.headers.authorization;

  try {
    // verify the token

    const decodedData = jwt.verify(token, JWT_SECRET);

    // get the userId
    const userId = decodedData.id;

    // calling the next function
    next();
  } catch (error) {
    res.status(403).json({
      message: "Invalid token!",
    });
  }
}
module.exports = auth;
