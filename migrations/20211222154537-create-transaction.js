'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      chartsId: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      paymentDate: {
        type: Sequelize.DATE
      },
      expiredDate: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      shippingReceiptNumber: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');
  }
};