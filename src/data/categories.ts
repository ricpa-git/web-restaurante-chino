import type { Category } from '../types';

export const categories: Category[] = [
  { id: 'entrantes',       nombre: 'Entrantes',          orden: 1,  activo: true },
  { id: 'sopas',           nombre: 'Sopas',               orden: 2,  activo: true },
  { id: 'arroz-tallarines',nombre: 'Arroz y Tallarines',  orden: 3,  activo: true },
  { id: 'verduras',        nombre: 'Verduras',             orden: 4,  activo: true },
  { id: 'gambas',          nombre: 'Gambas',               orden: 5,  activo: true },
  { id: 'ternera',         nombre: 'Ternera',              orden: 6,  activo: true },
  { id: 'cerdo',           nombre: 'Cerdo',                orden: 7,  activo: true },
  { id: 'pollo',           nombre: 'Pollo',                orden: 8,  activo: true },
  { id: 'patos',           nombre: 'Patos',                orden: 9,  activo: true },
  { id: 'especiales',      nombre: 'Platos Especiales',    orden: 10, activo: true },
  { id: 'postres',         nombre: 'Postres',              orden: 11, activo: true },
];
