const express = require("express");
const mainController = require("../controllers/main");
const notLoggedMiddleware = require("../middlewares/notLoggedMiddleware");
//CONFIG
const router = express.Router();

//RUTA PRINCIPAL
router.get("/", mainController.index);
router.get("/search", mainController.search);

// CARRO DE COMPRAS
router.get("/carrito", notLoggedMiddleware, mainController.carrito);

module.exports = router;
