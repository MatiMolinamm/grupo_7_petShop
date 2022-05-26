const path = require("path");
const fs = require("fs");

const mainController = {
  index: (req, res, next) => {
    const productsPerrosFilePath = path.join(
      __dirname,
      "../data/productsPerros.json"
    );
    const productsPerros = JSON.parse(fs.readFileSync(productsPerrosFilePath));

    res.render("index", {
      productsPerros,
      titulo_pagina: "Petit and Fun",
    });
  },
  login: (req, res, next) =>
    res.render("users/login", { titulo_pagina: "Petit and Fun - Login" }),
  register: (req, res, next) =>
    res.render("users/register", { titulo_pagina: "Petit and Fun - Registro" }),
  storeUsers: (req, res) => {
    const usersDataBaseFilePath = path.join(__dirname, "../data/users.json");
    const usersDataBase = JSON.parse(fs.readFileSync(usersDataBaseFilePath));

    let userNew = {
      name: req.body.nombre,
      telefono: req.body.telefono,
      email: req.body.email,
      categoria: req.body.categoria,
      avatar: req.body.avatar,
      paswword: req.body.paswword,
      paswwordConfirm: req.body.paswwordConfirm,
    };

    usersDataBase.push(userNew);
    const usersDataBaseActualizadaJSON = JSON.stringify(usersDataBase);
    fs.writeFileSync(usersDataBaseFilePath, usersDataBaseActualizadaJSON);
    res.redirect("/");
  },

  carrito: (req, res, next) =>
    res.render("users/carrito", { titulo_pagina: "Petit and Fun - Carrito" }),
};

module.exports = mainController;
