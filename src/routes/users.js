const express = require("express");
const multer = require("multer");
const path = require("path");
const usersController = require("../controllers/users");
const {body} = require('express-validator');

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

const uploadFile = multer({ storage });

//REGLAS DE VALIDACION
const validations = [
  body('name').notEmpty(). withMessage('Debe completar el campo')
              .isAlpha(). withMessage('Solo puede utilizar letras')
                .isLength({min: 3}). withMessage('Debe tener más de 3 caracteres'),
  body('telefono').notEmpty(). withMessage('Debe completar el campo').bail()
                .isNumeric(). withMessage('Debe ingresar números')
                .isInt(). withMessage('Debe ingresar números enteros')
                .isLength({min: 3}). withMessage('Debe tener mas de 3 caracteres'),
  body('email').notEmpty(). withMessage('Debe completar el campo').bail(),
  body('password').notEmpty(). withMessage('Debe completar el campo').bail()
                .isLength({min: 3}). withMessage('Debe tener mas de 3 caracteres')
                ,             
  body('avatar').custom((value, { req }) => {
  let file = req.file;
  let acceptedExtensions = ['.jpg', '.png', '.gif'];
  
  if (!file) {
    throw new Error('Tienes que subir una imagen');
  } else {
    let fileExtension = path.extname(file.originalname);
    if (!acceptedExtensions.includes(fileExtension)) {
      throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
    }
  }

  return true;
})
]

//RUTAS REGISTRO DE USUARIOS
router.get("/register", usersController.register);
router.post("/register", uploadFile.single("avatar"), validations, usersController.storeUsers);

// RUTAS LOGIN DE USUARIOS
router.get("/login", usersController.login);

//RUTA PERFIL DE USUARIOS
router.get("/profile", usersController.profile)

module.exports = router;
