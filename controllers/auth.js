const { Router, response } = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');
const usuario = require('../models/usuario');

const crearUsuario = async (req, res= response) => {

    const { email, password } = req.body;

    try {

        const existeEmail =  await Usuario.findOne({ email });

        if(existeEmail){
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya esta registrado'
            });
        }
        
        const usuario = new Usuario(req.body);

        //Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);
        await usuario.save();

        //generar JWT
        const token = await generarJWT(usuario.id);

        res.json({
            ok: true,
            usuario,
            token
        })
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

const login = async (req, res = response) => {
    
    const { email, password } = req.body;

    try {

        usuarioDB = await Usuario.findOne({email});

        if(!usuarioDB){
            return res.status(404).json({
                ok: false,
                msg: 'El email no encontrado'
            });
        }
        
        //validar password
        const validPassword = bcrypt.compareSync(password, usuarioDB.password);

        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'La contraseña no es valida'
            });
        }

       const token = await generarJWT(usuarioDB.id);

       res.json({
        ok: true,
        usuarioDB,
        token
        })

        
    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'hable con el administrador'
        })
        
    }
}

const validarJWT = async (req, res = response) => {
   
    res.status(201).json({
        ok: true,
        uid: req.uid
    })

}

module.exports = {
    crearUsuario,
    login,
    validarJWT
}