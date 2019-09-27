'use strict';

const express = require('express');
const viajes = express.Router();

const ViajesHistoricoCtrl = require('./viajes_historico.controllers');

viajes.route('/').get(ViajesHistoricoCtrl.getViajesHistorico);
viajes.route('/:id').get(ViajesHistoricoCtrl.getViajeHistorico);
viajes.route('/user/:user').get(ViajesHistoricoCtrl.getViajeHistoricoByUser);

module.exports = viajes;