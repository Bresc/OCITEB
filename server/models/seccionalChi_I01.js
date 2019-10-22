const mongoose = require('mongoose');
const {Schema} = mongoose;

const SeccionalChiI01 = new Schema ({
    PROYECTO: {type: String, required: true},
    ANIOEJECUCION: {type: String, required: true},
    TIPOFINANCIACION: {type: String, required:true}
});

module.exports = mongoose.model('secchi_i01', SeccionalChiI01);