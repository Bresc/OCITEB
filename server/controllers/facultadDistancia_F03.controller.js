const FacDistanciaF03 = require('../models/facultadDistancia_F03');

const facDistanciaF03Ctrl = {};


facDistanciaF03Ctrl.getFacDistanciaF03 =  async (req, res) =>{
    const facDistanciaF03 = await FacDistanciaF03.find();
    res.json(facDistanciaF03)
}

module.exports = facDistanciaF03Ctrl;