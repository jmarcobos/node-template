'use strict';

const mariaDB = require('./../../config/initializers/database');

exports.getCiudades = async () => {
    let client;
    try {
        client = await mariaDB.getConnection();
        return await client.query('SELECT * FROM m_ciudades;');
    }
    catch (error) {
        await client.end();
        throw error;
    }
    finally {
        await client.end();
    }
}