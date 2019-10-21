const FacCienI03 = require('../models/facultadCien_I03');

const facCienI03Ctrl = {};


facCienI03Ctrl.getFacCienI03 =  async (req, res) =>{
    const facCienI03 = await FacCienI03.find();
    res.json(facCienI03)
}

module.exports = facCienI03Ctrl;