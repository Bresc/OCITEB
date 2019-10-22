const mongoose = require('mongoose');
const {Schema} = mongoose;

const SeccionalChiC02 = new Schema ({
    Anio: {type: String, required: true},
    InvestigadorJunior: {type: Number, required: true},
    InvestigadorAsociado: {type: Number, required: true},
    InvestigadorSenior: {type: Number, required: true},
    InvestigadorEmerito: {type: Number, required: true} 
});

module.exports = mongoose.model('secchi_c02', SeccionalChiC02);