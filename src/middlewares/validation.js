const { validationResult } = require("express-validator");
const { body } = require("express-validator");

/*-----------VALIDACION DEL LOGIN EN CONTROLLER----------------------*/

let validations = {
  /* loginValidation: function ( req, res) {
        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0) {
            return res.render( "users/login", { titulo_pagina: "Petit and Fun - Login", 
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        } 
        res.render("users/login", { titulo_pagina: "Petit and Fun - Login" })},*/

  registerValidation: function (req, res) {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("users/register", {
        titulo_pagina: "Petit and Fun - Registro",
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
  },
};

module.exports = validations;
