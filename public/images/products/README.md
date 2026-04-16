# Imágenes de Productos

Esta carpeta contiene las imágenes de los productos del menú del restaurante.

## Imágenes Actuales

### Estado: Placeholders SVG

Las imágenes actuales son **placeholders temporales** en formato SVG guardados como `.jpg`. Estas deben ser reemplazadas con fotografías reales de los productos del restaurante.

### Lista de Imágenes:

1. **rollitos.jpg** - Rollitos de Primavera
2. **arroz-tres-delicias.jpg** - Arroz Tres Delicias
3. **pollo-almendras.jpg** - Pollo con Almendras

## Cómo Reemplazar con Fotos Reales

### Especificaciones:

- **Dimensiones recomendadas**: 800x600px (ratio 4:3)
- **Formato**: JPEG o PNG
- **Tamaño máximo**: 500KB por imagen
- **Calidad**: Alta resolución (Astro optimizará automáticamente)

### Pasos:

1. Tomar fotografías profesionales de los productos
2. Editar/recortar a ratio 4:3
3. Guardar con el nombre exacto del archivo existente
4. Reemplazar el archivo en esta carpeta
5. Ejecutar `npm run build` para regenerar optimizaciones

### Consejos de Fotografía:

- Usar buena iluminación natural o artificial
- Fondo blanco o neutro
- Ángulo ligeramente superior (45°)
- Incluir elementos decorativos orientales sutiles
- Mantener consistencia en estilo entre todas las fotos

## Verificación

Para verificar que todas las imágenes referenciadas en `products.ts` existen:

```bash
npm run verify-images
```

## Agregar Nuevas Imágenes

Cuando agregues un nuevo producto:

1. Agregar la imagen aquí con nombre descriptivo: `nombre-producto.jpg`
2. Referenciar en `src/data/products.ts`:
   ```typescript
   imagenUrl: '/images/products/nombre-producto.jpg'
   ```
3. Ejecutar `npm run verify-images` para confirmar

## Optimización Automática

Astro optimiza automáticamente las imágenes:
- Conversión a WebP con fallback
- Múltiples tamaños responsive
- Lazy loading
- Compresión inteligente

No es necesario optimizar manualmente las imágenes antes de subirlas.
