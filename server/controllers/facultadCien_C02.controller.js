const FacCienC02 = require('../models/facultadCien_C02');

const facCienC02Ctrl = {};


facCienC02Ctrl.getFacCienC02 =  async (req, res) =>{
    const facCienC02 = await FacCienC02.find();
    res.json(facCienC02)
}

module.exports = facCienC02Ctrl;