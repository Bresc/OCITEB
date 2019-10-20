const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadAgroI05 = new Schema ({
    Vigenciadocumento: {type: String, required: true},
    Valorrecaudo: {type: Number, required:true}
});

module.exports = mongoose.model('facagro_i05', FacultadAgroI05);