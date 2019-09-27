'use strict';

const mariaDb = require('mariadb');

const conexion = mariaDb.createPool({
    host: 'localhost', 
    user:'root', 
    password: 'azucar',
    database: 'portfolio',
    connectionLimit: 5
});

module.exports = conexion;