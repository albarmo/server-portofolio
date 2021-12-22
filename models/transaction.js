"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transaction.init(
    {
      chartsId: DataTypes.UUID,
      userId: DataTypes.UUID,
      date: DataTypes.DATE,
      paymentDate: DataTypes.DATE,
      expiredDate: DataTypes.DATE,
      status: DataTypes.STRING,
      shippingReceiptNumber: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate(instance) {
          instance.id = uuidv4();
        },
      },
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
