// src/components/InterpretacionIChingLista.tsx

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HexagramMeaning } from '@/data/ichingMeanings'; // Asegúrate de que esta ruta sea correcta para tu interfaz

interface InterpretacionIChingListaProps {
  hexagramas: HexagramMeaning[];
  onVolver: () => void;
}

const InterpretacionIChingLista: React.FC<InterpretacionIChingListaProps> = ({ hexagramas, onVolver }) => {
  console.log("Hexagramas recibidos en InterpretacionIChingLista:", hexagramas); // Para depuración

  if (!hexagramas || hexagramas.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-100">
        <Card className="w-full max-w-lg bg-white/80 backdrop-blur-sm border-purple-200 shadow-lg p-6 text-center">
          <CardContent>
            <p className="text-red-600 mb-4">No hay hexagramas para interpretar en la lista.</p>
            <Button onClick={onVolver} className="mt-4 bg-purple-600 hover:bg-purple-700 text-white">
              Volver
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-100 flex flex-col items-center py-4 px-2">
      <div className="container mx-auto max-w-4xl w-full px-0 sm:px-0 md:px-0">
        <Card className="bg-white/80 backdrop-blur-sm border-purple-200 shadow-lg p-4 flex flex-col min-h-[calc(100vh-40px)]">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl font-serif text-purple-950 mb-2">
              Interpretación de I Ching
            </CardTitle>
          </CardHeader>

          <ScrollArea className="flex-grow min-h-0 px-4">
            <CardContent className="space-y-8 pt-0 pb-4">

              {hexagramas.map((hexagrama, index) => (
                <div key={hexagrama.numero} className="w-full">
                  <h2 className="text-2xl font-serif text-purple-900 mb-4 text-center">
                    {hexagrama.numero}. {hexagrama.name} ({hexagrama.character})
                  </h2>

                  <div className="space-y-3 text-purple-800 text-base leading-relaxed">
                    <p>
                      <span className="font-semibold">Trigramo Superior:</span> {hexagrama.trigram_top}
                    </p>
                    <p>
                      <span className="font-semibold">Trigramo Inferior:</span> {hexagrama.trigram_bottom}
                    </p>
                    <Separator className="my-2 bg-purple-200" />
                    <p>
                      <span className="font-semibold">Juicio:</span> {hexagrama.judgment}
                    </p>
                    <Separator className="my-2 bg-purple-200" />
                    <p>
                      <span className="font-semibold">Imagen:</span> {hexagrama.image}
                    </p>
                    <Separator className="my-2 bg-purple-200" />
                    <p className="font-semibold mb-1">Líneas:</p>
                    {hexagrama.lines.map((line) => (
                      <p key={line.numero} className="ml-4">
                        <span className="font-semibold">Línea {line.numero}:</span> {line.text}
                      </p>
                    ))}
                    {/* Si tuvieras interpretaciones de líneas mutables, irían aquí */}
                    {/* {hexagrama.mutableLinesInterpretation && Object.entries(hexagrama.mutableLinesInterpretation).map(([lineNum, interpretation]) => (
                        <p key={lineNum} className="ml-4">
                            <span className="font-semibold">Interpretación Línea {lineNum} (Muta):</span> {interpretation}
                        </p>
                    ))} */}

                    <Separator className="my-2 bg-purple-200" />
                    <p>
                      <span className="font-semibold">Significado Profundo:</span> {hexagrama.significado_profundo}
                    </p>
                    <Separator className="my-2 bg-purple-200" />
                    <p>
                      <span className="font-semibold">Arquetipo:</span> {hexagrama.arquetipo}
                    </p>
                    <Separator className="my-2 bg-purple-200" />
                    <p>
                      <span className="font-semibold">Elemento:</span> {hexagrama.elemento}
                    </p>
                    <Separator className="my-2 bg-purple-200" />
                    <p>
                      <span className="font-semibold">Estación Asociada:</span> {hexagrama.estacion_asociada}
                    </p>
                    <Separator className="my-2 bg-purple-200" />
                    <p>
                      <span className="font-semibold">Dirección Geográfica Simbólica:</span> {hexagrama.direccion_geografica_simbolica}
                    </p>
                    <Separator className="my-2 bg-purple-200" />
                    <p>
                      <span className="font-semibold">Analogías:</span> {hexagrama.analogias}
                    </p>
                    <Separator className="my-2 bg-purple-200" />
                    <p className="font-semibold mb-1">Citas Textuales:</p>
                    {hexagrama.citas_textuales.map((cita, i) => (
                      <p key={i} className="ml-4 italic">
                        "{cita}"
                      </p>
                    ))}
                  </div>
                  {/* Separador más grande entre diferentes hexagramas */}
                  {index < hexagramas.length - 1 && <Separator className="my-8 bg-purple-400 h-0.5" />}
                </div>
              ))}
            </CardContent>
          </ScrollArea>

          <div className="p-4 pt-2 border-t border-purple-200">
            <Button
              onClick={onVolver}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium"
            >
              Volver a Selección de Hexagramas
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default InterpretacionIChingLista;