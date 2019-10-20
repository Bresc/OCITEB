const FacDistanciaI06 = require('../models/facultadDistancia_I06');

const facDistanciaI06Ctrl = {};


facDistanciaI06Ctrl.getFacDistanciaI06 =  async (req, res) =>{
    const facDistanciaI06 = await FacDistanciaI06.find();
    res.json(facDistanciaI06)
}

module.exports = facDistanciaI06Ctrl;