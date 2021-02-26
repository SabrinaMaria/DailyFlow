const Raca = require('../models/Raca');
module.exports = {
  async store(req, res) {
    const { nome, peso_abate, qtd_dias_producao, racao_inicial, racao_c1, racao_c2, racao_final, temperatura_ideal } = req.body;

    const raca = await Raca.create({ nome, peso_abate, qtd_dias_producao, racao_inicial, racao_c1, racao_c2, racao_final, temperatura_ideal });

    return res.json(raca);
  }
};