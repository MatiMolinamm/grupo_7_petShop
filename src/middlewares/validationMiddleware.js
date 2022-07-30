const { validationResult } = require("express-validator");
const { body } = require("express-validator");
const path = require("path");
const db = require("../database/models");

let validations = {
  rulesAbmProductsAlta: [
    body("image").custom((value, { req }) => {
      let file = req.file;
      let acceptedExtensions = [".jpg", ".png", ".gif", ".jpeg"];

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
    body("name")
      .notEmpty()
      .withMessage("Debe completar el campo")
      .isLength({ min: 3 })
      .withMessage("Debe tener más de 2 caracteres"),
    body("description")
      .notEmpty()
      .withMessage("Debe completar el campo")
      //.isAlpha(). withMessage('Solo puede utilizar letras')
      .isLength({ max: 100 })
      .withMessage("Maximo 100 caracteres")
      .isLength({ min: 20 })
      .withMessage("Debe tener más de 20 caracteres"),
    body("price")
      .notEmpty()
      .withMessage("Debe completar el campo")
      .bail()
      .isNumeric()
      .withMessage("Debe ingresar números")
      .isInt()
      .withMessage("Debe ingresar números enteros"),
    body("packaging").notEmpty().withMessage("Debe seleccionar una opcion"),
    body("amount")
      .notEmpty()
      .withMessage("Debe completar el campo")
      .bail()
      .isNumeric()
      .withMessage("Debe ingresar números")
      .isInt()
      .withMessage("Debe ingresar números enteros"),
    body("class").notEmpty().withMessage("Debe seleccionar una opcion"),
    body("oferta").notEmpty().withMessage("Debe seleccionar una opcion"),
  ],
  rulesAbmProductsEdit: [
    body("image").custom((value, { req }) => {
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
    body("name")
      .notEmpty()
      .withMessage("Debe completar el campo")
      .isLength({ min: 3 })
      .withMessage("Debe tener más de 2 caracteres"),
    body("description")
      .notEmpty()
      .withMessage("Debe completar el campo")
      //.isAlpha(). withMessage('Solo puede utilizar letras')
      .isLength({ max: 100 })
      .withMessage("Maximo 100 caracteres")
      .isLength({ min: 20 })
      .withMessage("Debe tener más de 20 caracteres"),
    body("price")
      .notEmpty()
      .withMessage("Debe completar el campo")
      .bail()
      .isNumeric()
      .withMessage("Debe ingresar números")
      .isInt()
      .withMessage("Debe ingresar números enteros"),
    body("packaging").notEmpty().withMessage("Debe seleccionar una opcion"),
    body("amount")
      .notEmpty()
      .withMessage("Debe completar el campo")
      .bail()
      .isNumeric()
      .withMessage("Debe ingresar números")
      .isInt()
      .withMessage("Debe ingresar números enteros"),
    // body("class").notEmpty().withMessage("Debe seleccionar una opcion"),
    body("oferta").notEmpty().withMessage("Debe seleccionar una opcion"),
  ],
  rulesRegister: [
    body("name")
      .notEmpty()
      .withMessage("Debe completar el campo")
      //.isAlpha(). withMessage('Solo puede utilizar letras')
      .isLength({ min: 3 })
      .withMessage("Debe tener más de 2 caracteres"),
    body("telefono")
      .notEmpty()
      .withMessage("Debe completar el campo")
      .bail()
      .isNumeric()
      .withMessage("Debe ingresar números")
      .isInt()
      .withMessage("Debe ingresar números enteros")
      .isLength({ min: 6 })
      .withMessage("Debe tener mas de 5 caracteres"),
    body("email")
      .notEmpty()
      .withMessage("Debe completar el campo")
      .bail()
      .isEmail()
      .withMessage("Formato no válido, debes ingresar un email"),
    body("categoria").notEmpty().withMessage("Debes seleccionar una opcion"),
    body("password")
      .notEmpty()
      .withMessage("Debe completar el campo")
      .bail()
      .isLength({ min: 6 })
      .withMessage("Debe tener mas de 5 caracteres"),
    body("avatar").custom((value, { req }) => {
      let file = req.file;
      let acceptedExtensions = [".jpg", ".png", ".gif", ".jpeg"];

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
  ],
  rulesEditUser: [
    body("name")
      .notEmpty()
      .withMessage("Debe completar el campo")
      //.isAlpha(). withMessage('Solo puede utilizar letras')
      .isLength({ min: 3 })
      .withMessage("Debe tener más de 2 caracteres"),
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
    // body("email").notEmpty().withMessage("Debe completar el campo").bail(),
    body("password")
      .notEmpty()
      .withMessage("Debe completar el campo")
      .bail()
      .isLength({ min: 6 })
      .withMessage("Debe tener mas de 5 caracteres"),

    body("avatar").custom((value, { req }) => {
      let file = req.file;
      let acceptedExtensions = [".jpg", ".png", ".gif", ".jpeg"];

      if (file) {
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
  ],
  rulesLogin: [
    body("email")
      .notEmpty()
      .withMessage("Debe completar el campo")
      .bail()
      .isEmail()
      .withMessage("Formato no válido, debes ingresar un email"),
    body("password")
      .notEmpty()
      .withMessage("Debe completar el campo")
      .bail()
      .isLength({ min: 6 })
      .withMessage("Debe tener mas de 6 caracteres"),
  ],
  loginValidation: function (req, res) {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("users/login", {
        titulo_pagina: "Petit and Fun - Login",
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    } else return true;
  },

  registerValidation: function (req, res) {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("users/register", {
        titulo_pagina: "Petit and Fun - Registro",
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    } else return true;
  },
  editUserValidation: function (req, res) {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("users/profile", {
        titulo_pagina: "Petit and Fun - Registro",
        user: req.session.userLogged,
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    } else return true;
  },
  crudProducValidation: function (req, res) {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("products/abmProductAlta", {
        titulo_pagina: "Petit and Fun - Registro",
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    } else return true;
  },
  editProducValidation: async function (req, res) {
    const resultValidation = validationResult(req);
    let consulta = await db.Product.findOne({
      where: { id: req.params.id, section_id: req.query.class },
    });

    if (resultValidation.errors.length > 0) {
      res.render("products/abmProductModificacion", {
        productRenderizar: consulta,
        titulo_pagina: "Petit and Fun - Productos",
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    if (resultValidation.errors.length == 0) {
      return consulta;
    }
  },
};

module.exports = validations;
