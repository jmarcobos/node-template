'use strict';

const { getViajes, getViaje, postViaje, getMisViajes } = require('./viajes.services');

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
        if (viaje.length > 0) {
            return response.status(200).json(viaje);
        } else {
            return response.status(204).json({ status: 204, data: usuario, message: "No Content" });    
        }
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

exports.getMisViajes = async (request, response, next) => {
    try {
        return response.status(200).json(await getMisViajes(request.params.id));
    }
    catch (error) {
        return response.status(400).json({ status: 400, message: error.message });   
    }
};