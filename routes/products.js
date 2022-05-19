const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products");

//router.get("/", productsController.products);
router.get("/abmproduct", productsController.abmproduct);
//RUTAS PRODUCTOS PARA PERRO
router.get("/perros", productsController.perros);
router.get("/perros/:id", productsController.detail);
//RUTAS PRODUCTOS GATOS
router.get("/gatos", productsController.gatos);
router.get("/gatos/:id", productsController.detail);
//RUTAS PRODUCTOS PECES
router.get("/peces", productsController.peces);
router.get("/peces/:id", productsController.detail);
//RUTAS PRODUCTOS AVES
router.get("/aves", productsController.aves);
router.get("/aves/:id", productsController.detail);

module.exports = router;
