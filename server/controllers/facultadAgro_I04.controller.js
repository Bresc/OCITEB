const FacAgroI04 = require('../models/facultadAgro_I04');

const facAgroI04Ctrl = {};


facAgroI04Ctrl.getFacAgroI04 =  async (req, res) =>{
    const facAgroI04 = await FacAgroI04.find();
    res.json(facAgroI04)
}

module.exports = facAgroI04Ctrl;