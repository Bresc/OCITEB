const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadCienI01 = new Schema ({
    PROYECTO: {type: String, required: true},
    ANIOEJECUCION: {type: String, required: true},
    TIPOFINANCIACION: {type: String, required:true}
});

module.exports = mongoose.model('faccien_i01', FacultadCienI01);