'use strict';

const express = require('express');
const puntuaciones = express.Router();

const PuntuacionesCtrl = require('./puntuaciones.controllers');

puntuaciones.get('/:id', PuntuacionesCtrl.getUsuario);

module.exports = puntuaciones;