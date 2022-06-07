const path = require("path");
const fs = require("fs");
const bcryptjs = require("bcryptjs");
<<<<<<< HEAD
//const { validationResult } = require("express-validator");

=======
const {validationResult} = require("express-validator");
const validation = require("../middlewares/validation");
console.log(validation);
>>>>>>> 07bf4f41067463f25067dec58c722d2a2d8c733a
const usersController = {
  login: validation.loginValidation,  
  register: (req, res) =>
    res.render("users/register", { titulo_pagina: "Petit and Fun - Registro" }),
  profile: (req, res) =>
    res.render("users/profile", { titulo_pagina: "Petit and Fun - Profile" }),
  storeUsers: //validation.registerValidation
  
  function ( req, res) {
    const resultValidation = validationResult(req);
    
    if (resultValidation.errors.length > 0) {
        return res.render( "users/register", { titulo_pagina: "Petit and Fun - Registro", 
            errors: resultValidation.mapped(),
            oldData: req.body
        });
    }
   
    const usersDataBaseFilePath = path.join(__dirname, "../data/users.json");
    const usersDataBase = JSON.parse(fs.readFileSync(usersDataBaseFilePath));

    //let errors = validationResult(req);

    // if (errors.isEmpty()) {
    let lastUser = usersDataBase.pop();
    let lastId = lastUser ? lastUser.id : 0;
    usersDataBase.push(lastUser);

    let userNew = {
      id: lastId + 1,
      name: req.body.name,
      telefono: req.body.telefono,
      email: req.body.email,
      categoria: req.body.categoria,
      avatar: req.file ? req.file.filename : null,
      password: bcryptjs.hashSync(req.body.password, 10),
      //passwordConfirm: "" ,
    };

    usersDataBase.push(userNew);
    const usersDataBaseActualizadaJSON = JSON.stringify(usersDataBase);
    fs.writeFileSync(usersDataBaseFilePath, usersDataBaseActualizadaJSON);
    res.redirect("/");
<<<<<<< HEAD
    //} else
    res.render("users/register", {
      errors: errors.mapped(),
      old: req.body,
      titulo_pagina: "Petit and Fun - Registro",
    });
=======
  
>>>>>>> 07bf4f41067463f25067dec58c722d2a2d8c733a
  },
};

console.log(usersController.login)

module.exports = usersController;
