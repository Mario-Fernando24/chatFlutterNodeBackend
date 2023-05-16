/*
   path:api/login
*/
const { Router } = require('express');
const { check } =  require ('express-validator');
const { getUsuario } = require('../controllers/usuario');
const { validarJWTMiddlewares } = require('../middlewares/validar-jwt');

//function 
const router = Router();


router.get('/',validarJWTMiddlewares,getUsuario);


module.exports = router;
