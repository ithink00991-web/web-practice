

const express = require("express"); // Correct import
const router = express.Router();    // Correct Router() method


//controler
const { createTodo } = require("../controllers/createTodo");
const {getTodo} = require("../controllers/getTodo");

// Route definition
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);

module.exports = router;
