// read.js
const User = require("../../models/usersModel");

const getAll = async (req, res) => {
  const users = await User.find({}).select("-password");
  res.json(users);
};

const getOne = async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
};

const getProfile = async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
};

module.exports = { getAll, getOne, getProfile };