"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "apple",
          unitPrice: 2,
          stock: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "banana",
          unitPrice: 1.5,
          stock: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "pear",
          unitPrice: 2.3,
          stock: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "orange",
          unitPrice: 1.8,
          stock: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
