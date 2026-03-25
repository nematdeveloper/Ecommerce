const { register, login } = require("./create");
const { getAll, getOne , getProfile} = require("./read");
const update = require("./update");
const remove = require("./remove");

module.exports = {
  register,
  login,
  getAll,
  getOne,
  update,
  remove,
  getProfile,
};