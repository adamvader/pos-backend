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
      this.belongsToMany(models.transaction, {
        through: {
          model: "order",
          unique: false,
        },
        constraints: false,
      });
      this.hasMany(models.order);
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      unitPrice: DataTypes.FLOAT,
      stock: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return Product;
};
