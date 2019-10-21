const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadCienC01 = new Schema ({
    Anio: {type: String, required: true},
    A1: {type: Number, required: true},
    A: {type: Number, required: true},
    B: {type: Number, required: true},
    C: {type: Number, required: true},
    D: {type: Number, required: true},
    R: {type: Number, required: true}   
});

module.exports = mongoose.model('faccien_c01', FacultadCienC01);