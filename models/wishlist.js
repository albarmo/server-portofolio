'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Wishlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Wishlist.belongsTo(models.User, {
        targetKey: 'id',
        foreignKey: 'UserId',
      });
      Wishlist.belongsTo(models.Product, {
        targetKey: 'id',
        foreignKey: 'ProductId',
      });
    }
  }
  Wishlist.init(
    {
      UserId: DataTypes.UUID,
      ProductId: DataTypes.UUID,
    },
    {
      hooks: {
        beforeCreate(instance) {
          instance.id = uuidv4();
        },
      },
      sequelize,
      modelName: 'Wishlist',
    }
  );
  return Wishlist;
};
