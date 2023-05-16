const jwt = require('jsonwebtoken');

const validarJWTMiddlewares = (req, res, next)=>{
      //leer el token 
      const token = req.header('x-token');

      if(!token){
        return res.status(401).json({
            ok:false,
            msg:'No hay toke en la petición'
        })
      }

      try {
         //proceso asincrono
        const { uid } = jwt.verify(token, process.env.JWT_KEY);
        req.uid = uid;

        console.log(token);
        next();
      } catch (error) {

        return res.status(401).json({
            ok: false,
            msg: 'Token no valido'
        })
        
      }

   
}

module.exports ={
    validarJWTMiddlewares
}