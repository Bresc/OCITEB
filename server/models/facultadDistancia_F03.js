const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadDistanciaF03 = new Schema ({
    ANIO: {type: String, required: true},
    Nosemilleros: {type: Number, required: true}
});

module.exports = mongoose.model('facdis_f03', FacultadDistanciaF03);