'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Chart.init({
    userId: DataTypes.STRING,
    productId: DataTypes.STRING,
    date: DataTypes.DATE,
    shippingId: DataTypes.STRING,
    isDropShipping: DataTypes.BOOLEAN,
    receiver: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Chart',
  });
  return Chart;
};