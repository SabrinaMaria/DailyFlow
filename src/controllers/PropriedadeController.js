const Integradora = require('../models/Integradora');
const Propriedade = require('../models/Propriedade');
const Usuario = require('../models/Usuario');
module.exports = {
  async store(req, res) {
    const { integradora_id } = req.params;
    const { usuario_id } = req.params;
    const { nome, cnpj, num_incra, licenca_ambiental, num_car, matricula_imovel, nit_empregados, telefone_fixo, talao_produtor, cei, caepf } = req.body;

    const integradora = await Integradora.findByPk(integradora_id);
    const usuario = await Usuario.findByPk(usuario_id);
    if (!usuario) {
      return res.status(400).json({ error: 'Usuario não cadastrado. Para inserir uma propriedade, primeiro insira o usuário' });
    }
    if (!integradora) {
      return res.status(400).json({ error: 'Integradora não cadastrada, tente novamente.' });
    }
    const propriedade = await Propriedade.create({
      nome, cnpj, num_incra, licenca_ambiental, num_car, matricula_imovel, nit_empregados, telefone_fixo, talao_produtor, cei, caepf,
      integradora_id, usuario_id
    });
    return res.json(propriedade);
  }
};