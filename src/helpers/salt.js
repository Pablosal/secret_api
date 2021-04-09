const bcrypt = require("bcryptjs");

module.exports.createHashPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};
module.exports.comparePassword = async function (password) {
  const user = this;
  return await bcrypt.compare(password, user.password);
};
