const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productos");

router.get("/", productosController.productos);
router.get("/abmproducto", productosController.abmproducto);
router.get("/perros", productosController.perros);
router.get("/gatos", productosController.gatos);
router.get("/peces", productosController.peces);
router.get("/aves", productosController.aves);
module.exports = router;
