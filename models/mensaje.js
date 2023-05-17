//Schema me ayuda a crear el modelo, 
//model ver fuera del archivo
const { Schema, model} = require('mongoose');

const MensajeSchema = Schema({
    
    para: {
        type: Schema.Types.ObjectId,
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


 UsuarioSchema.method('toJSON', function(){
    const { __v, _id, ...object  } = this.toObject();
    return object;
 })
 
module.exports = model('Mensaje', MensajeSchema)
