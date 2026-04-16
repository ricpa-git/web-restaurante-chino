import type { Product } from '../types';

export const products: Product[] = [

  // ── ENTRANTES ─────────────────────────────────────────────
  { id: 'e-01',  nombre: 'Rollo de Primavera',       categoriaId: 'entrantes', activo: true },
  { id: 'e-02',  nombre: 'Rollitos Asiáticos',        categoriaId: 'entrantes', activo: true },
  { id: 'e-03',  nombre: 'Wan-Tun Frito',             categoriaId: 'entrantes', activo: true },
  { id: 'e-04',  nombre: 'Siau Long Pao',             descripcion: 'Empanadilla china rellena con lomo',                      categoriaId: 'entrantes', activo: true },
  { id: 'e-05',  nombre: 'Sau Mai',                   descripcion: 'Rellenos de lomo y gambas',                               categoriaId: 'entrantes', activo: true },
  { id: 'e-06',  nombre: 'Zil Chil Chaol',            descripcion: 'Empanadilla de cuatro estaciones, rellena de pollo',      categoriaId: 'entrantes', activo: true },
  { id: 'e-07',  nombre: 'Sha Chiao',                 descripcion: 'Empanadilla rellena de gambas al vapor',                  categoriaId: 'entrantes', activo: true },
  { id: 'e-08',  nombre: 'Kuo Tie',                   descripcion: 'Raviolis chinos fritos rellenos de carne y verduras',     categoriaId: 'entrantes', activo: true },
  { id: 'e-09',  nombre: 'Pan Chino',                 categoriaId: 'entrantes', activo: true },
  { id: 'e-10',  nombre: 'Pan de Gambas',             categoriaId: 'entrantes', activo: true },
  { id: 'e-11',  nombre: 'Patatas Fritas',            categoriaId: 'entrantes', activo: true },
  { id: 'e-12',  nombre: 'Gyoza a la Plancha',        categoriaId: 'entrantes', activo: true },
  { id: 'e-13',  nombre: 'Xiao Man Tou',              categoriaId: 'entrantes', activo: true },

  // ── SOPAS ─────────────────────────────────────────────────
  { id: 's-01',  nombre: 'Sopa de Nido de Golondrinas',        categoriaId: 'sopas', activo: true },
  { id: 's-02',  nombre: 'Sopa Agripicante',                   categoriaId: 'sopas', activo: true },
  { id: 's-03',  nombre: 'Sopa de Wan-Tun',                    categoriaId: 'sopas', activo: true },
  { id: 's-04',  nombre: 'Sopa de Huevo con Pollo',            categoriaId: 'sopas', activo: true },
  { id: 's-05',  nombre: 'Sopa de Pollo',                      categoriaId: 'sopas', activo: true },
  { id: 's-06',  nombre: 'Sopa de Aletas de Tiburón',          categoriaId: 'sopas', activo: true },
  { id: 's-07',  nombre: 'Sopa de Maíz con Carne de Cangrejo', categoriaId: 'sopas', activo: true },

  // ── ARROZ Y TALLARINES ────────────────────────────────────
  { id: 'at-01', nombre: 'Arroz Frito con Tres Delicias',             categoriaId: 'arroz-tallarines', activo: true },
  { id: 'at-02', nombre: 'Arroz Frito con Gambas',                    categoriaId: 'arroz-tallarines', activo: true },
  { id: 'at-03', nombre: 'Arroz Frito de la Casa',                    categoriaId: 'arroz-tallarines', activo: true },
  { id: 'at-04', nombre: 'Arroz Blanco',                              categoriaId: 'arroz-tallarines', activo: true },
  { id: 'at-05', nombre: 'Tallarines Chinos en Tie-Ban',              categoriaId: 'arroz-tallarines', activo: true },
  { id: 'at-06', nombre: 'Tallarines Fritos con Tres Delicias',       categoriaId: 'arroz-tallarines', activo: true },
  { id: 'at-07', nombre: 'Tallarines Fritos con Gambas',              categoriaId: 'arroz-tallarines', activo: true },
  { id: 'at-08', nombre: 'Tallarines Fritos con Ternera',             categoriaId: 'arroz-tallarines', activo: true },
  { id: 'at-09', nombre: 'Fideo de Arroz Fritos con Ternera',         categoriaId: 'arroz-tallarines', activo: true },
  { id: 'at-10', nombre: 'Fideo de Arroz Fritos con Tres Delicias',   categoriaId: 'arroz-tallarines', activo: true },
  { id: 'at-11', nombre: 'Fideo de Arroz Fritos con Gambas',          categoriaId: 'arroz-tallarines', activo: true },

  // ── VERDURAS ─────────────────────────────────────────────
  { id: 'v-01',  nombre: 'Verduras Variadas Salteadas',               categoriaId: 'verduras', activo: true },
  { id: 'v-02',  nombre: 'Bolitas de Verduras',                       categoriaId: 'verduras', activo: true },
  { id: 'v-03',  nombre: 'Bambú y Setas Chinas Salteados',            categoriaId: 'verduras', activo: true },
  { id: 'v-04',  nombre: 'Berenjenas Salteadas con Carne Picante',    categoriaId: 'verduras', activo: true },

  // ── GAMBAS ───────────────────────────────────────────────
  { id: 'g-01',  nombre: 'Gambas Fritas',                             categoriaId: 'gambas', activo: true },
  { id: 'g-02',  nombre: 'Gambas con Guindillas',                     categoriaId: 'gambas', activo: true },
  { id: 'g-03',  nombre: 'Gambas Agridulce',                          categoriaId: 'gambas', activo: true },
  { id: 'g-04',  nombre: 'Chop Suey de Gambas',                       categoriaId: 'gambas', activo: true },
  { id: 'g-05',  nombre: 'Gambas Salteadas con Bambú',                categoriaId: 'gambas', activo: true },
  { id: 'g-06',  nombre: 'Gambas con Champiñón',                      categoriaId: 'gambas', activo: true },
  { id: 'g-07',  nombre: 'Gambas Fritas con Sésamo',                  categoriaId: 'gambas', activo: true },
  { id: 'g-08',  nombre: 'Gambas al Curry',                           categoriaId: 'gambas', activo: true },

  // ── TERNERA ──────────────────────────────────────────────
  { id: 't-01',  nombre: 'Ternera con Patatas Fritas',                categoriaId: 'ternera', activo: true },
  { id: 't-02',  nombre: 'Ternera con Zanahoria Picante',             categoriaId: 'ternera', activo: true },
  { id: 't-03',  nombre: 'Ternera Salteada con Champiñón',            categoriaId: 'ternera', activo: true },
  { id: 't-04',  nombre: 'Ternera con Gambas',                        categoriaId: 'ternera', activo: true },
  { id: 't-05',  nombre: 'Ternera al Curry',                          categoriaId: 'ternera', activo: true },
  { id: 't-06',  nombre: 'Chop Suey de Ternera',                      categoriaId: 'ternera', activo: true },
  { id: 't-07',  nombre: 'Ternera con Salsa de Ostras',               categoriaId: 'ternera', activo: true },
  { id: 't-08',  nombre: 'Ternera con Cebolla',                       categoriaId: 'ternera', activo: true },
  { id: 't-09',  nombre: 'Ternera con Pimientos Verdes',              categoriaId: 'ternera', activo: true },
  { id: 't-10',  nombre: 'Ternera Salteada Picante',                  categoriaId: 'ternera', activo: true },
  { id: 't-11',  nombre: 'Ternera con Bambú y Setas Chinas',          categoriaId: 'ternera', activo: true },
  { id: 't-12',  nombre: 'Ternera Crujiente Agripicante',             categoriaId: 'ternera', activo: true },

  // ── CERDO ────────────────────────────────────────────────
  { id: 'c-01',  nombre: 'Cerdo Agridulce',                           categoriaId: 'cerdo', activo: true },
  { id: 'c-02',  nombre: 'Cerdo con Bambú y Setas Chinas',            categoriaId: 'cerdo', activo: true },
  { id: 'c-03',  nombre: 'Chop Suey de Cerdo',                        categoriaId: 'cerdo', activo: true },
  { id: 'c-04',  nombre: 'Cerdo con Guindillas',                      categoriaId: 'cerdo', activo: true },
  { id: 'c-05',  nombre: 'Cerdo con Salsa de Ostras',                 categoriaId: 'cerdo', activo: true },
  { id: 'c-06',  nombre: 'Costilla Asada',                            categoriaId: 'cerdo', activo: true },
  { id: 'c-07',  nombre: 'Cerdo al Curry',                            categoriaId: 'cerdo', activo: true },

  // ── POLLO ────────────────────────────────────────────────
  { id: 'p-01',  nombre: 'Pollo Almendrado',                          categoriaId: 'pollo', activo: true },
  { id: 'p-02',  nombre: 'Pollo con Cacahuetes',                      categoriaId: 'pollo', activo: true },
  { id: 'p-03',  nombre: 'Pollo al Limón',                            categoriaId: 'pollo', activo: true },
  { id: 'p-04',  nombre: 'Pollo Frito al Estilo Chino',               categoriaId: 'pollo', activo: true },
  { id: 'p-05',  nombre: 'Chop Suey de Pollo',                        categoriaId: 'pollo', activo: true },
  { id: 'p-06',  nombre: 'Pollo al Kon-Pao',                          descripcion: 'Picante',    categoriaId: 'pollo', activo: true },
  { id: 'p-07',  nombre: 'Pollo Salteado con Champiñón',              categoriaId: 'pollo', activo: true },
  { id: 'p-08',  nombre: 'Pollo con Guindillas',                      descripcion: 'Picante',    categoriaId: 'pollo', activo: true },
  { id: 'p-09',  nombre: 'Pollo con Almendras',                       categoriaId: 'pollo', activo: true },
  { id: 'p-10',  nombre: 'Pollo con Piña',                            categoriaId: 'pollo', activo: true },
  { id: 'p-11',  nombre: 'Bolitas de Pollo Fritas',                   categoriaId: 'pollo', activo: true },
  { id: 'p-12',  nombre: 'Pollo Frito con Salsa del Ajo',             categoriaId: 'pollo', activo: true },
  { id: 'p-13',  nombre: 'Pollo Agridulce',                           categoriaId: 'pollo', activo: true },
  { id: 'p-14',  nombre: 'Pollo con Pimiento Verde',                  categoriaId: 'pollo', activo: true },
  { id: 'p-15',  nombre: 'Pollo al Curry',                            categoriaId: 'pollo', activo: true },
  { id: 'p-16',  nombre: 'Pollo con Salsa de Ostras',                 categoriaId: 'pollo', activo: true },
  { id: 'p-17',  nombre: 'Pollo con Bambú y Setas Chinas',            categoriaId: 'pollo', activo: true },
  { id: 'p-18',  nombre: 'Pollo Crujiente Agripicante',               categoriaId: 'pollo', activo: true },
  { id: 'p-19',  nombre: 'Pollo Frito con Salsa Barbacoa',            categoriaId: 'pollo', activo: true },

  // ── PATOS ────────────────────────────────────────────────
  { id: 'pa-01', nombre: 'Pato con Bambú y Setas Chinas',             categoriaId: 'patos', activo: true },
  { id: 'pa-02', nombre: 'Pato con Piña Natural',                     categoriaId: 'patos', activo: true },
  { id: 'pa-03', nombre: 'Pato Asado al Estilo Pekinés',              categoriaId: 'patos', activo: true },
  { id: 'pa-04', nombre: 'Pato a la Naranja',                         categoriaId: 'patos', activo: true },
  { id: 'pa-05', nombre: 'Pato con Salsa de Ostras',                  categoriaId: 'patos', activo: true },

  // ── PLATOS ESPECIALES ────────────────────────────────────
  { id: 'pe-01', nombre: 'Familia Feliz',                             categoriaId: 'especiales', activo: true },
  { id: 'pe-02', nombre: 'Hormigas Suben al Árbol',                   categoriaId: 'especiales', activo: true },
  { id: 'pe-03', nombre: 'Ku-Bak con Tres Delicias',                  categoriaId: 'especiales', activo: true },
  { id: 'pe-04', nombre: 'Ku-Bak con Gambas',                         categoriaId: 'especiales', activo: true },
  { id: 'pe-05', nombre: 'Ancas de Rana a la Plancha',                categoriaId: 'especiales', activo: true },
  { id: 'pe-06', nombre: 'Ancas de Rana Fritas',                      categoriaId: 'especiales', activo: true },
  { id: 'pe-07', nombre: 'Mapo Tofu',                                 categoriaId: 'especiales', activo: true },

  // ── POSTRES ──────────────────────────────────────────────
  { id: 'po-01', nombre: 'Helado Frito con Miel',                     categoriaId: 'postres', activo: true },
  { id: 'po-02', nombre: 'Plátano Frito con Miel',                    categoriaId: 'postres', activo: true },
  { id: 'po-03', nombre: 'Mochi de Chocolate',                        categoriaId: 'postres', activo: true },
  { id: 'po-04', nombre: 'Helado de Palito de Arroz con Frijoles Rojos y Dátiles Rojos', categoriaId: 'postres', activo: true },
];
