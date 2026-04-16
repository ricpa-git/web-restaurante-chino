# Stack Tecnológico

## Frontend

- **HTML5/CSS3/JavaScript vanilla**: Sin frameworks pesados, código simple y directo
- **CSS moderno**: Flexbox, Grid, variables CSS para temas
- **Responsive design**: Mobile-first approach

## Backend

- **Node.js con Express**: Servidor ligero y eficiente
- **SQLite**: Base de datos embebida, sin configuración compleja
- **API RESTful**: Endpoints claros para frontend-backend communication

## Base de datos

**SQLite** con las siguientes tablas principales:
- `productos`: menú del restaurante (id, nombre, descripción, precio, categoría, imagen)
- `pedidos`: órdenes de clientes (id, fecha, estado, total, datos_cliente)
- `items_pedido`: productos en cada pedido (relación pedidos-productos)
- `categorias`: organización del menú

## Estructura del proyecto

```
/
├── public/              # Frontend estático
│   ├── index.html       # Página principal (menú)
│   ├── admin.html       # Panel administrativo
│   ├── css/
│   ├── js/
│   └── images/
├── server/              # Backend Node.js
│   ├── server.js        # Punto de entrada
│   ├── routes/          # Endpoints API
│   ├── db/              # Configuración SQLite
│   └── middleware/
├── database.db          # Base de datos SQLite
└── package.json
```

## Comandos comunes

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Iniciar servidor de producción
npm start

# Inicializar base de datos
npm run init-db
```

## Dependencias principales

- `express`: Framework web
- `better-sqlite3`: Driver SQLite para Node.js
- `cors`: Manejo de CORS para API
- `dotenv`: Variables de entorno
