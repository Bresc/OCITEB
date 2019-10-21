const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadCienPB03 = new Schema ({
    ANIOPUBLICACION: {type: String, required: true},
    NOMBRELIBRO: {type: String, required:true}
});

module.exports = mongoose.model('faccien_pb03', FacultadCienPB03);