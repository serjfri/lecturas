// src/components/CartaSelector.tsx

import React, { useState, useMemo, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Copy, Trash, Undo2 } from "lucide-react";
import { Tirada, CartaSeleccionada } from '@/pages/Index'; // Adjust path if needed
import { useToast } from "@/hooks/use-toast";

import { cardNames } from '@/data/cardNames';

interface CartaSelectorProps {
  tirada: Tirada;
  baraja: 'tradicional' | 'osho'; // This prop will always be set when CartaSelector is rendered
  cartasSeleccionadas: CartaSeleccionada[];
  onCartaAdd: (carta: CartaSeleccionada) => void;
  onCartaToggle: (posicion: number) => void;
  onVolver: () => void;
  onInterpretarCartas: () => void;
  onLimpiarCartas: () => void;
  onDeshacerUltimaCarta: () => void;
  puedeIrAInterpretacion: boolean;
  modoLibre: boolean;
  onCambiarBaraja?: (baraja: 'tradicional' | 'osho') => void; // Keep this prop for internal resets
}

const CartaSelector: React.FC<CartaSelectorProps> = ({
  tirada,
  baraja, // This prop will now always have a value when CartaSelector is mounted
  cartasSeleccionadas,
  onCartaAdd,
  onCartaToggle,
  onVolver,
  onInterpretarCartas,
  onLimpiarCartas,
  onDeshacerUltimaCarta,
  puedeIrAInterpretacion,
  modoLibre,
  onCambiarBaraja // Keep this to allow internal resetting of selected cards if baraja changes
}) => {
  const [posicionActual, setPosicionActual] = useState(1);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<'mayores' | 'menores' | null>(null);
  const [letraSeleccionada, setLetraSeleccionada] = useState<string>('');
  const [paloSeleccionado, setPaloSeleccionado] = useState<string>('');
  const { toast } = useToast();

  const [cartaPendiente, setCartaPendiente] = useState<{
    id: string;
    nombre: string;
    posicion: number;
  } | null>(null);

  const arcanosMayores = useMemo(() =>
    cardNames.filter(c =>
      c.baraja === 'tradicional' &&
      (
        c.id.startsWith('el-') ||
        c.id.startsWith('la-') ||
        c.id.startsWith('los-') ||
        c.id === 'el-colgado' ||
        c.id === 'la-muerte' ||
        c.id === 'la-templanza' ||
        c.id === 'el-diablo' ||
        c.id === 'la-torre' ||
        c.id === 'la-estrella' ||
        c.id === 'la-luna' ||
        c.id === 'el-sol' ||
        c.id === 'el-juicio' ||
        c.id === 'el-mundo'
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

  const cartasOsho = useMemo(() => cardNames.filter(c => c.baraja === 'osho'), []);

  const getFirstLetterForSorting = (name: string): string => {
    const cleanedName = name
      .replace(/^(El|La|Los|Las)\s+/i, '')
      .trim();
    return cleanedName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").charAt(0).toUpperCase();
  };

  const getLetrasArcanosMayores = useMemo(() => {
    const letters = new Set<string>();
    arcanosMayores.forEach(carta => {
      letters.add(getFirstLetterForSorting(carta.name));
    });
    return Array.from(letters).sort();
  }, [arcanosMayores]);

  const getLetrasOsho = useMemo(() => {
    const letters = new Set<string>();
    cartasOsho.forEach(carta => {
      letters.add(getFirstLetterForSorting(carta.name));
    });
    return Array.from(letters).sort();
  }, [cartasOsho]);

  const palos = ['Bastos', 'Copas', 'Espadas', 'Oros'];

  useEffect(() => {
    console.log("--- DEBUG CARTASELECTOR DATOS ---");
    console.log("CardNames cargados:", cardNames.length);
    console.log("Arcanos Mayores filtrados:", arcanosMayores.length, arcanosMayores);
    console.log("Arcanos Menores filtrados:", arcanosMenores.length, arcanosMenores);
    console.log("Cartas Osho filtradas:", cartasOsho.length, cartasOsho);
    console.log("Letras Arcanos Mayores:", getLetrasArcanosMayores);
    console.log("Letras Osho:", getLetrasOsho);
    console.log("--- FIN DEBUG CARTASELECTOR DATOS ---");
  }, [arcanosMayores, arcanosMenores, cartasOsho, getLetrasArcanosMayores, getLetrasOsho]);

  const filtrarCartasPorLetra = (letra: string, barajaActual: 'tradicional' | 'osho', categoria: 'mayores' | null) => {
    if (barajaActual === 'osho') {
      return cartasOsho
        .filter(carta => getFirstLetterForSorting(carta.name) === letra)
        .sort((a, b) => a.name.localeCompare(b.name));
    } else if (barajaActual === 'tradicional' && categoria === 'mayores') {
      return arcanosMayores
        .filter(carta => getFirstLetterForSorting(carta.name) === letra)
        .sort((a, b) => a.name.localeCompare(b.name));
    }
    return [];
  };

  const getCartaMenorDisplay = (name: string): string => {
    if (name.match(/\bAs\b/i)) return 'As';
    if (name.match(/\bDos\b/i)) return '2';
    if (name.match(/\bTres\b/i)) return '3';
    if (name.match(/\bCuatro\b/i)) return '4';
    if (name.match(/\bCinco\b/i)) return '5';
    if (name.match(/\bSeis\b/i)) return '6';
    if (name.match(/\bSiete\b/i)) return '7';
    if (name.match(/\bOcho\b/i)) return '8';
    if (name.match(/\bNueve\b/i)) return '9';
    if (name.match(/\bDiez\b/i)) return '10';
    if (name.match(/\bSota\b/i)) return 'Sota';
    if (name.match(/\bCaballero\b/i)) return 'Caballero';
    if (name.match(/\bReina\b/i)) return 'Reina';
    if (name.match(/\bRey\b/i)) return 'Rey';

    return name;
  };

  const filtrarCartasPorPalo = (palo: string) => {
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

    const asToFive = cartasDelPalo.filter(c => ['As', 'Dos', 'Tres', 'Cuatro', 'Cinco'].some(n => c.name.includes(n)));
    const sixToTen = cartasDelPalo.filter(c => ['Seis', 'Siete', 'Ocho', 'Nueve', 'Diez'].some(n => c.name.includes(n)));
    const sotaCaballero = cartasDelPalo.filter(c => ['Sota', 'Caballero'].some(n => c.name.includes(n)));
    const reinaRey = cartasDelPalo.filter(c => ['Reina', 'Rey'].some(n => c.name.includes(n)));

    return { asToFive, sixToTen, sotaCaballero, reinaRey };
  };

  const obtenerSiguientePosicion = () => {
    if (modoLibre) {
      return cartasSeleccionadas.length + 1;
    } else {
      for (let i = 1; i <= tirada.numeroCartas; i++) {
        if (!cartasSeleccionadas.some(c => c.posicion === i)) {
          return i;
        }
      }
      return posicionActual;
    }
  };

  const handleCartaSelect = (idCarta: string) => {
    if (baraja === 'tradicional') {
      const nombreCarta = getCardNameById(idCarta);
      const posicion = obtenerSiguientePosicion();

      setCartaPendiente({
        id: idCarta,
        nombre: nombreCarta,
        posicion: posicion
      });
    } else {
      const posicion = obtenerSiguientePosicion();
      const nuevaCarta: CartaSeleccionada = {
        posicion: posicion,
        carta: idCarta,
        invertida: false,
        baraja: baraja
      };

      onCartaAdd(nuevaCarta);

      toast({
        title: "Carta añadida",
        description: `${getCardNameById(idCarta)} ha sido añadida.`,
      });

      if (!modoLibre && posicion < tirada.numeroCartas) {
        setPosicionActual(posicion + 1);
      }
    }

    if (categoriaSeleccionada === 'menores') {
      setPaloSeleccionado('');
    } else {
      setLetraSeleccionada('');
    }
  };

  const confirmarCartaConPosicion = (invertida: boolean) => {
    if (!cartaPendiente) return;

    const nuevaCarta: CartaSeleccionada = {
      posicion: cartaPendiente.posicion,
      carta: cartaPendiente.id,
      invertida: invertida,
      baraja: baraja
    };

    onCartaAdd(nuevaCarta);

    toast({
      title: "Carta añadida",
      description: `${cartaPendiente.nombre} (${invertida ? 'Invertida' : 'Al Derecho'}) ha sido añadida.`,
    });

    if (!modoLibre && cartaPendiente.posicion < tirada.numeroCartas) {
      setPosicionActual(cartaPendiente.posicion + 1);
    }

    setCartaPendiente(null);
  };

  const cancelarSeleccionCarta = () => {
    setCartaPendiente(null);
  };

  const handleDoubleClick = (posicion: number) => {
    if (baraja === 'tradicional') {
      onCartaToggle(posicion);
    }
  };

  // REMOVIDA la función handleCambiarBaraja de este componente
  // Ahora CartaSelector recibe la baraja ya pre-seleccionada de Index.tsx
  // Si necesitas que un cambio de baraja desde *dentro* de CartaSelector
  // limpie las cartas, puedes llamarlo a través de la prop `onCambiarBaraja`
  // que viene del padre, pero no se utiliza para la selección inicial aquí.

  const getCardNameById = (id: string) => {
    const card = cardNames.find(c => c.id === id);
    return card ? card.name : id;
  };

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
      await navigator.clipboard.writeText(lista);
      toast({
        title: "Lista copiada",
        description: "La lista de cartas se ha copiado al portapapeles",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo copiar la lista al portapapeles",
        variant: "destructive",
      });
    }
  };

  const posicionActualData = modoLibre
    ? { nombre: `Carta ${obtenerSiguientePosicion()}`, descripcion: 'Selecciona una carta' }
    : tirada.posiciones.find(p => p.numero === obtenerSiguientePosicion());

  const cartasPorGruposDePalo = paloSeleccionado ? filtrarCartasPorPalo(paloSeleccionado) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-serif text-emerald-900 mb-2">
              Selecciona las Cartas
            </h2>
            <p className="text-emerald-700">
              {tirada.nombre}
            </p>
          </div>

          {/* Progreso de selección */}
          {!modoLibre && (
            <Card className="bg-emerald-50/50 border-emerald-200">
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-emerald-900 font-medium">
                    Progreso: {cartasSeleccionadas.length}/{tirada.numeroCartas} cartas
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

          {/* Posición actual */}
          {posicionActualData && (
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-emerald-900">
                  {posicionActualData.nombre}
                </CardTitle>
                <p className="text-emerald-600">{posicionActualData.descripcion}</p>
              </CardHeader>
            </Card>
          )}

          {/* **MODIFICADO:** Mostrar la baraja seleccionada (solo en modo libre) */}
          {modoLibre && (
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-emerald-900">Baraja Seleccionada</CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  variant="default"
                  // CAMBIADO: Reducimos la altura y el ancho para que no sea tan dominante
                  className="h-10 px-4 py-2 text-sm w-auto" // <-- ESTA ES LA LÍNEA CLAVE
                  disabled // Deshabilitado porque ya está seleccionada
                >
                  {baraja === 'tradicional' ? 'Tarot Tradicional' : 'Tarot de Osho'}
                </Button>
                {/* Puedes añadir un botón para cambiar la baraja aquí si quieres que se pueda,
                    pero llamaría a onCambiarBaraja y limpiaría la selección */}
                {/* Ejemplo:
                <Button
                  variant="outline"
                  className="h-10 mt-2 w-full text-sm" // Si lo añades, también ajústale el tamaño
                  onClick={() => {
                    if (onCambiarBaraja) {
                      onCambiarBaraja(baraja === 'tradicional' ? 'osho' : 'tradicional');
                    }
                  }}
                >
                  Cambiar a {baraja === 'tradicional' ? 'Osho' : 'Tradicional'}
                </Button>
                */}
              </CardContent>
            </Card>
          )}


          {/* Selección de cartas */}
          <Card className="bg-white/80 backdrop-blur-sm border-emerald-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-emerald-900">Seleccionar Carta</CardTitle>
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
                  {/* Botones para seleccionar categoría: SOLO se muestran si no hay categoría, letra o palo seleccionado */}
                  {!categoriaSeleccionada && !letraSeleccionada && !paloSeleccionado && (
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
                  )}

                  {/* Selección de Arcanos Mayores por Letra */}
                  {categoriaSeleccionada === 'mayores' && !letraSeleccionada && (
                    <>
                      <label className="block text-sm font-medium text-emerald-900 mb-2">
                        Primera letra
                      </label>
                      <div className="space-y-2 max-w-2xl mx-auto">
                        <div className="grid grid-cols-6 gap-2">
                          {getLetrasArcanosMayores.slice(0, 6).map((letra) => (
                            <Button
                              key={letra}
                              variant="outline"
                              className="h-12 text-center text-base flex items-center justify-center font-medium"
                              onClick={() => setLetraSeleccionada(letra)}
                            >
                              {letra}
                            </Button>
                          ))}
                        </div>
                        <div className="grid grid-cols-5 gap-2 max-w-lg mx-auto">
                          {getLetrasArcanosMayores.slice(6).map((letra) => (
                            <Button
                              key={letra}
                              variant="outline"
                              className="h-12 text-center text-base flex items-center justify-center font-medium"
                              onClick={() => setLetraSeleccionada(letra)}
                            >
                              {letra}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Selección de Arcanos Menores por Palo: Mostrar si categoría es 'menores' Y no hay palo seleccionado */}
                  {categoriaSeleccionada === 'menores' && !paloSeleccionado && (
                    <>
                      <label className="block text-sm font-medium text-emerald-900 mb-2">
                        Palo
                      </label>
                      <div className="grid gap-1 grid-cols-4">
                        {palos.map((palo) => (
                          <Button
                            key={palo}
                            variant={paloSeleccionado === palo ? "default" : "outline"}
                            className="h-9 text-sm p-1"
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
                  <div className="space-y-2 max-w-2xl mx-auto">
                    <div className="grid grid-cols-6 gap-2">
                      {getLetrasOsho.slice(0, 6).map((letra) => (
                        <Button
                          key={letra}
                          variant="outline"
                          className="h-12 text-center text-base flex items-center justify-center font-medium"
                          onClick={() => setLetraSeleccionada(letra)}
                        >
                          {letra}
                        </Button>
                      ))}
                    </div>
                    <div className="grid grid-cols-6 gap-2">
                      {getLetrasOsho.slice(6, 12).map((letra) => (
                        <Button
                          key={letra}
                          variant="outline"
                          className="h-12 text-center text-base flex items-center justify-center font-medium"
                          onClick={() => setLetraSeleccionada(letra)}
                        >
                          {letra}
                        </Button>
                      ))}
                    </div>
                    <div className="grid grid-cols-5 gap-2 max-w-lg mx-auto">
                      {getLetrasOsho.slice(12).map((letra) => (
                        <Button
                          key={letra}
                          variant="outline"
                          className="h-12 text-center text-base flex items-center justify-center font-medium"
                          onClick={() => setLetraSeleccionada(letra)}
                        >
                          {letra}
                        </Button>
                      ))}
                    </div>
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
                                className="h-10 w-12 p-0 text-center hover:bg-emerald-50 hover:border-emerald-400 text-sm"
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
                                className="h-10 w-12 p-0 text-center hover:bg-emerald-50 hover:border-emerald-400 text-sm"
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
                                className="h-10 w-16 p-0 text-center hover:bg-emerald-50 hover:border-emerald-400 text-xs"
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
                                className="h-10 w-16 p-0 text-center hover:bg-emerald-50 hover:border-emerald-400 text-xs"
                                onClick={() => handleCartaSelect(carta.id)}
                              >
                                {getCartaMenorDisplay(carta.name)}
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (

                      <div className="flex flex-wrap gap-2 justify-center">
                        {(baraja === 'tradicional'
                          ? filtrarCartasPorLetra(letraSeleccionada, baraja, categoriaSeleccionada === 'mayores' ? 'mayores' : null)
                          : filtrarCartasPorLetra(letraSeleccionada, baraja, null)
                        ).map((carta) => (
                          <Button
                            key={carta.id}
                            variant="outline"
                            className="h-12 min-w-32 px-3 text-center hover:bg-emerald-50 hover:border-emerald-400 text-sm"
                            onClick={() => handleCartaSelect(carta.id)}
                          >
                            {carta.name}
                          </Button>
                        ))}
                      </div>)}
                  </div>
                )}

              {/* Botón para volver atrás cuando hay selecciones */}
              {(categoriaSeleccionada || letraSeleccionada || paloSeleccionado) && (
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
                  className="w-full"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Volver
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Diálogo de selección de posición */}
          {cartaPendiente && (
            <Card className="bg-white/95 backdrop-blur-sm border-amber-200 shadow-lg max-w-xs mx-auto">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-amber-900 text-center">
                  Seleccionar Posición
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-sm text-amber-700 mb-2">
                    {posicionActualData?.nombre || `Posición ${cartaPendiente.posicion}`}
                  </p>
                  <p className="font-medium text-amber-900 text-lg">
                    {cartaPendiente.nombre}
                  </p>
                </div>

                <div className="grid gap-2 grid-cols-2">
                  <Button
                    onClick={() => confirmarCartaConPosicion(false)}
                    className="h-12 w-full text-sm bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    Al Derecho
                  </Button>

                  <Button
                    onClick={() => confirmarCartaConPosicion(true)}
                    variant="destructive"
                    className="h-12 w-full text-sm"
                  >
                    Invertida
                  </Button>
                </div>

                <Button
                  variant="outline"
                  onClick={cancelarSeleccionCarta}
                  className="w-full"
                >
                  Cancelar
                </Button>
              </CardContent>
            </Card>
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
                            {cartaSeleccionada.invertida && (
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
            <Button
              variant="outline"
              onClick={onVolver}
              className="flex-1"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>

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
    </div>
  );
};

export default CartaSelector;