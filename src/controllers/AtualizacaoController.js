const Lote = require('../models/Lote');
const Atualizacao = require('../models/Atualizacao');

module.exports = {
    async show(req, res) {
        const atualizacoes = await Atualizacao.findAll();

        return res.json(atualizacoes);
    },

    async store(req, res) {
        const { lote_id } = req.params;
        const { data, peso, tamanho_efetivo, mortalidade } = req.body;
        const lote = await Lote.findByPk(lote_id);
        if (!lote) {
            return res.status(400).json({ error: 'Lote não cadastrado. Necessário cadastrar lote para inserir uma atualização.' });
        }
        const atualizacao = await Atualizacao.create({
            data, peso, tamanho_efetivo, mortalidade, lote_id
        });
        return res.json(atualizacao);
    }
};