'use strict';

const express = require('express');
const viajes = express.Router();

const ViajesCtrl = require('./viajes.controllers');

viajes.route('/').get(ViajesCtrl.getViajes);
viajes.route('/').post(ViajesCtrl.postViaje);
viajes.route('/:id').get(ViajesCtrl.getViaje);

module.exports = viajes;