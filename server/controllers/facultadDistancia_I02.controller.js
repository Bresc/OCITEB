const FacDistanciaI02 = require('../models/facultadDistancia_I02');

const facDistanciaI02Ctrl = {};


facDistanciaI02Ctrl.getFacDistanciaI02 =  async (req, res) =>{
    const facDistanciaI02 = await FacDistanciaI02.find();
    res.json(facDistanciaI02)
}

module.exports = facDistanciaI02Ctrl;