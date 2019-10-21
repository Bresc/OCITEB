const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadDerI01 = new Schema ({
    PROYECTO: {type: String, required: true},
    ANIOEJECUCION: {type: String, required: true},
    TIPOFINANCIACION: {type: String, required:true}
});

module.exports = mongoose.model('facder_i01', FacultadDerI01);