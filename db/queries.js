const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'tarea',
    password: 'user',
    port: 5432,
});

const getJuegos = (req, res) => {
    pool.query('SELECT * FROM Juego ORDER BY ID_Juego ASC', (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getJuegoById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM Juego WHERE ID_Juego = $1', [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows[0]);
    });
};

const createJuego = (req, res) => {
    const { Titulo, Precio, Genero, Fecha_Lanzamiento } = req.body;
    pool.query(
        'INSERT INTO Juego (Titulo, Precio, Genero, Fecha_Lanzamiento) VALUES ($1, $2, $3, $4) RETURNING *',
        [Titulo, Precio, Genero, Fecha_Lanzamiento],
        (error, results) => {
            if (error) throw error;
            res.status(201).json(results.rows[0]);
        }
    );
};

const updateJuego = (req, res) => {
    const id = parseInt(req.params.id);
    const { Titulo, Precio, Genero, Fecha_Lanzamiento } = req.body;
    pool.query(
        'UPDATE Juego SET Titulo = $1, Precio = $2, Genero = $3, Fecha_Lanzamiento = $4 WHERE ID_Juego = $5 RETURNING *',
        [Titulo, Precio, Genero, Fecha_Lanzamiento, id],
        (error, results) => {
            if (error) throw error;
            res.status(200).json(results.rows[0]);
        }
    );
};

const deleteJuego = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('DELETE FROM Juego WHERE ID_Juego = $1', [id], (error) => {
        if (error) throw error;
        res.status(200).send(`Juego eliminado con ID: ${id}`);
    });
};

const getPlataformas = (req, res) => {
    pool.query('SELECT * FROM Plataforma ORDER BY ID_Plataforma ASC', (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getPlataformaById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM Plataforma WHERE ID_Plataforma = $1', [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows[0]);
    });
};

const createPlataforma = (req, res) => {
    const { Nombre, Tipo_Plataforma, Fabricante, Region_Disponible } = req.body;
    pool.query(
        'INSERT INTO Plataforma (Nombre, Tipo_Plataforma, Fabricante, Region_Disponible) VALUES ($1, $2, $3, $4) RETURNING *',
        [Nombre, Tipo_Plataforma, Fabricante, Region_Disponible],
        (error, results) => {
            if (error) throw error;
            res.status(201).json(results.rows[0]);
        }
    );
};

const updatePlataforma = (req, res) => {
    const id = parseInt(req.params.id);
    const { Nombre, Tipo_Plataforma, Fabricante, Region_Disponible } = req.body;
    pool.query(
        'UPDATE Plataforma SET Nombre = $1, Tipo_Plataforma = $2, Fabricante = $3, Region_Disponible = $4 WHERE ID_Plataforma = $5 RETURNING *',
        [Nombre, Tipo_Plataforma, Fabricante, Region_Disponible, id],
        (error, results) => {
            if (error) throw error;
            res.status(200).json(results.rows[0]);
        }
    );
};

const deletePlataforma = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('DELETE FROM Plataforma WHERE ID_Plataforma = $1', [id], (error) => {
        if (error) throw error;
        res.status(200).send(`Plataforma eliminada con ID: ${id}`);
    });
};

const getClientes = (req, res) => {
    pool.query('SELECT * FROM Cliente ORDER BY ID_Cliente ASC', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const getClienteById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM Cliente WHERE ID_Cliente = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows[0]);
    });
};

const createCliente = (req, res) => {
    const { Nombre, Email, Direccion } = req.body;

    pool.query(
        'INSERT INTO Cliente (Nombre, Email, Direccion) VALUES ($1, $2, $3) RETURNING *',
        [Nombre, Email, Direccion],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(201).json(results.rows[0]);
        }
    );
};

const updateCliente = (req, res) => {
    const id = parseInt(req.params.id);
    const { Nombre, Email, Direccion } = req.body;

    pool.query(
        'UPDATE Cliente SET Nombre = $1, Email = $2, Direccion = $3 WHERE ID_Cliente = $4 RETURNING *',
        [Nombre, Email, Direccion, id],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows[0]);
        }
    );
};

const deleteCliente = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM Cliente WHERE ID_Cliente = $1', [id], (error) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Cliente eliminado con ID: ${id}`);
    });
};

const getTiendas = (req, res) => {
    pool.query('SELECT * FROM Tienda ORDER BY ID_Tienda ASC', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const getTiendaById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM Tienda WHERE ID_Tienda = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows[0]);
    });
};

