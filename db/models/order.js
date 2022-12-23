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
      this.belongsTo(models.product);
      this.belongsTo(models.transaction);
    }
  }
  Order.init(
    {
      transactionId: {
        type: DataTypes.INTEGER,
        references: {
          model: "transaction",
          key: "id",
        },
      },
      productId: {
        type: DataTypes.INTEGER,
        references: {
          model: "product",
          key: "id",
        },
      },
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "order",
    }
  );
  return Order;
};
