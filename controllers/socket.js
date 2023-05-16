const Usuario = require('../models/usuario');

const usuarioConnectado = async ( uid= '') => {
      
    const usuario  = await Usuario.findById( uid );
    usuario.online = true;
    await usuario.save();

    return usuario;
}

const usuarioDisconnect = async ( uid= '') => {
      
    const usuario  = await Usuario.findById( uid );
    usuario.online = false;
    await usuario.save();

    return usuario;
}


module.exports = {
    usuarioConnectado, usuarioDisconnect
}