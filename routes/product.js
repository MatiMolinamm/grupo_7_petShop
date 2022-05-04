const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productos");

router.get("/", productosController.productos);

module.exports = router;

//Hay un error en los codigos q no deja correr el nodemon:

/*router.get("/:idProducto", productosController.detalle);

router.get(
  "/:idProducto/comentarios:idComentario?",
  productosController.detalleComentarios
);

router.get("/:idProducto", (req, res) => {
  res.send("Bienvenidos al detalle del producto " + req.params.idProducto);
});

router.get("/:idProducto/comentarios/:idComentario?", (req, res) => {
  if (req.params.idComentario == undefined) {
    res.send(
      "Bienvenidos a los comentarios del producto " + req.params.idProducto
    );
  } else {
    res.send(
      "Bienvenidos a los comentarios del producto " +
        req.params.idProducto +
        " y estas enfocado en el comentario " +
        req.params.idComentario
    );
  }
});*/
