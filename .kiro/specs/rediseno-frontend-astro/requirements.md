# Requirements Document

## Introduction

Este documento define los requisitos para el rediseño completo del sitio web del Restaurante Nueva Muralla, eliminando toda la infraestructura de backend (Node.js, Express, SQLite) y el sistema de pedidos online, transformándolo en un sitio web estático frontend-only construido con Astro, Tailwind CSS y React. El nuevo sitio será puramente informativo, enfocado en mostrar el menú de productos con imágenes, información de contacto telefónico y ubicación mediante Google Maps integrado, manteniendo una estética oriental profesional, limpia y minimalista.

## Glossary

- **Astro_Framework**: Framework web moderno para construir sitios estáticos rápidos con arquitectura de islas
- **Tailwind_CSS**: Framework CSS utility-first para diseño responsive
- **React_Component**: Componente interactivo de React integrado en Astro
- **Menu_Display**: Sistema de visualización del menú de productos con imágenes
- **Contact_Section**: Sección con información de contacto telefónico
- **Maps_Integration**: Integración de Google Maps para mostrar ubicación del restaurante
- **Static_Site**: Sitio web sin backend ni base de datos, solo archivos HTML/CSS/JS
- **Product_Data**: Datos de productos del menú almacenados en archivos estáticos (JSON o TypeScript)
- **Oriental_Theme**: Tema visual con estética china (rojo, dorado, negro) limpia y profesional
- **Responsive_Design**: Diseño adaptable a móvil, tablet y desktop

## Requirements

### Requirement 1: Migración a Stack Tecnológico Frontend-Only

**User Story:** Como desarrollador, quiero migrar el proyecto de Node.js + Express + SQLite a Astro + Tailwind CSS + React, para que el sitio sea completamente estático sin dependencias de backend.

#### Acceptance Criteria

1. THE Astro_Framework SHALL ser el framework principal del proyecto
2. THE Tailwind_CSS SHALL ser el sistema de estilos del proyecto
3. THE React_Component SHALL estar disponible para componentes interactivos
4. THE Static_Site SHALL generar archivos HTML/CSS/JS estáticos en build
5. THE Product_Data SHALL almacenarse en archivos estáticos (JSON o TypeScript modules)
6. THE Static_Site SHALL NO incluir código de servidor Node.js
7. THE Static_Site SHALL NO incluir base de datos SQLite
8. THE Static_Site SHALL NO incluir sistema de autenticación

### Requirement 2: Eliminación Completa de Funcionalidades de Backend

**User Story:** Como desarrollador, quiero eliminar todas las funcionalidades que requieren backend, para que el sitio sea puramente informativo.

#### Acceptance Criteria

1. THE Static_Site SHALL NOT incluir sistema de pedidos online
2. THE Static_Site SHALL NOT incluir carrito de compra
3. THE Static_Site SHALL NOT incluir proceso de checkout
4. THE Static_Site SHALL NOT incluir integración de pago
5. THE Static_Site SHALL NOT incluir panel administrativo
6. THE Static_Site SHALL NOT incluir API REST endpoints
7. THE Static_Site SHALL NOT incluir sistema de seguimiento de pedidos
8. THE Static_Site SHALL NOT incluir gestión de usuarios o autenticación

### Requirement 3: Visualización del Menú de Productos

**User Story:** Como visitante del sitio, quiero ver el menú completo de productos con imágenes, para que pueda conocer la oferta del restaurante.

#### Acceptance Criteria

1. THE Menu_Display SHALL mostrar todos los productos del menú
2. WHEN un producto tiene imagen, THE Menu_Display SHALL mostrar la imagen del producto
3. THE Menu_Display SHALL mostrar el nombre del producto
4. THE Menu_Display SHALL mostrar la descripción del producto
5. THE Menu_Display SHALL mostrar el precio del producto en euros
6. THE Menu_Display SHALL organizar productos por categorías
7. THE Menu_Display SHALL ser responsive en móvil, tablet y desktop
8. THE Menu_Display SHALL usar lazy loading para imágenes de productos

### Requirement 4: Sistema de Categorías del Menú

**User Story:** Como visitante del sitio, quiero filtrar productos por categoría, para que pueda navegar el menú fácilmente.

