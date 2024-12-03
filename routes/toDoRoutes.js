const express = require("express");
const {
  createToDo,
  getToDos,
  updateToDo,
  deleteToDo,
} = require("../controllers/ToDoController");
const router = express.Router();

router.post("/", createToDo);
router.get("/", getToDos);
router.put("/:id", updateToDo);
router.delete("/:id", deleteToDo);

module.exports = router;
