'use strict';

const mariaDB = require('./../../config/initializers/database');

const getUsuario = async (id) => {
    let client;
    try {
        client = await mariaDB.getConnection();
        return await client.query('SELECT * FROM u_usuarios WHERE id = ' + id);
    }
    catch (error) {
        await client.end();
        throw error;
    }
    finally {
        await client.end();
    }
}

module.exports = {
    getUsuario
}