"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Charts", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      userId: {
        type: Sequelize.UUID,
      },
      productId: {
        type: Sequelize.UUID,
      },
      date: {
        type: Sequelize.DATE,
      },
      shippingId: {
        type: Sequelize.UUID,
      },
      isDropShipping: {
        type: Sequelize.BOOLEAN,
      },
      receiver: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Charts");
  },
};
