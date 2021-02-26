'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('lotes', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            espaco_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'espacos', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            raca_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'racas', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            perdas_no_transporte: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            data_recebimento: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            previsao_entrega: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            data_entrega: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            tamanho_previsto: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            tamanho_efetivo: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            peso_entrada: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            racao_inicial: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            racao_c1: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            racao_c2: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            racao_final: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            inicio_horario_jejum: {
                type: Sequelize.DATE,
                allowNull: false,
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

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('lotes');
    }
};
