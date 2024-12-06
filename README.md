# TareaBd
# Gestión de Juegos - API

Este proyecto es una API para gestionar bibliotecas de juegos, clientes, tiendas y más. Fue desarrollada usando **Node.js**, **Express** y se conecta a una base de datos para realizar operaciones CRUD en diversas entidades.

## Contenido del Proyecto

### Archivos principales:
- **`server.js`**: Configuración principal del servidor y definición de rutas.
- **`db/queries.js`**: Contiene las funciones de consulta para interactuar con la base de datos.

---

## Funcionalidades

### Rutas en `server.js`

#### **Rutas para servir páginas**
Estas rutas cargan archivos HTML desde la carpeta `public`:
- `/` → Página principal (`index.html`).
- `/pages/bibliotecas` → Página de bibliotecas (`bibliotecas.html`).
- `/pages/clientes` → Página de clientes (`clientes.html`).
- `/pages/juegos` → Página de juegos (`juegos.html`).
- `/pages/trabajadores` → Página de trabajadores (`trabajadores.html`).
- `/pages/tiendas` → Página de tiendas (`tiendas.html`).
- `/pages/usuarios` → Página de usuarios (`usuarios.html`).
- `/pages/desarrolladores` → Página de desarrolladores (`desarrolladores.html`).
- `/pages/inventarios` → Página de inventarios (`inventarios.html`).
- `/pages/publicadores` → Página de publicadores (`publicadores.html`).

#### **Rutas para la API**
Operaciones CRUD para diferentes entidades:

- **Juegos**:
  - `GET /juegos`: Listar juegos.
  - `GET /juegos/:id`: Obtener un juego por ID.
  - `POST /juegos`: Crear un nuevo juego.
  - `PUT /juegos/:id`: Actualizar un juego.
  - `DELETE /juegos/:id`: Eliminar un juego.

- **Plataformas**:
  - Rutas similares a las de "Juegos".

- **Clientes**:
  - `GET /clientes`: Listar clientes.
  - `GET /clientes/:id`: Obtener un cliente por ID.
  - `POST /clientes`: Crear un nuevo cliente.
  - `PUT /clientes/:id`: Actualizar un cliente.
  - `DELETE /clientes/:id`: Eliminar un cliente.

- **Trabajadores**, **Tiendas**, **Disponibilidad**, **Biblioteca**, **Desarrolladores**, **Publicadores**, **Inventarios**, **Usuarios**:
  - Todas estas entidades cuentan con rutas similares para gestionar los datos.

#### Configuración
- **CORS** habilitado para permitir solicitudes desde diferentes orígenes.
- Usa **Body Parser** para manejar datos en formato JSON y URL-encoded.

---

### Funciones en `queries.js`
El archivo `queries.js` contiene las funciones para interactuar con la base de datos. Ejemplo de datos insertados:

1. **Clientes**:
   ```json
   [
     {"Nombre": "Juan Pérez", "Email": "juan.perez@example.com", "Direccion": "Av. Siempre Viva 123"},
     {"Nombre": "María Gómez", "Email": "maria.gomez@example.com", "Direccion": "Calle Luna 456"}
   ]
2. **Tiendas**:
```json
   [
     {"Nombre": "Juan Pérez", "Email": "juan.perez@example.com", "Direccion": "Av. Siempre Viva 123"},
     {"Nombre": "María Gómez", "Email": "maria.gomez@example.com", "Direccion": "Calle Luna 456"}
   ]
3. **Tiendas**:
```json
   [
  {"Titulo": "The Last of Us Part II", "Precio": 59.99, "Genero": "Acción/Aventura", "Fecha_Lanzamiento": "2020-06-19"}
  ]
## Configuración

### Instalar dependencias:
```bash
npm install
### Ejecutar la Api
```bash
node server.js
### Base De Datos:
```javascript
   const pool = new Pool({
    user: 'Usuario_db',
    host: 'Host_db',
    database: 'Nombre_db',
    password: 'Contraseña_db',
    port: 5432,
});
