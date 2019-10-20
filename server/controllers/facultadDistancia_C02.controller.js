const FacDistanciaC02 = require('../models/facultadDistancia_C02');

const facDistanciaC02Ctrl = {};


facDistanciaC02Ctrl.getFacDistanciaC02 =  async (req, res) =>{
    const facDistanciaC02 = await FacDistanciaC02.find();
    res.json(facDistanciaC02)
}

module.exports = facDistanciaC02Ctrl;