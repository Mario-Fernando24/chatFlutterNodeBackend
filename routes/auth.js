/*
   path:api/login
*/
const { Router } = require('express');
const { check } =  require ('express-validator');
const { crearUsuario } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');

//function 
const router = Router();

router.post('/new',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatorio').not().isEmpty(),
    check('email', 'El email no es valido').isEmail(),
    validarCampos
] ,crearUsuario);


module.exports = router;
