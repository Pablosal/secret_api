const { AdminModel } = require("../models");
const { Code400, Code201 } = require("../helpers/statusCodes");
const { createToken } = require("../helpers/jwtHelper");
class AuthController {
  constructor() {}
  async registrarse(req, res) {
    try {
      const { username, email, password } = req.body;
      if (!username || !email || !password)
        return Code400(res, { msg: "Send password" });
      const adminFound = await AdminModel.findOne({ email });
      if (adminFound) return Code400(res, { msg: "admin already exists" });
      const newAdmin = new AdminModel(req.body);
      await newAdmin.save();
      return Code201(res, newAdmin);
    } catch (error) {
      console.error(error);
    }
  }

  async iniciarsesion(req, res) {
    const user = await AdminModel.findOne({ email: req.body.email });
    const isMatch = await user.comparePassword(req.body.password);
    if (isMatch) return res.status(201).json({ token: createToken(user) });
  }

}
module.exports = new AuthController();
