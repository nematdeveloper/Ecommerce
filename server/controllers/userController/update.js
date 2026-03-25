const User = require("../../models/usersModel");

const update = async (req, res) => {
  const { username, email, role } = req.body;
  
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { username, email, role },
    { new: true, runValidators: true }
  ).select("-password");
  
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  
  res.json(user);
};

module.exports = update;