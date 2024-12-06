const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/queries');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/pages/bibliotecas', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'bibliotecas.html'));
});

app.get('/pages/clientes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'clientes.html'));
});

app.get('/pages/juegos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'juegos.html'));
});

app.get('/pages/trabajadores', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'trabajadores.html'));
});

app.get('/pages/tiendas', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tiendas.html'));
});

app.get('/pages/usuarios', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'usuarios.html'));
});

app.get('/pages/desarrolladores', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'desarrolladores.html'));
});

app.get('/pages/inventarios', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'inventarios.html'));
});

app.get('/pages/publicadores', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'publicadores.html'));
});

app.get('/juegos', db.getJuegos);
app.get('/juegos/:id', db.getJuegoById);
app.post('/juegos', db.createJuego);
app.put('/juegos/:id', db.updateJuego);
app.delete('/juegos/:id', db.deleteJuego);

app.get('/plataformas', db.getPlataformas);
app.get('/plataformas/:id', db.getPlataformaById);
app.post('/plataformas', db.createPlataforma);
app.put('/plataformas/:id', db.updatePlataforma);
app.delete('/plataformas/:id', db.deletePlataforma);

app.get('/clientes', db.getClientes);
app.get('/clientes/:id', db.getClienteById);
app.post('/clientes', db.createCliente);
app.put('/clientes/:id', db.updateCliente);
app.delete('/clientes/:id', db.deleteCliente);

app.get('/trabajadores', db.getTrabajadores);
app.get('/trabajadores/:id', db.getTrabajadorById);
app.post('/trabajadores', db.createTrabajador);
app.put('/trabajadores/:id', db.updateTrabajador);
app.delete('/trabajadores/:id', db.deleteTrabajador);

app.get('/tiendas', db.getTiendas);
app.get('/tiendas/:id', db.getTiendaById);
app.post('/tiendas', db.createTienda);
app.put('/tiendas/:id', db.updateTienda);
app.delete('/tiendas/:id', db.deleteTienda);

app.get('/disponibilidad', db.getDisponibilidad);
app.post('/disponibilidad', db.createDisponibilidad);
app.delete('/disponibilidad/:id', db.deleteDisponibilidad);

app.get('/biblioteca', db.getBiblioteca);
app.post('/biblioteca', db.addJuegoToBiblioteca);
app.delete('/biblioteca/:id', db.deleteBiblioteca);

app.post('/desarrolladores', db.createDesarrollador);
app.get('/desarrolladores', db.getDesarrolladores);
app.get('/desarrolladores/:id', db.getDesarrolladorById);
app.put('/desarrolladores/:id', db.updateDesarrollador);
app.delete('/desarrolladores/:id', db.deleteDesarrollador);

app.post('/publicadores', db.createPublicador);
app.get('/publicadores', db.getPublicadores);
app.get('/publicadores/:id', db.getPublicadorById);
app.put('/publicadores/:id', db.updatePublicador);
app.delete('/publicadores/:id', db.deletePublicador);

app.post('/inventarios', db.createInventario);
app.get('/inventarios', db.getInventarios);
app.get('/inventarios/:id', db.getInventarioById);
app.put('/inventarios/:id', db.updateInventario);
app.delete('/inventarios/:id', db.deleteInventario);

app.post('/usuarios', db.createUsuario);
app.get('/usuarios', db.getUsuarios);
app.get('/usuarios/:id', db.getUsuarioById);
app.put('/usuarios/:id', db.updateUsuario);
app.delete('/usuarios/:id', db.deleteUsuario);

app.listen(3000, '0.0.0.0', () => {
    console.log('API is running on http://0.0.0.0:3000');
  });
  
