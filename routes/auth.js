/*
   path:api/login
*/
const { Router } = require('express');
const { check } =  require ('express-validator');
const { crearUsuario,login,validarJWT } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWTMiddlewares } = require('../middlewares/validar-jwt')
//function 
const router = Router();

router.post('/new',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatorio').not().isEmpty(),
    check('email', 'El email no es valido').isEmail(),
    validarCampos
] ,crearUsuario);

router.post('/',[
    check('email', 'El email no es valido').isEmail(),
    check('password', 'La contraseña es obligatorio').not().isEmpty(),
    validarCampos
] ,login);

router.get('/renovarToken',validarJWTMiddlewares,validarJWT);


module.exports = router;
