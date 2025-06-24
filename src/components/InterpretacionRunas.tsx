import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// ELIMINADO: import { Button } from "@/components/ui/button"; // Ya no se usa directamente el Button de shadcn para el volver
// ELIMINADO: import { ChevronLeft } from "lucide-react"; // Ya no se usa directamente el ChevronLeft aquí

// AÑADIDO: Importa tu componente BackButton personalizado
import BackButton from '@/components/BackButton';

import { RunaMeaning } from '@/data/runaMeanings'; // Asegúrate de que esta ruta sea correcta

interface InterpretacionRunasProps {
  runa: RunaMeaning;
  onVolver: () => void;
}

const InterpretacionRunas: React.FC<InterpretacionRunasProps> = ({ runa, onVolver }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 py-8">
      {/* AÑADIDO: El BackButton flotante en la esquina superior izquierda */}
      <BackButton
        onVolver={onVolver}
        isRound={true} // Para que sea el botón redondo con solo la flecha
        className="fixed top-4 left-4 z-50" // Posicionamiento fijo y z-index alto
      />

      {/* MODIFICADO: Ajustado el padding-top para que el contenido no quede debajo del botón fijo */}
      <div className="mx-auto w-full px-4 sm:px-6 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl space-y-6 pt-16"> {/* The main content container */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-serif text-purple-900 mb-2">
            Interpretación de la Runa
          </h2>
          <p className="text-purple-700 text-lg">
            Runa seleccionada: <span className="font-bold">{runa.nombre}</span> (<span className="font-bold text-2xl">{runa.unicode}</span>)
          </p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-purple-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-purple-950 flex items-center gap-2">
                <span className="text-4xl">{runa.unicode}</span> {runa.nombre}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Significado Principal */}
            <div>
              <h4 className="text-lg font-semibold text-purple-950 mb-1">Significado:</h4>
              <p className="text-purple-700 text-base leading-relaxed">{runa.significadoDerecho}</p>
            </div>

            {/* Si tiene significado invertido */}
            {runa.significadoInvertido && (
              <div>
                <h4 className="text-lg font-semibold text-purple-950 mb-1 text-red-700">Significado Invertido:</h4>
                <p className="text-red-600 text-base leading-relaxed">{runa.significadoInvertido}</p>
              </div>
            )}

            {/* Simbolismo */}
            {runa.simbolismo && (
              <div>
                <h4 className="text-lg font-semibold text-purple-950 mb-1">Simbolismo:</h4>
                <p className="text-purple-700 text-base leading-relaxed">{runa.simbolismo}</p>
              </div>
            )}

            {/* Palabras Clave */}
            {runa.palabrasClave && runa.palabrasClave.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-purple-950 mb-1">Palabras Clave:</h4>
                <p className="text-purple-700 text-base leading-relaxed">{runa.palabrasClave.join(', ')}</p>
              </div>
            )}

            {/* Contexto Histórico */}
            {runa.contextoHistorico && (
              <div>
                <h4 className="text-lg font-semibold text-purple-950 mb-1">Contexto Histórico:</h4>
                <p className="text-purple-700 text-base leading-relaxed">{runa.contextoHistorico}</p>
              </div>
            )}

            {/* Interpretaciones Específicas */}
            <div className="grid gap-2 grid-cols-1 sm:grid-cols-2">
                {runa.interpretacionAmorosa && (
                    <Card className="bg-purple-50 border-purple-200 p-3">
                        <h5 className="font-semibold text-purple-900 text-sm">Amor:</h5>
                        <p className="text-purple-700 text-sm">{runa.interpretacionAmorosa}</p>
                    </Card>
                )}
                {runa.interpretacionLaboral && (
                    <Card className="bg-purple-50 border-purple-200 p-3">
                        <h5 className="font-semibold text-purple-900 text-sm">Laboral:</h5>
                        <p className="text-purple-700 text-sm">{runa.interpretacionLaboral}</p>
                    </Card>
                )}
                {runa.interpretacionSalud && (
                    <Card className="bg-purple-50 border-purple-200 p-3">
                        <h5 className="font-semibold text-purple-900 text-sm">Salud:</h5>
                        <p className="text-purple-700 text-sm">{runa.interpretacionSalud}</p>
                    </Card>
                )}
                {runa.interpretacionEspiritual && (
                    <Card className="bg-purple-50 border-purple-200 p-3">
                        <h5 className="font-semibold text-purple-900 text-sm">Espiritual:</h5>
                        <p className="text-purple-700 text-sm">{runa.interpretacionEspiritual}</p>
                    </Card>
                )}
            </div>

            {/* Consejo Práctico */}
            {runa.consejoPractico && (
              <div>
                <h4 className="text-lg font-semibold text-purple-950 mb-1">Consejo Práctico:</h4>
                <p className="text-purple-700 text-base leading-relaxed">{runa.consejoPractico}</p>
              </div>
            )}

            {/* Meditación Sugerida */}
            {runa.meditacionSugerida && (
              <div>
                <h4 className="text-lg font-semibold text-purple-950 mb-1">Meditación Sugerida:</h4>
                <p className="text-purple-700 text-base leading-relaxed">{runa.meditacionSugerida}</p>
              </div>
            )}

            {/* Detalles Adicionales */}
            {(runa.elementoAsociado || runa.dioses?.length > 0 || runa.correspondenciaAstrologica || runa.piedraAsociada || runa.plantaAsociada || runa.colorAsociado || runa.numeroSagrado !== undefined || runa.estacion || runa.afinidadOtrasRunas?.length > 0) && (
                <div>
                    <h4 className="text-lg font-semibold text-purple-950 mb-1">Más Detalles:</h4>
                    <ul className="text-purple-700 text-base space-y-1">
                        {runa.elementoAsociado && <li><strong>Elemento:</strong> {runa.elementoAsociado}</li>}
                        {runa.dioses && runa.dioses.length > 0 && <li><strong>Dioses:</strong> {runa.dioses.join(', ')}</li>}
                        {runa.correspondenciaAstrologica && <li><strong>Astrología:</strong> {runa.correspondenciaAstrologica}</li>}
                        {runa.piedraAsociada && <li><strong>Piedra:</strong> {runa.piedraAsociada}</li>}
                        {runa.plantaAsociada && <li><strong>Planta:</strong> {runa.plantaAsociada}</li>}
                        {runa.colorAsociado && <li><strong>Color:</strong> {runa.colorAsociado}</li>}
                        {runa.numeroSagrado !== undefined && <li><strong>Número Sagrado:</strong> {runa.numeroSagrado}</li>}
                        {runa.estacion && <li><strong>Estación:</strong> {runa.estacion}</li>}
                        {runa.afinidadOtrasRunas && runa.afinidadOtrasRunas.length > 0 && <li><strong>Afinidad con:</strong> {runa.afinidadOtrasRunas.join(', ')}</li>}
                    </ul>
                </div>
            )}

          </CardContent>
        </Card>

        {/* ELIMINADO: El botón "Volver" que estaba aquí ha sido removido.
           Ahora el BackButton personalizado se añade directamente al principio del componente. */}

      </div>
    </div>
  );
};

export default InterpretacionRunas;