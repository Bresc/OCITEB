const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//MiddleWares
app.use(cors({origin: 'http://localhost:4200'}));
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/personas', require('./routes/personas'));
app.use('/api/facDistancia/proyectos', require('./routes/facultadDistanciaProyectos'));

//Starting server
app.listen(app.get('port'), () =>{
    console.log('Server iniciado en ', app.get('port'));
});

