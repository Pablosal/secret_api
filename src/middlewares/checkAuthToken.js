const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { Code400 } = require("../helpers/statusCodes");
module.exports= function (req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.send("There is no token!!!!");
  try {
    const isVerified = jwt.verify(token, JWT_SECRET);
    req.user = isVerified;
    next();
  } catch (error) {
    Code400({ msg: "Invalid token" });
  }
};
