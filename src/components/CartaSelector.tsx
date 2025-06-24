import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Trash, Undo2, CheckCircle } from "lucide-react";
import { Tirada, CartaSeleccionada } from '@/types/tarot';
import { useToast } from "@/hooks/use-toast";

import { cardNames } from '@/data/cardNames';

interface CartaSelectorProps {
  tirada: Tirada;
  baraja: 'tradicional' | 'osho';
  cartasSeleccionadas: CartaSeleccionada[];
  onCartaAdd: (carta: CartaSeleccionada) => void;
  onCartaToggle: (posicion: number) => void;
  onVolver: () => void;
  onInterpretarCartas: () => void;
  onLimpiarCartas: () => void;
  onDeshacerUltimaCarta: () => void;
  puedeIrAInterpretacion: boolean;
  modoLibre: boolean;
  onCambiarBaraja?: (baraja: 'tradicional' | 'osho') => void;
}

const CartaSelector: React.FC<CartaSelectorProps> = ({
  tirada,
  baraja,
  cartasSeleccionadas,
  onCartaAdd,
  onCartaToggle,
  onVolver,
  onInterpretarCartas,
  onLimpiarCartas,
  onDeshacerUltimaCarta,
  puedeIrAInterpretacion,
  modoLibre,
  onCambiarBaraja
}) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<'mayores' | 'menores' | null>(null);
  const [letraSeleccionada, setLetraSeleccionada] = useState<string>('');
  const [paloSeleccionado, setPaloSeleccionado] = useState<string>('');
  const { toast } = useToast();

  const [cartaPendiente, setCartaPendiente] = useState<{
    id: string;
    nombre: string;
    posicion: number;
  } | null>(null);

  // Helper to get a cleaned name for sorting (removes articles and accents)
  const getCleanedName = useCallback((name: string): string => {
    return name
      .replace(/^(El|La|Los|Las)\s+/i, '')
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove accents
      .toLowerCase() // Convert to lower case for consistent comparison
      .trim();
  }, []);

  // Memoized lists of cards for efficiency
  const arcanosMayores = useMemo(() =>
    cardNames.filter(c =>
      c.baraja === 'tradicional' &&
      (
        c.id.startsWith('el-') ||
        c.id.startsWith('la-') ||
        c.id.startsWith('los-') ||
        ['el-colgado', 'la-muerte', 'la-templanza', 'el-diablo', 'la-torre', 'la-estrella', 'la-luna', 'el-sol', 'el-juicio', 'el-mundo', 'el-loco'].includes(c.id)
      )
    ),
    []
  );

  const arcanosMenores = useMemo(() =>
    cardNames.filter(c =>
      c.baraja === 'tradicional' &&
      (
        c.id.includes('-de-bastos') ||
        c.id.includes('-de-copas') ||
        c.id.includes('-de-espadas') ||
        c.id.includes('-de-oros')
      )
    ),
    []
  );

  // MODIFIED: Osho cards are now sorted by their "cleaned" name globally
  const cartasOsho = useMemo(() => {
    return cardNames.filter(c => c.baraja === 'osho').sort((a, b) =>
      getCleanedName(a.name).localeCompare(getCleanedName(b.name))
    );
  }, [getCleanedName]);

  // Helper to get first letter for display grouping (uses cleaned name)
  const getFirstLetterForSorting = useCallback((name: string): string => {
    // This is primarily for grouping by initial letter, after cleaning for sorting
    const cleanedNameForLetter = name
      .replace(/^(El|La|Los|Las)\s+/i, '')
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove accents
      .trim();
    return cleanedNameForLetter.charAt(0).toUpperCase() || '#';
  }, []);

  const getLetrasArcanosMayores = useMemo(() => {
    const letters = new Set<string>();
    arcanosMayores.forEach(carta => {
      letters.add(getFirstLetterForSorting(carta.name));
    });
    return Array.from(letters).sort();
  }, [arcanosMayores, getFirstLetterForSorting]);

  const getLetrasOsho = useMemo(() => {
    const letters = new Set<string>();
    // Iterate over the already sorted cartasOsho
    cartasOsho.forEach(carta => {
      letters.add(getFirstLetterForSorting(carta.name));
    });
    return Array.from(letters).sort();
  }, [cartasOsho, getFirstLetterForSorting]);

  const palos = ['Bastos', 'Copas', 'Espadas', 'Oros'];

  // MOVED: getCardNameById definition moved higher to ensure it's initialized before usage
  const getCardNameById = useCallback((id: string) => {
    const card = cardNames.find(c => c.id === id);
    return card ? card.name : id;
  }, []);

  // Debugging log for memoized data
  useEffect(() => {
    console.log("--- DEBUG CARTASELECTOR DATOS ---");
    console.log("CardNames cargados:", cardNames.length);
    console.log("Arcanos Mayores filtrados:", arcanosMayores.length, arcanosMayores.map(c => c.name));
    console.log("Arcanos Menores filtrados:", arcanosMenores.length, arcanosMenores.map(c => c.name));
    console.log("Cartas Osho filtradas:", cartasOsho.length, cartasOsho.map(c => c.name));
    console.log("Letras Arcanos Mayores:", getLetrasArcanosMayores);
    console.log("Letras Osho:", getLetrasOsho);
    console.log("--- FIN DEBUG CARTASELECTOR DATOS ---");
  }, [arcanosMayores, arcanosMenores, cartasOsho, getLetrasArcanosMayores, getLetrasOsho]);

  // Filters cards by selected letter or category/suit
  const filtrarCartasPorLetra = useCallback((letra: string, barajaActual: 'tradicional' | 'osho', categoria: 'mayores' | null) => {
    if (barajaActual === 'osho') {
      // For Osho, simply filter the already globally sorted list
      return cartasOsho.filter(carta => getFirstLetterForSorting(carta.name) === letra);
    } else if (barajaActual === 'tradicional' && categoria === 'mayores') {
      return arcanosMayores
        .filter(carta => getFirstLetterForSorting(carta.name) === letra)
        .sort((a, b) => a.name.localeCompare(b.name));
    }
    return [];
  }, [cartasOsho, arcanosMayores, getFirstLetterForSorting]);

  // Helper for displaying minor arcana numbers/figures
  const getCartaMenorDisplay = (name: string): string => {
    if (name.includes('As')) return 'As';
    if (name.includes('Dos')) return '2';
    if (name.includes('Tres')) return '3';
    if (name.includes('Cuatro')) return '4';
    if (name.includes('Cinco')) return '5';
    if (name.includes('Seis')) return '6';
    if (name.includes('Siete')) return '7';
    if (name.includes('Ocho')) return '8';
    if (name.includes('Nueve')) return '9';
    if (name.includes('Diez')) return '10';
    if (name.includes('Sota')) return 'Sota';
    if (name.includes('Caballero')) return 'Caballero';
    if (name.includes('Reina')) return 'Reina';
    if (name.includes('Rey')) return 'Rey';
    return name;
  };

  // Filters minor arcana by suit and groups them for display
  const filtrarCartasPorPalo = useCallback((palo: string) => {
    const paloID = palo.toLowerCase();
    const cartasDelPalo = arcanosMenores
      .filter(carta => carta.id.includes(`-de-${paloID}`))
      .sort((a, b) => {
        const getSortValue = (name: string) => {
          if (name.includes('As')) return 1;
          if (name.includes('Dos')) return 2;
          if (name.includes('Tres')) return 3;
          if (name.includes('Cuatro')) return 4;
          if (name.includes('Cinco')) return 5;
          if (name.includes('Seis')) return 6;
          if (name.includes('Siete')) return 7;
          if (name.includes('Ocho')) return 8;
          if (name.includes('Nueve')) return 9;
          if (name.includes('Diez')) return 10;
          if (name.includes('Sota')) return 11;
          if (name.includes('Caballero')) return 12;
          if (name.includes('Reina')) return 13;
          if (name.includes('Rey')) return 14;
          return 99;
        };
        return getSortValue(a.name) - getSortValue(b.name);
      });

    return {
      asToFive: cartasDelPalo.filter(c => ['As', 'Dos', 'Tres', 'Cuatro', 'Cinco'].some(n => c.name.includes(n))),
      sixToTen: cartasDelPalo.filter(c => ['Seis', 'Siete', 'Ocho', 'Nueve', 'Diez'].some(n => c.name.includes(n))),
      sotaCaballero: cartasDelPalo.filter(c => ['Sota', 'Caballero'].some(n => c.name.includes(n))),
      reinaRey: cartasDelPalo.filter(c => ['Reina', 'Rey'].some(n => c.name.includes(n))),
    };
  }, [arcanosMenores]);

  // Determine the next position to select a card for
  const obtenerSiguientePosicion = useCallback((): number => {
    if (modoLibre) {
      return cartasSeleccionadas.length + 1;
    } else {
      for (let i = 1; i <= tirada.numeroCartas; i++) {
        if (!cartasSeleccionadas.some(c => c.posicion === i)) {
          return i;
        }
      }
      return cartasSeleccionadas.length + 1; // Fallback, though should be covered by `puedeIrAInterpretacion`
    }
  }, [modoLibre, cartasSeleccionadas, tirada.numeroCartas]);

  // Handles selection of a specific card ID
  const handleCartaSelect = useCallback((idCarta: string) => {
    const posicion = obtenerSiguientePosicion();
    const nombreCarta = getCardNameById(idCarta);

    if (baraja === 'tradicional') {
      // For traditional, prompt for upright/reversed
      setCartaPendiente({
        id: idCarta,
        nombre: nombreCarta,
        posicion: posicion
      });
    } else {
      // Osho cards are always upright
      const nuevaCarta: CartaSeleccionada = {
        posicion: posicion,
        carta: idCarta,
        invertida: false,
        baraja: baraja
      };
      onCartaAdd(nuevaCarta);
toast({
        description: (
          <span className="text-sm">Carta "{nombreCarta}" añadida.</span> // Quita el div y el icono, y pon text-sm aquí
        ),
        duration: 1500, // Duración más corta
        className: "toast-compact", // ¡AÑADE ESTA LÍNEA!
      });

      // Clear filters after selection to prepare for next card
      if (categoriaSeleccionada === 'menores') {
        setPaloSeleccionado('');
      } else {
        setLetraSeleccionada('');
      }
      setCategoriaSeleccionada(null);
    }
  }, [baraja, obtenerSiguientePosicion, onCartaAdd, toast, categoriaSeleccionada, getCardNameById, setLetraSeleccionada]);

  // Confirms the card for traditional deck after upright/reversed choice
  const confirmarCartaConPosicion = useCallback((invertida: boolean) => {
    if (!cartaPendiente) return;

    const nuevaCarta: CartaSeleccionada = {
      posicion: cartaPendiente.posicion,
      carta: cartaPendiente.id,
      invertida: invertida,
      baraja: baraja
    };

    onCartaAdd(nuevaCarta);

toast({
      description: (
        <span className="text-sm">Carta "{cartaPendiente.nombre}" {invertida ? 'invertida' : 'al derecho'} añadida.</span> // Quita el div y el icono, y pon text-sm aquí
      ),
      duration: 1500, // Duración más corta
      className: "toast-compact", // ¡AÑADE ESTA LÍNEA!
    });

    setCartaPendiente(null);
    // Clear filters after selection to prepare for next card
    if (categoriaSeleccionada === 'menores') {
      setPaloSeleccionado('');
    } else {
      setLetraSeleccionada('');
    }
    setCategoriaSeleccionada(null);
  }, [cartaPendiente, onCartaAdd, toast, baraja, categoriaSeleccionada, setLetraSeleccionada]);

  const cancelarSeleccionCarta = useCallback(() => {
    setCartaPendiente(null);
  }, []);

  const handleDoubleClick = useCallback((posicion: number) => {
    if (baraja === 'tradicional') {
      onCartaToggle(posicion);
      toast({
        description: (
          <div className="flex items-center gap-2">
            <span>Posición de carta {posicion} cambiada.</span>
          </div>
        ),
        duration: 1500,
      });
    }
  }, [baraja, onCartaToggle, toast]);

  const copiarListaCartas = async () => {
    const lista = cartasSeleccionadas
      .sort((a, b) => a.posicion - b.posicion)
      .map((carta, index) => {
        const nombreDisplay = getCardNameById(carta.carta);
        let prefix = '';

        if (modoLibre) {
          prefix = `${index + 1}. `;
        } else {
          const posicionData = tirada.posiciones.find(p => p.numero === carta.posicion);
          prefix = `${index + 1}. ${posicionData?.nombre || `Carta ${carta.posicion}`}: `;
        }

        return `${prefix}${nombreDisplay}${carta.invertida ? ' (Invertida)' : ''}`;
      })
      .join('\n');

    try {
      // document.execCommand('copy') is used as navigator.clipboard.writeText()
      // might not work due to iframe restrictions in some environments.
      const textarea = document.createElement('textarea');
      textarea.value = lista;
      textarea.style.position = 'fixed'; // Avoid scrolling to bottom
      textarea.style.opacity = '0'; // Hide it
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);

      toast({
        title: "Lista copiada",
        description: "La lista de cartas se ha copiado al portapapeles",
        duration: 2500,
      });
    } catch (error) {
      console.error("Error al copiar al portapapeles:", error);
      toast({
        title: "Error",
        description: "No se pudo copiar la lista al portapapeles",
        variant: "destructive",
        duration: 2500,
      });
    }
  };


  const posicionActualDisplayNum = obtenerSiguientePosicion();
  const posicionActualData = modoLibre
    ? { nombre: `Carta ${posicionActualDisplayNum}`, descripcion: 'Selecciona una carta' }
    : tirada.posiciones.find(p => p.numero === posicionActualDisplayNum);

  const cartasPorGruposDePalo = paloSeleccionado ? filtrarCartasPorPalo(paloSeleccionado) : null;


  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 py-8 px-4">


      <div className="container mx-auto max-w-4xl space-y-6 pt-16"> {/* Añadido padding-top para el botón fijo */}

        {/* Progreso de selección */}
        {!modoLibre && (
          <Card className="bg-emerald-50/50 border-emerald-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-emerald-900 font-medium">
                  Progreso: {cartasSeleccionadas.length}/{tirada.numeroCartas} cartas
                </span>
                <span className="text-sm text-emerald-700">
                  Siguiente: {posicionActualData?.nombre || `Carta ${posicionActualDisplayNum}`}
                </span>
              </div>
              <div className="w-full bg-emerald-200 rounded-full h-2">
                <div
                  className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(cartasSeleccionadas.length / tirada.numeroCartas) * 100}%` }}
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Selección de cartas */}
        <Card className="bg-white/80 backdrop-blur-sm border-emerald-200">
          <CardHeader className="pb-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-2">
              <CardTitle className="text-xl text-emerald-900">Seleccionar Carta</CardTitle>
            </div>
            <div className="flex flex-wrap gap-2">
              {categoriaSeleccionada && (
                <Badge variant="outline" className="bg-emerald-100">
                  {categoriaSeleccionada === 'mayores' ? 'Arcanos Mayores' : 'Arcanos Menores'}
                </Badge>
              )}
              {letraSeleccionada && (
                <Badge variant="outline" className="bg-emerald-100">
                  Letra {letraSeleccionada}
                </Badge>
              )}
              {paloSeleccionado && (
                <Badge variant="outline" className="bg-emerald-100">
                  Palo {paloSeleccionado}
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Sección de selección para Tarot Tradicional */}
            {baraja === 'tradicional' && (
              <div className="space-y-4">
                {/* Botones para seleccionar categoría: SIEMPRE se muestran ahora */}
                <div className="grid gap-2 grid-cols-2">
                  <Button
                    variant={categoriaSeleccionada === 'mayores' ? "default" : "outline"}
                    className="h-10 text-sm"
                    onClick={() => {
                      setCategoriaSeleccionada('mayores');
                      setLetraSeleccionada('');
                      setPaloSeleccionado('');
                    }}
                  >
                    Arcanos Mayores
                  </Button>
                  <Button
                    variant={categoriaSeleccionada === 'menores' ? "default" : "outline"}
                    className="h-10 text-sm"
                    onClick={() => {
                      setCategoriaSeleccionada('menores');
                      setLetraSeleccionada('');
                      setPaloSeleccionado('');
                    }}
                  >
                    Arcanos Menores
                  </Button>
                </div>

                {/* Selección de Arcanos Mayores por Letra */}
                {categoriaSeleccionada === 'mayores' && !letraSeleccionada && (
                  <>
                    <label className="block text-sm font-medium text-emerald-900 mb-2">
                      Primera letra
                    </label>
                    <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 gap-2">
                      {getLetrasArcanosMayores.map((letra) => (
                        <Button
                          key={letra}
                          variant="outline"
                          className="h-12 w-12 text-center text-base flex items-center justify-center font-medium"
                          onClick={() => setLetraSeleccionada(letra)}
                        >
                          {letra}
                        </Button>
                      ))}
                    </div>
                  </>
                )}

                {/* Selección de Arcanos Menores por Palo: Mostrar si categoría es 'menores' Y no hay palo seleccionado */}
                {categoriaSeleccionada === 'menores' && !paloSeleccionado && (
                  <>
                    <label className="block text-sm font-medium text-emerald-900 mb-2">
                      Palo
                    </label>
                    <div className="grid gap-2 grid-cols-2 sm:grid-cols-4">
                      {palos.map((palo) => (
                        <Button
                          key={palo}
                          variant={paloSeleccionado === palo ? "default" : "outline"}
                          className="h-10 text-sm"
                          onClick={() => setPaloSeleccionado(palo)}
                        >
                          {palo}
                        </Button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Sección de selección para Tarot de Osho (con botones de letra) */}
            {baraja === 'osho' && !letraSeleccionada && (
              <>
                <label className="block text-sm font-medium text-emerald-900 mb-2">
                  Primera letra
                </label>
                {/* MODIFIED: Adjusted grid for Osho letter buttons for better distribution */}
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 gap-2">
                  {getLetrasOsho.map((letra) => (
                    <Button
                      key={letra}
                      variant="outline"
                      className="h-12 w-12 text-center text-base flex items-center justify-center font-medium"
                      onClick={() => setLetraSeleccionada(letra)}
                    >
                      {letra}
                    </Button>
                  ))}
                </div>
              </>
            )}

            {/* Cartas filtradas por letra o palo: Mostrar si hay letra O palo seleccionado */}
            {((baraja === 'tradicional' && (letraSeleccionada || paloSeleccionado)) ||
              (baraja === 'osho' && letraSeleccionada)) && (
                <div>
                  <label className="block text-sm font-medium text-emerald-900 mb-2">
                    Cartas disponibles
                  </label>
                  {baraja === 'tradicional' && categoriaSeleccionada === 'menores' && paloSeleccionado && cartasPorGruposDePalo ? (
                    <div className="space-y-2">
                      {/* Fila: As, 2, 3, 4, 5 */}
                      {cartasPorGruposDePalo.asToFive.length > 0 && (
                        <div className="flex flex-wrap gap-1 justify-center">
                          {cartasPorGruposDePalo.asToFive.map((carta) => (
                            <Button
                              key={carta.id}
                              variant="outline"
                              // Adjusted size for minor arcana numbers/faces
                              className="h-9 w-12 p-0 text-center hover:bg-emerald-50 hover:border-emerald-400 text-xs"
                              onClick={() => handleCartaSelect(carta.id)}
                            >
                              {getCartaMenorDisplay(carta.name)}
                            </Button>
                          ))}
                        </div>
                      )}
                      {/* Fila: 6, 7, 8, 9, 10 */}
                      {cartasPorGruposDePalo.sixToTen.length > 0 && (
                        <div className="flex flex-wrap gap-1 justify-center">
                          {cartasPorGruposDePalo.sixToTen.map((carta) => (
                            <Button
                              key={carta.id}
                              variant="outline"
                              // Adjusted size for minor arcana numbers/faces
                              className="h-9 w-12 p-0 text-center hover:bg-emerald-50 hover:border-emerald-400 text-xs"
                              onClick={() => handleCartaSelect(carta.id)}
                            >
                              {getCartaMenorDisplay(carta.name)}
                            </Button>
                          ))}
                        </div>
                      )}

                      {/* Fila: Sota, Caballero */}
                      {cartasPorGruposDePalo.sotaCaballero.length > 0 && (
                        <div className="flex flex-wrap gap-1 justify-center">
                          {cartasPorGruposDePalo.sotaCaballero.map((carta) => (
                            <Button
                              key={carta.id}
                              variant="outline"
                              // Adjusted size for minor arcana numbers/faces
                              className="h-9 w-16 p-0 text-center hover:bg-emerald-50 hover:border-emerald-400 text-xs"
                              onClick={() => handleCartaSelect(carta.id)}
                            >
                              {getCartaMenorDisplay(carta.name)}
                            </Button>
                          ))}
                        </div>
                      )}

                      {/* Fila: Reina, Rey */}
                      {cartasPorGruposDePalo.reinaRey.length > 0 && (
                        <div className="flex flex-wrap gap-1 justify-center">
                          {cartasPorGruposDePalo.reinaRey.map((carta) => (
                            <Button
                              key={carta.id}
                              variant="outline"
                              // Adjusted size for minor arcana numbers/faces
                              className="h-9 w-16 p-0 text-center hover:bg-emerald-50 hover:border-emerald-400 text-xs"
                              onClick={() => handleCartaSelect(carta.id)}
                            >
                              {getCartaMenorDisplay(carta.name)}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                      {filtrarCartasPorLetra(letraSeleccionada, baraja, categoriaSeleccionada === 'mayores' ? 'mayores' : null)
                        .map((carta) => (
                          <Button
                            key={carta.id}
                            variant="outline"
                            // Adjusted size for Osho card name buttons
                            className="flex flex-col items-center justify-center p-1 text-center font-medium rounded-lg border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 hover:border-emerald-500 transition-all duration-200 cursor-pointer h-10 text-sm sm:h-12 sm:text-base w-full"
                            onClick={() => handleCartaSelect(carta.id)}
                          >
                            <span className="font-semibold text-emerald-900 text-sm sm:text-base">{carta.name}</span>
                          </Button>
                        ))}
                    </div>
                  )}
                </div>
              )}

            {/* Este botón ya no es necesario aquí, el botón fijo lo reemplaza */}
            {/* {(categoriaSeleccionada || letraSeleccionada || paloSeleccionado) && (
              <Button
                variant="outline"
                onClick={() => {
                  if (paloSeleccionado) {
                    setPaloSeleccionado('');
                  } else if (letraSeleccionada) {
                    setLetraSeleccionada('');
                  } else if (categoriaSeleccionada) {
                    setCategoriaSeleccionada(null);
                  }
                }}
                className="w-full mt-4"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>
            )} */}
          </CardContent>
        </Card>

        {/* Diálogo mini de selección de posición */}
{cartaPendiente && (
  <div className="bg-white/95 backdrop-blur-sm border border-amber-200 rounded-lg shadow-lg max-w-xs mx-auto fixed inset-x-0 bottom-4 z-50 p-3">
    <p className="text-center text-xs text-amber-900 mb-2 font-medium">
      {cartaPendiente.nombre}
    </p>
    
    <div className="flex gap-1">
      <Button
        onClick={() => confirmarCartaConPosicion(false)}
        className="flex-1 h-8 text-xs bg-emerald-600 hover:bg-emerald-700 text-white"
      >
        Derecho
      </Button>
      <Button
        onClick={() => confirmarCartaConPosicion(true)}
        variant="destructive"
        className="flex-1 h-8 text-xs"
      >
        Invertida
      </Button>
      <Button
        variant="outline"
        onClick={cancelarSeleccionCarta}
        className="w-8 h-8 text-xs p-0"
      >
        ✕
      </Button>
    </div>
  </div>
)}

        {/* Cartas seleccionadas */}
        {cartasSeleccionadas.length > 0 && (
          <Card className="bg-white/80 backdrop-blur-sm border-emerald-200">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg text-emerald-900">
                  Cartas Seleccionadas ({cartasSeleccionadas.length})
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copiarListaCartas}
                  className="hover:bg-emerald-50"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copiar Lista
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {cartasSeleccionadas
                  .sort((a, b) => a.posicion - b.posicion)
                  .map((cartaSeleccionada) => {
                    const posicionData = modoLibre
                      ? { nombre: `Carta ${cartaSeleccionada.posicion}`, descripcion: '' }
                      : tirada.posiciones.find(p => p.numero === cartaSeleccionada.posicion);

                    return (
                      <div
                        key={cartaSeleccionada.posicion}
                        className={`p-3 rounded-lg border transition-all cursor-pointer hover:shadow-md ${
                          cartaSeleccionada.invertida
                            ? 'bg-red-50 border-red-200'
                            : 'bg-emerald-50 border-emerald-200'
                        }`}
                        onDoubleClick={() => handleDoubleClick(cartaSeleccionada.posicion)}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-xs font-medium text-emerald-900">
                            {posicionData?.nombre || `Posición ${cartaSeleccionada.posicion}`}
                          </span>
                          {cartaSeleccionada.invertida && baraja === 'tradicional' && (
                            <Badge variant="destructive" className="text-xs">
                              Invertida
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm font-medium text-emerald-900">
                          {getCardNameById(cartaSeleccionada.carta)}
                        </p>
                        {baraja === 'tradicional' && (
                          <p className="text-xs text-emerald-600 mt-1">
                            Doble clic para {cartaSeleccionada.invertida ? 'enderezar' : 'invertir'}
                          </p>
                        )}
                      </div>
                    );
                  })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Este botón ya no es necesario aquí, el botón fijo lo reemplaza */}
          {/* <Button
            variant="outline"
            onClick={onVolver}
            className="flex-1"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Volver
          </Button> */}

          {cartasSeleccionadas.length > 0 && (
            <>
              <Button
                variant="outline"
                onClick={onDeshacerUltimaCarta}
                className="flex-1"
              >
                <Undo2 className="w-4 h-4 mr-2" />
                Deshacer Última
              </Button>

              <Button
                variant="destructive"
                onClick={onLimpiarCartas}
                className="flex-1"
              >
                <Trash className="w-4 h-4 mr-2" />
                Limpiar Todo
              </Button>
            </>
          )}

          {puedeIrAInterpretacion && (
            <Button
              onClick={onInterpretarCartas}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700"
            >
              Interpretar Cartas
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartaSelector;