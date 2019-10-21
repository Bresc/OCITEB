const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadEcoI04 = new Schema ({
    Grupo: {type: String, required: true},
    Noproductos: {type: Number, required:true},
    Valor: {type: Number, required:true}
});

module.exports = mongoose.model('faceco_i04', FacultadEcoI04);