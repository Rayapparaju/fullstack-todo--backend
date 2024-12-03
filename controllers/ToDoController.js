const ToDo = require("../Models/ToDoModel");

const createToDo = async (req, res) => {
  try {
    const { text } = req.body;
    const newToDo = new ToDo({ text });
    const savedToDo = await newToDo.save();
    res.status(201).json(savedToDo);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating to-do", error: err.message });
  }
};

const getToDos = async (req, res) => {
  try {
    const toDos = await ToDo.find();
    res.status(200).json(toDos);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching to-dos", error: err.message });
  }
};

const updateToDo = async (req, res) => {
  try {
    const { id } = req.params;
    const { text, completed } = req.body;
    const updatedToDo = await ToDo.findByIdAndUpdate(
      id,
      { text, completed },
      { new: true } // Returns the updated document
    );
    res.status(200).json(updatedToDo);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating to-do", error: err.message });
  }
};

const deleteToDo = async (req, res) => {
  try {
    const { id } = req.params;
    await ToDo.findByIdAndDelete(id);
    res.status(200).json({ message: "To-do deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting to-do", error: err.message });
  }
};

module.exports = { createToDo, getToDos, updateToDo, deleteToDo };
