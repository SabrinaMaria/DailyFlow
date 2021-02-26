const { Model, DataTypes } = require('sequelize');

class Integradora extends Model {
  static init(sequelize) {
    super.init({
      razao_social: DataTypes.STRING,
      cnpj: DataTypes.STRING(14),
      site: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}
module.exports = Integradora;
