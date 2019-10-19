const mongoose = require('mongoose');
const {Schema} = mongoose;

const PersonaSchema = new Schema ({
    nombre: {type: String, required:true},
    edad: {type: Number, required: true},
    cargo: {type: String, required:true}
},     
{ collection : 'Empleados'}
);

module.exports = mongoose.model('Persona', PersonaSchema);