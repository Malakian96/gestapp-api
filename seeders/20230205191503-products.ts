"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Products", [
      {
        name: "Patata",
        description: "Cosa pa comer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tomate",
        description: "Cosa pa comer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Champiñones",
        description: "Cosa pa comer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {restartIdentity: true});
  },
};
