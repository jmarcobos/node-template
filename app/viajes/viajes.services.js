'use strict';

const mariaDB = require('./../../config/initializers/database');

exports.getViajes = async () => {
    let client;
    try {
        client = await mariaDB.getConnection();
        return await client.query('SELECT * FROM n_viajes v, n_viajes_destinos d, m_paises p, m_ciudades c WHERE v.id = d.id_viaje and d.id_pais = p.id and c.id = d.id_ciudad;');
    }
    catch (error) {
        await client.end();
        throw error;
    }
    finally {
        await client.end();
    }
}

exports.getViaje = async (id) => {
    let client;
    try {
        client = await mariaDB.getConnection();
        return await client.query('SELECT * FROM portfolio.n_viajes WHERE id = ' + id);
    }
    catch (error) {
        await client.end();
        throw error;
    }
    finally {
        await client.end();
    }
}

exports.postViaje = async (viaje) => {
    return mariaDB.getConnection()
        .then((conection) => {
            return conection.beginTransaction()
                .then(() => {
                    var viajeQuery = "INSERT INTO n_viajes (cod, titulo, subtitulo, cuerpo, inicio, fin, precio, created_date, modified_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
                    var viajeDatos = ["9FX95", viaje.titulo, viaje.subtitulo, viaje.cuerpo, new Date(), new Date(), viaje.precio, new Date(), new Date()];
                    return conection.query(viajeQuery, viajeDatos)
                        .then((rows) => {
                            var idViaje = rows.insertId;
                            var userQuery = "INSERT INTO n_viajes_usuarios (id_usuario, id_viaje, created_date, modified_date) VALUES (?, ?, ?, ?)";
                            var userDatos = [1, idViaje, new Date(), new Date()];
                            return conection.query(userQuery, userDatos)
                                .then(() => {
                                    conection.commit();
                                    return rows;
                                })
                                .catch(() => {
                                    conection.rollback();
                                })
                                .finally(() => {
                                    conection.end();
                                    conection.release();
                                });
                        })
                        .catch(() => {
                            conection.rollback();
                            conection.release();
                        }); 
                });   
        })          
        .catch(() => {
            throw error;   
        });
}