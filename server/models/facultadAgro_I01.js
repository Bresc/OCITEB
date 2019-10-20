const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadAgroI01 = new Schema ({
    PROYECTO: {type: String, required: true},
    ANIOEJECUCION: {type: String, required: true},
    TIPOFINANCIACION: {type: String, required:true}
});

module.exports = mongoose.model('facagro_i01', FacultadAgroI01);