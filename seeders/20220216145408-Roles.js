'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roles', [
      {
        name: 'Standard',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
