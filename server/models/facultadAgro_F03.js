const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadAgroF03 = new Schema ({
    Anio: {type: String, required: true},
    Nosemilleros: {type: Number, required: true}
});

module.exports = mongoose.model('facagro_f03', FacultadAgroF03);