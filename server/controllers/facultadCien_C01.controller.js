const FacCienC01 = require('../models/facultadCien_C01');

const facCienC01Ctrl = {};


facCienC01Ctrl.getFacCienC01 =  async (req, res) =>{
    const facCienC01 = await FacCienC01.find();
    res.json(facCienC01)
}

module.exports = facCienC01Ctrl;