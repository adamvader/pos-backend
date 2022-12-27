"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.product, {
        through: {
          model: "order",
          unique: false,
        },
        constraints: false,
      });
      this.hasMany(models.order);
    }
  }
  Transaction.init(
    {
      totalPrice: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "transaction",
    }
  );
  return Transaction;
};
