'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Collections',
      [
        {
          id: '966c3c31-6af4-4ca2-b6d0-f6de962895b8',
          ProductId: 'e437e762-d1f6-475b-9fce-55a3b626a9aa',
          title: 'New Born',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '966c3c31-6af4-4ca2-b6d0-f6de962895b9',
          ProductId: 'e437e762-d1f6-475b-9fce-55a3b626a9bb',
          title: 'Teen',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Collections', null, {});
  },
};
