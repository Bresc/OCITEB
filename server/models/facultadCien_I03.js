const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadCienI03 = new Schema ({
    ANIOEJECUCION: {type: String, required: true},
    MONTOEXTERNO1: {type: Number, required:true},
    TIPODEENTIDAD: {type: String, required:true}
});

module.exports = mongoose.model('faccien_i03', FacultadCienI03);