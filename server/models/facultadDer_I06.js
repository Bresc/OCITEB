const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadDerI06 = new Schema ({
    Anio: {type: String, required: true},
    Valor: {type: Number, required:true}
});

module.exports = mongoose.model('facder_i06', FacultadDerI06);