'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    title: DataTypes.STRING,
    categories: DataTypes.STRING,
    color: DataTypes.STRING,
    size: DataTypes.STRING,
    description: DataTypes.STRING,
    stock: DataTypes.NUMBER,
    images: DataTypes.STRING,
    price: DataTypes.NUMBER,
    weight: DataTypes.STRING,
    quantity: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};