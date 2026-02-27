"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, { foreignKey: "user_id" });
      Order.hasMany(models.OrderDetail, { foreignKey: "order_id" });
    }
  }
  Order.init(
    {
      user_id: DataTypes.INTEGER,
      order_date: DataTypes.DATE,
      delivery_method: DataTypes.ENUM("pickup", "delivery"),
      shipping_address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Order",
      timestamps: false,
    },
  );
  return Order;
};
