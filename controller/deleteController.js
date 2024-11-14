const { todoModel } = require("../model/db");

exports.deleteTodo = async (req, res) => {
  const userId = req.userId;
  const todoId = req.params.id;

  // check for user with the id
  const todo = await todoModel.findOne({ _id: todoId, userId });

  // if no todo found
  if (!todo) {
    res.status(400).json({
      message: "No Todos Found!",
    });
  }

  // deleting the todo
  await todoModel.deleteOne({ _id: todoId, userId });

  // send the response
  res.status(200).json({
    message: "Todo deleted!",
  });
};
