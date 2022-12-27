"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "orders",
      [
        {
          transactionId: 1,
          productId: 1,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          transactionId: 1,
          productId: 2,
          quantity: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          transactionId: 2,
          productId: 1,
          quantity: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("orders", null, {});
  },
};
