const FacAgroI03 = require('../models/facultadAgro_I03');

const facAgroI03Ctrl = {};


facAgroI03Ctrl.getFacAgroI03 =  async (req, res) =>{
    const facAgroI03 = await FacAgroI03.find();
    res.json(facAgroI03)
}

module.exports = facAgroI03Ctrl;