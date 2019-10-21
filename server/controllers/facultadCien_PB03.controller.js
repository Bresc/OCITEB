const FacCienPB03 = require('../models/facultadCien_PB03');

const facCienPB03Ctrl = {};


facCienPB03Ctrl.getFacCienPB03 =  async (req, res) =>{
    const facCienPB03 = await FacCienPB03.find();
    res.json(facCienPB03)
}

module.exports = facCienPB03Ctrl;