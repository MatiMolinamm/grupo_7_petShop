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
