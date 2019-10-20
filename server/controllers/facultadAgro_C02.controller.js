const FacAgroC02 = require('../models/facultadAgro_C02');

const facAgroC02Ctrl = {};


facAgroC02Ctrl.getFacAgroC02 =  async (req, res) =>{
    const facAgroC02 = await FacAgroC02.find();
    res.json(facAgroC02)
}

module.exports = facAgroC02Ctrl;