const { Router, response } = require('express');
const Usuario = require('../models/usuario');
const { comprobarJWT } = require('../helpers/jwt');

const getUsuario = async (req, res = response) => {

    
    const desde = Number(req.query.desde) || 0;

    const uid = req.uid;
    
    const usuario= await Usuario.find({ _id: { $ne: uid }}).sort('-online').skip(desde).limit(20);

        res.status(200).json({
            ok: true,
              usuario,
        })
   

}

module.exports = {
    getUsuario,
}