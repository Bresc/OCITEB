const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadDerF03 = new Schema ({
    Anio: {type: String, required: true},
    Nosemilleros: {type: Number, required: true}
});

module.exports = mongoose.model('facder_f03', FacultadDerF03);