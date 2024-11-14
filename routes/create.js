const { Router } = require("express");
const { createTodo } = require("../controller/createController");
const auth = require("../auth");

const createRouter = Router();
createRouter.post("/create", auth, createTodo);

module.exports = createRouter;
