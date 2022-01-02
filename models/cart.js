'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User, {
        targetKey: 'id',
        foreignKey: 'UserId',
      });
      Cart.belongsTo(models.Product, {
        targetKey: 'id',
        foreignKey: 'ProductId',
      });
      Cart.belongsTo(models.History, {
        targetKey: 'id',
        foreignKey: 'UserId',
      });
    }
  }
  Cart.init(
    {
      UserId: DataTypes.UUID,
      ProductId: DataTypes.UUID,
      isDropShipping: DataTypes.BOOLEAN,
      shippedDate: DataTypes.DATE,
      quantity: DataTypes.INTEGER,
      status: DataTypes.STRING,
      receiver: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate(instance) {
          instance.id = uuidv4();
        },
      },
      sequelize,
      modelName: 'Cart',
    }
  );
  return Cart;
};
