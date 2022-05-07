const productosController = {
  productos: (req, res, next) => res.render("products/productos", { titulo_pagina: "Petit and Fun - Prodcutos" } ),
  abmproducto: (req, res, next) => res.render("products/abmproducto", { titulo_pagina: "Petit and Fun - Prodcutos" }),
};

module.exports = productosController;
