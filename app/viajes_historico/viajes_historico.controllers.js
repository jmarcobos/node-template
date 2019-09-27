'use strict';

const { getViajesHistorico, getViajeHistorico, getViajeHistoricoByUser } = require('./viajes_historico.services');

exports.getViajesHistorico = async (request, response, next) => {
    try {
        let viajes = await getViajesHistorico();
        return response.status(200).json({ status: 200, data: viajes, message: "Ok" });
    }
    catch (error) {
        return response.status(400).json({ status: 400, message: error.message });   
    }
};

exports.getViajeHistorico = async (request, response, next) => {
    try {
        let viaje = await getViajeHistorico(request.params.id);
        return response.status(200).json({ status: 200, data: viaje, message: "Ok" });
    }
    catch (error) {
        return response.status(400).json({ status: 400, message: error.message });   
    }
};

exports.getViajeHistoricoByUser = async (request, response, next) => {
    try {
        return response.status(200).json(await getViajeHistoricoByUser(request.params.user));
    }
    catch (error) {
        return response.status(400).json({ status: 400, message: error.message });   
    }
};