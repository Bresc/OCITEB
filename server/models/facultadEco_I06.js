const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadEcoI06 = new Schema ({
    Anio: {type: String, required: true},
    Valor: {type: Number, required:true}
});

module.exports = mongoose.model('faceco_i06', FacultadEcoI06);