const FacAgroI02 = require('../models/facultadAgro_I02');

const facAgroI02Ctrl = {};


facAgroI02Ctrl.getFacAgroI02 =  async (req, res) =>{
    const facAgroI02 = await FacAgroI02.find();
    res.json(facAgroI02)
}

module.exports = facAgroI02Ctrl;