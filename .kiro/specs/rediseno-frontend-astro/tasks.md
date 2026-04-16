# Plan de Implementación: Rediseño Frontend-Only Restaurante Nueva Muralla

## Descripción General

Este plan detalla la migración completa del sitio web del Restaurante Nueva Muralla desde una arquitectura full-stack (Node.js + Express + SQLite) a un sitio web estático frontend-only construido con Astro, Tailwind CSS y React. El nuevo sitio será puramente informativo, mostrando el menú con imágenes, información de contacto y ubicación mediante Google Maps.

## Tareas de Implementación

- [x] 1. Configuración inicial del proyecto Astro
  - Crear nuevo proyecto Astro con TypeScript
  - Instalar y configurar integración de React
  - Instalar y configurar integración de Tailwind CSS
  - Configurar estructura de carpetas (src/pages, src/components, src/layouts, src/data, src/types, src/utils)
  - Configurar tsconfig.json con path aliases (@/, @components/, @data/, @types/, @utils/)
  - Configurar astro.config.mjs con optimización de imágenes y build settings
  - _Requisitos: 1.1, 1.2, 1.3, 1.4, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7_

- [x] 2. Configuración de Tailwind CSS con tema oriental personalizado
  - Configurar tailwind.config.mjs con colores personalizados (primary: #c8102e, accent: #d4af37, dark: #1a1a1a)
  - Definir fuentes personalizadas (Inter para sans, Playfair Display para display)
  - Configurar animaciones personalizadas (fade-in, slide-up)
  - Crear archivo src/styles/global.css con directivas de Tailwind y estilos base
  - Definir componentes CSS reutilizables (.btn-primary, .btn-accent, .product-card, .divider-chinese)
  - Configurar purge de CSS para producción
  - _Requisitos: 1.2, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 13.1, 13.2, 13.3, 13.4, 13.5_

- [ ] 3. Migración de datos de SQLite a archivos TypeScript estáticos
  - [x] 3.1 Crear interfaces TypeScript en src/types/index.ts
    - Definir interface Product (id, nombre, descripcion, precio, categoriaId, imagenUrl, activo)
    - Definir interface Category (id, nombre, orden, activo)
    - Definir interface ContactInfo (telefono, horario, direccion, email)
    - Definir interface MapConfig (embedUrl, placeUrl, lat, lng)
    - _Requisitos: 10.5, 11.5_

  - [x] 3.2 Exportar datos de productos desde SQLite
    - Crear script scripts/migrate-products.js para exportar productos activos de database.db
    - Exportar categorías activas de database.db
    - Generar archivo src/data/products.ts con array de productos tipado
    - Generar archivo src/data/categories.ts con array de categorías tipado
    - _Requisitos: 11.1, 11.2, 11.3, 11.6_

  - [x] 3.3 Crear archivos de datos de contacto y mapa
    - Crear src/data/contact.ts con información de contacto del restaurante
    - Crear src/data/contact.ts con configuración de Google Maps (embedUrl, placeUrl, coordenadas)
    - _Requisitos: 5.1, 5.3, 5.4, 6.1, 6.2_

  - [x] 3.4 Migrar y optimizar imágenes de productos
    - Copiar imágenes de public/images/products/ del proyecto actual
    - Optimizar imágenes (resize a 800x600px, comprimir)
    - Convertir imágenes a formato WebP con fallback JPEG
    - Verificar que todas las imágenes referenciadas en products.ts existen
    - _Requisitos: 3.2, 9.2, 11.4_

- [ ]* 3.5 Crear tests de validación de datos
  - Escribir tests en tests/data-validation.test.ts usando Vitest
  - Test: todos los productos tienen campos requeridos (id, nombre, precio > 0, categoriaId)
  - Test: todas las categorías de productos existen en el array de categorías
  - Test: todas las imágenes referenciadas existen en public/images/products/
  - _Requisitos: 11.4, 11.5_

- [x] 4. Checkpoint - Validar migración de datos
  - Ejecutar tests de validación de datos (npm run test:unit)
  - Verificar que no hay errores de TypeScript
  - Preguntar al usuario si hay dudas sobre los datos migrados

- [ ] 5. Crear layout base y componentes estáticos de estructura
  - [x] 5.1 Crear BaseLayout.astro
    - Estructura HTML base (<html>, <head>, <body>)
    - Props para title y description
    - Meta tags SEO (viewport, charset, description)
    - Meta tags Open Graph (og:title, og:description, og:image)
    - Meta tags Twitter Card
    - Schema.org JSON-LD para Restaurant
    - Importar estilos globales (src/styles/global.css)
    - Preload de fuentes críticas
    - Preconnect a Google Maps
    - _Requisitos: 10.1, 8.6, 8.7_

  - [x] 5.2 Crear Header.astro
    - Logo del restaurante
    - Nombre "Restaurante Nueva Muralla"
    - Navegación simple con enlaces a secciones (#menu, #contacto, #ubicacion)
    - Diseño con colores del tema oriental (rojo/dorado)
    - Responsive con menú hamburguesa en móvil
    - _Requisitos: 7.1, 8.1, 8.2, 8.3_

  - [x] 5.3 Crear Footer.astro
    - Información de copyright
    - Enlaces a redes sociales (si aplica)
    - Diseño minimalista con tema oriental
    - _Requisitos: 7.2, 7.7_

- [x] 6. Crear componente Hero Section
  - Crear src/components/astro/Hero.astro
  - Sección hero con gradiente de fondo (rojo a negro)
  - Título principal "Restaurante Nueva Muralla"
  - Subtítulo descriptivo
  - Call-to-action para ver el menú (scroll a #menu)
  - Call-to-action para llamar (enlace tel:)
  - Elementos decorativos orientales sutiles
  - Animación de entrada (fade-in, slide-up)
  - _Requisitos: 7.1, 7.2, 7.3, 7.5, 7.7_

- [ ] 7. Crear componentes del menú de productos
  - [x] 7.1 Crear ProductCard.astro
    - Props: product (tipo Product)
    - Imagen del producto con Astro Image (optimización automática, lazy loading, formato WebP)
    - Nombre del producto (tipografía display)
    - Descripción del producto
    - Precio en euros con formato (ej: "4,50 €")
    - Atributo data-category para filtrado CSS
    - Diseño de tarjeta con sombra y hover effect
    - Dimensiones explícitas para evitar CLS
    - _Requisitos: 3.1, 3.2, 3.3, 3.4, 3.5, 3.8, 9.2, 9.3_

  - [x] 7.2 Crear MenuGrid.astro
    - Props: products (array de Product)
    - Grid responsive (1 columna móvil, 2 tablet, 3-4 desktop)
    - Renderizar ProductCard para cada producto
    - Lazy loading de imágenes (excepto primeras 3-4)
    - Animaciones de entrada escalonadas
    - Atributo id="menu" para navegación
    - _Requisitos: 3.1, 3.7, 8.1, 8.2, 8.3, 9.3_

- [x] 8. Crear componente interactivo de filtrado de categorías (React)
  - Crear src/components/react/MenuFilter.tsx
  - Props: categories (array de Category), initialCategory (opcional)
  - Estado interno: activeCategory (string | null)
  - Renderizar botones para cada categoría + botón "Todas"
  - Manejar clic en categoría: actualizar URL hash (#categoria-{id})
  - Indicar visualmente la categoría activa (estilo diferente)
  - Accesibilidad: aria-pressed, aria-label, navegación por teclado (Enter, Space)
  - Animaciones de transición suaves
  - Responsive: scroll horizontal en móvil, grid en desktop
  - _Requisitos: 4.1, 4.2, 4.3, 4.4, 4.5, 8.5, 8.8, 12.1, 12.2, 12.3, 12.4, 12.5_

- [x] 9. Implementar filtrado de productos por categoría con CSS
  - Agregar estilos CSS en global.css para filtrado basado en URL hash
  - Mostrar todos los productos por defecto
  - Cuando hay hash activo (#categoria-{id}), ocultar productos que no coincidan
  - Usar selector :target y :has() para filtrado sin JavaScript adicional
  - Animaciones de transición (fade in/out)
  - _Requisitos: 4.2, 4.3_

- [x] 10. Crear sección de información de contacto
  - Crear src/components/astro/ContactSection.astro
  - Importar contactInfo desde src/data/contact.ts
  - Mostrar número de teléfono con enlace tel: (clickeable en móvil)
  - Mostrar horario de atención
  - Mostrar dirección física
  - Call-to-action prominente "Llámanos para hacer tu pedido"
  - Iconos decorativos (teléfono, reloj, ubicación)
  - Diseño con tema oriental (fondo rojo/dorado)
  - Atributo id="contacto" para navegación
  - _Requisitos: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_

- [x] 11. Crear sección de Google Maps
  - Crear src/components/astro/MapSection.astro
  - Importar mapConfig desde src/data/contact.ts
  - Iframe de Google Maps embebido con embedUrl
  - Lazy loading del iframe (loading="lazy")
  - Aspect ratio responsive (16:9 o 4:3)
  - Enlace para abrir en Google Maps app (placeUrl)
  - Fallback con <noscript> si iframe no carga
  - Atributo id="ubicacion" para navegación
  - _Requisitos: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6_

- [x] 12. Integrar todos los componentes en la página principal
  - Editar src/pages/index.astro
  - Usar BaseLayout con title y description apropiados
  - Importar y renderizar Header
  - Importar y renderizar Hero
  - Importar categories y products desde src/data/
  - Renderizar MenuFilter con client:load (hidratación inmediata)
  - Renderizar MenuGrid con todos los productos
  - Renderizar ContactSection
  - Renderizar MapSection
  - Renderizar Footer
  - Agregar skip link para accesibilidad
  - _Requisitos: 1.1, 3.1, 4.1, 5.1, 6.1, 8.7, 9.7_

- [x] 13. Checkpoint - Verificar funcionalidad básica
  - Ejecutar servidor de desarrollo (npm run dev)
  - Verificar que la página carga correctamente
  - Probar filtrado de categorías (clic en botones)
  - Verificar que las imágenes cargan con lazy loading
  - Verificar enlaces de contacto (tel:, Google Maps)
  - Preguntar al usuario si hay problemas visuales o funcionales

- [ ] 14. Implementar optimizaciones de performance
  - [x] 14.1 Optimizar carga de imágenes
    - Configurar Astro Image service (Sharp)
    - Usar componente Image de Astro en ProductCard
    - Generar múltiples tamaños responsive (srcset)
    - Formato WebP con fallback
    - Quality 80 para balance tamaño/calidad
    - _Requisitos: 9.2, 9.3_

  - [x] 14.2 Minimizar JavaScript y CSS
    - Configurar minificación en astro.config.mjs (minify: 'terser')
    - Verificar que Tailwind purge está activo en producción
    - Inline de CSS crítico (inlineStylesheets: 'auto')
    - _Requisitos: 9.4, 9.5_

  - [x] 14.3 Optimizar bundle de React
    - Verificar que solo MenuFilter usa React
    - Usar client:load solo para MenuFilter (único componente interactivo)
    - Verificar tamaño del bundle JS (objetivo: < 15KB gzipped)
    - _Requisitos: 9.5, 9.7_

- [ ]* 14.4 Ejecutar Lighthouse audit
  - Hacer build de producción (npm run build)
  - Ejecutar Lighthouse en dist/
  - Verificar Performance score > 90
  - Verificar Accessibility score > 90
  - Verificar Best Practices score > 90
  - Verificar SEO score > 90
  - _Requisitos: 9.6_

- [x] 15. Implementar mejoras de accesibilidad
  - Verificar contraste de colores (WCAG AA): rojo sobre blanco, dorado sobre negro, negro sobre blanco
  - Agregar aria-label a navegación, secciones principales
  - Verificar que todos los botones tienen tamaños táctiles mínimos (44x44px)
  - Implementar skip link funcional
  - Verificar navegación por teclado en MenuFilter
  - Agregar atributos alt descriptivos a todas las imágenes
  - _Requisitos: 8.5, 8.6, 8.7, 8.8_

- [ ]* 15.1 Ejecutar tests de accesibilidad
  - Configurar Playwright y @axe-core/playwright
  - Escribir test en tests/a11y/accessibility.spec.ts
  - Ejecutar axe-core con tags wcag2a y wcag2aa
  - Verificar que no hay violaciones de accesibilidad
  - _Requisitos: 8.6_

- [ ] 16. Configurar deployment
  - [x] 16.1 Crear configuración de Netlify
    - Crear netlify.toml con comando de build y carpeta publish
    - Configurar redirects para SPA (/* -> /index.html)
    - Configurar variable de entorno NODE_VERSION=20
    - _Requisitos: 14.1, 14.2, 14.3, 14.4, 14.5_

  - [x] 16.2 Crear archivos SEO
    - Crear public/sitemap.xml con URL del sitio
    - Crear public/robots.txt con Allow: / y referencia a sitemap
    - Agregar favicon.svg a public/
    - _Requisitos: 14.1_

  - [x] 16.3 Configurar variables de entorno
    - Crear .env.example con PUBLIC_SITE_URL y PUBLIC_GOOGLE_MAPS_API_KEY
    - Documentar variables en README
    - _Requisitos: 14.1_

- [x] 17. Crear documentación del proyecto
  - Actualizar README.md con nueva arquitectura Astro
  - Documentar comandos de desarrollo (npm run dev, npm run build, npm run preview)
  - Documentar estructura de carpetas
  - Documentar cómo agregar/editar productos en src/data/products.ts
  - Documentar cómo modificar información de contacto en src/data/contact.ts
  - Documentar proceso de deployment (Netlify/Vercel)
  - Incluir guía de optimización de imágenes
  - _Requisitos: 15.1, 15.2, 15.3, 15.4, 15.5_

- [ ] 18. Testing final y validación
  - [x] 18.1 Testing cross-browser
    - Probar en Chrome (desktop y móvil)
    - Probar en Firefox
    - Probar en Safari (desktop y iOS)
    - Probar en Android Chrome
    - _Requisitos: 8.1, 8.2, 8.3_

  - [x] 18.2 Testing responsive
    - Probar en móvil (< 768px)
    - Probar en tablet (768px - 1024px)
    - Probar en desktop (> 1024px)
    - Verificar que todos los elementos son táctiles (44x44px mínimo)
    - _Requisitos: 8.1, 8.2, 8.3, 8.4, 8.5_

  - [x] 18.3 Validación de funcionalidades
    - Verificar filtrado de categorías funciona correctamente
    - Verificar que todas las imágenes cargan
    - Verificar enlaces de contacto (tel:, mailto:)
    - Verificar Google Maps carga y es interactivo
    - Verificar navegación por teclado
    - Probar con JavaScript deshabilitado (contenido visible)
    - _Requisitos: 4.1, 4.2, 4.3, 5.2, 6.2, 6.3, 8.8_

- [ ] 19. Checkpoint final - Revisión completa
  - Ejecutar build de producción sin errores
  - Verificar Lighthouse scores (Performance, Accessibility, Best Practices, SEO > 90)
  - Revisar documentación completa
  - Preguntar al usuario si está listo para deployment a producción

- [ ] 20. Deployment a producción
  - Conectar repositorio Git a Netlify/Vercel
  - Configurar variables de entorno en plataforma de hosting
  - Ejecutar primer deploy
  - Verificar que el sitio funciona correctamente en producción
  - Configurar dominio personalizado (si aplica)
  - Verificar HTTPS activo
  - _Requisitos: 14.1, 14.2, 14.5_

## Notas Importantes

- **Sin property-based tests**: Este proyecto es un sitio estático informativo sin lógica de negocio compleja, por lo que no se implementarán property-based tests. Los tests de validación de datos y accesibilidad son suficientes.

- **Tareas opcionales marcadas con `*`**: Las sub-tareas marcadas con `*` son opcionales y pueden omitirse para un MVP más rápido. Incluyen tests automatizados de validación, accesibilidad y performance.

- **Checkpoints**: Los checkpoints permiten validar el progreso incremental y resolver dudas con el usuario antes de continuar.

- **Referencias a requisitos**: Cada tarea referencia los requisitos específicos que implementa para trazabilidad completa.

- **Enfoque incremental**: Las tareas están diseñadas para construir el sitio de forma incremental, validando funcionalidad en cada paso.

## Stack Tecnológico

- **Framework**: Astro 5.x
- **Estilos**: Tailwind CSS 3.4+
- **Interactividad**: React 18+ (solo MenuFilter)
- **Lenguaje**: TypeScript
- **Optimización**: Astro Image (Sharp)
- **Testing**: Vitest, Playwright, axe-core, Lighthouse CI
- **Deployment**: Netlify / Vercel / GitHub Pages
