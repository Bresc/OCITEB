const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadEduI06 = new Schema ({
    Anio: {type: String, required: true},
    Valor: {type: Number, required:true}
});

module.exports = mongoose.model('facedu_i06', FacultadEduI06);