// src/data/contact.ts

import type { ContactInfo, MapConfig } from '../types';

export const contactInfo: ContactInfo = {
  telefono: '918 14 05 49',
  horario: 'Lun, Mié–Dom: 11:30–16:30 y 19:30–23:30 · Martes: Cerrado',
  direccion: 'C. de la Iglesia, 10, 28971 Griñón, Madrid',
  email: 'info@nuevamuralla.es'
};

export const mapConfig: MapConfig = {
  embedUrl: 'https://www.google.com/maps?q=Restaurante+Nueva+Muralla,+C.+de+la+Iglesia,+10,+28971+Grinon,+Madrid&output=embed',
  placeUrl: 'https://www.google.com/maps/dir//Restaurante+Nueva+Muralla,+C.+de+la+Iglesia,+10,+28971+Gri%C3%B1%C3%B3n,+Madrid/@40.2557173,-3.833856,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd41f30e117cc65f:0x86b760a53aafff08!2m2!1d-3.8507546!2d40.2135644?entry=ttu&g_ep=EgoyMDI2MDQxMy4wIKXMDSoASAFQAw%3D%3D',
  lat: 40.2135644,
  lng: -3.8507546
};
