const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadAgroI06 = new Schema ({
    Anio: {type: String, required: true},
    Valor: {type: Number, required:true}
});

module.exports = mongoose.model('facagro_i06', FacultadAgroI06);