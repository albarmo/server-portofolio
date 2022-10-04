'use strict';

const { hashPassword } = require('../helpers/bcrypt');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: '31d9f85e-c941-497e-a3e8-399bb876d67d',
          fullname: 'superadmin-Portofolio-1',
          email: 'serverPortofolio@gmail.com',
          type: 'admin',
          password: hashPassword('Portofolio2022!'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
