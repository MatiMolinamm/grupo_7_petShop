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
    res.render("products/abmProductAlta", {
      titulo_pagina: "Petit and Fun - Productos",
    }),
  store: (req, res, next) => {
    let productsSeccion = req.body.class;

    let productsTotal = [
      productsAves,
      productsGatos,
      productsPerros,
      productsPeces,
    ];
    //console.log(productsTotal) llega bien
    //console.log(productsSeccion); llega bien
    let productsSeccionFilter = productsTotal.filter(
      (p) => p[0].class == productsSeccion
    );
    let productsSeccionClass = productsSeccionFilter.pop(); //para sacarlo del array q lo contiene
    let ultimo = productsSeccionClass.pop();
    let ultimoId = ultimo.id;
    productsSeccionClass.push(ultimo);

    let productCreate = {
      id: ultimoId + 1,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      packaging: req.body.packaging,
      class: req.body.class,
      amount: req.body.amount,
      image: req.file ? req.file.filename : "logo-PF-tipografico.png",
    };
    productsSeccionClass.push(productCreate);
    let productsSeccionClassJSON = JSON.stringify(productsSeccionClass);
    switch (productsSeccion) {
      case "perros":
        fs.writeFileSync(productsPerrosFilePath, productsSeccionClassJSON);
        res.render("products/perrosProducts", {
          productsPerros,
          titulo_pagina: "Petit and Fun - Productos",
        });

        break;
      case "gatos":
        fs.writeFileSync(productsGatosFilePath, productsSeccionClassJSON);
        res.render("products/gatosProducts", {
          productsGatos,
          titulo_pagina: "Petit and Fun - Productos",
        });
        break;
      case "peces":
        fs.writeFileSync(productsPecesFilePath, productsSeccionClassJSON);
        res.render("products/pecesProducts", {
          productsPeces,
          titulo_pagina: "Petit and Fun - Productos",
        });
        break;
      case "aves":
        fs.writeFileSync(productsAvesFilePath, productsSeccionClassJSON);
        res.render("products/avesProducts", {
          productsAves,
          titulo_pagina: "Petit and Fun - Productos",
        });
        break;
    }

    next();
  },
  edit: (req, res, next) => {
    let productsSeccion = req.query.class;
    let id = req.params.id;

    let products = [productsAves, productsGatos, productsPerros, productsPeces];
    let info = products.filter((p) => p[0].class == productsSeccion);
    let infoId = info.pop();

    let productId = infoId.filter((p) => p.id == id);
    let productRenderizar = productId.pop();

    res.render("products/abmProductModificacion", {
      productRenderizar,
      titulo_pagina: "Petit and Fun - Productos",
    });
  },
  update: (req, res, next) => {
    let productsSeccion = req.body.class;
    let id = req.params.id;
    let products = [productsAves, productsGatos, productsPerros, productsPeces];

    let classToEdit = products.filter((p) => p[0].class == productsSeccion);
    let classEdit = classToEdit.pop();

    let classUpdate = classEdit.map((toUpdate) => {
      if (toUpdate.id == id) {
        toUpdate = {
          id: req.body.id ? req.body.id : toUpdate.id,
          name: req.body.name ? req.body.name : toUpdate.name,
          description: req.body.description
            ? req.body.description
            : toUpdate.description,
          price: req.body.price ? req.body.price : toUpdate.price,
          packaging: req.body.packaging
            ? req.body.packaging
            : toUpdate.packaging,
          stock: req.body.stock ? req.body.stock : toUpdate.stock,
          classs: req.body.class ? req.body.class : toUpdate.class,
          amount: req.body.amount ? req.body.amount : toUpdate.amount,
          image: req.file ? req.file.fielname : toUpdate.image,
        };
      }
      return toUpdate;
    });
    //console.log(classUpdate); array de la clase editado funciona

    let classUptateJSON = JSON.stringify(classUpdate);
    switch (productsSeccion) {
      case "perros":
        fs.writeFileSync(productsPerrosFilePath, classUptateJSON);
        res.render("products/perrosProducts", {
          productsPerros,
          titulo_pagina: "Petit and Fun - Productos",
        });

        break;
      case "gatos":
        fs.writeFileSync(productsGatosFilePath, classUptateJSON);
        res.render("products/gatosProducts", {
          productsGatos,
          titulo_pagina: "Petit and Fun - Productos",
        });
        break;
      case "peces":
        fs.writeFileSync(productsPecesFilePath, classUptateJSON);
        res.render("products/pecesProducts", {
          productsPeces,
          titulo_pagina: "Petit and Fun - Productos",
        });
        break;
      case "aves":
        fs.writeFileSync(productsAvesFilePath, classUptateJSON);
        res.render("products/avesProducts", {
          productsAves,
          titulo_pagina: "Petit and Fun - Productos",
        });
        break;
    }

    next();
  },
  destroy: (req, res, next) => {
    let productsSeccion = req.query.class;
    let idDelete = req.params.id;

    let productsTotal = [
      productsAves,
      productsGatos,
      productsPerros,
      productsPeces,
    ];

    let productsSeccionFilter = productsTotal.filter(
      (p) => p[0].class == productsSeccion
    );
    let productsSeccionClass = productsSeccionFilter.pop();

    let notDelete = productsSeccionClass.filter((i) => i.id != idDelete);
    let notDeleteJSON = JSON.stringify(notDelete);

    switch (productsSeccion) {
      case "perros":
        fs.writeFileSync(productsPerrosFilePath, notDeleteJSON);
        res.render("products/perrosProducts", {
          productsPerros,
          titulo_pagina: "Petit and Fun - Productos",
        });
        next();

        break;
      case "gatos":
        fs.writeFileSync(productsGatosFilePath, notDeleteJSON);
        res.render("products/gatosProducts", {
          productsGatos,
          titulo_pagina: "Petit and Fun - Productos",
        });
        next();
        break;
      case "peces":
        fs.writeFileSync(productsPecesFilePath, notDeleteJSON);
        res.render("products/pecesProducts", {
          productsPeces,
          titulo_pagina: "Petit and Fun - Productos",
        });
        next();
        break;
      case "aves":
        fs.writeFileSync(productsAvesFilePath, notDeleteJSON);
        res.render("products/avesProducts", {
          productsAves,
          titulo_pagina: "Petit and Fun - Productos",
        });
        next();
        break;
    }
  },
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

    let products = [productsAves, productsGatos, productsPerros, productsPeces];
    let info = products.filter((p) => p[0].class == productsSeccion);
    let infoId = info.pop();

    let productId = infoId.filter((p) => p.id == id);
    let productRenderizar = productId.pop();

    res.render("products/detailProduct", {
      productRenderizar,
      titulo_pagina: "Petit and Fun - Productos",
    });
  },
};

module.exports = productsController;
