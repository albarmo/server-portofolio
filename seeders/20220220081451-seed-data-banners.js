'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Banners',
      [
        {
          id: '80e5da2b-0c1e-4187-82b2-a778c4b62e0a',
          title: 'Banner 2',
          description: 'descripition banner 2',
          target: 'jourme.com',
          date: new Date(),
          file: '/PRODUCT_IMAGE1645339747118.jpeg',
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '9a9ee1e6-e7bf-4794-8ffd-9a86b790573f',
          title: 'Banner 1',
          description: 'descripition banner 1',
          target: 'jourme.com',
          date: '2022-02-19T15:28:50.595Z',
          file: '/PRODUCT_IMAGE1645339448899.jpeg',
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'c11a8e0f-7bcc-4e28-8f05-f74be82fe78b',
          title: 'Banner 2',
          description: 'descripition banner 2',
          target: 'jourme.com',
          date: '2022-02-19T15:29:04.739Z',
          file: '/PRODUCT_IMAGE1645339343291.jpeg',
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Banners', null, {});
  },
};
