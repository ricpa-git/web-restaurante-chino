export interface Category {
  id: string;
  nombre: string;
  orden: number;
  activo: boolean;
}

export interface Product {
  id: string;
  nombre: string;
  descripcion?: string;
  categoriaId: string;
  activo: boolean;
}

export interface ContactInfo {
  telefono: string;
  horario: string;
  direccion: string;
  email: string;
}

export interface MapConfig {
  embedUrl: string;
  placeUrl: string;
  lat: number;
  lng: number;
}