#### Acceptance Criteria

1. THE Menu_Display SHALL mostrar las categorías del menú (Entrantes, Arroces, Pescados, Ternera, Cerdo, Aves, Especiales)
2. WHEN un visitante hace clic en una categoría, THE Menu_Display SHALL mostrar solo productos de esa categoría
3. THE Menu_Display SHALL permitir ver todos los productos sin filtro
4. THE Menu_Display SHALL indicar visualmente la categoría activa
5. THE Menu_Display SHALL mantener el orden de categorías definido en Product_Data

### Requirement 5: Sección de Información de Contacto

**User Story:** Como visitante del sitio, quiero ver la información de contacto telefónico del restaurante, para que pueda llamar y hacer pedidos por teléfono.

#### Acceptance Criteria

1. THE Contact_Section SHALL mostrar el número de teléfono del restaurante
2. THE Contact_Section SHALL hacer el número de teléfono clickeable en dispositivos móviles
3. THE Contact_Section SHALL mostrar el horario de atención
4. THE Contact_Section SHALL mostrar la dirección física del restaurante
5. THE Contact_Section SHALL ser prominente y fácilmente visible
6. THE Contact_Section SHALL incluir un call-to-action para llamar

### Requirement 6: Integración de Google Maps

**User Story:** Como visitante del sitio, quiero ver la ubicación del restaurante en un mapa interactivo, para que pueda encontrar fácilmente cómo llegar.

#### Acceptance Criteria

1. THE Maps_Integration SHALL mostrar un mapa de Google Maps embebido
2. THE Maps_Integration SHALL marcar la ubicación exacta del restaurante
3. THE Maps_Integration SHALL permitir interacción (zoom, arrastrar)
4. THE Maps_Integration SHALL ser responsive
5. THE Maps_Integration SHALL cargar de forma eficiente sin bloquear el renderizado
6. THE Maps_Integration SHALL incluir enlace para abrir en Google Maps app

### Requirement 7: Diseño Visual Oriental Profesional

**User Story:** Como visitante del sitio, quiero ver un diseño visual atractivo con estética oriental, para que la experiencia refleje la identidad del restaurante chino.

#### Acceptance Criteria