const createTienda = (req, res) => {
    const { Nombre, Direccion, Telefono } = req.body;

    pool.query(
        'INSERT INTO Tienda (Nombre, Direccion, Telefono) VALUES ($1, $2, $3) RETURNING *',
        [Nombre, Direccion, Telefono],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(201).json(results.rows[0]);
        }
    );
};

const updateTienda = (req, res) => {
    const id = parseInt(req.params.id);
    const { Nombre, Direccion, Telefono } = req.body;

    pool.query(
        'UPDATE Tienda SET Nombre = $1, Direccion = $2, Telefono = $3 WHERE ID_Tienda = $4 RETURNING *',
        [Nombre, Direccion, Telefono, id],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows[0]);
        }
    );
};

const deleteTienda = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM Tienda WHERE ID_Tienda = $1', [id], (error) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Tienda eliminada con ID: ${id}`);
    });
};

const getTrabajadores = (req, res) => {
    pool.query('SELECT * FROM Trabajador ORDER BY ID_Trabajador ASC', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const getTrabajadorById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM Trabajador WHERE ID_Trabajador = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows[0]);
    });
};

const createTrabajador = (req, res) => {
    const { Nombre, Puesto, Salario } = req.body;

    pool.query(
        'INSERT INTO Trabajador (Nombre, Puesto, Salario) VALUES ($1, $2, $3) RETURNING *',
        [Nombre, Puesto, Salario],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(201).json(results.rows[0]);
        }
    );
};

const updateTrabajador = (req, res) => {
    const id = parseInt(req.params.id);
    const { Nombre, Puesto, Salario } = req.body;

    pool.query(
        'UPDATE Trabajador SET Nombre = $1, Puesto = $2, Salario = $3 WHERE ID_Trabajador = $4 RETURNING *',
        [Nombre, Puesto, Salario, id],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows[0]);
        }
    );
};

const deleteTrabajador = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM Trabajador WHERE ID_Trabajador = $1', [id], (error) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Trabajador eliminado con ID: ${id}`);
    });
};
const getDisponibilidad = (req, res) => {
    pool.query('SELECT * FROM Disponibilidad ORDER BY ID_Disponibilidad ASC', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const createDisponibilidad = (req, res) => {
    const { ID_Juego, ID_Plataforma } = req.body;

    pool.query(
        'INSERT INTO Disponibilidad (ID_Juego, ID_Plataforma) VALUES ($1, $2) RETURNING *',
        [ID_Juego, ID_Plataforma],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(201).json(results.rows[0]);
        }
    );
};

const deleteDisponibilidad = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM Disponibilidad WHERE ID_Disponibilidad = $1', [id], (error) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Disponibilidad eliminada con ID: ${id}`);
    });
};
const getBiblioteca = (req, res) => {
    pool.query('SELECT * FROM Biblioteca ORDER BY ID_Biblioteca ASC', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const addJuegoToBiblioteca = (req, res) => {
    const { ID_Cliente, ID_Juego } = req.body;

    pool.query(
        'INSERT INTO Biblioteca (ID_Cliente, ID_Juego) VALUES ($1, $2) RETURNING *',
        [ID_Cliente, ID_Juego],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(201).json(results.rows[0]);
        }
    );
};

const deleteBiblioteca = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM Biblioteca WHERE ID_Biblioteca = $1', [id], (error) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Relación eliminada con ID: ${id}`);
    });
};
const createDesarrollador = (req, res) => {
    const { Nombre, Pais } = req.body;
    
    pool.query(
        'INSERT INTO Desarrollador (Nombre, Pais) VALUES ($1, $2) RETURNING *',
        [Nombre, Pais],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(201).json(results.rows[0]);
        }
    );
};

const getDesarrolladores = (req, res) => {
    pool.query('SELECT * FROM Desarrollador', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
const getDesarrolladorById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM Desarrollador WHERE ID_Desarrollador = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        if (results.rows.length === 0) {
            return res.status(404).json({ message: "Desarrollador no encontrado" });
        }
        res.status(200).json(results.rows[0]);
    });
};

const updateDesarrollador = (req, res) => {
    const id = parseInt(req.params.id);
    const { Nombre, Pais } = req.body;
    
    pool.query(
        'UPDATE Desarrollador SET Nombre = $1, Pais = $2 WHERE ID_Desarrollador = $3 RETURNING *',
        [Nombre, Pais, id],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows[0]);
        }
    );
};
const deleteDesarrollador = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM Desarrollador WHERE ID_Desarrollador = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(204).send();
    });
};
const createPublicador = (req, res) => {
    const { Nombre, Pais } = req.body;

    pool.query(
        'INSERT INTO Publicador (Nombre, Pais) VALUES ($1, $2) RETURNING *',
        [Nombre, Pais],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(201).json(results.rows[0]);
        }
    );
};
const getPublicadores = (req, res) => {
    pool.query('SELECT * FROM Publicador', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
const getPublicadorById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM Publicador WHERE ID_Publicador = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        if (results.rows.length === 0) {
            return res.status(404).json({ message: "Publicador no encontrado" });
        }
        res.status(200).json(results.rows[0]);
    });
};

