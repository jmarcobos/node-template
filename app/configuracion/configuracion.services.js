'use strict';

const mariaDB = require('./../../config/initializers/database');

exports.getEtiquetas = async (componente) => {
    let client;
    try {
        client = await mariaDB.getConnection();
        return await client.query('SELECT * FROM c_componentes c, c_etiquetas e WHERE c.id = e.id_componente AND c.nombre = "' + componente + '";');
    }
    catch (error) {
        await client.end();
        throw error;
    }
    finally {
        await client.end();
    }
}