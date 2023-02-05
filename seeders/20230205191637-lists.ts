"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Lists", [
      {
        name: "Lista 1",
        description: "Lista 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lista 2",
        description: "Lista 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Lists", null, {restartIdentity: true});
  },
};
