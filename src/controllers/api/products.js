const { promiseImpl } = require("ejs");
const db = require("../../database/models");
const path = require("path");

const publicPathProducts = path.resolve(
  __dirname,
  "../../../public/img/products"
);

const productsApiController = {
  productsInDb: (req, res) => {
    let total = db.Product.findAll({ include: ["section"] });
    let perros = db.Product.findAll({ where: { section_id: 1 } });
    let gatos = db.Product.findAll({ where: { section_id: 2 } });
    let peces = db.Product.findAll({ where: { section_id: 3 } });
    let aves = db.Product.findAll({ where: { section_id: 4 } });
    let categorias = db.Section.findAll();

    promiseImpl
      .all([total, perros, gatos, peces, aves, categorias])
      .then((products) => {
        console.log(products[5].length);
        let dataApi = products[0].map((i) => {
          let save = {
            id: i.dataValues.id,
            name: i.dataValues.name,
            description: i.dataValues.description,
            section: i.dataValues.section,
            detail: "http://localhost:3000/api/products/" + i.dataValues.id,
          };

          return save;
        });

        let respuesta = {
          meta: {
            status: 200,
            count: products[0].length,
            countCategories: products[5].length,
            countByCategory: {
              perros: products[1].length,
              gatos: products[2].length,
              peces: products[3].length,
              aves: products[4].length,
            },
            url: "http://localhost:3000/api/products",
          },
          data: dataApi,
        };
        res.json(respuesta);
      });
  },
  detail: (req, res) => {
    let id = req.params.id;
    db.Product.findOne({ where: { id: id }, include: ["section"] }).then(
      (data) => {
        if (data) {
          const imgPath = path.join(publicPathProducts, data.dataValues.image);

          let respuesta = data;
          respuesta.dataValues.urlImage = imgPath;
          res.json(respuesta);
        }
      }
    );
  },
  perros: (req, res) => {
    db.Product.findAll({ where: { section_id: 1 }, include: ["section"] }).then(
      (data) => {
        let respuesta = {
          meta: {
            status: 200,
            count: data.length,
            url: "http://localhost:3000/api/products/perros",
          },
          data: data,
        };
        res.json(respuesta);
      }
    );
  },

  gatos: (req, res) => {
    db.Product.findAll({ where: { section_id: 2 }, include: ["section"] }).then(
      (data) => {
        let respuesta = {
          meta: {
            status: 200,
            count: data.length,
            url: "http://localhost:3000/api/products/perros",
          },
          data: data,
        };
        res.json(respuesta);
      }
    );
  },
  aves: (req, res) => {
    db.Product.findAll({ where: { section_id: 4 }, include: ["section"] }).then(
      (data) => {
        let respuesta = {
          meta: {
            status: 200,
            count: data.length,
            url: "http://localhost:3000/api/products/perros",
          },
          data: data,
        };
        res.json(respuesta);
      }
    );
  },
  peces: (req, res) => {
    db.Product.findAll({ where: { section_id: 3 }, include: ["section"] }).then(
      (data) => {
        let respuesta = {
          meta: {
            status: 200,
            count: data.length,
            url: "http://localhost:3000/api/products/perros",
          },
          data: data,
        };
        res.json(respuesta);
      }
    );
  },
  error: (req, res) => {
    let respuesta = {
      meta: {
        status: 404,
        data: "Not Found",
        url: "inexistente",
      },
    };
    res.json(respuesta);
  },
};

module.exports = productsApiController;
