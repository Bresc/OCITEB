const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadDistanciaI05 = new Schema ({
    Vigenciadocumento: {type: String, required: true},
    Valorrecaudo: {type: Number, required:true}
});

module.exports = mongoose.model('facdis_i05', FacultadDistanciaI05);