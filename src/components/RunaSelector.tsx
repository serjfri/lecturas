// RunaSelector.tsx (UPDATED)

import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BackButton from '@/components/BackButton';
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Copy, Trash, Undo2, Send, X, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import { runaMeaningsExpanded, RunaMeaning } from '@/data/runaMeanings';

interface RunaEnLista extends RunaMeaning {
  // inverted?: boolean;
}

interface RunaSelectorProps {
  onVolver: () => void;
  // This prop handles interpreting a LIST of runes (from 'multiple' mode).
  onInterpretRunasList: (runas: RunaEnLista[]) => void;
  // NEW PROP: This prop handles interpreting a SINGLE rune (from 'individual' mode).
  onInterpretIndividualRuna: (runa: RunaMeaning) => void;
  initialMode?: 'individual' | 'multiple';
}

const RunaSelector: React.FC<RunaSelectorProps> = ({
  onVolver,
  onInterpretRunasList,
  onInterpretIndividualRuna,
  initialMode = 'multiple',
}) => {
  // --- DEBUGGING LOGS ADDED HERE ---
  console.log('RunaSelector - Props received:');
  console.log('  onVolver:', onVolver);
  console.log('  onInterpretRunasList:', onInterpretRunasList);
  console.log('  onInterpretIndividualRuna:', onInterpretIndividualRuna);
  console.log('  Type of onInterpretRunasList:', typeof onInterpretRunasList);
  // --- END DEBUGGING LOGS ---

  const [selectedRuna, setSelectedRuna] = useState<RunaMeaning | null>(null);
  const [selectedRunasList, setSelectedRunasList] = useState<RunaEnLista[]>([]);
  const [mode, setMode] = useState<'individual' | 'multiple'>(initialMode);
  const { toast } = useToast();

  const handleSelectRuna = (runa: RunaMeaning) => {
    if (selectedRuna?.id === runa.id) {
      setSelectedRuna(null);
    } else {
      setSelectedRuna(runa);
    }
  };

  const handleAddRunaToList = useCallback(() => {
    if (selectedRuna) {
      const isAlreadyInList = selectedRunasList.some(r => r.id === selectedRuna.id);
      if (isAlreadyInList) {
        toast({
          description: `"${selectedRuna.nombre}" ya está en la lista.`,
          variant: "default",
          duration: 2000,
        });
        return;
      }

      setSelectedRunasList(prevList => [...prevList, selectedRuna]);
      toast({
        description: `"${selectedRuna.nombre}" añadida a la lista.`,
        duration: 1500,
        className: "toast-compact",
      });
    }
  }, [selectedRuna, selectedRunasList, toast]);

  const handleRemoveRunaFromList = useCallback((idRuna: string) => {
    setSelectedRunasList(prevList => prevList.filter(runa => runa.id !== idRuna));
    toast({
      description: "Runa eliminada de la lista.",
      duration: 1000,
      className: "toast-compact",
    });
  }, [toast]);

  const handleUndoLastRuna = useCallback(() => {
    setSelectedRunasList(prevList => prevList.slice(0, prevList.length - 1));
    toast({
      description: "Última runa deshecha.",
      duration: 1000,
      className: "toast-compact",
    });
  }, [toast]);

  const handleClearRunasList = useCallback(() => {
    setSelectedRunasList([]);
    setSelectedRuna(null);
    toast({
      description: "Lista de runas limpiada.",
      duration: 1500,
      className: "toast-compact",
    });
  }, [toast]);

  // This is the handler for interpreting the LIST of runes
  const handleInterpretSelectedRunasList = useCallback(() => {
    if (selectedRunasList.length > 0) {
      // Line 90: This is where the error occurs
      onInterpretRunasList(selectedRunasList);
      toast({
        description: "Enviando runas para interpretación...",
        duration: 2000,
      });
    } else {
      toast({
        description: "No hay runas en la lista para interpretar.",
        variant: "destructive",
        duration: 2000,
      });
    }
  }, [selectedRunasList, onInterpretRunasList, toast]);

  // NEW: This handler will be called when an individual rune needs interpretation
  const handleInterpretSelectedIndividualRuna = useCallback(() => {
    if (selectedRuna) {
      onInterpretIndividualRuna(selectedRuna);
      toast({
        description: `"${selectedRuna.nombre}" enviada para interpretación.`,
        duration: 2000,
      });
    } else {
      toast({
        description: "No hay runa seleccionada para interpretar individualmente.",
        variant: "destructive",
        duration: 2000,
      });
    }
  }, [selectedRuna, onInterpretIndividualRuna, toast]);


  const handleCopyRunasList = async () => {
    const lista = selectedRunasList
      .map((runa, index) => `${index + 1}. ${runa.nombre} (${runa.unicode})`)
      .join('\n');

    try {
      await navigator.clipboard.writeText(lista);
      toast({
        title: "Lista copiada",
        description: "La lista de runas se ha copiado al portapapeles.",
        duration: 2500,
      });
    } catch (error) {
      console.error("Error al copiar al portapapeles:", error);
      toast({
        title: "Error",
        description: "No se pudo copiar la lista al portapapeles.",
        variant: "destructive",
        duration: 2500,
      });
    }
  };

  const orderedElderFutharkRunas = runaMeaningsExpanded
    .filter(runa => runa.orden >= 1 && runa.orden <= 24)
    .sort((a, b) => a.orden - b.orden);

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-emerald-50 to-lime-100 flex flex-col items-center py-8 px-4">
      <BackButton onVolver={onVolver} isRound={true} className="fixed top-4 left-4 z-50" />

      <div className="w-full max-w-full">
        <h2 className="text-3xl font-serif text-lime-900 mb-8 mt-4 text-center">
          Runas del Futhark Antiguo
        </h2>

        {/* Mode Selector */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={mode === 'multiple' ? 'default' : 'outline'}
            onClick={() => {
              setMode('multiple');
              setSelectedRuna(null);
            }}
            className={mode === 'multiple' ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'border-emerald-300 text-emerald-800 hover:bg-emerald-100'}
          >
            Lista de Runas
          </Button>
          <Button
            variant={mode === 'individual' ? 'default' : 'outline'}
            onClick={() => {
              setMode('individual');
              setSelectedRunasList([]);
            }}
            className={mode === 'individual' ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'border-emerald-300 text-emerald-800 hover:bg-emerald-100'}
          >
            Consulta Individual
          </Button>
        </div>
        <Separator className="my-6 bg-lime-300" />

        <div className="grid md:grid-cols-2 gap-8 md:px-4 lg:px-8">
          {/* Rune Selection Column */}
          <Card className="bg-white/80 backdrop-blur-sm border-lime-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-lime-950">
                Selección de Runas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
                {orderedElderFutharkRunas.map((runa) => (
                  <Button
                    key={runa.id}
                    variant={selectedRuna?.id === runa.id ? "default" : "outline"}
                    className={`
                      ${selectedRuna?.id === runa.id
                        ? 'bg-lime-600 hover:bg-lime-700 text-white'
                        : 'border-lime-300 text-lime-800 hover:bg-lime-100'
                      }
                      font-medium h-24 w-full flex flex-col items-center justify-center space-y-1 p-1.5
                      text-wrap text-center
                    `}
                    onClick={() => handleSelectRuna(runa)}
                  >
                    <span className="text-3xl font-bold">{runa.unicode}</span>
                    <span className="text-xs leading-tight">{runa.nombre}</span>
                  </Button>
                ))}
              </div>
              {/* Action buttons for individual selection or adding to list */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 mt-4">
                {mode === 'multiple' ? (
                  <Button
                    onClick={handleAddRunaToList}
                    className="flex-grow bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    disabled={!selectedRuna}
                  >
                    Añadir a la Lista <CheckCircle className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  // This button now triggers the individual interpretation
                  <Button
                    onClick={handleInterpretSelectedIndividualRuna}
                    className="flex-grow bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
                    disabled={!selectedRuna}
                  >
                    Interpretar Runa Seleccionada
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Meaning/Rune List Column */}
          <Card className="bg-white/80 backdrop-blur-sm border-emerald-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-emerald-950">
                Detalles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mode === 'multiple' ? (
                selectedRunasList.length > 0 ? (
                  <>
                    <ScrollArea className="h-[400px] pr-4 border border-emerald-200 p-2 rounded-md bg-emerald-50">
                      <div className="flex flex-col gap-2">
                        {selectedRunasList.map((runa, index) => (
                          <div key={runa.id} className="flex items-center justify-between text-emerald-800 text-sm py-1">
                            <span>{index + 1}. {runa.nombre} ({runa.unicode})</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRemoveRunaFromList(runa.id)}
                              className="text-emerald-500 hover:text-red-500 p-1 h-auto"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                    <div className="flex flex-col gap-2 mt-4">
                      <Button
                        onClick={handleCopyRunasList}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
                        disabled={selectedRunasList.length === 0}
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copiar Lista
                      </Button>
                      <Button
                        onClick={handleInterpretSelectedRunasList}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
                        disabled={selectedRunasList.length === 0}
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Interpretar Lista
                      </Button>
                      <Separator className="my-2 bg-emerald-200" />
                      <Button
                        variant="outline"
                        onClick={handleUndoLastRuna}
                        className="w-full text-emerald-700 border-emerald-300 hover:bg-emerald-50"
                        disabled={selectedRunasList.length === 0}
                      >
                        <Undo2 className="w-4 h-4 mr-2" />
                        Deshacer Última
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={handleClearRunasList}
                        className="w-full"
                        disabled={selectedRunasList.length === 0}
                      >
                        <Trash className="w-4 h-4 mr-2" />
                        Limpiar Lista
                      </Button>
                    </div>
                  </>
                ) : (
                  <p className="text-emerald-700 text-lg text-center p-10">
                    Tu lista de runas aparecerá aquí.
                  </p>
                )
              ) : (
                selectedRuna ? (
                  <ScrollArea className="h-[400px] pr-4">
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
                    <Separator className="my-3 bg-emerald-200" />
                    <p className="text-emerald-800 text-base">
                      <span className="font-semibold">Contexto Histórico:</span> {selectedRuna.contextoHistorico}
                    </p>
                    <Separator className="my-3 bg-emerald-200" />
                    <p className="text-emerald-800 text-base">
                      <span className="font-semibold">Elemento Asociado:</span> {selectedRuna.elementoAsociado}
                    </p>
                    <Separator className="my-3 bg-emerald-200" />
                    <p className="text-emerald-800 text-base">
                      <span className="font-semibold">Dioses:</span> {selectedRuna.dioses.join(', ')}
                    </p>
                    {selectedRuna.correspondenciaAstrologica && (
                      <>
                        <Separator className="my-3 bg-emerald-200" />
                        <p className="text-emerald-800 text-base">
                          <span className="font-semibold">Correspondencia Astrológica:</span> {selectedRuna.correspondenciaAstrologica}
                        </p>
                      </>
                    )}
                    {selectedRuna.piedraAsociada && (
                      <>
                        <Separator className="my-3 bg-emerald-200" />
                        <p className="text-emerald-800 text-base">
                          <span className="font-semibold">Piedra Asociada:</span> {selectedRuna.piedraAsociada}
                        </p>
                      </>
                    )}
                    {selectedRuna.plantaAsociada && (
                      <>
                        <Separator className="my-3 bg-emerald-200" />
                        <p className="text-emerald-800 text-base">
                          <span className="font-semibold">Planta Asociada:</span> {selectedRuna.plantaAsociada}
                        </p>
                      </>
                    )}
                    <Separator className="my-3 bg-emerald-200" />
                    <p className="text-emerald-800 text-base">
                      <span className="font-semibold">Color Asociado:</span> {selectedRuna.colorAsociado}
                    </p>
                    <Separator className="my-3 bg-emerald-200" />
                    <p className="text-emerald-800 text-base">
                      <span className="font-semibold">Interpretación Amorosa:</span> {selectedRuna.interpretacionAmorosa}
                    </p>
                    <Separator className="my-3 bg-emerald-200" />
                    <p className="text-emerald-800 text-base">
                      <span className="font-semibold">Interpretación Laboral:</span> {selectedRuna.interpretacionLaboral}
                    </p>
                    <Separator className="my-3 bg-emerald-200" />
                    <p className="text-emerald-800 text-base">
                      <span className="font-semibold">Interpretación Salud:</span> {selectedRuna.interpretacionSalud}
                    </p>
                    <Separator className="my-3 bg-emerald-200" />
                    <p className="text-emerald-800 text-base">
                      <span className="font-semibold">Interpretación Espiritual:</span> {selectedRuna.interpretacionEspiritual}
                    </p>
                    <Separator className="my-3 bg-emerald-200" />
                    <p className="text-emerald-800 text-base">
                      <span className="font-semibold">Consejo Práctico:</span> {selectedRuna.consejoPractico}
                    </p>
                    <Separator className="my-3 bg-emerald-200" />
                    <p className="text-emerald-800 text-base">
                      <span className="font-semibold">Meditación Sugerida:</span> {selectedRuna.meditacionSugerida}
                    </p>
                    <Separator className="my-3 bg-emerald-200" />
                    <p className="text-emerald-800 text-base">
                      <span className="font-semibold">Afinidad con otras Runas:</span> {selectedRuna.afinidadOtrasRunas.join(', ')}
                    </p>
                    {selectedRuna.orden !== undefined && (
                      <>
                        <Separator className="my-3 bg-emerald-200" />
                        <p className="text-emerald-800 text-base">
                          <span className="font-semibold">Número Sagrado:</span> {selectedRuna.orden}
                        </p>
                      </>
                    )}
                    {selectedRuna.estacion && (
                      <>
                        <Separator className="my-3 bg-emerald-200" />
                        <p className="text-emerald-800 text-base">
                          <span className="font-semibold">Estación:</span> {selectedRuna.estacion}
                        </p>
                      </>
                    )}
                  </ScrollArea>
                ) : (
                  <p className="text-emerald-700 text-lg text-center p-10">
                    Selecciona una runa para ver su significado.
                  </p>
                )
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RunaSelector;