'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      //
    }
  }
  Project.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          argv: true,
          msg: 'Project name must unique',
        },
        validate: {
          notEmpty: {
            args: true,
            msg: "Project's name cannot be empty",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Project description cannot be empty',
          },
          len: {
            args: [20, 500],
            msg: 'Minimum character of Project description is more than 20 and less than 500',
          },
        },
      },

      images: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Project's image cannot be empty",
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
      modelName: 'Project',
    }
  );
  return Project;
};
