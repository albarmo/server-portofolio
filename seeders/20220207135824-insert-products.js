'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          id: 'e437e762-d1f6-475b-9fce-55a3b626a9aa',
          title: 'Product 1',
          CollectionId: null,
          color: 'red,white,blue',
          size: 'xl',
          description: 'aku adalah anak gembala suka memberi dan merokok',
          stock: 10,
          images: 'https://t4.ftcdn.net/jpg/03/18/30/85/360_F_318308547_FALKncfWsTmjzwd0y0muNeCFOULPLB7Q.jpg',
          price: 1000,
          weight: '200',
          updatedAt: '2022-02-03T17:56:15.371Z',
          createdAt: '2022-02-03T17:56:15.371Z',
        },
        {
          id: 'e437e762-d1f6-475b-9fce-55a3b626a9bb',
          title: 'Product 2',
          CollectionId: null,
          color: 'red,white,blue',
          size: 'xl',
          description: 'aku adalah anak gembala suka memberi dan merokok',
          stock: 10,
          images: 'https://img.joomcdn.net/8351b650a2bde8ce3d0bc029d219afafedad09c6_original.jpeg',
          price: 1000,
          weight: '200',
          updatedAt: '2022-02-03T17:56:15.371Z',
          createdAt: '2022-02-03T17:56:15.371Z',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
