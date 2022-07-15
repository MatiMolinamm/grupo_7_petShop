const express = require("express");
const productsController = require("../controllers/products");
const uploadFile = require("../middlewares/multerProductMiddleware");
const notAdmindMiddleware = require("../middlewares/notAdmindMiddleware");
const notLoggedMiddleware = require("../middlewares/notLoggedMiddleware");

//CONFIG
const router = express.Router();

//RUTA ALTA PRODUCTO
router.get(
  "/abmproduct",
  notLoggedMiddleware,
  notAdmindMiddleware,
  productsController.abmproduct
);
router.post(
  "/abmproduct",
  uploadFile.single("image"),
  productsController.store
);

//RUTA EDIT PRODUCTO
router.get(
  "/abmproductEdit/:id",
  notLoggedMiddleware,
  notAdmindMiddleware,
  productsController.edit
);
router.put(
  "/abmproductEdit/:id",
  uploadFile.single("image"),
  productsController.update
);

//RUTA DELETE PRODUCTO
router.delete(
  "/abmproductEdit/:id",
  notLoggedMiddleware,
  notAdmindMiddleware,
  productsController.destroy
);

//RUTAS PRODUCTOS PARA PERRO
router.get("/1", productsController.perros);
router.get("/1/:id", productsController.detail);

//RUTAS PRODUCTOS GATOS
router.get("/2", productsController.gatos);
router.get("/2/:id", productsController.detail);

//RUTAS PRODUCTOS PECES
router.get("/3", productsController.peces);
router.get("/3/:id", productsController.detail);

//RUTAS PRODUCTOS AVES
router.get("/4", productsController.aves);
router.get("/4/:id", productsController.detail);

module.exports = router;
