'use strict';
var bcrypt = require("bcryptjs");
module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Users', [
      {
        username: 'jeffshomali',
        email: "jeff@shoma.li",
        password: bcrypt.hashSync('password', 8),
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        username: 'maha',
        email: "maha@mmat.in",
        password:  bcrypt.hashSync('password',8),
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        username: 'admin',
        email: "admin@example.com",
        password:  bcrypt.hashSync('password',8),
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }
    ], {}),
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};