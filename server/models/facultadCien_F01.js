const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadCienF01 = new Schema ({
    Nombre: {type: String, required: true},
    Anio: {type: String, required: true},
    Programa: {type: String, required:true}
});

module.exports = mongoose.model('faccien_f01', FacultadCienF01);