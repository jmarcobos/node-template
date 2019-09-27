'use strict';

const { getEtiquetas } = require('./configuracion.services');

exports.getEtiquetas = async (request, response, next) => {
    try {
        let etiquetas = await getEtiquetas(request.params.componente);
        return response.status(200).json({ status: 200, data: etiquetas, message: "Ok" });
    }
    catch (error) {
        return response.status(400).json({ status: 400, message: error.message });   
    }
};