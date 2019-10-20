const FacDistanciaI05 = require('../models/facultadDistancia_I05');

const facDistanciaI05Ctrl = {};


facDistanciaI05Ctrl.getFacDistanciaI05 =  async (req, res) =>{
    const facDistanciaI05 = await FacDistanciaI05.find();
    res.json(facDistanciaI05)
}

module.exports = facDistanciaI05Ctrl;