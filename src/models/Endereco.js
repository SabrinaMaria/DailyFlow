const { Model, DataTypes } = require('sequelize');

class Endereco extends Model {
    static init(sequelize) {
        super.init({
            uf: DataTypes.STRING(2),
            cidade: DataTypes.STRING(50),
            bairro: DataTypes.STRING(20),
            rua: DataTypes.STRING(50),
            numero: DataTypes.STRING(10),
            cep: DataTypes.STRING(8),
            complemento: DataTypes.STRING(10),

        }, {
            sequelize
        })
    }
    static associate4(models) {
        this.belongsTo(models.Integradora, { foreignKey: 'integradora_id', as: 'possui' });
        this.belongsTo(models.Propriedade, { foreignKey: 'propriedade_id', as: 'pertence' });
    }


}
module.exports = Endereco;
