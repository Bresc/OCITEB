const FacCienF01 = require('../models/facultadCien_F01');

const facCienF01Ctrl = {};


facCienF01Ctrl.getFacCienF01 =  async (req, res) =>{
    const facCienF01 = await FacCienF01.find();
    res.json(facCienF01)
}

module.exports = facCienF01Ctrl;