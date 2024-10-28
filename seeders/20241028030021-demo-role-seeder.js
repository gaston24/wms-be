'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('roles', [
      {
        id: 1,
        name: 'administrador',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        name: 'operario',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        name: 'supervisor',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
