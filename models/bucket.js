'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Bucket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bucket.belongsTo(models.Product, { foreignKey: 'SourceId', targetKey: 'id', as: 'Product' });
      Bucket.belongsTo(models.Storage, { foreignKey: 'StorageId', targetKey: 'id', as: 'Storage' });
    }
  }
  Bucket.init(
    {
      SourceId: DataTypes.UUID,
      StorageId: DataTypes.UUID,
    },
    {
      hooks: {
        beforeCreate(instance) {
          instance.id = uuidv4();
        },
        beforeCreate: (bucket, options) => {
          bucket.id = uuidv4();
        },
      },
      sequelize,
      modelName: 'Bucket',
    }
  );

  Bucket.beforeValidate(async (bucket, options) => {
    let id = uuidv4();
    bucket.id = id;
  });

  return Bucket;
};
