const Integradora = require('../models/Integradora');
const Propriedade = require('../models/Propriedade');
const Endereco = require('../models/Endereco');
module.exports = {
    async store(req, res) {
        let endereco = "";
        const { id } = req.params;
        const { uf, cidade, bairro, rua, numero, cep, complemento } = req.body;
        const { tipo } = req.params;
        //se 1 é integradora, se 2 é propriedade
        if (tipo == 1) {
            const integradora = await Integradora.findByPk(id);
            if (!integradora) {
                return res.status(400).json({ error: 'Integradora não cadastrada, tente novamente.' });
            }
            endereco = {
                uf: req.body.uf,
                cidade: req.body.cidade,
                bairro: req.body.bairro,
                rua: req.body.rua,
                numero: req.body.numero,
                cep: req.body.cep,
                complemento: req.body.complemento,
                integradora_id: id,
            };
        } else {
            const propriedade = await Propriedade.findByPk(id);
            if (!propriedade) {
                return res.status(400).json({ error: 'propriedade não cadastrada. Para inserir uma propriedade, primeiro insira o usuário' });
            }
            endereco = {
                uf: req.body.uf,
                cidade: req.body.cidade,
                bairro: req.body.bairro,
                rua: req.body.rua,
                numero: req.body.numero,
                cep: req.body.cep,
                complemento: req.body.complemento,
                propriedade_id: id
            };
        }
        endereco = await Endereco.create(endereco);
        return res.json(endereco);
    }
};
