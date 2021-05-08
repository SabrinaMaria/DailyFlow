const Lote = require('../models/Lote');
const Atualizacao = require('../models/Atualizacao');

module.exports = {
    async store(req, res) {
        const { lote_id } = req.params;
        const { data, peso, tamanho_efetivo, mortalidade } = req.query;
        const lote = await Lote.findByPk(lote_id);
        if (!lote) {
            return res.status(400).json({ error: 'Lote não cadastrado. Necessário cadastrar lote para inserir uma atualização.' });
        }
        const atualizacao = await Atualizacao.create({
            data, peso, tamanho_efetivo, mortalidade, lote_id
        });
        return res.json(atualizacao);
    },

    async update(req, res) {
        const { lote_id, atualizacao_id } = req.params;
        const { data, peso, tamanho_efetivo, mortalidade } = req.body;

        const lote = await Lote.findByPk(lote_id);
        const atualizacao = await Atualizacao.findByPk(atualizacao_id);

        if (!lote) {
            return res.status(400).json({ error: 'Lote não cadastrado. Necessário cadastrar o lote para inserir a atualização.' });
        }

        await atualizacao.update({data, peso, tamanho_efetivo, mortalidade});

        return res.json(atualizacao);
    },

    async show(req, res) {
        const atualizacoes = await Atualizacao.findAll();

        return res.json(atualizacoes);
    },

    async index(req, res) {
        const { atualizacao_id } = req.params;

        const atualizacao = await Atualizacao.findByPk(atualizacao_id);

        return res.json(atualizacao);
    },

    async delete(req, res) {
        const { atualizacao_id } = req.params;

        const atualizacao = await Atualizacao.findByPk(atualizacao_id);

        if (!atualizacao) {
            return res.status(400).json({ error: 'Atualização não encontrada.' });
        }

        await atualizacao.destroy();

        return res.json('Atualização excluída com sucesso!');
    }
};