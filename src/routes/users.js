const express = require("express");
const usersController = require("../controllers/users");
const validation = require("../middlewares/validationMiddleware");
const uploadFile = require("../middlewares/multerUserMiddleware");
const loggedMiddleware = require("../middlewares/loggedMiddleware"); //middle ruta usuario logueado
const notLoggedMiddleware = require("../middlewares/notLoggedMiddleware"); //middle ruta usuario no logueado
//CONFIG
const router = express.Router();

//RUTAS REGISTRO DE USUARIOS
router.get("/register", loggedMiddleware, usersController.register);
router.post(
  "/register",
  uploadFile.single("avatar"),
  validation.rulesRegister,
  usersController.storeUsers
);

// RUTAS LOGIN DE USUARIOS
router.get("/login", loggedMiddleware, usersController.login);
router.post("/login", validation.rulesLogin, usersController.processLogin);

//RUTA PERFIL DE USUARIOS
router.get("/profile", notLoggedMiddleware, usersController.profile);
router.put(
  "/profile",
  uploadFile.single("avatar"),
  validation.rulesEditUser,
  usersController.editUser
);
router.delete("/profile", usersController.destroy);
//RUTA LOGOUT DE USUARIO
router.get("/logout", usersController.logout);

module.exports = router;
