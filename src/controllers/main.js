const path = require("path");
const fs = require("fs");

// DATA PERROS
const productsPerrosFilePath = path.join(
  __dirname,
  "../data/productsPerros.json"
);
const productsPerros = JSON.parse(fs.readFileSync(productsPerrosFilePath));
//DATA PECES
const productsPecesFilePath = path.join(
  __dirname,
  "../data/productsPeces.json"
);
const productsPeces = JSON.parse(fs.readFileSync(productsPecesFilePath));
//DATA GATOS
const productsGatosFilePath = path.join(
  __dirname,
  "../data/productsGatos.json"
);
const productsGatos = JSON.parse(fs.readFileSync(productsGatosFilePath));
//DATA AVES
const productsAvesFilePath = path.join(__dirname, "../data/productsAves.json");
const productsAves = JSON.parse(fs.readFileSync(productsAvesFilePath));

const mainController = {
  index: (req, res) => {
    // FILTRO PRODUCTOS EN OFERTA
    let productsOfertaPerros = productsPerros.filter((i) => i.oferta == "true");
    let productsOfertaGatos = productsGatos.filter((i) => i.oferta == "true");
    let productsOfertaPeces = productsPeces.filter((i) => i.oferta == "true");
    let productsOfertaAves = productsAves.filter((i) => i.oferta == "true");

    let productOfertaDefault = {
      name: "No hay producto en oferta",
      description: "No hay producto en oferta",
      price: "$",
      packaging: "No hay producto en oferta",
      class: "default",
      amount: "default",
      oferta: "default",
      image: "logo-PF-tipografico.png",
    };

    let productsOferta = [
      productsOfertaPerros ? productsOfertaPerros : productOfertaDefault,
      productsOfertaGatos ? productsOfertaGatos : productOfertaDefault,
      productsOfertaPeces ? productsOfertaPeces : productOfertaDefault,
      productsOfertaAves ? productsOfertaAves : productOfertaDefault,
    ];

    res.render("index", { productsOferta, titulo_pagina: "Petit and Fun" });
  },

  carrito: (req, res) =>
    res.render("users/carrito", { titulo_pagina: "Petit and Fun - Carrito" }),
};

module.exports = mainController;
