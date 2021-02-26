const { Model, DataTypes } = require('sequelize');

class Atualizacao extends Model {
    static init(sequelize) {
        super.init({
            data: DataTypes.DATE,
            peso: DataTypes.FLOAT,
            tamanho_efetivo: DataTypes.INTEGER,
            mortalidade: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
    static associate5(models) {
        this.belongsTo(models.Lote, { foreignKey: 'lote_id', as: 'pertence' });
    }

}
module.exports = Atualizacao;


