/*
   path:api/login
*/
const { Router } = require('express');
const { validarJWTMiddlewares } = require('../middlewares/validar-jwt');
const { obtenerChat } = require('../controllers/mensajes');


//function 
const router = Router();

//necesito saber cual es la persona a la que quiero yo leer los sms
router.get('/:de',validarJWTMiddlewares,obtenerChat);



module.exports = router;
