const FacEduI03 = require('../models/facultadEdu_I03');

const facEduI03Ctrl = {};


facEduI03Ctrl.getFacEduI03 =  async (req, res) =>{
    const facEduI03 = await FacEduI03.find();
    res.json(facEduI03)
}

module.exports = facEduI03Ctrl;