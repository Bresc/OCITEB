const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadCienC02 = new Schema ({
    Anio: {type: String, required: true},
    InvestigadorJunior: {type: Number, required: true},
    InvestigadorAsociado: {type: Number, required: true},
    InvestigadorSenior: {type: Number, required: true},
    InvestigadorEmerito: {type: Number, required: true} 
});

module.exports = mongoose.model('faccien_c02', FacultadCienC02);