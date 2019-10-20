const FacEduI05 = require('../models/facultadEdu_I05');

const facEduI05Ctrl = {};


facEduI05Ctrl.getFacEduI05 =  async (req, res) =>{
    const facEduI05 = await FacEduI05.find();
    res.json(facEduI05)
}

module.exports = facEduI05Ctrl;