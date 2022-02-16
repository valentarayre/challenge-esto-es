'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Juan',
      lastName: 'Perez',
      email: 'Juan-Perez@test.com',
      password: '$2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy', // TestPassword123!
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Emanuel',
      lastName: 'Rojas',
      email: 'Emanuel-Rojas@test.com',
      password: '$2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy', // TestPassword123!
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Pepe',
      lastName: 'Marquez',
      email: 'Pepe-Marquez@test.com',
      password: '$2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy', // TestPassword123!
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  }
}
