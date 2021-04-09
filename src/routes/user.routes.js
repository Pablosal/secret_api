const { UserController } = require("../controllers");
const router = require("express").Router();
router.get("/secret_users",UserController.getinit);
router.get("/admins", UserController.obtenerAdmins);

module.exports = router;
