'use strict';

const express = require('express');
const paises = express.Router();

const PaisesCtrl = require('./paises.controllers');

paises.get('/', PaisesCtrl.getPaises);

module.exports = paises;