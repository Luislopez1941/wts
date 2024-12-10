const express = require('express');
const cors = require('cors');
const connection = require('./models/config/db.js');
const app = express(); // Crea la instancia de la aplicación Express

app.use(cors());

// Importando rutas
const customerRoutes =  require('./controller/controller.js')

const path = require('path');
const morgan = require('morgan');



// Routes
app.use('/', customerRoutes);

app.use('/api', customerRoutes);

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))



// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Corrige el paréntesis

app.listen(app.get('port'), () => {
    console.log('Servidor escuchando en el puerto', app.get('port'));
});

app.use(morgan('dev'));
