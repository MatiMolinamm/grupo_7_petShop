const bcryptjs = require("bcryptjs");
const db = require("./database/models");

function AddUsers(amount, category_id) {
  for (i = 0; i <= amount; i++) {
    db.User.create({
      name: "Juan Numero " + i,
      phone: 353444412 + i,
      email: "juanNumero" + i + category_id + "@gmail.com",
      avatar: "avatarAdminUser.png",
      password: 123456,
      category_id: category_id,
    });
  }
}
AddUsers(50, 1);
