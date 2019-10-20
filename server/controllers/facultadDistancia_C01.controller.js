const FacDistanciaC01 = require('../models/facultadDistancia_C01');

const facDistanciaC01Ctrl = {};


facDistanciaC01Ctrl.getFacDistanciaC01 =  async (req, res) =>{
    const facDistanciaC01 = await FacDistanciaC01.find();
    res.json(facDistanciaC01)
}

module.exports = facDistanciaC01Ctrl;