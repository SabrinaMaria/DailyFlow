const Usuario = require('../models/Usuario');
module.exports = {
  async store(req, res) {
    const { nome_completo, cpf, telefone_fixo, celular, email, senha } = req.body;

    const usuario = await Usuario.create({ nome_completo, cpf, telefone_fixo, celular, email, senha });

    return res.json(usuario);
  }
};