// src/pages/IchingSearchPage.tsx (MODIFICADO)
// Asumo que este es el IchingSearchPage que tienes, lo modifico para usar useNavigate
import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Copy, Trash, Undo2, CheckCircle, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import BackButton from '@/components/BackButton';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

import ichingHexagramsData from '@/data/iching.json';

// Las interfaces HexagramLine y HexagramMeaning
// Es mejor que estas interfaces estén en un archivo de tipos compartido, por ejemplo, `src/types/iching.ts`
// Si las tienes aquí, asegúrate de que sea el único lugar, o impórtalas de un archivo de tipos.
// Para este ejemplo, las dejo aquí asumiendo que este es el IchingSearchPage original.
interface HexagramLine {
  numero: number;
  text: string;
}

export interface HexagramMeaning {
  numero: number;
  name: string;
  character: string;
  trigram_top: string;
  trigram_bottom: string;
  judgment: string;
  image: string;
  lines: HexagramLine[];
  significado_profundo: string;
  arquetipo: string;
  elemento: string;
  estacion_asociada: string;
  direccion_geografica_simbolica: string;
  analogias: string[];
  citas_textuales: string[];
}

const ichingHexagrams: HexagramMeaning[] = ichingHexagramsData as HexagramMeaning[];

const trigramLinesMap: { [key: string]: string } = {
  "Cielo": "111",
  "Tierra": "000",
  "Trueno": "001",
  "Agua (Abismo)": "010",
  "Montaña (Inmovilidad)": "100",
  "Fuego (Lo Aferrarse)": "101",
  "Viento (Suavidad)": "110",
  "Lago (Alegría)": "011"
};

const HexagramLineDisplay: React.FC<{ type: 'solid' | 'broken' }> = ({ type }) => (
  <div className="flex justify-between items-center h-1.5 my-0.5 w-24 sm:w-28 md:w-32">
    {type === 'solid' ? (
      <div className="bg-indigo-950 h-full w-full rounded-sm"></div>
    ) : (
      <>
        <div className="bg-indigo-950 h-full w-[45%] rounded-sm"></div>
        <div className="bg-indigo-950 h-full w-[45%] rounded-sm"></div>
      </>
    )}
  </div>
);

const generateHexagramLines = (topTrigram: string, bottomTrigram: string): string => {
  const topLines = trigramLinesMap[topTrigram] || "111";
  const bottomLines = trigramLinesMap[bottomTrigram] || "000";
  return bottomLines + topLines;
};

