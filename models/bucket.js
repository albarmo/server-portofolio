'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bucket extends Model {
    static associate(models) {
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
      sequelize,
      modelName: 'Bucket',
    }
  );

  return Bucket;
};
