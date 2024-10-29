import { QueryInterface } from 'sequelize';

export default {
  async up(queryInterface: QueryInterface) {
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

  async down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('roles', {}, {});
  }
};
