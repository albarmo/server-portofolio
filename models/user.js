'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Cart, {
        sourceKey: 'id',
        foreignKey: 'UserId',
      });
      User.hasMany(models.Wishlist, {
        sourceKey: 'id',
        foreignKey: 'UserId',
      });
    }
  }
  User.init(
    {
      fullname: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      type: DataTypes.STRING,
      address: DataTypes.STRING,
      region: DataTypes.STRING,
      gender: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate(instance) {
          instance.id = uuidv4();
          instance.password = hashPassword(instance.password);
        },
        beforeUpdate(instance) {
          instance.password = hashPassword(instance.password);
        },
      },
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
