// src/types/tarot.ts

export interface Posicion {
  numero: number;
  nombre: string;
  descripcion: string;
  x?: number;
  y?: number;
}

export interface Tirada {
  id: string;
  nombre: string;
  descripcion: string;
  numeroCartas: number;
  posiciones: Posicion[];
}

export interface CartaSeleccionada {
  posicion: number;
  carta: string;
  invertida: boolean;
  baraja: 'tradicional' | 'osho';
}

export const tiradaLibreBase: Tirada = {
  id: 'libre',
  nombre: 'Selección Libre',
  descripcion: 'Selecciona las cartas que desees sin un patrón específico',
  numeroCartas: 1,
  posiciones: [
    {
      numero: 1,
      nombre: 'Carta 1',
      descripcion: 'Selecciona la primera carta libre',
    }
  ]
};
