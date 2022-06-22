module.exports = (sequelize, dataTypes) => {
  let alias = "User";
  let cols = {
    id: {
      type: dataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    phone: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    avatar: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    password: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    category_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
  };
  let config = {
    tableName: "users",
    timestamps: false,
  };
  const User = sequelize.define(alias, cols, config);

  return User;
};
