const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require('../config')
module.exports.createToken = function (user) {
  return jwt.sign({ id: user.id, email: user.email },  JWT_SECRET);
};
