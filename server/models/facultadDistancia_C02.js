const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadDistanciaC02 = new Schema ({
    ANIO: {type: String, required: true},
    InvestigadorJunior: {type: Number, required: true},
    InvestigadorAsociado: {type: Number, required: true},
    InvestigadorSenior: {type: Number, required: true},
    InvestigadorEmerito: {type: Number, required: true}
});

module.exports = mongoose.model('facdis_c02', FacultadDistanciaC02);