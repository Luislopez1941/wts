const controller = {};
const express = require('express');
const router = express.Router();
const connection = require('../models/config/db');

// Endpoint para obtener datos@

router.get('/data', (req, res) => {
    const data = { message: 'Hola desde la API' };
    res.json(data);
});


// Tipos de servicos
router.get('/type_of_services', (req, res) => {
    const query = 'SELECT * FROM type_of_service';
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
            return;
        }
        res.json(results);
    });
});

// Puntos de encuentro
router.get('/meeting_points', (req, res) => {
    const query = 'SELECT * FROM meeting_points';
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error al obtener los puntos de encuentro:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
            return;
        }
        res.json(results);
    });
});



router.get('/meeting_points', (req, res) => {
    const query = 'SELECT * FROM meeting_points';
    connection.query(query, (error,  reuslt) => {
        try {
            res.json(reuslt)
        } catch (error) {
            console.log('Hubo un error', error)
        }
    })
});

controller.list = (req, res) => {
    connect.query('SELECT * FROM usuarios', (err, customers) => {
        if (erro) {
            res.json(err);
        }
        res.render('usuarios', {
            
        })
    })
}

module.exports = router;