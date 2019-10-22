const mongoose = require('mongoose');
const {Schema} = mongoose;

const SeccionalChiI05 = new Schema ({
    Vigenciadocumento: {type: String, required: true},
    Valorrecaudo: {type: Number, required:true}
});

module.exports = mongoose.model('secchi_i05', SeccionalChiI05);