const FacCienF03 = require('../models/facultadCien_F03');

const facCienF03Ctrl = {};


facCienF03Ctrl.getFacCienF03 =  async (req, res) =>{
    const facCienF03 = await FacCienF03.find();
    res.json(facCienF03)
}

module.exports = facCienF03Ctrl;