const mainController = {

  index: ( req, res, next ) => {

      let productos = [

          {
              titulo: "Croquetas el perro feliz",
              img_path: "/img/productos/alimento-ave-embuche.png",
              descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
              precio: "$5.255"
          },
          {
              titulo: "Croquetas el gato feliz",
              img_path: "/img/productos/alimento-ave-embuche.png",
              descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
              precio: "$5.255"
          },
          {
              titulo: "Alimento el pez feliz",
              img_path: "/img/productos/alimento-ave-embuche.png",
              descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
              precio: "$5.255"
          },
          {
              titulo: "Alimento del ave feliz",
              img_path: "/img/productos/alimento-ave-embuche.png",
              descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
              precio: "$5.255"
          },
          {
              titulo: "Croquetas el perro feliz",
              img_path: "/img/productos/alimento-ave-embuche.png",
              descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
              precio: "$5.255"
          },
          {
              titulo: "Croquetas el gato feliz",
              img_path: "/img/productos/alimento-ave-embuche.png",
              descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
              precio: "$5.255"
          },
          {
              titulo: "Alimento el pez feliz",
              img_path: "/img/productos/alimento-ave-embuche.png",
              descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
              precio: "$5.255"
          },
          {
              titulo: "Alimento del ave feliz",
              img_path: "/img/productos/alimento-ave-embuche.png",
              descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum accusantium fugit placeat obcaecati praesentium.",
              precio: "$5.255"
          }

      ];

      res.render( "index", { productos: productos, titulo_pagina: "Petit and Fun" } );

  },
  login: ( req, res, next ) => res.render( "users/login", { titulo_pagina: "Petit and Fun - Login" } ),
  register: ( req, res, next ) => res.render( "users/register", { titulo_pagina: "Petit and Fun - Registro" } ),
  carrito: ( req, res, next ) => res.render( "users/carrito", { titulo_pagina: "Petit and Fun - Carrito" } ),

};

module.exports = mainController;