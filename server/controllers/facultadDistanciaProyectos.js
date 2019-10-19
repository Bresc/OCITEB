const agricultura = require('../models/facultadDistanciaProyectos');


facDisController.getProyecto =  async (req, res) =>{
    const proyectos = await proyecto.find();
    res.json(proyectos);
};

module.exports = facDisController;