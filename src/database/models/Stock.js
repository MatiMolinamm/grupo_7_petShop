module.exports = (sequelize, dataTypes) => {
  let alias = "Stock";
  let cols = {
    id: {
      type: dataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    amount: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },

    product_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
  };
  let config = {
    tableName: "stock",
    timestamps: false,
  };
  const Stock = sequelize.define(alias, cols, config);
  Stock.associate = function (models) {
    Stock.hasMany(models.Stock, {
      as: "Product",
      foreignKey: "stock_id",
    });
  };
  return Stock;
};
