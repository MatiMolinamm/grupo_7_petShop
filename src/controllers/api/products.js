const db = require("../../database/models");

const productsApiController = {
  productsInDb: (req, res) => {
    db.Product.findAll().then((products) => {
      let respuesta = {
        meta: {
          status: 200,
          total: products.length,
          url: "http://localhost:3000/api/products",
        },
        data: products,
      };
      res.json(respuesta);
    });
  },
};

module.exports = productsApiController;
