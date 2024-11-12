const { Router } = require("express");
const { signUp } = require("../controller/signupController");

const signUpRouter = Router();

signUpRouter.post("/signup", signUp);

module.exports = {
  signUpRouter: signUpRouter,
};
