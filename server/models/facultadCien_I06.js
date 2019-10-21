const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadCienI06 = new Schema ({
    Anio: {type: String, required: true},
    Valor: {type: Number, required:true}
});

module.exports = mongoose.model('faccien_i06', FacultadCienI06);