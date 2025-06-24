// src/components/InterpretacionRunas.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { RunaMeaning } from '@/data/runaMeanings'; // Make sure this path is correct

interface InterpretacionRunasProps {
  runa: RunaMeaning;
  onVolver: () => void;
}

const InterpretacionRunas: React.FC<InterpretacionRunasProps> = ({ runa, onVolver }) => {
  return (
    // MODIFIED: Removed px-4 from the outermost div to give more horizontal space
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 py-8">
      {/* MODIFIED: Changed container class to w-full and added explicit horizontal padding.
                  Also adjusted max-width for larger screens. */}
      <div className="mx-auto w-full px-4 sm:px-6 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl space-y-6"> {/* The main content container */}
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

        {/* Botón volver */}
        <div className="flex justify-center mt-6">
          <Button
            variant="outline"
            className="text-purple-700 border-purple-300 hover:bg-purple-50"
            onClick={onVolver}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Volver a Runas
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterpretacionRunas;
