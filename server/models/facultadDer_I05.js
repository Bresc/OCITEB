const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadDerI05 = new Schema ({
    Vigenciadocumento: {type: String, required: true},
    Valorrecaudo: {type: Number, required:true}
});

module.exports = mongoose.model('facder_i05', FacultadDerI05);