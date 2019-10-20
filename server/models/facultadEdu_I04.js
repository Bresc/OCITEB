const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadEduI04 = new Schema ({
    Grupo: {type: String, required: true},
    Noproductos: {type: Number, required:true},
    Valor: {type: Number, required:true}
});

module.exports = mongoose.model('facedu_i04', FacultadEduI04);