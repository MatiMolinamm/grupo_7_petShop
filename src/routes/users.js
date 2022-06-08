const express = require("express");
const usersController = require("../controllers/users");
const validation = require("../middlewares/validationMiddleware");
const uploadFile = require("../middlewares/multerMiddleware");

//CONFIG
const router = express.Router();

//RUTAS REGISTRO DE USUARIOS
router.get("/register", usersController.register);
router.post(
  "/register",
  uploadFile.single("avatar"),
  validation.rulesRegister,
  usersController.storeUsers
);

// RUTAS LOGIN DE USUARIOS
router.get("/login", usersController.login);
router.post("/login", validation.rulesLogin, usersController.processLogin);

//RUTA PERFIL DE USUARIOS
router.get("/profile", usersController.profile);

module.exports = router;
