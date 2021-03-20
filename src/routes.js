const express = require('express');
const UsuarioController = require('./controllers/UsuarioController')
const RacaController = require('./controllers/RacaController')
const IntegradoraController = require('./controllers/IntegradoraController');
const PropriedadeController = require('./controllers/PropriedadeController');
const EspacoController = require('./controllers/EspacoController');
const LoteController = require('./controllers/LoteController');
const EnderecoController = require('./controllers/EnderecoController');
const AtualizacaoController = require('./controllers/AtualizacaoController');
const routes = express.Router();

routes.post('/usuarios', UsuarioController.store);
routes.post('/racas', RacaController.store);
routes.post('/integradoras', IntegradoraController.store);
routes.post('/integradora/:integradora_id/usuario/:usuario_id/propriedades', PropriedadeController.store, UsuarioController.store);
routes.post('/propriedade/:propriedade_id/espacos', EspacoController.store, PropriedadeController.store);
routes.post('/raca/:raca_id/espaco/:espaco_id/lotes', LoteController.store, EspacoController.store, RacaController.store);
routes.post('/:id/enderecos/:tipo', EnderecoController.store);
routes.post('/lote/:lote_id/atualizacoes', AtualizacaoController.store);

routes.get('/lotes/:lote_id', LoteController.index);
routes.get('/lotes', LoteController.show);
routes.get('/atualizacoes', AtualizacaoController.show);

module.exports = routes; 