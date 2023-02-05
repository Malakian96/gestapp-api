"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("ProductLists", [
      {
        listId: 1,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listId: 1,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listId: 1,
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listId: 2,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ProductLists", null, {restartIdentity: true});
  },
};
