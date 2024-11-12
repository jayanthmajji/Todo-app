const { todoModel } = require("../model/db");

exports.createTodo = async (req, res) => {
  const userId = req.userId;

  // get the title and done from the request body
  const { title, done } = req.body;

  await todoModel.create({
    title: title,
    done: done,
    userId: userId,
  });
  res.status(200).json({
    message: "Todo Created!",
  });
};
