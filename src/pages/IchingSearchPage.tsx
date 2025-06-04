// src/pages/IchingSearchPage.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Importa los datos de tu archivo JSON del I Ching
import ichingData from '../data/iching.json';

// --- ¡NUEVA INTERFAZ PARA DEFINIR LA ESTRUCTURA DEL HEXAGRAMA! ---
interface LineaIChing {
  numero: number;
  text: string;
  // Puedes añadir 'tipo' si lo incluyes en otras líneas, aunque en tu JSON de ejemplo no está.
  // tipo?: 'Yang' | 'Yin';
}

interface HexagramaIChing {
  numero: number; // Asegúrate de que esta propiedad exista y sea un número
  name: string; // "name" en minúsculas, como en tu JSON
  character: string;
  trigram_top: string;
  trigram_bottom: string;
  judgment: string;
  image: string;
  lines: LineaIChing[];
  significado_profundo: string;
  arquetipo: string;
  elemento: string;
  estacion_asociada: string;
  direccion_geografica_simbolica: string;
  analogias: string;
  citas_textuales: string[];
}

const IchingSearchPage = () => {
  const [hexagramNumber, setHexagramNumber] = useState('');
  // Usa la nueva interfaz para tipar el estado
  const [hexagramInterpretation, setHexagramInterpretation] = useState<HexagramaIChing | null>(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    setError('');
    setHexagramInterpretation(null);

    const num = parseInt(hexagramNumber, 10);

    if (isNaN(num) || num < 1 || num > 64) {
      setError('Por favor, introduce un número de hexagrama válido (del 1 al 64).');
      return;
    }

    // Asegúrate de que ichingData es tratado como un array de HexagramaIChing
    const foundHexagram = (ichingData as HexagramaIChing[]).find(h => h.numero === num);

    if (foundHexagram) {
      setHexagramInterpretation(foundHexagram);
    } else {
      setError('Hexagrama no encontrado. Parece que el número no corresponde a un hexagrama en nuestros datos.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 flex flex-col items-center py-8 px-4">
      <div className="container mx-auto max-w-2xl w-full">
        <Link to="/" className="back-button mb-8 inline-flex items-center text-indigo-700 hover:text-indigo-900 font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Volver al Inicio
        </Link>

        <Card className="bg-white/90 backdrop-blur-sm border-indigo-200 shadow-xl p-6 md:p-8">
          <CardContent className="space-y-6">
            <h2 className="text-3xl font-serif text-indigo-900 text-center mb-6">Consultar Hexagrama del I Ching</h2>
            <p className="text-center text-gray-700">Introduce el número del hexagrama (del 1 al 64) que deseas consultar y presiona "Buscar".</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="number"
                min="1"
                max="64"
                value={hexagramNumber}
                onChange={(e) => setHexagramNumber(e.target.value)}
                placeholder="Ej: 34"
                className="w-full sm:w-32 p-3 border border-indigo-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg text-center"
              />
              <Button
                onClick={handleSearch}
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition-colors"
              >
                Buscar
              </Button>
            </div>

            {error && <p className="text-red-600 text-center mt-4 font-medium">{error}</p>}

            {hexagramInterpretation && (
              <div className="hexagram-result mt-8 pt-6 border-t border-indigo-200 text-left">
                <h3 className="text-2xl font-serif text-indigo-900 mb-3 text-center">
                  {/* Aquí es donde accedemos a las propiedades: */}
                  {hexagramInterpretation.numero}. {hexagramInterpretation.name} {/* Usamos .name porque en tu JSON así se llama */}
                </h3>
                <p className="text-gray-800 mb-2">
                  <strong>Trigramas:</strong> Superior: {hexagramInterpretation.trigram_top}, Inferior: {hexagramInterpretation.trigram_bottom}
                </p>
                <h4 className="text-xl font-serif text-indigo-800 mt-4 mb-2">El Juicio</h4>
                <p className="text-gray-700 leading-relaxed mb-4">{hexagramInterpretation.judgment}</p>
                <h4 className="text-xl font-serif text-indigo-800 mt-4 mb-2">La Imagen</h4>
                <p className="text-gray-700 leading-relaxed mb-4">{hexagramInterpretation.image}</p>
                
                {/* Nuevos campos */}
                <h4 className="text-xl font-serif text-indigo-800 mt-4 mb-2">Significado Profundo</h4>
                <p className="text-gray-700 leading-relaxed mb-4">{hexagramInterpretation.significado_profundo}</p>

                <h4 className="text-xl font-serif text-indigo-800 mt-4 mb-2">Arquetipo</h4>
                <p className="text-gray-700 leading-relaxed mb-4">{hexagramInterpretation.arquetipo}</p>

                <h4 className="text-xl font-serif text-indigo-800 mt-4 mb-2">Analogías</h4>
                <p className="text-gray-700 leading-relaxed mb-4">{hexagramInterpretation.analogias}</p>

                <h4 className="text-xl font-serif text-indigo-800 mt-4 mb-2">Citas Textuales</h4>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  {hexagramInterpretation.citas_textuales.map((cita, index) => (
                    <li key={index}>{cita}</li>
                  ))}
                </ul>
                {/* Fin de nuevos campos */}

                <h4 className="text-xl font-serif text-indigo-800 mt-4 mb-2">Comentarios de las Líneas</h4>
                <ul className="space-y-3">
                  {hexagramInterpretation.lines.map(linea => ( // Accedemos a .lines (plural)
                    <li key={linea.numero} className="bg-indigo-50 p-4 rounded-md border border-indigo-100 shadow-sm">
                      <strong className="text-indigo-700">Línea {linea.numero}:</strong>{' '} {/* Accedemos a linea.numero */}
                      <span className="text-gray-800">{linea.text}</span> {/* Accedemos a linea.text */}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IchingSearchPage;