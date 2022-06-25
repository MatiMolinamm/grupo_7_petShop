const db = require("../database/models");

const mainController = {
  index: (req, res) => {
    db.Product.findAll({ where: { oferta: 1 } }).then((productsOferta) => {
      console.log(productsOferta);
      res.render("index", { productsOferta, titulo_pagina: "Petit and Fun" });
    });
  },

  carrito: (req, res) =>
    res.render("users/carrito", { titulo_pagina: "Petit and Fun - Carrito" }),
};

module.exports = mainController;
