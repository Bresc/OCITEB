const mongoose = require('mongoose');
const {Schema} = mongoose;

const SeccionalChiI06 = new Schema ({
    Anio: {type: String, required: true},
    Valor: {type: Number, required:true}
});

module.exports = mongoose.model('secchi_i06', SeccionalChiI06);