// src/pages/IchingInterpretationPage.tsx (MODIFICADO)
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import InterpretacionIChingLista from '@/components/InterpretacionIChingLista';
import { HexagramMeaning } from '@/components/IchingSearchPage'; // Importa la interfaz desde IchingSearchPage si la tienes allí
import BackButton from '@/components/BackButton'; // Importa el BackButton

const IchingInterpretationPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Recupera los hexagramas del estado de la ruta
  // Asegúrate de que location.state y location.state.hexagrams existan y sean del tipo correcto
  const hexagrams = (location.state as { hexagrams: HexagramMeaning[] })?.hexagrams || [];

  const handleVolver = () => {
    navigate('/iching'); // Vuelve a la página de selección/búsqueda de I Ching
  };

  if (!hexagrams || hexagrams.length === 0) {
    // Manejar el caso en que no se pasaron hexagramas
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-100 text-center">
        <BackButton
          onVolver={handleVolver}
          isRound={true}
          className="fixed top-4 left-4 z-50"
        />
        <h2 className="text-2xl font-bold text-red-700 mb-4">Error: No se encontraron hexagramas para interpretar.</h2>
        <p className="text-lg text-gray-700 mb-6">Por favor, vuelve al selector de I Ching y selecciona algunos hexagramas.</p>
        <button
          onClick={handleVolver}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md transition duration-300"
        >
          Volver a I Ching
        </button>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen"> {/* Añade un contenedor relativo para posicionar el botón */}
      <BackButton
        onVolver={handleVolver}
        isRound={true}
        className="fixed top-4 left-4 z-50" // Posiciona el botón en la esquina superior izquierda
      />
      <InterpretacionIChingLista hexagramas={hexagrams} onVolver={handleVolver} />
    </div>
  );
};

export default IchingInterpretationPage;