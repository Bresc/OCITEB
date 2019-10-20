const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacultadEduI05 = new Schema ({
    Vigenciadocumento: {type: String, required: true},
    Valorrecaudo: {type: Number, required:true}
});

module.exports = mongoose.model('facedu_i05', FacultadEduI05);