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
    let client;
   
    try {
        client = await mariaDB.getConnection();
        var query = "INSERT INTO n_viajes (cod, titulo, subtitulo, cuerpo, inicio, fin, precio, created_date, modified_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        var datos = ["9FX95", viaje.titulo, viaje.subtitulo, viaje.cuerpo, new Date(), new Date(), viaje.precio, new Date(), new Date()];
        await client.query(query, datos, (error, results) => {
            if (error) {
                throw error;
            }
            console.log(results);
        });
    }
    catch (error) {
        await client.end();
        throw error;
    }
    finally {
        await client.end();
    }

    

    /*'INSERT INTO n_viajes (cod, titulo, subtitulo, cuerpo, inicio, fin, precio, created_date, modified_date) VALUES ("9FX95", $1, $2, $3, $4, $5, $6, $7)';
        'Viaje a EEUU.', 
        'Viaje a Nueva York para verano.', 
        'Se buscan persona agradable y con buen rollo para hacer un viaje a Nueva York en las vacaciones de verano.', 
        '2019-08-10 00:00:00.000', 
        '2019-08-18 00:00:00.000', 
        '1400.00', 
        '2019-02-27 21:47:46.000', 
        '2019-02-27 21:47:46.000'
    );'
    
    'SELECT id FROM u_usuarios WHERE email = "' + email + '";'
    
    'INSERT INTO n_viajes_usuarios (id_usuario, id_viaje, created_data, modified_date) VALUES (1, 1,"2019-02-27 21:47:46.000", "2019-02-27 21:47:46.000");'*/
}