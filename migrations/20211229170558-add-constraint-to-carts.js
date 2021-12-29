'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Charts', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'Fkey_Users_Carts',
      references: {
        table: 'Users',
        field: 'id',
      },
    });
    await queryInterface.addConstraint('Charts', {
      fields: ['ProductId'],
      type: 'foreign key',
      name: 'Fkey_Products_Carts',
      references: {
        table: 'Products',
        field: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Charts', 'Fkey_Users_Carts', {});
    await queryInterface.removeConstraint('Charts', 'Fkey_Products_Carts', {});
  },
};
