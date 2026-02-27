"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ShoppingCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ShoppingCart.belongsTo(models.Product, { foreignKey: "product_id" });
      ShoppingCart.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  ShoppingCart.init(
    {
      product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: "product_id",
      },
      user_id: { type: DataTypes.INTEGER, primaryKey: true, field: "user_id" },
      quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    },
    {
      sequelize,
      modelName: "ShoppingCart",
      tableName: "shopping_carts",
      timestamps: false,
    },
  );
  return ShoppingCart;
};
