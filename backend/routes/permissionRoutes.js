const express = require("express");
const { getPermissions } = require("../controllers/permissionController");
const router = express.Router();

router.get("/", getPermissions);

module.exports = router;