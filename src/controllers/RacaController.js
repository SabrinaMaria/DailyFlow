const Raca = require('../models/Raca');
module.exports = {
  async store(req, res) {
    const { nome, peso_abate, qtd_dias_producao, racao_inicial, racao_c1, racao_c2, racao_final, temperatura_ideal } = req.body;

    const raca = await Raca.create({ nome, peso_abate, qtd_dias_producao, racao_inicial, racao_c1, racao_c2, racao_final, temperatura_ideal });

    return res.json(raca);
  },

  async update(req, res) {
    const { raca_id } = req.params;
    const { nome, peso_abate, qtd_dias_producao, racao_inicial, racao_c1, racao_c2, racao_final, temperatura_ideal } = req.body;

    const raca = await Raca.findByPk(raca_id);

    await raca.update({ nome, peso_abate, qtd_dias_producao, racao_inicial, racao_c1, racao_c2, racao_final, temperatura_ideal });

    return res.json(raca);
  },

  async index(req, res) {
      const { raca_id } = req.params;

      const raca = await Raca.findByPk(raca_id);

      return res.json(raca);
  },

  async delete(req, res) {
      const { raca_id } = req.params;

      const raca = await Raca.findByPk(raca_id);

      if (!raca) {
          return res.status(400).json({ error: 'Raça não encontrada.' });
      }

      await raca.destroy();

      return res.json('Raça excluída com sucesso!');
  }
};