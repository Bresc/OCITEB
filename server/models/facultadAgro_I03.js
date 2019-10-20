const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadAgroI03 = new Schema ({
    ANIOEJECUCION: {type: String, required: true},
    MONTOEXTERNO1: {type: Number, required:true},
    TIPODEENTIDAD: {type: String, required:true}
});

module.exports = mongoose.model('facagro_i03', FacultadAgroI03);