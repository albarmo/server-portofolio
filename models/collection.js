'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Collection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Collection.hasMany(models.Product, {
        sourceKey: 'id',
        foreignKey: 'categories',
      });
    }
  }
  Collection.init(
    {
      title: DataTypes.STRING,
      productId: DataTypes.UUID,
      image: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate(instance) {
          instance.id = uuidv4();
        },
      },
      sequelize,
      modelName: 'Collection',
    }
  );
  return Collection;
};
