'use strict';

const { getPaises } = require('./paises.services');

exports.getPaises = async (request, response, next) => {
    try {
        let paises = await getPaises();
        return response.status(200).json({ status: 200, data: paises, message: "Ok" });
    }
    catch (error) {
        return response.status(400).json({ status: 400, message: error.message });   
    }
};
