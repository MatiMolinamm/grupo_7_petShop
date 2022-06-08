const express = require("express");
const multer = require("multer");
const path = require("path");
const usersController = require("../controllers/users");
const validationRules = require("../middlewares/validationRules");
const uploadFile = require("../middlewares/multerMiddleware");

//CONFIG
const router = express.Router();

//RUTAS REGISTRO DE USUARIOS
router.get("/register", usersController.register);
router.post(
  "/register",
  uploadFile.single("avatar"),
  validationRules,
  usersController.storeUsers
);

// RUTAS LOGIN DE USUARIOS
router.get("/login", usersController.login);
router.post("/login", validationRules, usersController.profile);

//RUTA PERFIL DE USUARIOS
router.get("/profile", usersController.profile);

module.exports = router;
