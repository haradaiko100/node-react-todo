const express = require("express")
const router = express.Router();
const taskController = require("../controllers/taskControllers");


router.get("/",taskController.read_todo);
router.post("/post",taskController.create_todo);
router.put("/:id",taskController.update_todo);
router.delete("/:id",taskController.delete_todo);



module.exports = router;