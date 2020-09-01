'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'UserAccounts',
      'BankAccountId',
      {
        type: Sequelize.UUID,
        references: {
          model: 'BankAccounts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'UserAccounts',
      'BankAccountId'
    );
  }
};
