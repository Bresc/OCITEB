const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadCienF03 = new Schema ({
    Anio: {type: String, required: true},
    Nosemilleros: {type: Number, required: true}
});

module.exports = mongoose.model('faccien_f03', FacultadCienF03);