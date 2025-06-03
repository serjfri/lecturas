// src/components/InterpretacionCartas.tsx
import React, { useEffect } from 'react'; // Asegúrate de importar useEffect
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";
import { Tirada, CartaSeleccionada } from '@/pages/Index';

// --- IMPORTACIONES DE DATOS Y TIPOS DESDE LOS ARCHIVOS DE DATOS ---
import { traditionalMeanings, TraditionalCardMeaning } from '@/data/traditionalMeanings';
import { oshoMeanings, OshoCardMeaning } from '@/data/oshoMeanings';
// --- FIN DE IMPORTACIONES DE DATOS Y TIPOS ---

// Extiende el tipo de retorno para incluir las nuevas propiedades
interface InterpretacionCartaResult {
  nombre: string;
  significado: string;
  interpretacion: string;
  elemento?: string;
  palabrasClave?: string[];
  arquetipo?: string;
  meditacionReflexion?: { preguntas: string[] };
  arcano?: string;
  numero?: number;
  planeta?: string;
  signoAstrologico?: string;
  numerologia?: string;
  simbolismo?: string;
}

interface InterpretacionCartasProps {
  tirada: Tirada;
  cartasSeleccionadas: CartaSeleccionada[];
  onVolver: () => void;
  modoLibre: boolean;
  baraja: 'tradicional' | 'osho'; // <--- ESTO ES LO QUE FALTABA
}

