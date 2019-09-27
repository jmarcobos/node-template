'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

const paises = require('./../../app/paises/paises.routes');
const ciudades = require('./../../app/ciudades/ciudades.routes');
const usuarios = require('./../../app/usuarios/usuarios.routes');
const viajes = require('./../../app/viajes/viajes.routes');
const viajes_historico = require('./../../app/viajes_historico/viajes_historico.routes');
const configuracion = require('./../../app/configuracion/configuracion.routes');

const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.json());

app.use('/paises', paises);
app.use('/ciudades', ciudades);
app.use('/usuarios', usuarios);
app.use('/viajes', viajes);
app.use('/historico', viajes_historico);
app.use('/configuracion', configuracion);

module.exports = app;