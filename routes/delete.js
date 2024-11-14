const { Router } = require("express");
const { deleteTodo } = require("../controller/deleteController");
const auth = require("../auth");

const deleteRouter = Router();
deleteRouter.delete("/delete/:id", auth, deleteTodo);

module.exports = deleteRouter;
