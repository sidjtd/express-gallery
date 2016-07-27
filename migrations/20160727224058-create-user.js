'use strict';

module.exports = {
  up: function (queryInterface, Sequelize, DataTypes) {
    return queryInterface.createTable("User", {
      username: { type: DataTypes.STRING,
        unique: true,
        allowNull: false },
      email: { type: DataTypes.STRING,
        unique: true, isEmail: true,
        allowNull: false },
      password: { type: DataTypes.STRING,
        allowNull: false }
      }, {
      classMethods: {
        associate: function(models) {
          User.hasMany(models.Post);
        }
      }
    });
  },
  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('User');
  }
};