const IchingSearchPage: React.FC = () => {
  const [hexagramInput, setHexagramInput] = useState<string>('');
  const [foundHexagram, setFoundHexagram] = useState<HexagramMeaning | null>(null); // Todavía útil para mostrar vista previa en modo 'single'
  const [selectedHexagrams, setSelectedHexagrams] = useState<HexagramMeaning[]>([]);
  const [mode, setMode] = useState<'single' | 'multiple'>('single');
  const { toast } = useToast();
  const navigate = useNavigate(); // Inicializar useNavigate

  const getHexagramByNumber = useCallback((num: number): HexagramMeaning | undefined => {
    return ichingHexagrams.find(h => h.numero === num);
  }, []);

  const handleSearchHexagram = async () => {
    if (!hexagramInput.trim()) {
      toast({
        title: "Entrada Vacía",
        description: "Por favor, introduce el número de un hexagrama.",
        variant: "destructive",
      });
      return;
    }

    const hexNum = parseInt(hexagramInput, 10);
    if (isNaN(hexNum) || hexNum < 1 || hexNum > 64) {
      toast({
        title: "Número Inválido",
        description: "Por favor, introduce un número de hexagrama válido (1-64).",
        variant: "destructive",
      });
      return;
    }

    const hexagram = getHexagramByNumber(hexNum);

    if (hexagram) {
      // Navegar a la página de interpretación con el hexagrama como estado
      navigate('/iching/interpretation', { state: { hexagrams: [hexagram] } });
    } else {
      setFoundHexagram(null); // Limpiar si no se encuentra
      toast({
        title: "Hexagrama No Encontrado",
        description: "No se encontró el hexagrama con ese número.",
        variant: "destructive",
      });
    }
  };

  const handleClearSearch = () => {
    setFoundHexagram(null);
    setHexagramInput('');
  };

  const handleGoBack = () => {
    navigate('/'); // Vuelve a la página principal (Index)
  };

  const handleNumberClick = (num: number) => {
    setHexagramInput(prev => prev + num.toString());
  };

  const handleBackspace = () => {
    setHexagramInput(prev => prev.slice(0, -1));
  };

  const handleClearInput = () => {
    setHexagramInput('');
  };

  const firstRowNumbers = [0, 1, 2, 3, 4];
  const secondRowNumbers = [5, 6, 7, 8, 9];

  const handleAddHexagramToList = () => {
    const hexNum = parseInt(hexagramInput, 10);
    if (isNaN(hexNum) || hexNum < 1 || hexNum > 64) {
      toast({
        title: "Número Inválido",
        description: "Por favor, introduce un número de hexagrama válido (1-64).",
        variant: "destructive",
      });
      return;
    }

    const hexagramToAdd = getHexagramByNumber(hexNum);

    if (hexagramToAdd) {
      if (selectedHexagrams.some(h => h.numero === hexagramToAdd.numero)) {
        toast({
          title: "Hexagrama Ya Añadido",
          description: `El hexagrama ${hexagramToAdd.numero} (${hexagramToAdd.name}) ya está en la lista.`,
          variant: "default",
        });
        return;
      }
      setSelectedHexagrams(prevSelected =>
        [...prevSelected, hexagramToAdd].sort((a, b) => a.numero - b.numero)
      );
      toast({
        title: "Hexagrama Añadido",
        description: `El hexagrama ${hexagramToAdd.numero} (${hexagramToAdd.name}) ha sido añadido a la lista.`,
        variant: "success",
      });
      setHexagramInput('');
      // Si el modo es single, pero añades a la lista, podrías querer cambiar el foundHexagram
      // para mostrar la vista previa del último añadido, o simplemente limpiar.
      setFoundHexagram(null); // Limpiar la vista previa de un solo hexagrama
    } else {
      toast({
        title: "Hexagrama No Encontrado",
        description: "No se pudo encontrar el hexagrama con ese número.",
        variant: "destructive",
      });
    }
  };

  const handleRemoveHexagramFromList = (hexagramNumero: number) => {
    setSelectedHexagrams(prevSelected => prevSelected.filter(h => h.numero !== hexagramNumero));
    toast({
      title: "Hexagrama Eliminado",
      description: "El hexagrama ha sido eliminado de la lista.",
      variant: "default",
    });
  };

  const handleClearSelectedHexagrams = () => {
    setSelectedHexagrams([]);
    toast({
      title: "Lista Limpiada",
      description: "Todos los hexagramas han sido eliminados de la lista.",
      variant: "destructive",
    });
  };

  const handleUndoLastHexagram = () => {
    if (selectedHexagrams.length > 0) {
      const lastHex = selectedHexagrams[selectedHexagrams.length - 1];
      setSelectedHexagrams(prevSelected => prevSelected.slice(0, -1));
      toast({
        title: "Deshecho",
        description: `Hexagrama ${lastHex.numero} (${lastHex.name}) eliminado.`,
        variant: "default",
      });
    } else {
      toast({
        title: "Nada que deshacer",
        description: "La lista de hexagramas está vacía.",
        variant: "default",
      });
      setHexagramInput('');
    }
  };

  const handleCopyHexagramList = async () => {
    if (selectedHexagrams.length === 0) {
      toast({
        title: "Lista Vacía",
        description: "No hay hexagramas para copiar.",
        variant: "default",
      });
      return;
    }

    const listText = selectedHexagrams.map(h => `${h.numero}. ${h.name}`).join('\n');
    try {
      await navigator.clipboard.writeText(listText);
      toast({
        title: "Lista Copiada",
        description: "Los hexagramas seleccionados se han copiado al portapapeles.",
        variant: "success",
      });
    } catch (error) {
      console.error("Error copying to clipboard:", error);
      toast({
        title: "Error al Copiar",
        description: "No se pudo copiar la lista al portapapeles.",
        variant: "destructive",
      });
    }
  };

  const handleInterpretSelectedHexagrams = () => {
    if (selectedHexagrams.length === 0) {
      toast({
        title: "Ningún Hexagrama Seleccionado",
        description: "Por favor, selecciona al menos un hexagrama para interpretar.",
        variant: "destructive",
      });
      return;
    }
    // Navegar a la página de interpretación con la lista de hexagramas como estado
    navigate('/iching/interpretation', { state: { hexagrams: selectedHexagrams } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-4 sm:py-8 flex flex-col items-center justify-center relative">
      <BackButton
        onVolver={handleGoBack}
        isRound={true}
        className="fixed top-4 left-4 z-50"
      />

      <div className="container mx-auto w-full px-2 sm:px-4 md:px-6 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl space-y-4 sm:space-y-6 flex-grow flex flex-col justify-center">

        <div className="flex justify-center gap-4 mb-4 mt-16 sm:mt-8">
          <Button
            onClick={() => {
              setMode('single');
              setHexagramInput('');
              setFoundHexagram(null);
            }}
            variant={mode === 'single' ? "default" : "outline"}
            className={mode === 'single' ? "bg-indigo-600 text-white" : "border-indigo-300 text-indigo-700"}
          >
            Consulta Individual
          </Button>
          <Button
            onClick={() => {
              setMode('multiple');
              setHexagramInput('');
              setFoundHexagram(null);
            }}
            variant={mode === 'multiple' ? "default" : "outline"}
            className={mode === 'multiple' ? "bg-indigo-600 text-white" : "border-indigo-300 text-indigo-700"}
          >
            Añadir a Lista
          </Button>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-indigo-200 shadow-lg p-4 sm:p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl sm:text-2xl font-serif text-indigo-950 text-center">
                  {mode === 'single' ? 'Consulta' : 'Añadir a Lista'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="number"
                    placeholder="..."
                    value={hexagramInput}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === '' || /^\d+$/.test(value)) {
                        setHexagramInput(value);
                      }
                    }}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        if (mode === 'single') {
                          handleSearchHexagram();
                        } else {
                          handleAddHexagramToList();
                        }
                      }
                    }}
                    className="flex-grow bg-indigo-50 border-indigo-200 focus:border-indigo-400 focus:ring focus:ring-indigo-200 text-center text-lg font-bold"
                  />
                  {mode === 'single' && (
                    <Button
                      onClick={handleSearchHexagram}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Consultar
                    </Button>
                  )}
                  {mode === 'multiple' && (
                    <Button
                      onClick={handleAddHexagramToList}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Añadir
                    </Button>
                  )}
                </div>

                <div className="space-y-2 mt-4">
                  <label className="block text-sm font-medium text-indigo-900 mb-2 text-center">
                    {mode === 'single' ? 'O introduce el número:' : 'Selecciona o teclea el número:'}
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {firstRowNumbers.map((num) => (
                      <Button
                        key={num}
                        variant="outline"
                        className="h-12 w-full text-lg font-bold bg-indigo-50 hover:bg-indigo-100 border-indigo-200"
                        onClick={() => handleNumberClick(num)}
                      >
                        {num}
                      </Button>
                    ))}
                  </div>
                  <div className="grid grid-cols-5 gap-2 mt-2">
                    {secondRowNumbers.map((num) => (
                      <Button
                        key={num}
                        variant="outline"
                        className="h-12 w-full text-lg font-bold bg-indigo-50 hover:bg-indigo-100 border-indigo-200"
                        onClick={() => handleNumberClick(num)}
                      >
                        {num}
                      </Button>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <Button
                      variant="outline"
                      className="h-12 w-full text-sm font-medium bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700"
                      onClick={handleClearInput}
                    >
                      Borrar
                    </Button>
                    <Button
                      variant="outline"
                      className="h-12 w-full text-sm font-medium bg-red-50 hover:bg-red-100 border-red-200 text-red-700"
                      onClick={handleBackspace}
                    >
                      Deshacer
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>

            {/* Right Column: Results (for single) or List (for multiple) */}
            <div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl sm:text-2xl font-serif text-indigo-950 text-center">
                  {mode === 'single' ? 'Vista Previa (Consulta Individual)' : `Lista de Hexagramas (${selectedHexagrams.length})`}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mode === 'single' && (
                  foundHexagram ? ( // Mostrar la vista previa en el modo 'single'
                    <div className="mt-2">
                      <CardTitle className="text-xl sm:text-2xl font-serif text-indigo-950 flex flex-col items-center gap-0 mb-4">
                        <div className="flex flex-col mb-4">
                          {generateHexagramLines(foundHexagram.trigram_top, foundHexagram.trigram_bottom)
                            .split('')
                            .reverse()
                            .map((lineType, index) => (
                              <HexagramLineDisplay
                                key={index}
                                type={lineType === '1' ? 'solid' : 'broken'}
                              />
                            ))}
                        </div>
                        <span className="mt-2 text-center text-2xl sm:text-3xl font-bold px-2">{foundHexagram.name}</span>
                      </CardTitle>
                      <p className="text-indigo-600 text-base text-center mb-4">
                        Hexagrama N° {foundHexagram.numero}
                      </p>
                      <div className="space-y-4 text-sm sm:text-base">
                        {/* Puedes mostrar más detalles aquí si quieres, o dejarlo simple para la vista previa */}
                        <p className="text-indigo-700">
                          <span className="font-semibold">Juicio:</span> {foundHexagram.judgment.substring(0, 100)}...
                        </p>
                        <p className="text-indigo-700">
                          <span className="font-semibold">Significado Profundo:</span> {foundHexagram.significado_profundo.substring(0, 150)}...
                        </p>
                      </div>
                      <div className="flex justify-center mt-6">
                        {/* Botón para volver a la entrada y limpiar la vista previa */}
                        <Button
                          variant="outline"
                          className="text-indigo-700 border-indigo-300 hover:bg-indigo-50"
                          onClick={handleClearSearch}
                        >
                          Nueva Consulta
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-center text-indigo-700 py-10">
                      Introduce un número y pulsa "Consultar" o "Enter" para ver la vista previa.
                    </p>
                  )
                )}

                {mode === 'multiple' && (
                  selectedHexagrams.length > 0 ? (
                    <>
                      <div className="flex flex-col gap-2 max-h-60 overflow-y-auto border border-indigo-200 p-2 rounded-md bg-indigo-50">
                        {selectedHexagrams.map(hexagram => (
                          <div key={hexagram.numero} className="flex items-center justify-between text-indigo-800 text-sm py-1">
                            <span>{hexagram.numero}. {hexagram.name}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRemoveHexagramFromList(hexagram.numero)}
                              className="text-indigo-500 hover:text-red-500 p-1 h-auto"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col gap-2 mt-4">
                        <Button
                          onClick={handleCopyHexagramList}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
                        >
                          <Copy className="w-4 h-4 mr-2" />
                          Copiar Lista
                        </Button>
                        <Button
                          onClick={handleInterpretSelectedHexagrams}
                          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
                        >
                          <Send className="w-4 h-4 mr-2" />
                          Interpretar Lista
                        </Button>
                        <Separator className="my-2 bg-indigo-200" />
                        <Button
                          variant="outline"
                          onClick={handleUndoLastHexagram}
                          className="w-full text-indigo-700 border-indigo-300 hover:bg-indigo-50"
                        >
                          <Undo2 className="w-4 h-4 mr-2" />
                          Deshacer Último
                        </Button>
                        <Button
                          variant="destructive"
                          onClick={handleClearSelectedHexagrams}
                          className="w-full"
                        >
                          <Trash className="w-4 h-4 mr-2" />
                          Limpiar Lista
                        </Button>
                      </div>
                    </>
                  ) : (
                    <p className="text-center text-indigo-700 py-10">
                      Usa el teclado numérico para añadir hexagramas a tu lista.
                    </p>
                  )
                )}
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default IchingSearchPage;