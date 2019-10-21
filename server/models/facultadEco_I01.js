const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadEcoI01 = new Schema ({
    PROYECTO: {type: String, required: true},
    ANIOEJECUCION: {type: String, required: true},
    TIPOFINANCIACION: {type: String, required:true}
});

module.exports = mongoose.model('faceco_i01', FacultadEcoI01);