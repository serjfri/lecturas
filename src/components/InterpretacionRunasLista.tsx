// src/components/InterpretacionRunasLista.tsx (Última Revisión - Layout y Scroll)

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RunaMeaning } from '@/data/runaMeanings';

interface InterpretacionRunasListaProps {
  runas: RunaMeaning[];
  onVolver: () => void;
}

const InterpretacionRunasLista: React.FC<InterpretacionRunasListaProps> = ({ runas, onVolver }) => {
  console.log("Runas recibidas en InterpretacionRunasLista:", runas); // Mantener para depuración

  if (!runas || runas.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-lime-50 via-emerald-50 to-lime-100">
        <Card className="w-full max-w-lg bg-white/80 backdrop-blur-sm border-emerald-200 shadow-lg p-6 text-center">
          <CardContent>
            <p className="text-red-600 mb-4">No hay runas para interpretar en la lista.</p>
            <Button onClick={onVolver} className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white">
              Volver
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-emerald-50 to-lime-100 flex flex-col items-center py-4 px-2"> {/* Restore a bit of padding */}
      <div className="container mx-auto max-w-4xl w-full px-0 sm:px-0 md:px-0"> {/* Adjusted max-w back to 4xl for better readability on desktop, removed horizontal padding */}
        <Card className="bg-white/80 backdrop-blur-sm border-emerald-200 shadow-lg p-4 flex flex-col min-h-[calc(100vh-40px)]"> {/* Increased card padding, Added min-h and flex-col */}
          <CardHeader className="text-center pb-4"> {/* Increased bottom padding */}
            <CardTitle className="text-3xl font-serif text-emerald-950 mb-2">
              Interpretación de Runas
            </CardTitle>
          </CardHeader>

          {/* MAIN SCROLL AREA FOR ALL RUNE CONTENT */}
          {/* flex-grow para que ocupe todo el espacio disponible.
              min-h-0 es crucial para que flex-grow funcione correctamente con contenido con scroll.
              overflow-y-auto asegura el scroll si el contenido excede el espacio. */}
          <ScrollArea className="flex-grow min-h-0 px-4"> {/* Add horizontal padding here for content */}
            <CardContent className="space-y-8 pt-0 pb-4"> {/* Increased space-y between rune blocks. No top padding here as scrollarea has it. */}

              {runas.map((runa, index) => (
                <div key={runa.id} className="w-full">
                  <h2 className="text-2xl font-serif text-emerald-900 mb-4 text-center">
                    {runa.nombre} ({runa.unicode})
                  </h2>

                  <div className="space-y-3 text-emerald-800 text-base leading-relaxed"> {/* p-0 removed, space-y increased */}
                    <p>
                      <span className="font-semibold">Significado:</span> {runa.significadoDerecho}
                    </p>
                    {runa.significadoInvertido && (
                      <>
                        <Separator className="my-2 bg-emerald-200" />
                        <p>
                          <span className="font-semibold">Invertida:</span> {runa.significadoInvertido}
                        </p>
                      </>
                    )}
                    <Separator className="my-2 bg-emerald-200" />
                    <p>
                      <span className="font-semibold">Simbolismo:</span> {runa.simbolismo}
                    </p>
                    <Separator className="my-2 bg-emerald-200" />
                    <p>
                      <span className="font-semibold">Palabras Clave:</span> {runa.palabrasClave.join(', ')}
                    </p>
                    <Separator className="my-2 bg-emerald-200" />
                    <p>
                      <span className="font-semibold">Contexto Histórico:</span> {runa.contextoHistorico}
                    </p>
                    <Separator className="my-2 bg-emerald-200" />
                    <p>
                      <span className="font-semibold">Elemento Asociado:</span> {runa.elementoAsociado}
                    </p>
                    <Separator className="my-2 bg-emerald-200" />
                    <p>
                      <span className="font-semibold">Dioses:</span> {runa.dioses.join(', ')}
                    </p>
                    {runa.correspondenciaAstrologica && (
                      <>
                        <Separator className="my-2 bg-emerald-200" />
                        <p>
                          <span className="font-semibold">Correspondencia Astrológica:</span> {runa.correspondenciaAstrologica}
                        </p>
                      </>
                    )}
                    {runa.piedraAsociada && (
                      <>
                        <Separator className="my-2 bg-emerald-200" />
                        <p>
                          <span className="font-semibold">Piedra Asociada:</span> {runa.piedraAsociada}
                        </p>
                      </>
                    )}
                    {runa.plantaAsociada && (
                      <>
                        <Separator className="my-2 bg-emerald-200" />
                        <p>
                          <span className="font-semibold">Planta Asociada:</span> {runa.plantaAsociada}
                        </p>
                      </>
                    )}
                    <Separator className="my-2 bg-emerald-200" />
                    <p>
                      <span className="font-semibold">Color Asociado:</span> {runa.colorAsociado}
                    </p>
                    <Separator className="my-2 bg-emerald-200" />
                    <p>
                      <span className="font-semibold">Interpretación Amorosa:</span> {runa.interpretacionAmorosa}
                    </p>
                    <Separator className="my-2 bg-emerald-200" />
                    <p>
                      <span className="font-semibold">Interpretación Laboral:</span> {runa.interpretacionLaboral}
                    </p>
                    <Separator className="my-2 bg-emerald-200" />
                    <p>
                      <span className="font-semibold">Interpretación Salud:</span> {runa.interpretacionSalud}
                    </p>
                    <Separator className="my-2 bg-emerald-200" />
                    <p>
                      <span className="font-semibold">Interpretación Espiritual:</span> {runa.interpretacionEspiritual}
                    </p>
                    <Separator className="my-2 bg-emerald-200" />
                    <p>
                      <span className="font-semibold">Consejo Práctico:</span> {runa.consejoPractico}
                    </p>
                    <Separator className="my-2 bg-emerald-200" />
                    <p>
                      <span className="font-semibold">Meditación Sugerida:</span> {runa.meditacionSugerida}
                    </p>
                    <Separator className="my-2 bg-emerald-200" />
                    <p>
                      <span className="font-semibold">Afinidad con otras Runas:</span> {runa.afinidadOtrasRunas.join(', ')}
                    </p>
                    {runa.orden !== undefined && (
                      <>
                        <Separator className="my-2 bg-emerald-200" />
                        <p>
                          <span className="font-semibold">Número Sagrado:</span> {runa.orden}
                        </p>
                      </>
                    )}
                    {runa.estacion && (
                      <>
                        <Separator className="my-2 bg-emerald-200" />
                        <p>
                          <span className="font-semibold">Estación:</span> {runa.estacion}
                        </p>
                      </>
                    )}
                  </div>
                  {/* Separador más grande entre diferentes runas */}
                  {index < runas.length - 1 && <Separator className="my-8 bg-emerald-400 h-0.5" />} {/* Increased separation */}
                </div>
              ))}
            </CardContent>
          </ScrollArea>

          {/* Botón fuera del ScrollArea para que siempre esté visible */}
          <div className="p-4 pt-2 border-t border-emerald-200"> {/* Add padding and a top border */}
            <Button
              onClick={onVolver}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
            >
              Volver a Selección de Runas
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default InterpretacionRunasLista;