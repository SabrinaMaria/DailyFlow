const Usuario = require('../models/Usuario');
module.exports = {
  async store(req, res) {
    const { nome_completo, cpf, telefone_fixo, celular, email, senha } = req.body;

    const usuario = await Usuario.create({ nome_completo, cpf, telefone_fixo, celular, email, senha });

    return res.json(usuario);
  },

  async update(req, res) {
    const { usuario_id } = req.params;
    const { nome_completo, cpf, telefone_fixo, celular, email, senha } = req.body;

    const usuario = await Usuario.findByPk(usuario_id);

    await usuario.update({ nome_completo, cpf, telefone_fixo, celular, email, senha });

    return res.json(usuario);
  },

  async index(req, res) {
      const { usuario_id } = req.params;

      const usuario = await Usuario.findByPk(usuario_id);

      return res.json(usuario);
  },

  async delete(req, res) {
      const { usuario_id } = req.params;

      const usuario = await Usuario.findByPk(usuario_id);

      if (!usuario) {
          return res.status(400).json({ error: 'Usuário não encontrado.' });
      }

      await usuario.destroy();

      return res.json('Usuário excluído com sucesso!');
  }
};