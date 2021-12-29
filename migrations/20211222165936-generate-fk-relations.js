'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // ================== Wishlists =======================//
    await queryInterface.addConstraint('Wishlists', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'Fkey_Wishlists_to_User',
      references: {
        table: 'Users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addConstraint('Wishlists', {
      fields: ['productId'],
      type: 'foreign key',
      name: 'Fkey_Wishlists_to_Product',
      references: {
        table: 'Products',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    // ================== Transactions =======================//

    await queryInterface.addConstraint('Transactions', {
      fields: ['chartsId'],
      type: 'foreign key',
      name: 'Fkey_Transactions_to_Charts',
      references: {
        table: 'Charts',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('Transactions', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'Fkey_Transactions_to_User',
      references: {
        table: 'Users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    // ================== Histories =======================//

    await queryInterface.addConstraint('Histories', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'Fkey_Histories_to_User',
      references: {
        table: 'Users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('Histories', {
      fields: ['transactionId'],
      type: 'foreign key',
      name: 'Fkey_Histories_to_Transactions',
      references: {
        table: 'Transactions',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    // ================== Collections =======================//

    await queryInterface.addConstraint('Collections', {
      fields: ['productId'],
      type: 'foreign key',
      name: 'Fkey_Collections_to_Products',
      references: {
        table: 'Products',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    // ================== Charts =======================//

    await queryInterface.addConstraint('Charts', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'Fkey_Charts_to_User',
      references: {
        table: 'Users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('Charts', {
      fields: ['productId'],
      type: 'foreign key',
      name: 'Fkey_Charts_to_Products',
      references: {
        table: 'Products',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('Charts', {
      fields: ['shippingId'],
      type: 'foreign key',
      name: 'Fkey_Charts_to_Shipping',
      references: {
        table: 'Shippings',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    // ================== Categories =======================//

    await queryInterface.addConstraint('Categories', {
      fields: ['productId'],
      type: 'foreign key',
      name: 'Fkey_Categories_to_Products',
      references: {
        table: 'Products',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('Categories', {
      fields: ['collectionId'],
      type: 'foreign key',
      name: 'Fkey_Categories_to_Collection',
      references: {
        table: 'Collections',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Wishlists', 'Fkey_Wishlists_to_User', {});
    await queryInterface.removeConstraint('Wishlists', 'Fkey_Wishlists_to_Product', {});
    await queryInterface.removeConstraint('Transactions', 'Fkey_Transactions_to_Charts', {});
    await queryInterface.removeConstraint('Transactions', 'Fkey_Transactions_to_User', {});
    await queryInterface.removeConstraint('Histories', 'Fkey_Histories_to_User', {});
    await queryInterface.removeConstraint('Histories', 'Fkey_Histories_to_Transactions', {});
    await queryInterface.removeConstraint('Collections', 'Fkey_Collections_to_Products', {});
    await queryInterface.removeConstraint('Charts', 'Fkey_Charts_to_User', {});
    await queryInterface.removeConstraint('Charts', 'Fkey_Charts_to_Products', {});
    await queryInterface.removeConstraint('Charts', 'Fkey_Charts_to_Products', {});
    await queryInterface.removeConstraint('Categories', 'Fkey_Categories_to_Products', {});
    await queryInterface.removeConstraint('Categories', 'Fkey_Categories_to_Collection', {});
  },
};
