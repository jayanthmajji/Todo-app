const jwt = require("jsonwebtoken");
const JWT_SECRET = require("./config");

// create a auth function for user authentication

function auth(req, res, next) {
  const token = req.headers.authorization;

  try {
    const decodedData = jwt.verify(token, JWT_SECRET);
    req.userId = decodedData.id;
    next();
  } catch (e) {
    res.json({
      message: "Invalid token!",
    });
  }
}
module.exports = auth;
