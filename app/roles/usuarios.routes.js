'use strict';

const express = require('express');
const usuarios = express.Router();

const UsuariosCtrl = require('./usuarios.controllers');

usuarios.get('/:id', UsuariosCtrl.getUsuario);

module.exports = usuarios;