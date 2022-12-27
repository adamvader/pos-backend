"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "transactions",
      [
        {
          totalPrice: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          totalPrice: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("transactions", null, {});
  },
};
