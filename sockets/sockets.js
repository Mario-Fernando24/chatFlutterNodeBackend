const { io } = require('../index');
const { emit } = require('nodemon');

io.on('connect', client => {
    
    console.log("Cliente Conectado");

    client.on('disconnect', () => { 
        console.log("Cliente desconectado");
     });
  });
