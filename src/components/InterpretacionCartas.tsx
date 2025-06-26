import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// MODIFIED IMPORT: ChevronLeft is no longer needed as the local back button is removed
// import { ChevronLeft } from "lucide-react";
// MODIFIED IMPORT: Interfaces are now imported from '@/types/tarot'
import { Tirada, CartaSeleccionada } from '@/types/tarot';

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
  baraja: 'tradicional' | 'osho';
}

const InterpretacionCartas: React.FC<InterpretacionCartasProps> = ({
  tirada,
  cartasSeleccionadas,
  onVolver,
  modoLibre,
  baraja
}) => {
  // *** INICIO DE BLOQUE DE DEPURACIÓN - NO ELIMINAR HASTA QUE SE RESUELVA EL PROBLEMA ***
  useEffect(() => {
    console.log(">>> DEP_LOG_INTERPRETACION: Componente InterpretacionCartas montado o actualizado.");
    console.log(">>> DEP_LOG_INTERPRETACION: Prop 'cartasSeleccionadas' recibida:", cartasSeleccionadas);
    console.log(">>> DEP_LOG_INTERPRETACION: Estado de traditionalMeanings (raw):", traditionalMeanings);
    console.log(">>> DEP_LOG_INTERPRETACION: Longitud de traditionalMeanings:", traditionalMeanings ? traditionalMeanings.length : 'undefined/null');
    console.log(">>> DEP_LOG_INTERPRETACION: Prop 'baraja' recibida:", baraja);

    if (!traditionalMeanings || traditionalMeanings.length === 0) {
      console.error(">>> DEP_LOG_INTERPRETACION: ERROR CRÍTICO: traditionalMeanings está vacío o no se cargó correctamente.");
    } else {
      console.log(">>> DEP_LOG_INTERPRETACION: Primer elemento de traditionalMeanings:", traditionalMeanings[0]);
    }

    if (cartasSeleccionadas && cartasSeleccionadas.length > 0) {
      cartasSeleccionadas.forEach((carta, index) => {
        console.log(`>>> DEP_LOG_INTERPRETACION: Carta seleccionada ${index + 1}:`, carta);
        console.log(`>>> DEP_LOG_INTERPRETACION: ID de la carta seleccionada ${index + 1} (${carta.baraja}): "${carta.carta}"`);

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
  }, [cartasSeleccionadas, tirada, baraja]);
  // *** FIN DE BLOQUE DE DEPURACIÓN ***


  const getInterpretacionCarta = (cartaId: string, invertida: boolean, currentBaraja: 'tradicional' | 'osho'): InterpretacionCartaResult => {
    const normalizedCartaId = cartaId.toLowerCase().replace(/_/g, '-');
    console.log(`>>> DEP_LOG_INTERPRETACION: Carta ID ORIGINAL: "${cartaId}" -> ID NORMALIZADO para búsqueda: "${normalizedCartaId}"`);


    if (currentBaraja === 'tradicional') {
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
          simbolismo: interp.simbolismo, // Asegúrate de que esto se pase correctamente
        };
      }
    } else { // Baraja Osho
      const interp = oshoMeanings.find(c => c.id === normalizedCartaId) as OshoCardMeaning | undefined;

      if (interp) {
        return {
          nombre: interp.nombre,
          significado: interp.significado,
          interpretacion: interp.comentario,
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
      }
    }

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
    // Ampliado el padding vertical del contenedor principal a py-12
    // Ajustado el padding horizontal a px-8 (si aún no es suficiente, se puede subir a px-6 o px-4)
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 py-12 px-8">
      {/* ELIMINADO: Botón de retroceder local */}

      {/* MODIFICADO: Ahora usa max-w-full para ocupar todo el ancho disponible del padre,
          y mx-auto para centrar. El padding horizontal se gestiona en el div exterior.
          Se ha aumentado el espacio vertical entre secciones a space-y-12 */}
      <div className="max-w-full mx-auto space-y-12"> {/* max-w-full para que ocupe más ancho */}
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

        {/* Resumen de la tirada - ELIMINADO CardHeader y ajustado CardContent */}
        <Card className="bg-white/80 backdrop-blur-sm border-purple-200">
          {/* ELIMINADO: CardHeader completo */}
          <CardContent className="py-4"> {/* Reducido padding vertical para ser más compacto */}
            {/* Solo se muestra el conteo de cartas, centrado y con texto más pequeño */}
            <div className="flex justify-center items-center">
              <div className="text-center">
                <div className="text-base font-bold text-purple-700"> {/* Texto del número */}
                  {cartasSeleccionadas.length}
                </div>
                <div className="text-purple-600 text-xs"> {/* Texto descriptivo */}
                  {cartasSeleccionadas.length === 1 ? 'Carta seleccionada' : 'Cartas seleccionadas'}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interpretación de cada carta - Se mantiene space-y-6 para las cards individuales */}
        <div className="space-y-8"> {/* Aumentado el espacio entre las cartas individuales a space-y-8 */}
          {cartasSeleccionadas
            .sort((a, b) => a.posicion - b.posicion)
            .map((carta) => {
              const posicionData = modoLibre
                ? { nombre: `Carta ${carta.posicion}`, descripcion: '' }
                : tirada.posiciones.find(p => p.numero === carta.posicion);

              const interpretacion = getInterpretacionCarta(carta.carta, carta.invertida, baraja);

              return (
                <Card key={carta.posicion} className="bg-white/80 backdrop-blur-sm border-purple-200">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        {/* Título de la carta (posición y nombre de la carta) - Aumentado a text-xl y text-purple-950 */}
                        <CardTitle className="text-xl text-purple-950">
                          {posicionData?.nombre || `Carta ${carta.posicion}`}
                          <span className="block text-base font-normal text-purple-500 mt-1">
                            {interpretacion.nombre}
                          </span>
                        </CardTitle>
                        <p className="text-purple-600 text-base mt-1">
                          {posicionData?.descripcion}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={carta.invertida && baraja === 'tradicional' ? "destructive" : "default"}
                          className="mb-1 text-base"
                        >
                          {interpretacion.nombre}
                        </Badge>
                        {carta.invertida && baraja === 'tradicional' && (
                          <div className="text-xs text-red-600">Invertida</div>
                        )}
                        {baraja === 'tradicional' && interpretacion.elemento && (
                          <div className="text-sm text-purple-500 mt-0.5">
                            Elemento: {interpretacion.elemento}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  {/* AUMENTADO: espaciado dentro de CardContent a space-y-6 */}
                  <CardContent className="space-y-6">
                    {/* Nueva sección: Información Básica */}
                    {baraja === 'tradicional' && (interpretacion.arcano || interpretacion.numero !== undefined || interpretacion.elemento || interpretacion.planeta || interpretacion.signoAstrologico || interpretacion.numerologia) && (
                      <div>
                        {/* Epígrafe "Información Básica" - Más grande y oscuro */}
                        <h4 className="text-lg font-semibold text-purple-950 mb-1">Información Básica:</h4>
                        <ul className="text-purple-700 text-sm space-y-0.5">
                          {interpretacion.arcano && <li><strong className="text-purple-800">Arcano:</strong> {interpretacion.arcano}</li>}
                          {interpretacion.numero !== undefined && <li><strong className="text-purple-800">Número:</strong> {interpretacion.numero}</li>}
                          {interpretacion.elemento && <li><strong className="text-purple-800">Elemento:</strong> {interpretacion.elemento}</li>}
                          {interpretacion.planeta && <li><strong className="text-purple-800">Planeta:</strong> {interpretacion.planeta}</li>}
                          {interpretacion.signoAstrologico && <li><strong className="text-purple-800">Signo Astrológico:</strong> {interpretacion.signoAstrologico}</li>}
                          {interpretacion.numerologia && <li><strong className="text-purple-800">Numerología:</strong> {interpretacion.numerologia}</li>}
                        </ul>
                      </div>
                    )}

                    {/* Simbolismo */}
                    {baraja === 'tradicional' && interpretacion.simbolismo && (
                      <div>
                        {/* Epígrafe "Simbolismo" - Más grande y oscuro */}
                        <h4 className="text-lg font-semibold text-purple-950 mb-1">Simbolismo:</h4>
                        <p className="text-purple-700 text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: interpretacion.simbolismo }}></p>
                      </div>
                    )}

                    {/* Significado */}
                    <div>
                      {/* Epígrafe "Significado" - Más grande y oscuro */}
                      <h4 className="text-lg font-semibold text-purple-950 mb-1">Significado:</h4>
                      <div className="text-purple-700 text-base leading-relaxed prose max-w-none" dangerouslySetInnerHTML={{ __html: interpretacion.significado }}></div>
                    </div>

                    {/* Comentario */}
                    <div>
                      {/* Epígrafe "Comentario" - Más grande y oscuro */}
                      <h4 className="text-lg font-semibold text-purple-950 mb-1">Comentario:</h4>
                      <div className="text-purple-700 text-base leading-relaxed prose prose-purple max-w-none" dangerouslySetInnerHTML={{ __html: interpretacion.interpretacion }}></div>
                    </div>

                    {/* Palabras Clave */}
                    {interpretacion.palabrasClave && interpretacion.palabrasClave.length > 0 && (
                      <div>
                        {/* Epígrafe "Palabras Clave" - Más grande y oscuro */}
                        <h4 className="text-lg font-semibold text-purple-950 mb-1">Palabras Clave:</h4>
                        <p className="text-purple-700 text-base leading-relaxed">{interpretacion.palabrasClave.join(', ')}</p>
                      </div>
                    )}

                    {/* Arquetipo */}
                    {interpretacion.arquetipo && (
                      <div>
                        {/* Epígrafe "Arquetipo" - Más grande y oscuro */}
                        <h4 className="text-lg font-semibold text-purple-950 mb-1">Arquetipo:</h4>
                        <p className="text-purple-700 text-base leading-relaxed">{interpretacion.arquetipo}</p>
                      </div>
                    )}

                    {/* Sección de Meditación y Reflexión */}
                    {baraja === 'tradicional' && interpretacion.meditacionReflexion && interpretacion.meditacionReflexion.preguntas.length > 0 && (
                      <div>
                        {/* Epígrafe "Meditación y Reflexión" - Más grande y oscuro */}
                        <h4 className="text-lg font-semibold text-purple-950 mb-1">Meditación y Reflexión:</h4>
                        <ul className="list-disc list-inside text-purple-700 text-base leading-relaxed space-y-1">
                          {interpretacion.meditacionReflexion.preguntas.map((pregunta, index) => (
                            <li key={index}>{pregunta}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default InterpretacionCartas;