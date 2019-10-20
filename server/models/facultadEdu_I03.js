const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadEduI03 = new Schema ({
    ANIOEJECUCION: {type: String, required: true},
    MONTOEXTERNO1: {type: Number, required:true},
    TIPODEENTIDAD: {type: String, required:true}
});

module.exports = mongoose.model('facedu_i03', FacultadEduI03);