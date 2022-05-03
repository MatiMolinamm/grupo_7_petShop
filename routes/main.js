const express = require("express");

const router = express.Router();
const mainController = require("../controllers/main");
const productosController = require("../controllers/productos");

router.get("/", mainController.index);
router.get("/login", mainController.login);
router.get("/register", mainController.register);
router.get("/productos", productosController.productos);

module.exports = router;
