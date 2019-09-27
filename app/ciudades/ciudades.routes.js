'use strict';

const express = require('express');
const ciudades = express.Router();

const CiudadesCtrl = require('./ciudades.controllers');

ciudades.get('/', CiudadesCtrl.getCiudades);

module.exports = ciudades;