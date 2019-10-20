const FacDistanciaI04 = require('../models/facultadDistancia_I04');

const facDistanciaI04Ctrl = {};


facDistanciaI04Ctrl.getFacDistanciaI04 =  async (req, res) =>{
    const facDistanciaI04 = await FacDistanciaI04.find();
    res.json(facDistanciaI04)
}

module.exports = facDistanciaI04Ctrl;