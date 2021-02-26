const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
  static init(sequelize) {
    super.init({
      nome_completo: DataTypes.STRING,
      cpf: DataTypes.STRING,
      telefone_fixo: DataTypes.STRING,
      celular: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,

    }, {
      sequelize
    })
  }
}
module.exports = Usuario;
