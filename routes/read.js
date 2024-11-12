const { Router } = require("express");
const { readTodo } = require("../controller/readController");
const auth = require("../auth");

const readRouter = Router();

readRouter.get("/read", auth, readTodo);

module.exports = {
  readRouter: readRouter,
};
