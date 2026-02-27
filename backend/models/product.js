"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, { foreignKey: "category_id" });
      Product.hasMany(models.OrderDetail, { foreignKey: "product_id" });
      Product.hasMany(models.ShoppingCart, { foreignKey: "product_id" });
    }
  }
  Product.init(
    {
      category_id: DataTypes.INTEGER,
      album: DataTypes.STRING,
      artist: DataTypes.STRING,
      release_year: DataTypes.INTEGER,
      price: DataTypes.DECIMAL,
      stock: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
      timestamps: true,
      paranoid: true,
    },
  );
  return Product;
};
