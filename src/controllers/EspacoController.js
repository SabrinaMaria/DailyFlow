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
    }
};