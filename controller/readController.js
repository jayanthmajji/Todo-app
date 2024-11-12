const { todoModel } = require("../model/db");

exports.readTodo = async (req, res) => {
  const userId = req.userId;

  // find the todo with the userId

  const todos = await todoModel.find({ userId: userId });

  // if no todos found
  if (!todos) {
    res.json({
      message: "No todos Found!",
    });
  }

  // retrived todo
  res.json({
    todos,
  });
};
