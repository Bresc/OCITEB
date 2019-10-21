const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadCienI05 = new Schema ({
    Vigenciadocumento: {type: String, required: true},
    Valorrecaudo: {type: Number, required:true}
});

module.exports = mongoose.model('faccien_i05', FacultadCienI05);