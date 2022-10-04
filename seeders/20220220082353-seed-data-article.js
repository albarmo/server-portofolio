'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Articles',
      [
        {
          id: 'bf8bd82d-15ab-403b-8573-6e8557fbec9e',
          title: 'Writing 1',
          description:
            'Motif Kotak-kotak\nMaterial Katun\n\nHigh Quality!\n\nDress anak cocok untuk acara ulang tahun, pesta, dan acara formal lainnya.',
          images: '/PRODUCT_IMAGE1645339747118.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Articles', null, {});
  },
};
