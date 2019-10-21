const FacCienI01 = require('../models/facultadCien_I01');

const facCienI01Ctrl = {};


facCienI01Ctrl.getFacCienI01 =  async (req, res) =>{
    const facCienI01 = await FacCienI01.find();
    res.json(facCienI01)
}

module.exports = facCienI01Ctrl;