const mongoose = require('mongoose');
const {Schema} = mongoose;

const SeccionalChiI02 = new Schema ({
    ANIOEJECUCION: {type: String, required: true},
    MONTOESPECIEINTERNO: {type: Number, required:true},
    MONTOEFECTIVOINTERNO: {type: Number, required:true},
    MONTOEXTERNO1: {type: Number, required:true}
});

module.exports = mongoose.model('secchi_i02', SeccionalChiI02);