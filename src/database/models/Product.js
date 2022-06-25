module.exports = (sequelize, dataTypes) => {
  let alias = "Product";
  let cols = {
    id: {
      type: dataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: dataTypes.STRING(500),
      allowNull: false,
    },
    price: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    packaging: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },

    section_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    stock_id: {
      type: dataTypes.INTEGER,
      allowNull: true,
    },
    oferta: {
      type: dataTypes.BOOLEAN,
    },
  };
  let config = {
    tableName: "products",
    timestamps: false,
  };
  const Product = sequelize.define(alias, cols, config);
  Product.associate = function (models) {
    Product.belongsTo(models.Section, {
      as: "section",
      foreignKey: "section_id",
    });
    Product.belongsTo(models.Stock, {
      as: "Stock",
      foreignKey: "stock_id",
    });
    Product.belongsToMany(models.User, {
      as: "User_Product",
      through: "user_product",
      foreignKey: "product_id",
      otherKey: "user_id",
      timestamps: false,
    });
  };

  return Product;
};
