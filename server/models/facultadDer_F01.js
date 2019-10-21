const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadDerF01 = new Schema ({
    Nombre: {type: String, required: true},
    Anio: {type: String, required: true},
    Programa: {type: String, required:true}
});

module.exports = mongoose.model('facder_f01', FacultadDerF01);