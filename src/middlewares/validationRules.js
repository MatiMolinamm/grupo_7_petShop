const { body } = require("express-validator");
const path = require("path");

/* -------REGLAS DE VALIDACION GENERALES----------*/
const validationRules = [
  body("name")
    .notEmpty()
    .withMessage("Debe completar el campo")
    //.isAlpha(). withMessage('Solo puede utilizar letras')
    .isLength({ min: 3 })
    .withMessage("Debe tener más de 3 caracteres"),
  body("telefono")
    .notEmpty()
    .withMessage("Debe completar el campo")
    .bail()
    .isNumeric()
    .withMessage("Debe ingresar números")
    .isInt()
    .withMessage("Debe ingresar números enteros")
    .isLength({ min: 3 })
    .withMessage("Debe tener mas de 3 caracteres"),
  body("email").notEmpty().withMessage("Debe completar el campo").bail(),
  body("password")
    .notEmpty()
    .withMessage("Debe completar el campo")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Debe tener mas de 6 caracteres"),
  body("avatar").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".gif"];

    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ", "
          )}`
        );
      }
    }

    return true;
  }),
];

module.exports = validationRules;