const updatePublicador = (req, res) => {
    const id = parseInt(req.params.id);
    const { Nombre, Pais } = req.body;

    pool.query(
        'UPDATE Publicador SET Nombre = $1, Pais = $2 WHERE ID_Publicador = $3 RETURNING *',
        [Nombre, Pais, id],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows[0]);
        }
    );
};
const deletePublicador = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM Publicador WHERE ID_Publicador = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(204).send();
    });
};
const createInventario = (req, res) => {
    const { ID_Tienda, ID_Juego, Cantidad } = req.body;

    pool.query(
        'INSERT INTO Inventario (ID_Tienda, ID_Juego, Cantidad) VALUES ($1, $2, $3) RETURNING *',
        [ID_Tienda, ID_Juego, Cantidad],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(201).json(results.rows[0]);
        }
    );
};
const getInventarios = (req, res) => {
    pool.query('SELECT * FROM Inventario', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
const getInventarioById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM Inventario WHERE ID_Inventario = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        if (results.rows.length === 0) {
            return res.status(404).json({ message: "Inventario no encontrado" });
        }
        res.status(200).json(results.rows[0]);
    });
};

const updateInventario = (req, res) => {
    const id = parseInt(req.params.id);
    const { ID_Tienda, ID_Juego, Cantidad } = req.body;

    pool.query(
        'UPDATE Inventario SET ID_Tienda = $1, ID_Juego = $2, Cantidad = $3 WHERE ID_Inventario = $4 RETURNING *',
        [ID_Tienda, ID_Juego, Cantidad, id],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows[0]);
        }
    );
};
const deleteInventario = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM Inventario WHERE ID_Inventario = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(204).send();
    });
};
const createUsuario = (req, res) => {
    const { ID_Cliente, ID_Juego, ID_Tienda } = req.body;

    pool.query(
        'INSERT INTO Usuario (ID_Cliente, ID_Juego, ID_Tienda) VALUES ($1, $2, $3) RETURNING *',
        [ID_Cliente, ID_Juego, ID_Tienda],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(201).json(results.rows[0]);
        }
    );
};
const getUsuarios = (req, res) => {
    pool.query('SELECT * FROM Usuario', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
const getUsuarioById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM Usuario WHERE ID_Usuario = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        if (results.rows.length === 0) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json(results.rows[0]);
    });
};
const updateUsuario = (req, res) => {
    const id = parseInt(req.params.id);
    const { ID_Cliente, ID_Juego, ID_Tienda } = req.body;

    pool.query(
        'UPDATE Usuario SET ID_Cliente = $1, ID_Juego = $2, ID_Tienda = $3 WHERE ID_Usuario = $4 RETURNING *',
        [ID_Cliente, ID_Juego, ID_Tienda, id],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows[0]);
        }
    );
};
const deleteUsuario = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM Usuario WHERE ID_Usuario = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(204).send();
    });
};
module.exports = {
    getJuegos,
    getJuegoById,
    createJuego,
    updateJuego,
    deleteJuego,
    getPlataformas,
    getPlataformaById,
    createPlataforma,
    updatePlataforma,
    deletePlataforma,
    getClientes,
    getClienteById,
    createCliente,
    updateCliente,
    deleteCliente,
    getTiendas,
    getTiendaById,
    createTienda,
    updateTienda,
    deleteTienda,
    getTrabajadores,
    getTrabajadorById,
    createTrabajador,
    updateTrabajador,
    deleteTrabajador,
    getDisponibilidad,
    createDisponibilidad,
    deleteDisponibilidad,
    getBiblioteca,
    addJuegoToBiblioteca,
    deleteBiblioteca,
    createDesarrollador,
    getDesarrolladores,
    getDesarrolladorById,
    updateDesarrollador,
    deleteDesarrollador,
    createPublicador,
    getPublicadores,
    getPublicadorById,
    updatePublicador,
    deletePublicador,
    createInventario,
    getInventarios,
    getInventarioById,
    updateInventario,
    deleteInventario,
    createUsuario,
    getUsuarios,
    getUsuarioById,
    updateUsuario,
    deleteUsuario
};
