const User = require("../../models/usersModel");

const remove = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  
  res.json({ message: "User deleted successfully" });
};

module.exports = remove;