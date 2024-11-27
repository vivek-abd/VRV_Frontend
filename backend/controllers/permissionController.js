const Permission = require("../models/Permission");

exports.getPermissions = async (req, res) => {
  try {
    const permissions = await Permission.find();
    res.status(200).json(permissions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};