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

//Routes Fac Distancia
app.use('/facDistancia/i01', require('./routes/facultadDistancia_I01.routes'));
app.use('/facDistancia/i02', require('./routes/facultadDistancia_I02.routes'));
app.use('/facDistancia/i03', require('./routes/facultadDistancia_I03.routes'));
app.use('/facDistancia/i04', require('./routes/facultadDistancia_I04.routes'));
app.use('/facDistancia/i05', require('./routes/facultadDistancia_I05.routes'));
app.use('/facDistancia/i06', require('./routes/facultadDistancia_I06.routes'));

app.use('/facDistancia/f03', require('./routes/facultadDistancia_f03.routes'));

app.use('/facDistancia/c01', require('./routes/facultadDistancia_c01.routes'));
app.use('/facDistancia/c02', require('./routes/facultadDistancia_c02.routes'));

//Routes Fac Agropecuaria
app.use('/facAgro/i01', require('./routes/facultadAgro_I01.routes'));
app.use('/facAgro/i02', require('./routes/facultadAgro_I02.routes'));
app.use('/facAgro/i03', require('./routes/facultadAgro_I03.routes'));
app.use('/facAgro/i04', require('./routes/facultadAgro_I04.routes'));
app.use('/facAgro/i05', require('./routes/facultadAgro_I05.routes'));
app.use('/facAgro/i06', require('./routes/facultadAgro_I06.routes'));

app.use('/facAgro/f01', require('./routes/facultadAgro_f01.routes'));
app.use('/facAgro/f02', require('./routes/facultadAgro_f02.routes'));
app.use('/facAgro/f03', require('./routes/facultadAgro_f03.routes'));

app.use('/facAgro/c01', require('./routes/facultadAgro_c01.routes'));
app.use('/facAgro/c02', require('./routes/facultadAgro_c02.routes'));

//Routes Fac Educacion

app.use('/facEdu/i01', require('./routes/facultadEdu_I01.routes'));
app.use('/facEdu/i02', require('./routes/facultadEdu_I02.routes'));
app.use('/facEdu/i03', require('./routes/facultadEdu_I03.routes'));
app.use('/facEdu/i04', require('./routes/facultadEdu_I04.routes'));
app.use('/facEdu/i05', require('./routes/facultadEdu_I05.routes'));
app.use('/facEdu/i06', require('./routes/facultadEdu_I06.routes'));

app.use('/facEdu/f01', require('./routes/facultadEdu_f01.routes'));
app.use('/facEdu/f02', require('./routes/facultadEdu_f02.routes'));
app.use('/facEdu/f03', require('./routes/facultadEdu_f03.routes'));

app.use('/facEdu/c01', require('./routes/facultadEdu_c01.routes'));
app.use('/facEdu/c02', require('./routes/facultadEdu_c02.routes'));

//Starting server
app.listen(app.get('port'), () =>{
    console.log('Server iniciado en ', app.get('port'));
});

