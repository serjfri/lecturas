// src/components/InterpretacionRunas.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RunaMeaning } from '@/data/runaMeanings'; // Asegúrate de que esta sea la importación correcta para tu RunaMeaning expandido
import BackButton from '@/components/BackButton'; // Asumiendo que usas BackButton aquí

interface InterpretacionRunasProps {
  runa: RunaMeaning | null;
  onVolver: () => void;
}

const InterpretacionRunas: React.FC<InterpretacionRunasProps> = ({ runa, onVolver }) => {
  if (!runa) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-lg shadow-xl border-gray-200">
          <CardHeader>
            <CardTitle className="text-3xl font-serif text-gray-800 text-center">Runa no seleccionada</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-6">Por favor, selecciona una runa para ver su interpretación.</p>
            {/* Puedes optar por un botón redondo aquí si lo deseas */}
            <Button onClick={onVolver} className="bg-gray-700 hover:bg-gray-800 text-white">Volver a Selección de Runas</Button>
          </CardContent>
        </Card>
        {/* Aquí puedes añadir el BackButton redondo en la esquina superior izquierda si quieres */}
        {/* <BackButton onVolver={onVolver} isRound={true} className="absolute top-4 left-4 z-50" /> */}
      </div>
    );
  }

  // Determine if the runa has an inverted meaning
  const hasInvertedMeaning = runa.significadoInvertido && runa.significadoInvertido.trim() !== '';

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 p-4 sm:p-8 flex flex-col items-center">
      {/* Botón de volver en la esquina superior izquierda */}
      <BackButton onVolver={onVolver} isRound={true} className="absolute top-4 left-4 z-50" />

      <div className="container mx-auto max-w-4xl pt-16 pb-8"> {/* Ajusta el pt-16 para dejar espacio al botón de volver */}
        <Card className="bg-white/90 backdrop-blur-sm border-emerald-200 shadow-xl p-6 sm:p-8">
          <CardHeader className="text-center mb-6">
            <CardTitle className="text-4xl font-serif text-emerald-900 mb-2">
              Interpretación de la Runa: {runa.nombre} {runa.unicode}
            </CardTitle>
            <p className="text-emerald-700 text-xl font-semibold">{runa.simbolismo}</p>
          </CardHeader>

          <CardContent className="space-y-6 text-gray-800">

            {/* Significados principales */}
            <div className="border-b pb-4 mb-4 border-emerald-100">
              <h3 className="text-2xl font-bold text-emerald-800 mb-2">Significado Derecho</h3>
              <p className="text-lg">{runa.significadoDerecho}</p>
              {hasInvertedMeaning && (
                <>
                  <h3 className="text-2xl font-bold text-emerald-800 mt-4 mb-2">Significado Invertido</h3>
                  <p className="text-lg">{runa.significadoInvertido}</p>
                </>
              )}
              <p className="text-base text-gray-600 mt-2">
                Palabras Clave: <span className="font-semibold">{runa.palabrasClave.join(', ')}</span>
              </p>
            </div>

            {/* Nuevas Secciones de Interpretación */}

            <h3 className="text-2xl font-bold text-emerald-800 mb-4">Detalles Adicionales</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <h4 className="font-semibold text-emerald-700">Contexto Histórico:</h4>
                <p className="text-base">{runa.contextoHistorico}</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <h4 className="font-semibold text-emerald-700">Elemento Asociado:</h4>
                <p className="text-base">{runa.elementoAsociado}</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <h4 className="font-semibold text-emerald-700">Dioses Asociados:</h4>
                <p className="text-base">{runa.dioses.join(', ')}</p>
              </div>
              {runa.correspondenciaAstrologica && (
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                  <h4 className="font-semibold text-emerald-700">Correspondencia Astrológica:</h4>
                  <p className="text-base">{runa.correspondenciaAstrologica}</p>
                </div>
              )}
              {runa.piedraAsociada && (
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                  <h4 className="font-semibold text-emerald-700">Piedra Asociada:</h4>
                  <p className="text-base">{runa.piedraAsociada}</p>
                </div>
              )}
              {runa.plantaAsociada && (
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                  <h4 className="font-semibold text-emerald-700">Planta Asociada:</h4>
                  <p className="text-base">{runa.plantaAsociada}</p>
                </div>
              )}
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <h4 className="font-semibold text-emerald-700">Color Asociado:</h4>
                <p className="text-base">{runa.colorAsociado}</p>
              </div>
              {runa.numeroSagrado && (
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                  <h4 className="font-semibold text-emerald-700">Número Sagrado:</h4>
                  <p className="text-base">{runa.numeroSagrado}</p>
                </div>
              )}
              {runa.estacion && (
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                  <h4 className="font-semibold text-emerald-700">Estación:</h4>
                  <p className="text-base">{runa.estacion}</p>
                </div>
              )}
            </div>

            <div className="space-y-4 pt-4 border-t border-emerald-100 mt-6">
              <h3 className="text-2xl font-bold text-emerald-800">Interpretaciones Específicas</h3>
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <h4 className="font-semibold text-emerald-700">Interpretación Amorosa:</h4>
                <p className="text-base">{runa.interpretacionAmorosa}</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <h4 className="font-semibold text-emerald-700">Interpretación Laboral:</h4>
                <p className="text-base">{runa.interpretacionLaboral}</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <h4 className="font-semibold text-emerald-700">Interpretación Salud:</h4>
                <p className="text-base">{runa.interpretacionSalud}</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <h4 className="font-semibold text-emerald-700">Interpretación Espiritual:</h4>
                <p className="text-base">{runa.interpretacionEspiritual}</p>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-emerald-100 mt-6">
              <h3 className="text-2xl font-bold text-emerald-800">Guía y Reflexión</h3>
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <h4 className="font-semibold text-emerald-700">Consejo Práctico:</h4>
                <p className="text-base">{runa.consejoPractico}</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <h4 className="font-semibold text-emerald-700">Meditación Sugerida:</h4>
                <p className="text-base">{runa.meditacionSugerida}</p>
              </div>
              {runa.afinidadOtrasRunas && runa.afinidadOtrasRunas.length > 0 && (
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                  <h4 className="font-semibold text-emerald-700">Afinidad con otras Runas:</h4>
                  <p className="text-base">{runa.afinidadOtrasRunas.join(', ')}</p>
                </div>
              )}
            </div>

            <div className="pt-6 text-center">
              <Button
                onClick={onVolver}
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg"
              >
                Volver a la Selección de Runas
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InterpretacionRunas;