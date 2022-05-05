const productosController = {
  productos: (req, res, next) => res.render("products/productos"),
  abmproducto: (req, res, next) => res.render("products/abmproducto"),
};

module.exports = productosController;
