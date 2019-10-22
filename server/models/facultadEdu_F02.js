const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadEduF02 = new Schema ({
    NombreJoven: {type: String, required: true},
    AnionEjecucion: {type: String, required: true},
    Programa: {type: String, required: true}
});

module.exports = mongoose.model('facedu_f02', FacultadEduF02);