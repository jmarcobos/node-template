'use strict';

const { getUsuario } = require('./usuarios.services');

exports.getUsuario = async (request, response, next) => {
    try {
        let usuario = await getUsuario(request.params.id);
        return response.status(200).json({ status: 200, data: usuario, message: "Ok" });
    }
    catch (error) {
        return response.status(400).json({ status: 400, message: error.message });   
    }
};
