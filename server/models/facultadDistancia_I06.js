const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadDistanciaI06 = new Schema ({
    Anio: {type: String, required: true},
    Aporte: {type: Number, required:true}
});

module.exports = mongoose.model('facdis_i06', FacultadDistanciaI06);