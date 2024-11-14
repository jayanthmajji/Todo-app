const { todoModel } = require("../model/db");

exports.readTodo = async (req, res) => {
  const userId = req.userId;

  //check for the user
  const todos = await todoModel.find({ userId: userId });

  // if no todos found
  if (!todos) {
    res.status(400).json({
      message: "No Todos Found!",
    });
  }
  // retrive the todos
  res.status(200).json({
    todos,
  });
};
