'use strict';

const mariaDB = require('./../../config/initializers/database');

exports.getViajesHistorico = async () => {
    let client;
    try {
        client = await mariaDB.getConnection();
        return await client.query('SELECT * FROM n_viajes_historico v, n_viajes_historico_usuarios h, u_usuarios u WHERE v.id = h.id_viaje_historico and h.id_usuario = u.id;');
    }
    catch (error) {
        await client.end();
        throw error;
    }
    finally {
        await client.end();
    }
}

exports.getViajeHistorico = async (id) => {
    let client;
    try {
        client = await mariaDB.getConnection();
        return await client.query('SELECT * FROM n_viajes_historico v, n_viajes_historico_usuarios h, u_usuarios u WHERE v.id = h.id_viaje_historico and h.id_usuario = u.id and u.email = "' + id + '";');
    }
    catch (error) {
        await client.end();
        throw error;
    }
    finally {
        await client.end();
    }
}

exports.getViajeHistoricoByUser = async (email) => {
    let client;
    try {
        client = await mariaDB.getConnection();
        return await client.query('SELECT h.* FROM n_viajes_historico h inner join n_viajes_historico_usuarios u on h.id = u.id_viaje_historico inner join u_usuarios s on s.id = u.id_usuario WHERE s.email = "' + email + '";');
    }
    catch (error) {
        await client.end();
        throw error;
    }
    finally {
        await client.end();
    }
}