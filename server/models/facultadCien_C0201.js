const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadCienC0201 = new Schema ({
    NIVELDEESTUDIO: {type: String, required: true},
    TIPOVINCULACION: {type: Number, required: true},
    DocentesVinculados: {type: Number, required: true},
    Docentesengrupos: {type: Number, required: true},
    Docentesenproyectos: {type: Number, required: true},     
    Docentesreconocidos: {type: Number, required: true}
});

module.exports = mongoose.model('faccien_c0201', FacultadCienC0201);