const FacEcoC02 = require('../models/facultadEco_C02');

const facEcoC02Ctrl = {};


facEcoC02Ctrl.getFacEcoC02 =  async (req, res) =>{
    const facEcoC02 = await FacEcoC02.find();
    res.json(facEcoC02)
}

module.exports = facEcoC02Ctrl;