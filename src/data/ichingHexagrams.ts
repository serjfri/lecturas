// src/data/ichingHexagrams.ts

export interface HexagramMeaning {
  id: number;
  nombre: string;
  unicode: string; // Unicode representation of the hexagram
  significado: string; // Core meaning
  interpretacionGenerada?: string; // Field to store LLM generated interpretation
  consejoPractico?: string;
  transiciones?: string[];
  palabrasClave?: string[];
  // Add other properties relevant to your I Ching data
}

export const ichingHexagrams: HexagramMeaning[] = [
  {
    id: 1,
    nombre: 'Lo Creativo',
    unicode: '☰☰', // Cielo sobre Cielo
    significado: 'Fuerza creativa, Cielo, lo fuerte, lo que inicia, lo vigoroso, el dragón.',
    consejoPractico: 'Actúa con gran iniciativa y fuerza, pero mantén la dirección clara. Cultiva tu liderazgo y perseverancia.',
    palabrasClave: ['fuerza', 'cielo', 'creatividad', 'iniciativa', 'liderazgo'],
  },
  {
    id: 2,
    nombre: 'Lo Receptivo',
    unicode: '☷☷', // Tierra sobre Tierra
    significado: 'Fuerza receptiva, Tierra, lo dócil, la devoción, lo que nutre, la yegua.',
    consejoPractico: 'Sé flexible y receptivo a las circunstancias. Sigue el curso natural de los acontecimientos y apoya a los demás.',
    palabrasClave: ['receptividad', 'tierra', 'devoción', 'flexibilidad', 'nutrición'],
  },
  {
    id: 3,
    nombre: 'La Dificultad Inicial',
    unicode: '☵☰', // Agua sobre Trueno
    significado: 'Obstáculos al principio, necesidad de perseverancia, germinación.',
    consejoPractico: 'Enfrenta las dificultades con paciencia y determinación. El comienzo es duro, pero el crecimiento es posible.',
    palabrasClave: ['dificultad', 'inicio', 'perseverancia', 'obstáculo', 'crecimiento'],
  },
  {
    id: 4,
    nombre: 'La Necedad Juvenil',
    unicode: '☶☵', // Montaña sobre Agua
    significado: 'Inexperiencia, ignorancia, necesidad de disciplina y guía.',
    consejoPractico: 'Sé humilde y busca conocimiento. No te precipites en decisiones importantes sin la debida consideración.',
    palabrasClave: ['inexperiencia', 'ignorancia', 'disciplina', 'guía', 'aprendizaje'],
  },
  {
    id: 5,
    nombre: 'La Espera',
    unicode: '☰☵', // Cielo sobre Agua
    significado: 'Esperar pacientemente en tiempos de dificultad, acumulación de fuerza.',
    consejoPractico: 'No actúes precipitadamente. Prepara tu fuerza y espera el momento adecuado para avanzar.',
    palabrasClave: ['espera', 'paciencia', 'preparación', 'confianza', 'acumulación'],
  },
  {
    id: 6,
    nombre: 'El Conflicto',
    unicode: '☰☳', // Cielo sobre Fuego
    significado: 'Disputa, litigio, desacuerdo. Necesidad de ceder o buscar mediación.',
    consejoPractico: 'Evita la confrontación directa si es posible. Busca la justicia a través de la mediación y el entendimiento.',
    palabrasClave: ['conflicto', 'disputa', 'litigio', 'mediación', 'justicia'],
  },
  {
    id: 7,
    nombre: 'El Ejército',
    unicode: '☵☷', // Agua sobre Tierra
    significado: 'Disciplina, organización, liderazgo en la acción colectiva.',
    consejoPractico: 'Para lograr grandes objetivos, se requiere disciplina y un liderazgo fuerte. Actúa con unidad y estrategia.',
    palabrasClave: ['ejército', 'disciplina', 'liderazgo', 'estrategia', 'unidad'],
  },
  {
    id: 8,
    nombre: 'La Solidaridad',
    unicode: '☷☵', // Tierra sobre Agua
    significado: 'Unión, cohesión, apoyo mutuo, dependencia en una causa justa.',
    consejoPractico: 'Busca la unión con otros que compartan tus ideales. La fuerza reside en la colaboración y el apoyo mutuo.',
    palabrasClave: ['unión', 'solidaridad', 'apoyo', 'cohesión', 'colaboración'],
  },
  {
    id: 9,
    nombre: 'El Poder Domesticador de lo Pequeño',
    unicode: '☰☴', // Cielo sobre Viento
    significado: 'Influencia sutil, pequeñas restricciones, acumulación gradual.',
    consejoPractico: 'No intentes forzar grandes cambios. Ejerce una influencia sutil y constante, permitiendo que las cosas se desarrollen gradualmente.',
    palabrasClave: ['sutileza', 'influencia', 'pequeño', 'paciencia', 'acumulación'],
  },
  {
    id: 10,
    nombre: 'El Andar',
    unicode: '☰☱', // Cielo sobre Lago
    significado: 'Conducta, comportamiento, cuidado al pisar, cortesía.',
    consejoPractico: 'Sé consciente de tus acciones y comportamiento. Actúa con integridad y discreción, especialmente en situaciones delicadas.',
    palabrasClave: ['conducta', 'comportamiento', 'cortesía', 'cautela', 'integridad'],
  },
  {
    id: 11,
    nombre: 'La Paz',
    unicode: '☷☰', // Tierra sobre Cielo
    significado: 'Armonía, prosperidad, buenos tiempos, unión de fuerzas opuestas.',
    consejoPractico: 'Disfruta de este período de armonía y prosperidad. Contribuye al bienestar colectivo y mantén el equilibrio.',
    palabrasClave: ['paz', 'armonía', 'prosperidad', 'unión', 'equilibrio'],
  },
  {
    id: 12,
    nombre: 'El Estancamiento',
    unicode: '☰☷', // Cielo sobre Tierra
    significado: 'Bloqueo, retroceso, tiempos difíciles, falta de comunicación.',
    consejoPractico: 'Reconoce el estancamiento y retírate si es necesario. No intentes forzar el progreso. Revisa tus bases.',
    palabrasClave: ['estancamiento', 'bloqueo', 'retroceso', 'dificultad', 'reflexión'],
  },
  // ... puedes añadir más hexagramas aquí
];
