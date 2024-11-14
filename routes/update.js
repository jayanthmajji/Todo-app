const { Router } = require("express");
const { updateTodo } = require("../controller/updateController");
const auth = require("../auth");

const updateRouter = Router();
updateRouter.put("/update/:id", auth, updateTodo);

module.exports = updateRouter;
