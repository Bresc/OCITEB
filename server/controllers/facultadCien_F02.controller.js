const FacCienF02 = require('../models/facultadCien_F02');

const facCienF02Ctrl = {};


facCienF02Ctrl.getFacCienF02 =  async (req, res) =>{
    const facCienF02 = await FacCienF02.find();
    res.json(facCienF02)
}

module.exports = facCienF02Ctrl;