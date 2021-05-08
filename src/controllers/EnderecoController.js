const Integradora = require('../models/Integradora');
const Propriedade = require('../models/Propriedade');
const Endereco = require('../models/Endereco');
module.exports = {
    async store(req, res) {
        let endereco = "";
        const { id } = req.params;
        const { tipo } = req.params;

        //se 1 é integradora, se 2 é propriedade
        if (tipo == 1) {
            const integradora = await Integradora.findByPk(id);
            if (!integradora) {
                return res.status(400).json({ error: 'Integradora não cadastrada.' });
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
                return res.status(400).json({ error: 'Propriedade não cadastrada. Para inserir uma propriedade, primeiro insira o usuário' });
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
    },

    async update(req, res) {
        let endereco = "";
        const { id, tipo, endereco_id } = req.params;
        const enderecoEdicao = await Endereco.findByPk(endereco_id);

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
                return res.status(400).json({ error: 'Propriedade não cadastrada. Para inserir uma propriedade, primeiro insira o usuário' });
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
        endereco = await enderecoEdicao.update(endereco);
        return res.json(endereco);
    },

    async index(req, res) {
        const { endereco_id } = req.params;

        const endereco = await Endereco.findByPk(endereco_id);

        return res.json(endereco);
    },

    async delete(req, res) {
        const { endereco_id } = req.params;

        const endereco = await Endereco.findByPk(endereco_id);

        if (!endereco) {
            return res.status(400).json({ error: 'Endereço não encontrado.' });
        }

        await endereco.destroy();

        return res.json('Endereço excluído com sucesso!');
    }
};
