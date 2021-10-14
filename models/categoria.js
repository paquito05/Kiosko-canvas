
const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    usuario: {
        type: Schema.ObjectId, ref: 'Usuario'
    },
    estado: {
        type: Boolean,
        default: true
    },

});


module.exports = model('Categoria', CategoriaSchema);
