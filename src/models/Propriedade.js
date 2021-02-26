const { Model, DataTypes } = require('sequelize');

class Propriedade extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      cnpj: DataTypes.STRING(14),
      num_incra: DataTypes.STRING(13),
      licenca_ambiental: DataTypes.BLOB,
      num_car: DataTypes.STRING(14),
      matricula_imovel: DataTypes.STRING(15),
      nit_empregados: DataTypes.STRING,
      telefone_fixo: DataTypes.STRING(10),
      talao_produtor: DataTypes.STRING,
      cei: DataTypes.STRING(12),
      caepf: DataTypes.STRING(14),

    }, {
      sequelize
    })
  }
  static associate(models) {
    this.belongsTo(models.Integradora, { foreignKey: 'integradora_id', as: 'possui' });
    this.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'pertence' });
  }
}
module.exports = Propriedade;
