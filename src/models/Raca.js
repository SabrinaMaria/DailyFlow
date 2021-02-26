const { Model, DataTypes } = require('sequelize');

class Raca extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      peso_abate: DataTypes.FLOAT,
      qtd_dias_producao: DataTypes.INTEGER,
      racao_c1: DataTypes.INTEGER,
      racao_c2: DataTypes.INTEGER,
      racao_final: DataTypes.INTEGER,
      temperatura_ideal: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }
}
module.exports = Raca;
