const { comprobarJWT } = require('../helpers/jwt');
const { io } = require('../index');
const { emit } = require('nodemon');

io.on('connect', client => {
    
    //handshake apreton de mano en ingles
    // console.log(client.handshake.headers['x-token']);
    
    console.log("Cliente Conectado");
    const  [valido, uid] = comprobarJWT(client.handshake.headers['x-token']) 
    if(!valido){ return client.disconnect(); }

    console.log('Cliente autentucado');

    client.on('disconnect', () => { 
        console.log("Cliente desconectado");
     });
  });
