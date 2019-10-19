const mongoose = require('mongoose');
const {Schema} = mongoose;

const AgropecNumProy = new Schema({
    a2014: {type: Ano,required:true},
    a2015: {type: Ano,required:true},
    a2016: {type: Ano,required:true},
    a2017: {type: Ano,required:true},
    a2018: {type: Ano,required:true}
});

const Ano = new Schema({
    capitalSemilla: {type: Number,required:true},
    contrapartida: {type: Number,required:true},
    sin_financiacion: {type: Number,required:true}
})

module.exports=mongoose.model('Agropecuaria',PostSchema);