const InterpretacionCartas: React.FC<InterpretacionCartasProps> = ({
  tirada,
  cartasSeleccionadas,
  onVolver,
  modoLibre,
  baraja // Asegúrate de desestructurar la prop aquí
}) => {
  // *** INICIO DE BLOQUE DE DEPURACIÓN - NO ELIMINAR HASTA QUE SE RESUELVA EL PROBLEMA ***
  useEffect(() => {
    console.log(">>> DEP_LOG_INTERPRETACION: Componente InterpretacionCartas montado o actualizado.");
    console.log(">>> DEP_LOG_INTERPRETACION: Prop 'cartasSeleccionadas' recibida:", cartasSeleccionadas);
    console.log(">>> DEP_LOG_INTERPRETACION: Estado de traditionalMeanings (raw):", traditionalMeanings);
    console.log(">>> DEP_LOG_INTERPRETACION: Longitud de traditionalMeanings:", traditionalMeanings ? traditionalMeanings.length : 'undefined/null');
    console.log(">>> DEP_LOG_INTERPRETACION: Prop 'baraja' recibida:", baraja); // Depuración de la nueva prop

    // Si traditionalMeanings no se ha cargado o está vacío
    if (!traditionalMeanings || traditionalMeanings.length === 0) {
      console.error(">>> DEP_LOG_INTERPRETACION: ERROR CRÍTICO: traditionalMeanings está vacío o no se cargó correctamente.");
      // Opcional: debugger; // Descomenta para pausar aquí si quieres inspeccionar
    } else {
      console.log(">>> DEP_LOG_INTERPRETACION: Primer elemento de traditionalMeanings:", traditionalMeanings[0]);
    }

    // Depuración de cada carta seleccionada
    if (cartasSeleccionadas && cartasSeleccionadas.length > 0) {
      cartasSeleccionadas.forEach((carta, index) => {
        console.log(`>>> DEP_LOG_INTERPRETACION: Carta seleccionada ${index + 1}:`, carta);
        console.log(`>>> DEP_LOG_INTERPRETACION: ID de la carta seleccionada ${index + 1} (${carta.baraja}): "${carta.carta}"`);

        // Intenta encontrar la carta en los datos para verificar coincidencia de ID
        // *** AQUI TAMBIEN NORMALIZAMOS PARA EL LOG DE DEPURACION ***
        const normalizedIdForDebug = carta.carta.toLowerCase().replace(/_/g, '-');

        if (carta.baraja === 'tradicional') {
          const found = traditionalMeanings.find(c => c.id === normalizedIdForDebug);
          console.log(`>>> DEP_LOG_INTERPRETACION: Coincidencia ENCONTRADA EN traditionalMeanings para "${normalizedIdForDebug}":`, !!found);
          if (!found) {
            console.warn(`>>> DEP_LOG_INTERPRETACION: ADVERTENCIA: La carta "${normalizedIdForDebug}" (tradicional) NO SE ENCONTRÓ en traditionalMeanings DESPUÉS DE NORMALIZAR.`);
            console.warn(`>>> DEP_LOG_INTERPRETACION: POSIBLE CAUSA: El ID NORMALIZADO no existe en los datos.`);
          }
        } else if (carta.baraja === 'osho') {
          const found = oshoMeanings.find(c => c.id === normalizedIdForDebug);
          console.log(`>>> DEP_LOG_INTERPRETACION: Coincidencia ENCONTRADA EN oshoMeanings para "${normalizedIdForDebug}":`, !!found);
          if (!found) {
            console.warn(`>>> DEP_LOG_INTERPRETACION: ADVERTENCIA: La carta "${normalizedIdForDebug}" (osho) NO SE ENCONTRÓ en oshoMeanings DESPUÉS DE NORMALIZAR.`);
            console.warn(`>>> DEP_LOG_INTERPRETACION: POSIBLE CAUSA: El ID NORMALIZADO no existe en los datos.`);
          }
        }
      });
    } else {
      console.log(">>> DEP_LOG_INTERPRETACION: No hay cartas seleccionadas en el prop 'cartasSeleccionadas'.");
    }

    console.log(">>> DEP_LOG_INTERPRETACION: Fin de depuración en InterpretacionCartas.");
  }, [cartasSeleccionadas, tirada, baraja]); // Asegurarse de que el efecto se re-ejecute si cambian estas props
  // *** FIN DE BLOQUE DE DEPURACIÓN ***


  const getInterpretacionCarta = (cartaId: string, invertida: boolean, currentBaraja: 'tradicional' | 'osho'): InterpretacionCartaResult => {
    // console.log(`DEBUG: Buscando carta: ${cartaId}, Invertida: ${invertida}, Baraja: ${baraja}`); // Debug temporal

    // *** MODIFICACIÓN CLAVE AQUÍ: NORMALIZAR EL ID DE LA CARTA ***
    const normalizedCartaId = cartaId.toLowerCase().replace(/_/g, '-'); 
    console.log(`>>> DEP_LOG_INTERPRETACION: Carta ID ORIGINAL: "${cartaId}" -> ID NORMALIZADO para búsqueda: "${normalizedCartaId}"`);


    if (currentBaraja === 'tradicional') {
      // Usa el ID normalizado para la búsqueda
      const interp = traditionalMeanings.find(c => c.id === normalizedCartaId) as TraditionalCardMeaning | undefined;

      if (interp) {
        return {
          nombre: interp.nombre,
          significado: invertida ? interp.significadoInvertido : interp.significadoDerecho,
          interpretacion: invertida ? interp.detalleInvertido : interp.detalleDerecho,
          elemento: interp.elemento,
          palabrasClave: invertida ? interp.palabrasClaveInvertidas : interp.palabrasClaveDerechas,
          arquetipo: interp.arquetipo,
          meditacionReflexion: interp.meditacionReflexion,
          arcano: interp.arcano,
          numero: interp.numero,
          planeta: interp.planeta,
          signoAstrologico: interp.signoAstrologico,
          numerologia: interp.numerologia,
          simbolismo: interp.simbolismo,
        };
      }
    } else { // Baraja Osho
      // Haz lo mismo para la baraja Osho
      const interp = oshoMeanings.find(c => c.id === normalizedCartaId) as OshoCardMeaning | undefined;

      if (interp) {
        return {
          nombre: interp.nombre,
          significado: interp.significado,
          interpretacion: interp.comentario,
          elemento: undefined, // Osho no tiene estas propiedades en el mismo formato
          palabrasClave: undefined,
          arquetipo: undefined,
          meditacionReflexion: undefined,
          arcano: undefined,
          numero: undefined,
          planeta: undefined,
          signoAstrologico: undefined,
          numerologia: undefined,
          simbolismo: undefined,
        };
      }
    }

    // Caso de carta no encontrada (esto debería ocurrir mucho menos ahora)
    console.error(`>>> DEP_ERROR: Carta con ID normalizado "${normalizedCartaId}" no encontrada en la baraja "${currentBaraja}".`);
    return {
      nombre: 'Carta Desconocida',
      significado: 'Significado no encontrado',
      interpretacion: 'Detalle no encontrado para esta carta. Por favor, verifica los archivos de datos.',
      elemento: undefined,
      palabrasClave: undefined,
      arquetipo: undefined,
      meditacionReflexion: undefined,
      arcano: undefined,
      numero: undefined,
      planeta: undefined,
      signoAstrologico: undefined,
      numerologia: undefined,
      simbolismo: undefined,
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-serif text-purple-900 mb-2">
              Interpretación de Cartas
            </h2>
            <p className="text-purple-700">
              {tirada.nombre}
            </p>
            {modoLibre && (
              <Badge variant="outline" className="mt-2 bg-purple-100">
                Selección Libre
              </Badge>
            )}
          </div>

          {/* Resumen de la tirada */}
          <Card className="bg-white/80 backdrop-blur-sm border-purple-200">
            <CardHeader>
              <CardTitle className="text-xl text-purple-900">
                Resumen de la Lectura
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-700">
                    {cartasSeleccionadas.length}
                  </div>
                  <div className="text-purple-600 text-sm">
                    {cartasSeleccionadas.length === 1 ? 'Carta' : 'Cartas'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-700">
                    {baraja === 'tradicional' ? 'Tradicional' : 'Osho'} {/* Usa la prop 'baraja' */}
                  </div>
                  <div className="text-purple-600 text-sm">
                    Tipo de Baraja
                  </div>
                </div>
                {baraja === 'tradicional' && ( // Solo muestra esto para baraja tradicional
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-700">
                      {cartasSeleccionadas.filter(c => c.invertida).length}
                    </div>
                    <div className="text-purple-600 text-sm">
                      Cartas Invertidas
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Interpretación de cada carta */}
          <div className="space-y-4">
            {cartasSeleccionadas
              .sort((a, b) => a.posicion - b.posicion)
              .map((carta) => {
                const posicionData = tirada.posiciones.find(p => p.numero === carta.posicion);
                // Pasa la prop 'baraja' a getInterpretacionCarta para asegurar la búsqueda correcta
                const interpretacion = getInterpretacionCarta(carta.carta, carta.invertida, baraja);

                return (
                  <Card key={carta.posicion} className="bg-white/80 backdrop-blur-sm border-purple-200">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg text-purple-900">
                            {posicionData?.nombre || `Carta ${carta.posicion}`}
                            <span className="block text-sm font-normal text-purple-500 mt-1">
                              {interpretacion.nombre}
                            </span>
                          </CardTitle>
                          <p className="text-purple-600 text-sm mt-1">
                            {posicionData?.descripcion}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge
                            variant={carta.invertida && baraja === 'tradicional' ? "destructive" : "default"} // Usa la prop 'baraja'
                            className="mb-1"
                          >
                            {interpretacion.nombre}
                          </Badge>
                          {carta.invertida && baraja === 'tradicional' && ( // Usa la prop 'baraja'
                            <div className="text-xs text-red-600">Invertida</div>
                          )}
                          {baraja === 'tradicional' && interpretacion.elemento && ( // Usa la prop 'baraja'
                            <div className="text-xs text-purple-500 mt-0.5">
                              Elemento: {interpretacion.elemento}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {/* Nueva sección: Información Básica */}
                        {baraja === 'tradicional' && (interpretacion.arcano || interpretacion.numero !== undefined || interpretacion.elemento || interpretacion.planeta || interpretacion.signoAstrologico || interpretacion.numerologia) && (
                          <div>
                            <h4 className="font-medium text-purple-900 mb-1">Información Básica:</h4>
                            <ul className="text-purple-700 text-sm space-y-0.5">
                              {interpretacion.arcano && <li><strong>Arcano:</strong> {interpretacion.arcano}</li>}
                              {interpretacion.numero !== undefined && <li><strong>Número:</strong> {interpretacion.numero}</li>}
                              {interpretacion.elemento && <li><strong>Elemento:</strong> {interpretacion.elemento}</li>}
                              {interpretacion.planeta && <li><strong>Planeta:</strong> {interpretacion.planeta}</li>}
                              {interpretacion.signoAstrologico && <li><strong>Signo Astrológico:</strong> {interpretacion.signoAstrologico}</li>}
                              {interpretacion.numerologia && <li><strong>Numerología:</strong> {interpretacion.numerologia}</li>}
                            </ul>
                          </div>
                        )}

                        {/* Simbolismo */}
                        {baraja === 'tradicional' && interpretacion.simbolismo && ( // Usa la prop 'baraja'
                          <div>
                            <h4 className="font-medium text-purple-900 mb-1">Simbolismo:</h4>
                            <p className="text-purple-700" dangerouslySetInnerHTML={{ __html: interpretacion.simbolismo }}></p>
                          </div>
                        )}

<div>
  <h4 className="font-medium text-purple-900 mb-1">Significado:</h4>
  {/* Changed <p> to <div>, added 'prose' */}
  <div className="text-purple-700 prose max-w-none" dangerouslySetInnerHTML={{ __html: interpretacion.significado }}></div>
</div>
<div>
  <h4 className="font-medium text-purple-900 mb-1">Comentario:</h4>
  {/* Changed <p> to <div>, added 'prose' */}
  <div className="text-purple-700 prose prose-purple max-w-none" dangerouslySetInnerHTML={{ __html: interpretacion.interpretacion }}></div>
</div>
                        {interpretacion.palabrasClave && interpretacion.palabrasClave.length > 0 && (
                          <div>
                            <h4 className="font-medium text-purple-900 mb-1">Palabras Clave:</h4>
                            <p className="text-purple-700">{interpretacion.palabrasClave.join(', ')}</p>
                          </div>
                        )}
                        {interpretacion.arquetipo && (
                          <div>
                            <h4 className="font-medium text-purple-900 mb-1">Arquetipo:</h4>
                            <p className="text-purple-700">{interpretacion.arquetipo}</p>
                          </div>
                        )}

                        {/* Sección de Meditación y Reflexión */}
                        {baraja === 'tradicional' && interpretacion.meditacionReflexion && interpretacion.meditacionReflexion.preguntas.length > 0 && ( // Usa la prop 'baraja'
                          <div>
                            <h4 className="font-medium text-purple-900 mb-1">Meditación y Reflexión:</h4>
                            <ul className="list-disc list-inside text-purple-700 space-y-1">
                              {interpretacion.meditacionReflexion.preguntas.map((pregunta, index) => (
                                <li key={index}>{pregunta}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
          </div>

          {/* Botón volver */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="text-purple-700 border-purple-300 hover:bg-purple-50"
              onClick={onVolver}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Volver a Selección
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterpretacionCartas;