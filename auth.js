const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");

function auth(req, res, next) {
  const token = req.headers.token;
  const decoded = jwt.verify(token, JWT_SECRET);

  if (decoded) {
    req.userId = decoded.id;
    next();
  } else {
    res.json({
      message: "You are not signed in!",
    });
  }
}
module.exports = auth;
