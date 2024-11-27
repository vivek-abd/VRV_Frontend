const express = require("express");
const { getRoles, addRole, updateRole, deleteRole } = require("../controllers/roleController");
const router = express.Router();

router.get("/", getRoles);
router.post("/", addRole);
router.put("/:id", updateRole);
router.delete("/:id", deleteRole);

module.exports = router;