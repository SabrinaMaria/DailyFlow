const Propriedade = require('../models/Propriedade');
const Espaco = require('../models/Espaco');

module.exports = {
    async store(req, res) {
        const { propriedade_id } = req.params;
        const { nome, comprimento, largura, climatizacao, alimentacao, agua } = req.body;
        const propriedade = await Propriedade.findByPk(propriedade_id);
        if (!propriedade) {
            return res.status(400).json({ error: 'Propriedade não cadastrada. Necessário cadastrar propriedade para inserir um espaco.' });
        }
        const espaco = await Espaco.create({
            nome, comprimento, largura, climatizacao, alimentacao, agua, propriedade_id
        });
        return res.json(espaco);
    },

    async update(req, res) {
        const { propriedade_id, espaco_id } = req.params;
        const { nome, comprimento, largura, climatizacao, alimentacao, agua } = req.body;

        const propriedade = await Propriedade.findByPk(propriedade_id);
        const espaco = await Espaco.findByPk(espaco_id);

        if (!propriedade) {
            return res.status(400).json({ error: 'Propriedade não cadastrada. Necessário cadastrar propriedade para inserir um espaco.' });
        }
        await espaco.update({
            nome, comprimento, largura, climatizacao, alimentacao, agua, propriedade_id
        });

        return res.json(espaco);
    },

    async index(req, res) {
        const { espaco_id } = req.params;

        const espaco = await Espaco.findByPk(espaco_id);

        return res.json(espaco);
    },

    async delete(req, res) {
        const { espaco_id } = req.params;

        const espaco = await Espaco.findByPk(espaco_id);

        if (!espaco) {
            return res.status(400).json({ error: 'Espaço não encontrado.' });
        }

        await espaco.destroy();

        return res.json('Espaço excluído com sucesso!');
    }
};