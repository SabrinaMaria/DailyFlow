const Espaco = require('../models/Espaco');
const Propriedade = require('../models/Propriedade');
const FluxoDeCaixa = require('../models/FluxoDeCaixa');

module.exports = {
    async store(req, res) {
        let { espaco_id, propriedade_id } = req.params;
        const { receita, data, valor, descricao } = req.query;

        if (espaco_id == 0) {
            espaco_id = null;
        } else {
            const espaco = await Espaco.findByPk(espaco_id);

            if (!espaco) {
                return res.status(400).json({ error: 'Espaco não encontrado.' });
            }
        }

        if (propriedade_id == 0) {
            propriedade_id = null;
        } else {
            const propriedade = await Propriedade.findByPk(propriedade_id);

            if (!propriedade) {
                return res.status(400).json({ error: 'Propriedade não encontrada.' });
            }
        }

        const fluxoDeCaixas = await FluxoDeCaixa.create({
            receita, valor, data, descricao, espaco_id, propriedade_id
        });

        return res.json(fluxoDeCaixas);
    },

    async update(req, res) {
        let { espaco_id, propriedade_id, fluxo_id } = req.params;
        const { receita, data, valor, descricao } = req.query;

        const fluxoDeCaixa = await FluxoDeCaixa.findByPk(fluxo_id);

        if (espaco_id == 0) {
            espaco_id = null;
        } else {
            const espaco = await Espaco.findByPk(espaco_id);

            if (!espaco) {
                return res.status(400).json({ error: 'Espaco não encontrado.' });
            }
        }

        if (propriedade_id == 0) {
            propriedade_id = null;
        } else {
            const propriedade = await Propriedade.findByPk(propriedade_id);

            if (!propriedade) {
                return res.status(400).json({ error: 'Propriedade não encontrada.' });
            }
        }
        await fluxoDeCaixa.update({
            receita, valor, data, descricao, espaco_id, propriedade_id
        });

        return res.json(fluxoDeCaixa);
    },

    async show(req, res) {
        const fluxos = await FluxoDeCaixa.findAll();

        return res.json(fluxos.sort((a, b) => a.id < b.id ? 1 : a.id > b.id ? -1 : 0));
    },

    async index(req, res) {
        const { fluxo_id } = req.params;

        const fluxoDeCaixa = await FluxoDeCaixa.findByPk(fluxo_id);

        return res.json(fluxoDeCaixa);
    },

    async delete(req, res) {
        const { fluxo_id } = req.params;

        const fluxoDeCaixa = await FluxoDeCaixa.findByPk(fluxo_id);

        if (!fluxoDeCaixa) {
            return res.status(400).json({ error: 'Registro não encontrado!' });
        }

        await fluxoDeCaixa.destroy();

        return res.json('Registro excluído com sucesso!');
    }
};