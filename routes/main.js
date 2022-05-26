const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main");

router.get("/", mainController.index);

// REGISTRO DE USUARIOS
router.get("/register", mainController.register);
router.post("/register", mainController.storeUsers);

// LOGIN DE USUARIOS
router.get("/login", mainController.login);

// CARRO DE COMPRAS
router.get("/carrito", mainController.carrito);

module.exports = router;
