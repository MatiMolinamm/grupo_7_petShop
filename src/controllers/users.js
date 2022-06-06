const path = require("path");
const fs = require("fs");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

const usersController = {
  login: (req, res) =>
    res.render("users/login", { titulo_pagina: "Petit and Fun - Login" }),
  register: (req, res) =>
    res.render("users/register", { titulo_pagina: "Petit and Fun - Registro" }),
  storeUsers: (req, res) => {
    const usersDataBaseFilePath = path.join(__dirname, "../data/users.json");
    const usersDataBase = JSON.parse(fs.readFileSync(usersDataBaseFilePath));

    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let lastUser = usersDataBase.pop();
      let lastId = lastUser ? lastUser.id : 0;
      usersDataBase.push(lastUser);

      let userNew = {
        id: lastId + 1,
        name: req.body.nombre,
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
    } else
      res.render("users/register", {
        errors: errors.mapped(),
        old: req.body,
        titulo_pagina: "Petit and Fun - Registro",
      });
  },
};

module.exports = usersController;
