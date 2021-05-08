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
        const { espaco_id } = req.params;
        const { propriedade_id } = req.params;
        const { receita, data, valor, descricao } = req.query;

        const fluxoDeCaixas = await Espaco.findByPk(fluxoDeCaixas_id);
        const propriedade = await Propriedade.findByPk(propriedade_id);
        const espaco = await Espaco.findByPk(espaco_id);

        if (!propriedade) {
            return res.status(400).json({ error: 'propriedade não encontrada.' });
        }

        if (!espaco) {
            return res.status(400).json({ error: 'Espaco não encontrado.' });
        }

        await fluxoDeCaixas.update({
            fluxoDeCaixas_id, receita, valor, descricao, data, propriedade_id, espaco_id
        });

        return res.json(fluxoDeCaixas);
    },

    async show(req, res) {
        const fluxoDeCaixas = await FluxoDeCaixa.findAll();

        return res.json(fluxoDeCaixas.sort((a, b) => a.id < b.id ? 1 : a.id > b.id ? -1 : 0));
    },

    async index(req, res) {
        const { fluxoDeCaixas_id } = req.params;

        const fluxoeCaixas = await fluxoDeCaixa.findByPk(fluxoDeCaixas_id);

        return res.json(fluxoDeCaixas);
    },

    async delete(req, res) {
        const { fluxoDeCaixas_id } = req.params;

        const fluxoDeCaixas = await FluxoDeCaixa.findByPk(fluxoDeCaixas_id);

        if (!fluxoDeCaixas) {
            return res.status(400).json({ error: 'Registro não encontrado!' });
        }

        await fluxoDeCaixas.destroy();

        return res.json('Registro excluído com sucesso!');
    }
};