const db = require("../../database/models");
const path = require("path");
const publicPathAvatar = path.resolve(
  __dirname,
  "../../../public/img/usersAvatar"
);

const usersApiController = {
  usersInDb: (req, res) => {
    db.User.findAll({ include: ["category"] }).then((users) => {
      console.log(users[0].dataValues);
      var usersToApi;
      if (users) {
        let usersApi = users.map((user) => {
          usersToApi = {
            id: user.dataValues.id,
            name: user.dataValues.name,
            email: user.dataValues.email,
            category: user.dataValues.category,
            detail: "http://localhost:3000/api/users/" + user.dataValues.id,
          };
          return usersToApi;
        });

        let respuesta = {
          meta: {
            status: 200,
            total: users.length,
            url: "http://localhost:3000/api/users",
          },
          data: usersApi,
        };
        res.json(respuesta);
      }
    });
  },
  userId: (req, res) => {
    let id = req.params.id;
    db.User.findOne({ where: { id: id }, include: ["category"] }).then(
      (data) => {
        if (data) {
          const avatarPath = path.join(
            publicPathAvatar,
            data.dataValues.avatar
          );
          let userApi = {
            id: data.dataValues.id,
            name: data.dataValues.name,
            phone: data.dataValues.phone,
            email: data.dataValues.email,
            avatar: avatarPath,
            category: data.dataValues.category,
          };

          res.json(userApi);
        }
      }
    );
  },
};

module.exports = usersApiController;
