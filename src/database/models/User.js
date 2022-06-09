/*{"id":1,"name":"Matias Molina","telefono":"3534827154","email":"molina.matias.87@gmail.com","categoria":"admin","avatar":"avatar-1654653564934.jpg","password":"$2a$10$OCtr3cq6h7sqtAHkn6LWVu83hlTSdsp1JMeYr7ZV7gwPXXVksDYmK"}*/

module.exports = (sequelize, dataTypes) => {
  let alias = "Users";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      // ACA VA LA CONFIGURACION DE LA COLUMNA
    },
    telefono: {},
    email: {},
    categoria: {},
    avatar: {},
    password: {},
    createdAt: { type: dataTypes.DATE },
    updatedAt: { type: dataTypes.DATE },
  };
  let config = {
    tableName: "users",
    timestamps: false,
  };
  const User = sequelize.define(alias, cols, config);

  return User;
};
