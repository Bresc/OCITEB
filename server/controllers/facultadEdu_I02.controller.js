const FacEduI02 = require('../models/facultadEdu_I02');

const facEduI02Ctrl = {};


facEduI02Ctrl.getFacEduI02 =  async (req, res) =>{
    const facEduI02 = await FacEduI02.find();
    res.json(facEduI02)
}

module.exports = facEduI02Ctrl;