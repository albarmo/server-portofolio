'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Collections',
      [
        {
          id: 'ad40f375-ca73-4f34-bb53-6f88d13cbfaa',
          title: 'Set',
          ProductId: null,
          CategoryId: '966c3c31-6af4-4ca2-b6d0-f6de962895b8',
          image: '/COLLECTION_IMAGE1645338633645.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '06f6d04f-338b-49ca-a905-65faec85a5b5',
          title: 'Dress',
          ProductId: null,
          CategoryId: '966c3c31-6af4-4ca2-b6d0-f6de962895b8',
          image: '/COLLECTION_IMAGE1645341779351.jpeg',
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
