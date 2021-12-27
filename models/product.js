"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Collection,{
      sourceKey: "id",
      foreignKey: "categories",
    })
    }
  }
  Product.init(
    {
      title: DataTypes.STRING,
      categories: DataTypes.UUID,
      color: DataTypes.STRING,
      size: DataTypes.STRING,
      description: DataTypes.STRING,
      stock: DataTypes.INTEGER,
      images: DataTypes.STRING,
      price: DataTypes.INTEGER,
      weight: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate(instance) {
          instance.id = uuidv4();
        },
      },
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
