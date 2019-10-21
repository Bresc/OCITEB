const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadCienI04 = new Schema ({
    Grupo: {type: String, required: true},
    Noproductos: {type: Number, required:true},
    Valor: {type: Number, required:true}
});

module.exports = mongoose.model('faccien_i04', FacultadCienI04);