const FacEduI04 = require('../models/facultadEdu_I04');

const facEduI04Ctrl = {};


facEduI04Ctrl.getFacEduI04 =  async (req, res) =>{
    const facEduI04 = await FacEduI04.find();
    res.json(facEduI04)
}

module.exports = facEduI04Ctrl;