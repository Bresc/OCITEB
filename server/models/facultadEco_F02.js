const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadEcoF02 = new Schema ({
    NombreJoven: {type: String, required: true},
    AnionEjecucion: {type: String, required: true},
    Programa: {type: String, required: true}
});

module.exports = mongoose.model('faceco_f02', FacultadEcoF02);