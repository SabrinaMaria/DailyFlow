const { log } = require('console');
const Espaco = require('../models/Espaco');
const Lote = require('../models/Lote');
const Raca = require('../models/Raca');

module.exports = {
    async store(req, res) {
        const { espaco_id } = req.params;
        const { raca_id } = req.params;
        const { perdas_no_transporte, data_recebimento, previsao_entrega, data_entrega, tamanho_previsto,
            tamanho_efetivo, peso_entrada, racao_inicial, racao_c1, racao_c2, racao_final,
            inicio_horario_jejum } = req.body;

        log(raca_id + " " + espaco_id)

        const raca = await Raca.findByPk(raca_id);
        const espaco = await Espaco.findByPk(espaco_id);
        if (!raca) {
            return res.status(400).json({ error: 'Raca não cadastrada. Necessário cadastrar Raca para inserir o lote.' });
        }

        if (!espaco) {
            return res.status(400).json({ error: 'Espaco não cadastrado. Necessário cadastrar o espaco para inserir o lote.' });
        }
        const lote = await Lote.create({
            raca_id, espaco_id, perdas_no_transporte, data_recebimento, previsao_entrega, data_entrega,
            tamanho_previsto, tamanho_efetivo, peso_entrada, racao_inicial, racao_c1, racao_c2, racao_final,
            inicio_horario_jejum
        });
        return res.json(lote);
    }
};