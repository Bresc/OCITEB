const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadDistanciaI03 = new Schema ({
    ANIOEJECUCION: {type: String, required: true},
    MONTOEFECTIVOINTERNO: {type: Number, required:true},
    TIPODEENTIDAD: {type: String, required:true}
});

module.exports = mongoose.model('facdis_i03', FacultadDistanciaI03);