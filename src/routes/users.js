const express = require("express");
const multer = require("multer");
const path = require("path");
const usersController = require("../controllers/users");

//CONFIG
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../public/img/usersAvatar");
  },
  filename: (req, file, cb) => {
    cb(
      null,

      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const uploadFile = multer({ storage });

//RUTAS REGISTRO DE USUARIOS
router.get("/register", usersController.register);
router.post(
  "/register",
  uploadFile.single("avatar"),
  usersController.storeUsers
);

// RUTAS LOGIN DE USUARIOS
router.get("/login", usersController.login);

module.exports = router;
