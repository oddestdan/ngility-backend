const express = require("express");
const router = express.Router();

const issue_controller = require("../controllers/issue");

router.post("/", issue_controller.issue_create);
router.get("/:id", issue_controller.issue_readone);
router.get("/", issue_controller.issue_readall);
router.put("/:id", issue_controller.issue_update);
router.delete("/:id", issue_controller.issue_delete);

module.exports = router;
