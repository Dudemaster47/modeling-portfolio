'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:*/
     await queryInterface.createTable('Colors', { id: {type: Sequelize.INTEGER, primaryKey: true}, name: {type: Sequelize.STRING, allowNull: false, unique: true }, createdAt: {type: "Timestamp", defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"), allowNull: false}, updatedAt: {type: "Timestamp", defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"), allowNull: false}});
  
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:*/
     await queryInterface.dropTable('Colors');
     
  }
};
