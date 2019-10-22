const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadCienF02 = new Schema ({
    NombreJoven: {type: String, required: true},
    AnionEjecucion: {type: String, required: true},
    Programa: {type: String, required: true}
});

module.exports = mongoose.model('faccien_f02', FacultadCienF02);