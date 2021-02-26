'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('racas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      peso_abate: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      qtd_dias_producao: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      racao_C1: {
        type: Sequelize.INTEGER,
      },
      racao_C2: {
        type: Sequelize.INTEGER,
      },
      racao_final: {
        type: Sequelize.INTEGER,
      },
      temperatura_ideal: {
        type: Sequelize.INTEGER,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('racas');
  }
};