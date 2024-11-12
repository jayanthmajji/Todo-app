const mongoose = require("mongoose");
const { string } = require("zod");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  password: String,
  name: String,
});

const todoSchema = new Schema({
  title: String,
  done: {
    type: Boolean,
    default: false,
  },
  userId: ObjectId,
});

const userModel = mongoose.model("users", userSchema);
const todoModel = mongoose.model("todos", todoSchema);

module.exports = {
  userModel,
  todoModel,
};
