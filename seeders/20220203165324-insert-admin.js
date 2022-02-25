'use strict';

const { hashPassword } = require('../helpers/bcrypt');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: '31d9f85e-c941-497e-a3e8-399bb876d67d',
          fullname: 'superadmin-magin-1',
          email: 'servermagin@gmail.com',
          phone: '085692495134',
          address: '403 George Ave.Shakopee, MN 55379',
          regionId: 6,
          region: 'DKI Jakarta',
          cityId: 153,
          city: 'Jakarta Selatan',
          gender: 'male',
          password: hashPassword('Magin2022!'),
          type: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '6497d027-d432-44e9-ab02-aa539caf50ff',
          fullname: 'People One',
          email: 'people@magin.id',
          phone: '0212345678',
          address: 'Jakarta Selatan',
          regionId: 6,
          region: 'DKI Jakarta',
          cityId: 153,
          city: 'Jakarta Selatan',
          gender: 'Male',
          type: 'public',
          password: hashPassword('PublicMagin!'),
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
