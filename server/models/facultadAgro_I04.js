const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadAgroI04 = new Schema ({
    Grupo: {type: String, required: true},
    Noproductos: {type: Number, required:true},
    Valor: {type: Number, required:true}
});

module.exports = mongoose.model('facagro_i04', FacultadAgroI04);