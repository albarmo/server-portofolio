'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      //
    }
  }
  User.init(
    {
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'User fullname cannot be empty',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          argv: true,
          msg: 'email is already in use',
        },
        validate: {
          notEmpty: {
            args: true,
            msg: 'Email cannot be empty',
          },
        },
      },

      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Password cannot be empty',
          },
          len: {
            args: [6, 30],
            msg: 'Minimum length of password is 6 and max is 30',
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate(instance) {
          instance.id = uuidv4();
          instance.password = hashPassword(instance.password);
          instance.type = 'admin';
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
