const FacCienI02 = require('../models/facultadCien_I02');

const facCienI02Ctrl = {};


facCienI02Ctrl.getFacCienI02 =  async (req, res) =>{
    const facCienI02 = await FacCienI02.find();
    res.json(facCienI02)
}

module.exports = facCienI02Ctrl;