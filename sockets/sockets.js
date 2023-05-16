const { usuarioDisconnect, usuarioConnectado } = require('../controllers/socket');
const { comprobarJWT } = require('../helpers/jwt');
const { io } = require('../index');
const { emit } = require('nodemon');

io.on('connect',  (client) => {
    
    //handshake apreton de mano en ingles
    // console.log(client.handshake.headers['x-token']);
    
    console.log(" Conectando...");
    const  [valido, uid] = comprobarJWT(client.handshake.headers['x-token']) 
    if(!valido){ return client.disconnect(); }

     usuarioConnectado(uid);

     //ingresar al usuario a una sala especifica
     //sola gloar (todos los dispositivos global)  
     //client.id privado
     //nombre de la sala
      client.join(uid);
   //   //cliente particular que yo le quiero mandar un mensaje
   //   client.to(uid).emit('')

   //ESCUCHAR DEL CLIENTE EL MENSAJE PERSONAL
   client.on('mensaje-personal', (payload) => {
       console.log('vallenatoooooooooooooooooooooooooooooooooooooooooooooooooooooo');
       console.log(payload);
       console.log('vallenatoooooooooooooooooooooooooooooooooooooooooooooooooooooo');
   }); 


    console.log('Cliente autenticado');

    client.on('disconnect',  () => { 
         usuarioDisconnect(uid);
        console.log("Cliente desconectado");
     });
  });
