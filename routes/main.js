const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const mainController = require("../controllers/main");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/img/usersAvatar");
  },
  filename: (req, file, cb) => {
    cb(
      null,

      file.fieldname + "-" + Date.now() + "-" + path.extname(file.originalname)
    );
  },
});

const uploadFile = multer({ storage });

router.get("/", mainController.index);

// REGISTRO DE USUARIOS
router.get("/register", mainController.register);
router.post(
  "/register",
  uploadFile.single("avatar"),
  mainController.storeUsers
);

// LOGIN DE USUARIOS
router.get("/login", mainController.login);

// CARRO DE COMPRAS
router.get("/carrito", mainController.carrito);

module.exports = router;
