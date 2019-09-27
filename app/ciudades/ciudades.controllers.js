'use strict';

const { getCiudades } = require('./ciudades.services');

exports.getCiudades = async (request, response, next) => {
    try {
        let ciudades = await getCiudades();
        return response.status(200).json({ status: 200, data: ciudades, message: "Ok" });
    }
    catch (error) {
        return response.status(400).json({ status: 400, message: error.message });   
    }
};
