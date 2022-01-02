'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Advertisement extends Model {
    static associate(models) {
      // define association here
    }
  }
  Advertisement.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Adevrtisment name cannot be empty',
          },
        },
      },
      target: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Adevrtisment name cannot be empty',
          },
        },
      },
      expiredDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Adevrtisment expired date cannot be empty',
          },
        },
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Adevrtisment start date cannot be empty',
          },
        },
      },
      file: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Advertisement url cannot be empty',
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate(instance) {
          instance.id = uuidv4();
        },
      },
      sequelize,
      modelName: 'Advertisement',
    }
  );
  return Advertisement;
};
