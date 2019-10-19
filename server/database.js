const mongoose = require('mongoose');

const URI = 'mongodb+srv://bresc:bresc@ociteb-iwhav.mongodb.net/DB_Proyecto?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(db => console.log('Base de datos conectada!'))
    .catch(err => console.error(err));

module.exports = mongoose;