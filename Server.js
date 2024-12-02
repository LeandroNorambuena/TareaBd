const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/queries');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas principales
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenido a la API de videojuegos' });
});

// Rutas para Juegos
app.get('/juegos', db.getJuegos);
app.get('/juegos/:id', db.getJuegoById);
app.post('/juegos', db.createJuego);
app.put('/juegos/:id', db.updateJuego);
app.delete('/juegos/:id', db.deleteJuego);

// Rutas para Plataformas
app.get('/plataformas', db.getPlataformas);
app.get('/plataformas/:id', db.getPlataformaById);
app.post('/plataformas', db.createPlataforma);
app.put('/plataformas/:id', db.updatePlataforma);
app.delete('/plataformas/:id', db.deletePlataforma);

// Rutas para Clientes
app.get('/clientes', db.getClientes);
app.get('/clientes/:id', db.getClienteById);
app.post('/clientes', db.createCliente);
app.put('/clientes/:id', db.updateCliente);
app.delete('/clientes/:id', db.deleteCliente);

// Rutas para Trabajadores
app.get('/trabajadores', db.getTrabajadores);
app.get('/trabajadores/:id', db.getTrabajadorById);
app.post('/trabajadores', db.createTrabajador);
app.put('/trabajadores/:id', db.updateTrabajador);
app.delete('/trabajadores/:id', db.deleteTrabajador);

// Rutas para Tiendas
app.get('/tiendas', db.getTiendas);
app.get('/tiendas/:id', db.getTiendaById);
app.post('/tiendas', db.createTienda);
app.put('/tiendas/:id', db.updateTienda);
app.delete('/tiendas/:id', db.deleteTienda);

// Rutas para relaciones (Disponibilidad)
app.get('/disponibilidad', db.getDisponibilidad);
app.post('/disponibilidad', db.createDisponibilidad);
app.delete('/disponibilidad/:id', db.deleteDisponibilidad);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
