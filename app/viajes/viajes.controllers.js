'use strict';

const { getViajes, getViaje, postViaje } = require('./viajes.services');

exports.getViajes = async (request, response, next) => {
    try {
        let viajes = await getViajes();
        return response.status(200).json({ status: 200, data: viajes, message: "Ok" });
    }
    catch (error) {
        return response.status(400).json({ status: 400, message: error.message });   
    }
};

exports.getViaje = async (request, response, next) => {
    try {
        let viaje = await getViaje(request.params.id);
        return response.status(200).json({ status: 200, data: viaje, message: "Ok" });
    }
    catch (error) {
        return response.status(400).json({ status: 400, message: error.message });   
    }
};

exports.postViaje = async (request, response, next) => {
    try {
        return response.status(200).json(await postViaje(request.body));
    }
    catch (error) {
        return response.status(400).json({ status: 400, message: error.message });   
    }
};