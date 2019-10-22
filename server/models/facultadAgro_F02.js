const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadAgroF02 = new Schema ({
    NombreJoven: {type: String, required: true},
    AnionEjecucion: {type: String, required: true},
    Programa: {type: String, required: true}
});

module.exports = mongoose.model('facagro_f02', FacultadAgroF02);