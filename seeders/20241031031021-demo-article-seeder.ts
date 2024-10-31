import { QueryInterface } from 'sequelize';

export default {
  async up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('articles', [
      {
        id: 1,
        code: 'AA11AAA',
        description: 'Articulo 1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        code: 'AB12AAA',
        description: 'Articulo 2',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        code: 'AC13AAA',
        description: 'Articulo 3',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        code: 'BA11AAA',
        description: 'Articulo 4',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 5,
        code: 'BB12AAA',
        description: 'Articulo 5',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 6,
        code: 'BC13AAA',
        description: 'Articulo 6',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 7,
        code: 'CA11AAA',
        description: 'Articulo 7',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 8,
        code: 'CB12AAA',
        description: 'Articulo 8',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 9,
        code: 'CC13AAA',
        description: 'Articulo 9',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('articles', {}, {});
  }
};
