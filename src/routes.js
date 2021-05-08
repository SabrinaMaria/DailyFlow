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
routes.get('/atualizacao/:atualizacao_id', AtualizacaoController.index);
routes.get('/endereco/:endereco_id', EnderecoController.index);
routes.get('/espaco/:espaco_id', EspacoController.index);
routes.get('/propriedade/:propriedade_id', PropriedadeController.index);
routes.get('/raca/:raca_id', RacaController.index);
routes.get('/integradora/:integradora_id', IntegradoraController.index);
routes.get('/usuario/:usuario_id', UsuarioController.index);
routes.get('/lotes', LoteController.show);
routes.get('/atualizacoes', AtualizacaoController.show);

routes.put('/raca/:raca_id/espaco/:espaco_id/lotes/:lote_id', LoteController.update);
routes.put('/lotes/:lote_id/atualizacao/:atualizacao_id', AtualizacaoController.update);
routes.put('/:id/enderecos/:tipo/:endereco_id', EnderecoController.update);
routes.put('/propriedade/:propriedade_id/espaco/:espaco_id', EspacoController.update);
routes.put('/integradora/:integradora_id/usuario/:usuario_id/propriedade/:propriedade_id', PropriedadeController.update);
routes.put('/raca/:raca_id', RacaController.update);
routes.put('/integradora/:integradora_id', IntegradoraController.update);
routes.put('/usuario/:usuario_id', UsuarioController.update);

routes.delete('/lotes/:lote_id', LoteController.delete);
routes.delete('/atualizacao/:atualizacao_id', AtualizacaoController.delete);
routes.delete('/endereco/:endereco_id', EnderecoController.delete);
routes.delete('/espaco/:espaco_id', EspacoController.delete);
routes.delete('/propriedade/:propriedade_id', PropriedadeController.delete);
routes.delete('/raca/:raca_id', RacaController.delete);
routes.delete('/integradora/:integradora_id', IntegradoraController.delete);
routes.delete('/usuario/:usuario_id', UsuarioController.delete);

module.exports = routes; 