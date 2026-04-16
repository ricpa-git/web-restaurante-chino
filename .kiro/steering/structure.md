# Estructura del Proyecto

## Organización de carpetas

```
/
├── public/                    # Archivos estáticos del frontend
│   ├── index.html            # Página principal - menú y pedidos
│   ├── admin.html            # Panel administrativo
│   ├── css/
│   │   ├── main.css          # Estilos globales y variables
│   │   ├── menu.css          # Estilos del menú
│   │   ├── admin.css         # Estilos del panel admin
│   │   └── theme.css         # Tema visual chino
│   ├── js/
│   │   ├── menu.js           # Lógica del menú y carrito
│   │   ├── checkout.js       # Proceso de pago
│   │   ├── orders.js         # Seguimiento de pedidos
│   │   ├── admin.js          # Gestión administrativa
│   │   └── api.js            # Cliente API REST
│   └── images/
│       ├── products/         # Fotos de productos del menú
│       └── assets/           # Iconos, logos, decoración
│
├── server/                    # Backend Node.js
│   ├── server.js             # Punto de entrada del servidor
│   ├── routes/
│   │   ├── products.js       # CRUD productos
│   │   ├── orders.js         # Gestión de pedidos
│   │   ├── categories.js     # Gestión de categorías
│   │   └── payment.js        # Integración de pago
│   ├── db/
│   │   ├── init.js           # Inicialización de tablas
│   │   └── queries.js        # Consultas SQL reutilizables
│   └── middleware/
│       ├── auth.js           # Autenticación admin
│       └── validation.js     # Validación de datos
│
├── database.db               # Base de datos SQLite
├── .env                      # Variables de entorno
├── package.json
└── README.md
```

## Convenciones de código

### Nombres de archivos
- Minúsculas con guiones: `menu-items.js`, `order-status.css`
- Archivos HTML descriptivos: `index.html`, `admin.html`

### Nombres de variables y funciones
- camelCase para JavaScript: `getProducts()`, `orderTotal`
- snake_case para SQL: `items_pedido`, `datos_cliente`
- Nombres descriptivos en español

### Estructura de componentes HTML
- Usar clases semánticas: `.menu-item`, `.order-card`, `.admin-panel`
- IDs solo cuando sea necesario para JavaScript
- Atributos data-* para almacenar información: `data-product-id`, `data-category`

### Organización CSS
- Variables CSS para colores del tema chino:
  - `--color-primary`: rojo tradicional
  - `--color-accent`: dorado
  - `--color-dark`: negro/gris oscuro
- Mobile-first: estilos base para móvil, media queries para desktop
- BEM para nomenclatura de clases complejas

### API REST
- Endpoints en plural: `/api/products`, `/api/orders`
- Métodos HTTP estándar: GET, POST, PUT, DELETE
- Respuestas JSON consistentes con estructura: `{ success, data, error }`

## Flujo de datos

1. **Cliente** → Petición HTTP → **Express Server**
2. **Express** → Consulta SQL → **SQLite**
3. **SQLite** → Datos → **Express**
4. **Express** → JSON Response → **Cliente**
