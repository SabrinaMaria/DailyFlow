const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Usuario = require('../models/Usuario');
const Raca = require('../models/Raca');
const Integradora = require('../models/Integradora');
const Propriedade = require('../models/Propriedade');
const Espaco = require('../models/Espaco');
const Lote = require('../models/Lote');
const Endereco = require('../models/Endereco');
const Atualizacao = require('../models/Atualizacao');


const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Raca.init(connection);
Integradora.init(connection);
Propriedade.init(connection);
Espaco.init(connection);
Lote.init(connection);
Endereco.init(connection);
Atualizacao.init(connection);

Propriedade.associate(connection.models);
Espaco.associate2(connection.models);
Lote.associate3(connection.models);
Endereco.associate4(connection.models);
Atualizacao.associate5(connection.models);

module.exports = connection;
