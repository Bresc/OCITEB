const FacDistanciaI03 = require('../models/facultadDistancia_I03');

const facDistanciaI03Ctrl = {};


facDistanciaI03Ctrl.getFacDistanciaI03 =  async (req, res) =>{
    const facDistanciaI03 = await FacDistanciaI03.find();
    res.json(facDistanciaI03)
}

module.exports = facDistanciaI03Ctrl;