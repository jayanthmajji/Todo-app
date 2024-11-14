const { todoModel } = require("../model/db");

exports.createTodo = async (req, res) => {
  const userId = req.userId;

  // get the title and done from the req body
  const { title, done } = req.body;

  // create a new todo

  await todoModel.create({
    title: title,
    done: done,
    userId: userId,
  });
  // if todo created
  res.status(200).json({
    message: "Todo Created!",
  });
};
