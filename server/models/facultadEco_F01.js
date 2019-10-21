const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadEcoF01 = new Schema ({
    Nombre: {type: String, required: true},
    Anio: {type: String, required: true},
    Programa: {type: String, required:true}
});

module.exports = mongoose.model('faceco_f01', FacultadEcoF01);