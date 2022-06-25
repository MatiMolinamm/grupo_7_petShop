const db = require("../database/models");

const productsController = {
  abmproduct: (req, res) =>
    res.render("products/abmProductAlta", {
      titulo_pagina: "Petit and Fun - Productos",
    }),
  store: (req, res) => {
    db.Product.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      packaging: req.body.packaging,
      amount: req.body.stock,
      image: req.file ? req.file.filename : "logo-PF-tipografico.png",
      section_id: req.body.class,
      stock_id: null,
      oferta: req.body.oferta,
    }).then((resultado) => {
      switch (req.body.class) {
        case "1":
          res.redirect("/products/perros");

          break;
        case "2":
          res.redirect("/products/gatos");
          break;
        case "3":
          res.redirect("/products/peces");
          break;
        case "4":
          res.redirect("/products/aves");

          break;
      }
    });
  },
  edit: (req, res) => {
    db.Product.findOne({
      where: { id: req.params.id, section_id: req.query.class },
    }).then((productRenderizar) => {
      console.log(productRenderizar);
      res.render("products/abmProductModificacion", {
        productRenderizar,
        titulo_pagina: "Petit and Fun - Productos",
      });
    });
  },
  update: (req, res) => {
    let toUpdate = db.Product.findOne({
      where: { id: req.params.id, section_id: req.query.class },
    });
    let update = db.Product.update(
      {
        name: req.body.name ? req.body.name : toUpdate.name,
        description: req.body.description
          ? req.body.description
          : toUpdate.description,
        price: req.body.price ? req.body.price : toUpdate.price,
        packaging: req.body.packaging ? req.body.packaging : toUpdate.packaging,
        stock: req.body.stock ? req.body.stock : toUpdate.stock,
        class: req.body.class ? req.body.class : toUpdate.class,
        amount: req.body.stock ? req.body.stock : toUpdate.stock,
        oferta: req.body.oferta ? req.body.oferta : toUpdate.oferta,
        image: req.file ? req.file.filename : toUpdate.image,
        section_id: req.body.class ? req.body.class : toUpdate.section_id,
        stock_id: null,
        oferta: req.body.oferta ? req.body.oferta : toUpdate.oferta,
      },
      {
        where: { id: req.params.id, section_id: req.query.class },
      }
    );

    Promise.all([toUpdate, update]).then((r) => {
      switch (req.query.class) {
        case "1":
          res.redirect("/products/1");

          break;
        case "2":
          res.redirect("/products/2");
          break;
        case "3":
          res.redirect("/products/3");
          break;
        case "4":
          res.redirect("/products/4");

          break;
      }
    });
  },
  destroy: (req, res) => {
    db.Product.destroy({
      where: { id: req.params.id, section_id: req.query.class },
    }).then((r) => {
      switch (req.query.class) {
        case "1":
          res.redirect("/products/1");

          break;
        case "2":
          res.redirect("/products/2");
          break;
        case "3":
          res.redirect("/products/3");
          break;
        case "4":
          res.redirect("/products/4");

          break;
      }
    });
  },
  perros: (req, res) => {
    db.Product.findAll({
      where: { section_id: 1 },
    }).then((productsPerros) => {
      res.render("products/perrosProducts", {
        productsPerros,
        titulo_pagina: "Petit and Fun - Prodcutos",
      });
    });
  },
  gatos: (req, res) => {
    db.Product.findAll({
      where: { section_id: 2 },
    }).then((productsGatos) => {
      res.render("products/gatosProducts", {
        productsGatos,
        titulo_pagina: "Petit and Fun - Prodcutos",
      });
    });
  },
  peces: (req, res) => {
    db.Product.findAll({
      where: { section_id: 3 },
    }).then((productsPeces) => {
      res.render("products/pecesProducts", {
        productsPeces,
        titulo_pagina: "Petit and Fun - Prodcutos",
      });
    });
  },

  aves: (req, res) => {
    db.Product.findAll({
      where: { section_id: 4 },
    }).then((productsAves) => {
      res.render("products/avesProducts", {
        productsAves,
        titulo_pagina: "Petit and Fun - Prodcutos",
      });
    });
  },

  detail: (req, res) => {
    db.Product.findOne({
      where: { id: req.params.id, section_id: req.query.class },
    }).then((productRenderizar) => {
      res.render("products/detailProduct", {
        productRenderizar,
        titulo_pagina: "Petit and Fun - Productos",
      });
    });
  },
};

module.exports = productsController;
