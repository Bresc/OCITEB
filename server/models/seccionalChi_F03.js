const mongoose = require('mongoose');
const {Schema} = mongoose;

const SeccionalChiF03 = new Schema ({
    Anio: {type: String, required: true},
    Nosemilleros: {type: Number, required: true}
});

module.exports = mongoose.model('secchi_f03', SeccionalChiF03);