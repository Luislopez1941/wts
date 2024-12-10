const mysql = require('mysql');
// require('dotenv').config();


// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root123',
  database: 'db_wts',
  insecureAuth: true // Agregar esta línea para usar autenticación insegura
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

module.exports = connection;
