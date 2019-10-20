const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadDistanciaI01 = new Schema ({
    PROYECTO: {type: String, required: true},
    ANIOEJECUCION: {type: String, required: true},
    TIPOFINANCIACION: {type: String, required:true}
});

module.exports = mongoose.model('facdis_i01', FacultadDistanciaI01);