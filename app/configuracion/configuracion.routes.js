'use strict';

const express = require('express');
const configuracion = express.Router();

const ConfiguracionCtrl = require('./configuracion.controllers');

configuracion.route('/:componente').get(ConfiguracionCtrl.getEtiquetas);

module.exports = configuracion;