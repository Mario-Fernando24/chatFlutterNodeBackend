const { Router, response } = require('express');
const Mensaje = require('../models/mensaje');

const obtenerChat = async (req, res = response) => {

    const miUid = req.uid;
    //obtener del argumento que estoy mandando por parametro
    const mensajeDe= req.params.de;

    //ultimos 30 sms
    const last30 = await Mensaje.find({
        $or: [{de: miUid, para: mensajeDe}, { de: mensajeDe, para: miUid } ]
    }).sort({ createdAt: 'desc' })
      .limit(30); 


    res.json({
        ok: true,
        mensajes: last30
    })

}

module.exports = {
    obtenerChat
}