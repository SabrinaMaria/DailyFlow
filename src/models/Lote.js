const { Model, DataTypes } = require('sequelize');

class Lote extends Model {
    static init(sequelize) {
        super.init({
            perdas_no_transporte: DataTypes.INTEGER,
            data_recebimento: DataTypes.DATE,
            previsao_entrega: DataTypes.DATE,
            data_entrega: DataTypes.DATE,
            tamanho_previsto: DataTypes.INTEGER,
            tamanho_efetivo: DataTypes.INTEGER,
            peso_entrada: DataTypes.FLOAT,
            racao_inicial: DataTypes.DATE,
            racao_c1: DataTypes.DATE,
            racao_c2: DataTypes.DATE,
            racao_final: DataTypes.DATE,
            inicio_horario_jejum: DataTypes.DATE,
        }, {
            sequelize
        })
    }
    static associate3(models) {
        this.belongsTo(models.Espaco, { foreignKey: 'espaco_id', as: 'espaco' });
        this.belongsTo(models.Raca, { foreignKey: 'raca_id', as: 'raca' });

    }

}
module.exports = Lote;


