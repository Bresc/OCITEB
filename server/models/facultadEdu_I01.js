const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadEduI01 = new Schema ({
    PROYECTO: {type: String, required: true},
    ANIOEJECUCION: {type: String, required: true},
    TIPOFINANCIACION: {type: String, required:true}
});

module.exports = mongoose.model('facedu_i01', FacultadEduI01);