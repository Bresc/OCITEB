const mongoose = require('mongoose');
const {Schema} = mongoose;

const SeccionalChiF01 = new Schema ({
    Nombre: {type: String, required: true},
    Anio: {type: String, required: true},
    Programa: {type: String, required:true}
});

module.exports = mongoose.model('secchi_f01', SeccionalChiF01);