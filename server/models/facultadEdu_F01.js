const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadEduF01 = new Schema ({
    Nombre: {type: String, required: true},
    Anio: {type: String, required: true},
    Programa: {type: String, required:true}
});

module.exports = mongoose.model('facedu_f01', FacultadEduF01);