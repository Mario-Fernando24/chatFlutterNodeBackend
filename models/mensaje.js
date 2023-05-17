//Schema me ayuda a crear el modelo, 
//model ver fuera del archivo
const { Schema, model} = require('mongoose');

const MensajeSchema = Schema({
    
    para: {
        //obtendre el id del la coleccion
        type: Schema.Types.ObjectId,
        //referencia de que colleccion voy a utilizar
        ref: 'Usuario',
        required: true,
    },

    de: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    },

    mensaje: {
        type: String,
        required: true
    }
},{
    timestamps: true
});


MensajeSchema.method('toJSON', function(){
    const { __v, _id, ...object  } = this.toObject();
    return object;
 })
 
module.exports = model('Mensaje', MensajeSchema)
