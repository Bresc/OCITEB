const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadEcoF03 = new Schema ({
    Anio: {type: String, required: true},
    Nosemilleros: {type: Number, required: true}
});

module.exports = mongoose.model('faceco_f03', FacultadEcoF03);