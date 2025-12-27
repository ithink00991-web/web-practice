const Todo = require("../models/Todo");

const getTodo = async (req, res) => {
  try {
    // featch all todos from the database
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching todos" });
  }
};

module.exports = { getTodo };
