const Integradora = require('../models/Integradora');
module.exports = {
  async store(req, res) {
    const { razao_social, cnpj, site, email, senha } = req.body;

    const integradora = await Integradora.create({ razao_social, cnpj, site, email, senha });

    return res.json(integradora);
  }
};
