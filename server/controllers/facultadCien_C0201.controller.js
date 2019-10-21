const FacCienC0201 = require('../models/facultadCien_C0201');

const facCienC0201Ctrl = {};


facCienC0201Ctrl.getFacCienC0201 =  async (req, res) =>{
    const facCienC0201 = await FacCienC0201.find();
    res.json(facCienC0201)
}

module.exports = facCienC0201Ctrl;