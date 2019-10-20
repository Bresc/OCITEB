const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadAgroF01 = new Schema ({
    Nombre: {type: String, required: true},
    Anio: {type: String, required: true},
    Programa: {type: String, required:true}
});

module.exports = mongoose.model('facagro_f01', FacultadAgroF01);