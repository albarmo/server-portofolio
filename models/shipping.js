'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Shipping.init({
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
    estimation: DataTypes.STRING,
    startPoint: DataTypes.STRING,
    toAddress: DataTypes.STRING,
    weight: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Shipping',
  });
  return Shipping;
};