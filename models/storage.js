'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class Storage extends Model {
    static associate(models) {
      Storage.belongsToMany(models.Product, {
        as: 'ProductInStorage',
        through: models.Bucket,
        foreignKey: 'StorageId',
      });
    }
  }
  Storage.init(
    {
      file: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate(instance) {
          instance.id = uuidv4();
        },
      },
      sequelize,
      modelName: 'Storage',
    }
  );
  return Storage;
};
