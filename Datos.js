// 1. Ejemplos de inserción para la tabla Cliente
const data = {
  "clientes": [
    {
      "Nombre": "Juan Pérez",
      "Email": "juan.perez@example.com",
      "Direccion": "Av. Siempre Viva 123"
    },
    {
      "Nombre": "María Gómez",
      "Email": "maria.gomez@example.com",
      "Direccion": "Calle Luna 456"
    },
    {
      "Nombre": "Carlos López",
      "Email": "carlos.lopez@example.com",
      "Direccion": "Carrera Sol 789"
    },
    {
      "Nombre": "Laura Martínez",
      "Email": "laura.martinez@example.com",
      "Direccion": "Av. del Sol 101"
    },
    {
      "Nombre": "Andrés Silva",
      "Email": "andres.silva@example.com",
      "Direccion": "Calle de la Paz 202"
    }
  ],
  
  // 2. Ejemplos de inserción para la tabla Tienda
  "tiendas": [
    {
      "Nombre": "GameWorld",
      "Direccion": "Calle Principal 101",
      "Telefono": "555-1234"
    },
    {
      "Nombre": "TechGames",
      "Direccion": "Av. Tecnológica 202",
      "Telefono": "555-5678"
    },
    {
      "Nombre": "PlayCenter",
      "Direccion": "Plaza Comercial 303",
      "Telefono": "555-9101"
    },
    {
      "Nombre": "DigitalGames",
      "Direccion": "Calle Innovación 404",
      "Telefono": "555-3344"
    },
    {
      "Nombre": "GamerZone",
      "Direccion": "Calle del Gamer 505",
      "Telefono": "555-5566"
    }
  ],

  // 3. Ejemplos de inserción para la tabla Biblioteca
  "biblioteca": [
    {
      "ClienteId": 1,
      "JuegoId": 1
    },
    {
      "ClienteId": 2,
      "JuegoId": 2
    },
    {
      "ClienteId": 3,
      "JuegoId": 3
    },
    {
      "ClienteId": 4,
      "JuegoId": 1
    },
    {
      "ClienteId": 5,
      "JuegoId": 2
    }
  ],

  // 4. Ejemplos de inserción para la tabla Juego
  "juegos": [
    {
      "Titulo": "The Last of Us Part II",
      "Precio": 59.99,
      "Genero": "Acción/Aventura",
      "Fecha_Lanzamiento": "2020-06-19"
    },
    {
      "Titulo": "Halo Infinite",
      "Precio": 69.99,
      "Genero": "Disparos",
      "Fecha_Lanzamiento": "2021-12-08"
    },
    {
      "Titulo": "The Legend of Zelda: Breath of the Wild",
      "Precio": 49.99,
      "Genero": "Aventura",
      "Fecha_Lanzamiento": "2017-03-03"
    },
    {
      "Titulo": "Super Mario Odyssey",
      "Precio": 59.99,
      "Genero": "Plataforma",
      "Fecha_Lanzamiento": "2017-10-27"
    },
    {
      "Titulo": "Minecraft",
      "Precio": 29.99,
      "Genero": "Construcción/Supervivencia",
      "Fecha_Lanzamiento": "2011-11-18"
    }
  ],

  // 5. Ejemplos de inserción para la tabla Trabajador
  "trabajadores": [
    {
      "Nombre": "Ana Martínez",
      "Puesto": "Cajera",
      "Salario": 1200.50
    },
    {
      "Nombre": "Pedro Ramírez",
      "Puesto": "Vendedor",
      "Salario": 1500.00
    },
    {
      "Nombre": "Laura Torres",
      "Puesto": "Gerente",
      "Salario": 2500.00
    },
    {
      "Nombre": "Jorge López",
      "Puesto": "Recepcionista",
      "Salario": 1000.00
    },
    {
      "Nombre": "Carlos Díaz",
      "Puesto": "Supervisor",
      "Salario": 2000.00
    }
  ],
// 6. Ejemplos de inserción para la tabla Desarrollador
"desarrolladores": [
  {
    "ID_Desarrollador": 1,
    "Nombre": "Naughty Dog",
    "Pais": "Estados Unidos"
  },
  {
    "ID_Desarrollador": 2,
    "Nombre": "Epic Games",
    "Pais": "Estados Unidos"
  },
  {
    "ID_Desarrollador": 3,
    "Nombre": "CD Projekt Red",
    "Pais": "Polonia"
  }
],

// 7. Ejemplos de inserción para la tabla Publicador
"publicadores": [
  {
    "ID_Publicador": 1,
    "Nombre": "Sony Interactive Entertainment",
    "Pais": "Japón"
  },
  {
    "ID_Publicador": 2,
    "Nombre": "Electronic Arts",
    "Pais": "Estados Unidos"
  },
  {
    "ID_Publicador": 3,
    "Nombre": "Ubisoft",
    "Pais": "Francia"
  }
],

// 8. Ejemplos de inserción para la tabla Inventario
"inventarios": [
  {
    "ID_Inventario": 1,
    "ID_Tienda": 1,
    "ID_Juego": 5,
    "Cantidad": 20
  },
  {
    "ID_Inventario": 2,
    "ID_Tienda": 3,
    "ID_Juego": 3,
    "Cantidad": 15
  },
  {
    "ID_Inventario": 3,
    "ID_Tienda": 2,
    "ID_Juego": 8,
    "Cantidad": 50
  }
],

// 9. Ejemplos de inserción para la tabla Usuario
"usuarios": [
  {
    "ID_Usuario": 1,
    "ID_Cliente": 2,
    "ID_Juego": 5,
    "ID_Tienda": 1
  },
  {
    "ID_Usuario": 2,
    "ID_Cliente": 3,
    "ID_Juego": 8,
    "ID_Tienda": 2
  },
  {
    "ID_Usuario": 3,
    "ID_Cliente": 5,
    "ID_Juego": 12,
    "ID_Tienda": 3
  }
]
};
