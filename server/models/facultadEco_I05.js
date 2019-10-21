const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadEcoI05 = new Schema ({
    Vigenciadocumento: {type: String, required: true},
    Valorrecaudo: {type: Number, required:true}
});

module.exports = mongoose.model('faceco_i05', FacultadEcoI05);