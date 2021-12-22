'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Advertisement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Advertisement.init({
    title: DataTypes.STRING,
    target: DataTypes.STRING,
    date: DataTypes.DATE,
    expiredDate: DataTypes.DATE,
    startDate: DataTypes.DATE,
    file: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Advertisement',
  });
  return Advertisement;
};