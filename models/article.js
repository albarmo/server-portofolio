'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    static associate(models) {
      //
    }
  }
  Article.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          argv: true,
          msg: 'Article name must unique',
        },
        validate: {
          notEmpty: {
            args: true,
            msg: "Article's name cannot be empty",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Article description cannot be empty',
          },
          len: {
            args: [20, 500],
            msg: 'Minimum character of Article description is more than 20 and less than 500',
          },
        },
      },
      images: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Article's image cannot be empty",
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
      modelName: 'Article',
    }
  );
  return Article;
};
