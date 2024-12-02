const { Pool } = require('pg');

// Configuración de la conexión a la base de datos
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'tarea',
    password: 'user',
    port: 5432, // Puerto de PostgreSQL (por defecto es 5432)
});

// Funciones para Juegos
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

// Funciones para Plataformas
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

// Clientes
// Obtener todos los clientes
const getClientes = (req, res) => {
    pool.query('SELECT * FROM Cliente ORDER BY ID_Cliente ASC', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

// Obtener un cliente por ID
const getClienteById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM Cliente WHERE ID_Cliente = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows[0]);
    });
};

// Crear un cliente
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

// Actualizar un cliente
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

// Eliminar un cliente
const deleteCliente = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM Cliente WHERE ID_Cliente = $1', [id], (error) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Cliente eliminado con ID: ${id}`);
    });
};

// Tiendas
// Obtener todas las tiendas
const getTiendas = (req, res) => {
    pool.query('SELECT * FROM Tienda ORDER BY ID_Tienda ASC', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

// Obtener una tienda por ID
const getTiendaById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM Tienda WHERE ID_Tienda = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows[0]);
    });
};

// Crear una tienda
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

// Actualizar una tienda
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

// Eliminar una tienda
const deleteTienda = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM Tienda WHERE ID_Tienda = $1', [id], (error) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Tienda eliminada con ID: ${id}`);
    });
};

//Trabajadores
// Obtener todos los trabajadores
const getTrabajadores = (req, res) => {
    pool.query('SELECT * FROM Trabajador ORDER BY ID_Trabajador ASC', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

// Obtener un trabajador por ID
const getTrabajadorById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM Trabajador WHERE ID_Trabajador = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows[0]);
    });
};

// Crear un trabajador
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

// Actualizar un trabajador
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

// Eliminar un trabajador
const deleteTrabajador = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM Trabajador WHERE ID_Trabajador = $1', [id], (error) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Trabajador eliminado con ID: ${id}`);
    });
};
//Disponibilidad
// Obtener todas las disponibilidades
const getDisponibilidad = (req, res) => {
    pool.query('SELECT * FROM Disponibilidad ORDER BY ID_Disponibilidad ASC', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

// Crear una disponibilidad
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

// Eliminar una disponibilidad
const deleteDisponibilidad = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM Disponibilidad WHERE ID_Disponibilidad = $1', [id], (error) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Disponibilidad eliminada con ID: ${id}`);
    });
};

// Exportar todas las funciones
module.exports = {
    //Juegos
    getJuegos,
    getJuegoById,
    createJuego,
    updateJuego,
    deleteJuego,
    //Plataforma
    getPlataformas,
    getPlataformaById,
    createPlataforma,
    updatePlataforma,
    deletePlataforma,
    // Clientes
    getClientes,
    getClienteById,
    createCliente,
    updateCliente,
    deleteCliente,
    // Tiendas
    getTiendas,
    getTiendaById,
    createTienda,
    updateTienda,
    deleteTienda,
    // Trabajadores
    getTrabajadores,
    getTrabajadorById,
    createTrabajador,
    updateTrabajador,
    deleteTrabajador,
    // Disponibilidad
    getDisponibilidad,
    createDisponibilidad,
    deleteDisponibilidad,
};
