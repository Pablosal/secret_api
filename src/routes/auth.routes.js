const router = require("express").Router();
const { AuthMiddleware } = require("../middlewares");
const { AuthController } = require("../controllers");
router.post("/registarse", AuthController.registrarse);
router.post("/iniciarsesion", AuthController.iniciarsesion);
// router.post("/iniciarsesion",AuthController.crearNuevoUsuario);
module.exports = router;
