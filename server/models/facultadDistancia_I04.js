const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadDistanciaI04 = new Schema ({
    Grupo: {type: String, required: true},
    Noproductosporgrupo: {type: Number, required:true},
    Valor: {type: Number, required:true}
});

module.exports = mongoose.model('facdis_i04', FacultadDistanciaI04);