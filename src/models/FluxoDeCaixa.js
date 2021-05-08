const { Model, DataTypes } = require('sequelize');

class FluxoDeCaixa extends Model {
    static init(sequelize) {
        super.init({
            receita: DataTypes.BOOLEAN,
            data: DataTypes.DATE,
            valor: DataTypes.DOUBLE,
            descricao: DataTypes.STRING
        }, {
            sequelize
        })
    }
    static associate6(models) {
        this.belongsTo(models.Espaco, { foreignKey: 'espaco_id', as: 'possui' });
        this.belongsTo(models.Propriedade, { foreignKey: 'propriedade_id', as: 'possui2' });
    }
}
module.exports = FluxoDeCaixa;


