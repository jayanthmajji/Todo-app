const { todoModel } = require("../model/db");

exports.updateTodo = async (req, res) => {
  const userId = req.userId;
  const todoId = req.params.id;
  const { title, done } = req.body;

  // check for the todo with the id
  const todo = await todoModel.findOne({ _id: todoId, userId });

  // if the todo does not exist
  if (!todo) {
    return res.status(404).json({
      message: "Todo not Found!",
    });
  }

  // update the todo with the id
  await todoModel.updateOne(
    { _id: todoId, userId },
    { title: title, done: done }
  );

  // send a success response
  res.status(200).json({
    message: "Todo Updated!",
  });
};
