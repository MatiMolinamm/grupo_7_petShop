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
  carrito: (req, res, next) =>
    res.render("users/carrito", { titulo_pagina: "Petit and Fun - Carrito" }),
};

module.exports = mainController;
