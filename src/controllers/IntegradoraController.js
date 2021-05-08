const Integradora = require('../models/Integradora');
module.exports = {
  async store(req, res) {
    const { razao_social, cnpj, site, email, senha } = req.body;

    const integradora = await Integradora.create({ razao_social, cnpj, site, email, senha });

    return res.json(integradora);
  },

  async update(req, res) {
    const { integradora_id } = req.params;
    const { razao_social, cnpj, site, email, senha } = req.body;

    const integradora = await Integradora.findByPk(integradora_id);

    await integradora.update({ razao_social, cnpj, site, email, senha });

    return res.json(integradora);
  },

  async index(req, res) {
      const { integradora_id } = req.params;

      const integradora = await Integradora.findByPk(integradora_id);

      return res.json(integradora);
  },

  async delete(req, res) {
      const { integradora_id } = req.params;

      const integradora = await Integradora.findByPk(integradora_id);

      if (!integradora) {
          return res.status(400).json({ error: 'Integradora não encontrada.' });
      }

      await integradora.destroy();

      return res.json('Integradora excluída com sucesso!');
  }
};
