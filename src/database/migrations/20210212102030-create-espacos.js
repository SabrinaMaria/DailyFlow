'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('espacos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      propriedade_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'propriedades', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      comprimento: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      largura: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      climatizacao: {
        type: Sequelize.BOOLEAN,
      },
      alimentacao: {
        type: Sequelize.BOOLEAN,
      },
      agua: {
        type: Sequelize.BOOLEAN,
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
    return queryInterface.dropTable('espacos');
  }
};
