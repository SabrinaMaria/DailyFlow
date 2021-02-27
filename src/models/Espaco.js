const { Model, DataTypes } = require('sequelize');

class Espaco extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            comprimento: DataTypes.FLOAT,
            largura: DataTypes.FLOAT,
            climatizacao: DataTypes.BOOLEAN,
            alimentacao: DataTypes.BOOLEAN,
            agua: DataTypes.BOOLEAN,
        }, {
            sequelize
        })
    }
    static associate2(models) {
        this.belongsTo(models.Propriedade, { foreignKey: 'propriedade_id', as: 'pertence' });
    }
}
module.exports = Espaco;


