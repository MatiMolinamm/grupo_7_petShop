module.exports = (sequelize, dataTypes) => {
  let alias = "User_Product";
  let cols = {
    id: {
      type: dataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    product_id: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    user_id: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  };
  let config = {
    tableName: "user_product",
    timestamps: false,
  };
  const User_Product = sequelize.define(alias, cols, config);

  return User_Product;
};
