const FacCienI06 = require('../models/facultadCien_I06');

const facCienI06Ctrl = {};


facCienI06Ctrl.getFacCienI06 =  async (req, res) =>{
    const facCienI06 = await FacCienI06.find();
    res.json(facCienI06)
}

module.exports = facCienI06Ctrl;