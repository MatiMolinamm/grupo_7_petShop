const { sequelize, Sequelize } = require("../database/models");
const db = require("../database/models");
const op = Sequelize.Op;

const mainController = {
  index: (req, res) => {
    db.Product.findAll({ where: { oferta: 1 } }).then((productsOferta) => {
      res.render("index", { productsOferta, titulo_pagina: "Petit and Fun" });
    });
  },
  search: (req, res) => {
    let notFind = db.Product.findAll({
      where: { name: { [op.like]: "%" + req.query.search + "%" } },
    }).then((productsSearch) => {
      res.render("indexSearchList", {
        productsSearch,
        titulo_pagina: "Petit and Fun - Productos",
      });
    });
  },

  carrito: (req, res) =>
    res.render("users/carrito", { titulo_pagina: "Petit and Fun - Carrito" }),
};

module.exports = mainController;
