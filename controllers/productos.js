const productosController = {
  productos: (req, res, next) =>
    res.render("products/productos", {
      titulo_pagina: "Petit and Fun - Prodcutos",
    }),
  abmproducto: (req, res, next) =>
    res.render("products/abmproducto", {
      titulo_pagina: "Petit and Fun - Prodcutos",
    }),
  perros: (req, res, next) => {
    let productos = [
      {
        titulo: "Croquetas el perro feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Croquetas el gato feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Alimento el pez feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Alimento del ave feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Croquetas el perro feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Croquetas el gato feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Alimento el pez feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Alimento del ave feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
    ];
    res.render("products/perrosProducts", {
      productos,
      titulo_pagina: "Petit and Fun - Prodcutos",
    });
  },
  gatos: (req, res, next) => {
    let productos = [
      {
        titulo: "Croquetas el perro feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Croquetas el gato feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Alimento el pez feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Alimento del ave feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Croquetas el perro feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Croquetas el gato feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Alimento el pez feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Alimento del ave feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
    ];
    res.render("products/gatosProducts", {
      productos,
      titulo_pagina: "Petit and Fun - Prodcutos",
    });
  },
  peces: (req, res, next) => {
    let productos = [
      {
        titulo: "Croquetas el perro feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Croquetas el gato feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Alimento el pez feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Alimento del ave feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Croquetas el perro feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Croquetas el gato feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Alimento el pez feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Alimento del ave feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
    ];
    res.render("products/pecesProducts", {
      productos,
      titulo_pagina: "Petit and Fun - Prodcutos",
    });
  },
  aves: (req, res, next) => {
    let productos = [
      {
        titulo: "Croquetas el perro feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Croquetas el gato feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Alimento el pez feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Alimento del ave feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Croquetas el perro feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Croquetas el gato feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Alimento el pez feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
      {
        titulo: "Alimento del ave feliz",
        img_path: "/img/productos/alimento-ave-embuche.png",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
        precio: "$5.255",
      },
    ];
    res.render("products/avesProducts", {
      productos,
      titulo_pagina: "Petit and Fun - Prodcutos",
    });
  },
};

module.exports = productosController;
