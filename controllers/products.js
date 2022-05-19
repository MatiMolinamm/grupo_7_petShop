const fs = require("fs");
const path = require("path");

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

const productsController = {
  abmproduct: (req, res, next) =>
    res.render("products/abmproduct", {
      titulo_pagina: "Petit and Fun - Prodcutos",
    }),
  perros: (req, res, next) => {
    res.render("products/perrosProducts", {
      productsPerros,
      titulo_pagina: "Petit and Fun - Prodcutos",
    });
  },
  peces: (req, res, next) => {
    res.render("products/pecesProducts", {
      productsPeces,
      titulo_pagina: "Petit and Fun - Prodcutos",
    });
  },
  aves: (req, res, next) => {
    res.render("products/avesProducts", {
      productsAves,
      titulo_pagina: "Petit and Fun - Prodcutos",
    });
  },
  gatos: (req, res, next) => {
    res.render("products/gatosProducts", {
      productsGatos,
      titulo_pagina: "Petit and Fun - Prodcutos",
    });
  },
  detail: (req, res, next) => {
    let productsSeccion = req.query.class;
    let id = req.params.id;
    console.log(req.params.id);

    let products = [productsAves, productsGatos, productsPerros, productsPeces];
    let info = products.filter((p) => p[0].class == productsSeccion);
    let infoId = info.pop();
    //console.log(infoId);

    let productId = infoId.filter((p) => p.id == id);

    res.send(req.params.id);
    /*res.render("products/detailProduct", {
      info,

      titulo_pagina: "Petit and Fun - Prodcutos",
    });*/
  },
};

module.exports = productsController;
