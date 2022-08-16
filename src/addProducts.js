const db = require("./database/models");

function AddProducts(amount, category_id, img, animal) {
  for (i = 0; i <= amount; i++) {
    db.Product.create({
      name: animal + i,
      description: "Producto para " + animal,
      price: 10 + i,
      packaging: 5,
      amount: 100 + i,
      image: img,
      section_id: category_id,
      stock_id: null,
      oferta: 2,
    });
  }
}

//  value="3">Peces
//  value="4">Aves

AddProducts(50, 4, "alimento-ave-embuche copy.png", "Aves");
AddProducts(50, 4, "accesorio-ave-jaula copy.png", "Aves");
