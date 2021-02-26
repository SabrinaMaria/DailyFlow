'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('propriedades', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      integradora_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'integradoras', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'usuarios', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      CNPJ: {
        type: Sequelize.STRING(14),
        unique: true,
        allowNull: false,
      },
      num_incra: {
        type: Sequelize.STRING(13),
        allowNull: false,
      },
      licenca_ambiental: {
        type: Sequelize.BLOB,
        allowNull: false,
      },
      num_car: {
        type: Sequelize.STRING(14),
        allowNull: false,
      },
      matricula_imovel: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      nit_empregados: {
        type: Sequelize.STRING,
      },
      telefone_fixo: {
        type: Sequelize.STRING(10),
      },
      talao_produtor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cei: {
        type: Sequelize.STRING(12),
      },
      caepf: {
        type: Sequelize.STRING(14),
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
    return queryInterface.dropTable('propriedades');
  }
};