1. THE Oriental_Theme SHALL usar colores tradicionales chinos (rojo #c8102e, dorado #d4af37, negro #1a1a1a)
2. THE Oriental_Theme SHALL tener un diseño limpio y minimalista
3. THE Oriental_Theme SHALL NO parecer generado por IA (evitar clichés excesivos)
4. THE Oriental_Theme SHALL usar tipografía legible y profesional
5. THE Oriental_Theme SHALL incluir elementos decorativos sutiles orientales
6. THE Oriental_Theme SHALL mantener alto contraste para accesibilidad
7. THE Oriental_Theme SHALL usar espaciado generoso (whitespace)

### Requirement 8: Diseño Responsive y Accesible

**User Story:** Como visitante del sitio, quiero que el sitio funcione perfectamente en cualquier dispositivo, para que pueda acceder desde móvil, tablet o desktop.

#### Acceptance Criteria

1. THE Responsive_Design SHALL funcionar en pantallas móviles (< 768px)
2. THE Responsive_Design SHALL funcionar en tablets (768px - 1024px)
3. THE Responsive_Design SHALL funcionar en desktop (> 1024px)
4. THE Responsive_Design SHALL usar enfoque mobile-first
5. THE Responsive_Design SHALL tener elementos táctiles de mínimo 44x44px
6. THE Responsive_Design SHALL cumplir contraste WCAG AA
7. THE Responsive_Design SHALL incluir atributos ARIA apropiados
8. THE Responsive_Design SHALL ser navegable por teclado

### Requirement 9: Optimización de Performance

**User Story:** Como visitante del sitio, quiero que el sitio cargue rápidamente, para que pueda acceder a la información sin esperas.

#### Acceptance Criteria

1. THE Static_Site SHALL generar HTML estático pre-renderizado
2. THE Static_Site SHALL optimizar imágenes automáticamente
3. THE Static_Site SHALL usar lazy loading para imágenes
4. THE Static_Site SHALL minimizar CSS y JavaScript en producción
5. THE Static_Site SHALL tener un bundle JavaScript mínimo
6. THE Static_Site SHALL lograr un Lighthouse Performance score > 90
7. THE Static_Site SHALL usar componentes React solo donde sea necesaria interactividad

### Requirement 10: Estructura del Proyecto Astro

**User Story:** Como desarrollador, quiero una estructura de proyecto clara y organizada, para que el código sea mantenible.

#### Acceptance Criteria

1. THE Astro_Framework SHALL usar la estructura estándar de Astro (src/pages, src/components, src/layouts)
2. THE Product_Data SHALL almacenarse en src/data/ como archivos TypeScript o JSON
3. THE React_Component SHALL almacenarse en src/components/react/
4. THE Astro_Framework SHALL usar componentes Astro para contenido estático
5. THE Astro_Framework SHALL usar TypeScript para type safety
6. THE Tailwind_CSS SHALL configurarse en tailwind.config.mjs
7. THE Astro_Framework SHALL incluir configuración en astro.config.mjs

### Requirement 11: Migración de Datos de Productos

**User Story:** Como desarrollador, quiero migrar los datos de productos de SQLite a archivos estáticos, para que el contenido esté disponible sin base de datos.

#### Acceptance Criteria

1. THE Product_Data SHALL incluir todos los productos existentes en la base de datos
2. THE Product_Data SHALL incluir todas las categorías existentes
3. THE Product_Data SHALL mantener la estructura de datos (nombre, descripción, precio, categoría, imagen)
4. THE Product_Data SHALL ser fácilmente editable por desarrolladores
5. THE Product_Data SHALL usar TypeScript interfaces para type safety
6. THE Product_Data SHALL exportar datos en formato consumible por componentes Astro/React

### Requirement 12: Componente Interactivo de Filtrado de Categorías

**User Story:** Como visitante del sitio, quiero filtrar productos por categoría de forma interactiva, para que la navegación sea fluida.

#### Acceptance Criteria

1. THE React_Component SHALL manejar el estado del filtro de categoría activa
2. WHEN un visitante selecciona una categoría, THE React_Component SHALL actualizar la vista sin recargar la página
3. THE React_Component SHALL animar la transición entre categorías
4. THE React_Component SHALL mantener el estado del filtro durante la sesión
5. THE React_Component SHALL ser accesible por teclado

### Requirement 13: Configuración de Tailwind con Tema Personalizado

**User Story:** Como desarrollador, quiero configurar Tailwind CSS con el tema oriental personalizado, para que los estilos sean consistentes y reutilizables.

#### Acceptance Criteria

1. THE Tailwind_CSS SHALL definir colores personalizados (primary, accent, dark) en configuración
2. THE Tailwind_CSS SHALL definir fuentes personalizadas si es necesario
3. THE Tailwind_CSS SHALL incluir utilidades personalizadas para elementos decorativos orientales
4. THE Tailwind_CSS SHALL configurar breakpoints responsive
5. THE Tailwind_CSS SHALL purgar CSS no utilizado en producción

### Requirement 14: Deployment y Hosting Estático

**User Story:** Como desarrollador, quiero que el sitio sea fácil de desplegar en plataformas de hosting estático, para que el deployment sea simple y económico.

#### Acceptance Criteria

1. THE Static_Site SHALL generar archivos estáticos en carpeta dist/
2. THE Static_Site SHALL ser deployable en Netlify, Vercel, o GitHub Pages
3. THE Static_Site SHALL incluir script de build en package.json
4. THE Static_Site SHALL incluir script de preview local
5. THE Static_Site SHALL NO requerir servidor Node.js en producción

### Requirement 15: Documentación del Nuevo Proyecto

**User Story:** Como desarrollador, quiero documentación clara del nuevo proyecto, para que sea fácil de mantener y extender.

#### Acceptance Criteria

1. THE Static_Site SHALL incluir README.md actualizado con nueva arquitectura
2. THE Static_Site SHALL documentar cómo agregar/editar productos
3. THE Static_Site SHALL documentar cómo modificar información de contacto
4. THE Static_Site SHALL documentar comandos de desarrollo y build
5. THE Static_Site SHALL documentar estructura de carpetas
6. THE Static_Site SHALL incluir guía de deployment

