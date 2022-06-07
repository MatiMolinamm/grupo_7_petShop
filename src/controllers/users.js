const path = require("path");
const fs = require("fs");
const bcryptjs = require("bcryptjs");
const {validationResult} = require("express-validator");
const validation = require("../middlewares/validation");
console.log(validation);
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
  
  },
};

console.log(usersController.login)

module.exports = usersController;
