const { AdminModel } = require("../models");
const { UserRepostory } = require("../repositories");

let _useRepository;
class UserController {
  constructor(UserRepository) {
    _useRepository = UserRepostory;
  }
  getinit(req, res) {
    return res.json({ msg: "Bienvenidos" });
  }
  async obtenerAdmins(req, res) {
    res.json({ admins: await AdminModel.find() });
  }
}
module.exports = new UserController(UserRepostory);
