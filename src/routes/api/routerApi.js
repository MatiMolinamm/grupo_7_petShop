const express = require("express");
const usersApiController = require("../../controllers/api/users");
const productsApiController = require("../../controllers/api/products");
const loggedMiddleware = require("../../middlewares/loggedMiddleware"); //middle ruta usuario logueado
const notLoggedMiddleware = require("../../middlewares/notLoggedMiddleware"); //middle ruta usuario no logueado
//CONFIG
const router = express.Router();

//RUTAS API USERS
router.get("/users", usersApiController.usersInDb);
router.get("/users/:id", usersApiController.userId);

//RUTAS API PRODUCTS

router.get("/products", productsApiController.productsInDb);
router.get("/products/:id", productsApiController.detail);

module.exports = router;
