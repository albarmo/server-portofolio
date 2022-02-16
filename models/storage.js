'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class Storage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
