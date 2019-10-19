const personaController = {};
const persona = require('../models/personas');

personaController.getPersona =  async (req, res) =>{
    const personas = await persona.find();
    res.json(personas);
};

personaController.createPersona = async (req, res) =>{
    const personaNueva = new persona(req.body);
    await personaNueva.save();
    res.json('Persona guardada');
};

module.exports = personaController;