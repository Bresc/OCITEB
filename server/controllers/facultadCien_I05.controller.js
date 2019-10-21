const FacCienI05 = require('../models/facultadCien_I05');

const facCienI05Ctrl = {};


facCienI05Ctrl.getFacCienI05 =  async (req, res) =>{
    const facCienI05 = await FacCienI05.find();
    res.json(facCienI05)
}

module.exports = facCienI05Ctrl;