const FacCienI04 = require('../models/facultadCien_I04');

const facCienI04Ctrl = {};


facCienI04Ctrl.getFacCienI04 =  async (req, res) =>{
    const facCienI04 = await FacCienI04.find();
    res.json(facCienI04)
}

module.exports = facCienI04Ctrl;