const { Router } = require("express");
const { signIn } = require("../controller/signinController");

const signInRouter = Router();

signInRouter.post("/signin", signIn);

module.exports = signInRouter;
