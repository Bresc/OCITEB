const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadEduF03 = new Schema ({
    Anio: {type: String, required: true},
    Nosemilleros: {type: Number, required: true}
});

module.exports = mongoose.model('facedu_f03', FacultadEduF03);