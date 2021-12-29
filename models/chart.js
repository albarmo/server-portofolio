'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Chart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Chart.belongsTo(models.User, {
        targetKey: 'id',
        foreignKey: 'UserId',
      });
      Chart.belongsTo(models.Product, {
        targetKey: 'id',
        foreignKey: 'ProductId',
      });
    }
  }
  Chart.init(
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
      modelName: 'Chart',
    }
  );
  return Chart;
};
