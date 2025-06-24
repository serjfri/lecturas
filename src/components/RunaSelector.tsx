import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BackButton from '@/components/BackButton';
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

import { runaMeaningsExpanded, RunaMeaning } from '@/data/runaMeanings';

interface RunaSelectorProps {
  onVolver: () => void;
  onSelectRunaForInterpretation: (runa: RunaMeaning) => void;
}

const RunaSelector: React.FC<RunaSelectorProps> = ({ onVolver, onSelectRunaForInterpretation }) => {
  const [selectedRuna, setSelectedRuna] = useState<RunaMeaning | null>(null);

  const handleSelectRuna = (runa: RunaMeaning) => {
    setSelectedRuna(runa);
  };

  const handleInterpretSelectedRuna = () => {
    if (selectedRuna) {
      onSelectRunaForInterpretation(selectedRuna);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-emerald-50 to-lime-100 flex flex-col items-center py-8 px-4">
      {/* BackButton ahora con 'fixed' */}
      <BackButton onVolver={onVolver} isRound={true} className="fixed top-4 left-4 z-50" />

      <div className="container mx-auto max-w-4xl w-full">
        <h2 className="text-3xl font-serif text-lime-900 mb-8 mt-4 text-center">
          Selecciona una Runa para Consultar
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Columna de Selección de Runas */}
          <Card className="bg-white/80 backdrop-blur-sm border-lime-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-lime-950">Lista de Runas</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] pr-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {runaMeaningsExpanded.map((runa) => (
                    <Button
                      key={runa.id}
                      variant={selectedRuna?.id === runa.id ? "default" : "outline"}
                      className={`
                        ${selectedRuna?.id === runa.id
                          ? 'bg-lime-600 hover:bg-lime-700 text-white'
                          : 'border-lime-300 text-lime-800 hover:bg-lime-100'
                        }
                        font-medium text-sm h-12 w-full flex items-center justify-center space-x-2
                      `}
                      onClick={() => handleSelectRuna(runa)}
                    >
                      <span className="text-lg">{runa.unicode}</span> {/* <-- MUESTRA LA RUNA UNICODE */}
                      <span>{runa.nombre}</span>
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Columna de Significado de la Runa Seleccionada */}
          <Card className="bg-white/80 backdrop-blur-sm border-emerald-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-emerald-950 flex items-center justify-center space-x-2"> {/* <-- AJUSTADO PARA CENTRAR */}
                {selectedRuna ? (
                  <>
                    <span className="text-3xl font-bold">{selectedRuna.unicode}</span> {/* <-- MUESTRA LA RUNA MÁS GRANDE */}
                    <span>{selectedRuna.nombre}</span>
                  </>
                ) : (
                  'No hay runa seleccionada'
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedRuna ? (
                <ScrollArea className="h-[400px]">
                  <p className="text-emerald-800 text-base">
                    <span className="font-semibold">Significado:</span> {selectedRuna.significadoDerecho}
                  </p>
                  {selectedRuna.significadoInvertido && (
                    <>
                      <Separator className="my-3 bg-emerald-200" />
                      <p className="text-emerald-800 text-base">
                        <span className="font-semibold">Invertida:</span> {selectedRuna.significadoInvertido}
                      </p>
                    </>
                  )}
                  <Separator className="my-3 bg-emerald-200" />
                  <p className="text-emerald-800 text-base">
                    <span className="font-semibold">Simbolismo:</span> {selectedRuna.simbolismo}
                  </p>
                  <Separator className="my-3 bg-emerald-200" />
                  <p className="text-emerald-800 text-base">
                    <span className="font-semibold">Palabras Clave:</span> {selectedRuna.palabrasClave.join(', ')}
                  </p>
                </ScrollArea>
              ) : (
                <p className="text-emerald-700 text-lg text-center p-10">
                  Selecciona una runa de la lista de la izquierda para ver su significado.
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-8">
          <Button
            onClick={handleInterpretSelectedRuna}
            className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold"
            disabled={!selectedRuna}
          >
            Interpretar Runa Seleccionada
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RunaSelector;