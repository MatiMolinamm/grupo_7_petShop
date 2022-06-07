const express = require("express");
const multer = require("multer");
const path = require("path");
//const { check } = require("express-validator");
const usersController = require("../controllers/users");

//CONFIG
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../public/img/usersAvatar");
  },
  filename: (req, file, cb) => {
    cb(
      null,

      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

//CONSTANTES
const uploadFile = multer({ storage });
/*const validate = [
  check("email")
    .notEmpty()
    .withMessage("debes ingresar un email valido")
    .isEmail()
    .withMessage("el email ingresado no se encuentra en la base de datos")
    .bail(),
  check("password")
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage("debe contener minimo 5 caractares"),
];*/

//RUTAS REGISTRO DE USUARIOS
router.get("/register", usersController.register);
router.post(
  "/register",
  //validate despues de multer
  uploadFile.single("avatar"),
  /*validate,*/
  usersController.storeUsers
);

// RUTAS LOGIN DE USUARIOS
router.get("/login", usersController.login);

//RUTA PERFIL DE USUARIOS
router.get("/profile", usersController.profile);

module.exports = router;
