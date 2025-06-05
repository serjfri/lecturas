import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Layers, BookOpenText, Activity } from "lucide-react";
import { Link } from 'react-router-dom';

import CartaSelector from '@/components/CartaSelector';
import TiradaSelector from '@/components/TiradaSelector';
import InterpretacionCartas from '@/components/InterpretacionCartas';
import BackButton from '@/components/BackButton'; // Asegúrate de tener este import si BackButton es un componente separado

// NUEVAS IMPORTACIONES para Runas
import RunaSelector from '@/components/RunaSelector';
import InterpretacionRunas from '@/components/InterpretacionRunas';
import { RunaMeaning } from '@/data/runaMeanings'; // Importa la interfaz RunaMeaning

export interface Posicion {
  numero: number;
  nombre: string;
  descripcion: string;
  x?: number;
  y?: number;
}

export interface Tirada {
  id: string;
  nombre: string;
  descripcion: string;
  numeroCartas: number;
  posiciones: Posicion[];
}

export interface CartaSeleccionada {
  posicion: number;
  carta: string;
  invertida: boolean;
  baraja: 'tradicional' | 'osho';
}

const tiradaLibreBase: Tirada = {
  id: 'libre',
  nombre: 'Selección Libre',
  descripcion: 'Selecciona las cartas que desees sin un patrón específico',
  numeroCartas: 1,
  posiciones: [
    {
      numero: 1,
      nombre: 'Carta 1',
      descripcion: 'Selecciona la primera carta libre',
    }
  ]
};

const Index = () => {
  // **MODIFICADO:** Añadimos 'runasOptions', 'runas', 'interpretacionRunas' a los tipos de vista.
  const [vistaActual, setVistaActual] = useState<'inicio' | 'seleccionLibre' | 'tiradas' | 'cartas' | 'interpretacion' | 'seleccionBarajaLibre' | 'tarotOptions' | 'runasOptions' | 'runas' | 'interpretacionRunas'>('inicio');
  const [tiradaSeleccionada, setTiradaSeleccionada] = useState<Tirada | null>(null);
  const [barajaSeleccionada, setBarajaSeleccionada] = useState<'tradicional' | 'osho'>('tradicional');
  const [cartasSeleccionadas, setCartasSeleccionadas] = useState<CartaSeleccionada[]>([]);
  const [modoLibre, setModoLibre] = useState(false);

  const [posicionActualParaSelector, setPosicionActualParaSelector] = useState(0);

  // NUEVO ESTADO: para la runa que se va a interpretar
  const [selectedRunaForInterpretation, setSelectedRunaForInterpretation] = useState<RunaMeaning | null>(null);

  useEffect(() => {
    if (vistaActual === 'cartas' && !modoLibre && tiradaSeleccionada) {
      setPosicionActualParaSelector(0);
    } else if (vistaActual === 'cartas' && modoLibre) {
      setPosicionActualParaSelector(cartasSeleccionadas.length);
    }
  }, [vistaActual, modoLibre, tiradaSeleccionada, cartasSeleccionadas.length]);

  // **NUEVA FUNCIÓN:** Para mostrar las opciones de Tarot
  const handleShowTarotOptions = () => {
    setVistaActual('tarotOptions');
  };

  // **NUEVA FUNCIÓN:** Para mostrar las opciones de Runas
  const handleShowRunasOptions = () => {
    setVistaActual('runasOptions');
  };

  // NUEVA FUNCIÓN: Para manejar la selección de una runa desde RunaSelector y pasarla a InterpretacionRunas
  const handleSelectRunaForInterpretation = (runa: RunaMeaning) => {
    setSelectedRunaForInterpretation(runa);
    setVistaActual('interpretacionRunas');
  };

  const handleSeleccionLibre = () => {
    setModoLibre(true);
    setTiradaSeleccionada({ ...tiradaLibreBase, numeroCartas: 1 });
    setCartasSeleccionadas([]);
    setVistaActual('seleccionBarajaLibre');
    setPosicionActualParaSelector(0);
  };

  const handleSeleccionTiradas = () => {
    setModoLibre(false);
    setVistaActual('tiradas');
  };

  const handleBarajaLibreSelect = (baraja: 'tradicional' | 'osho') => {
    setBarajaSeleccionada(baraja);
    setVistaActual('cartas');
  };

  const handleTiradaSelect = (tirada: Tirada, baraja: 'tradicional' | 'osho') => {
    setTiradaSeleccionada(tirada);
    setBarajaSeleccionada(baraja);
    setCartasSeleccionadas([]);
    setVistaActual('cartas');
    setPosicionActualParaSelector(0);
  };

  const handleCambiarBaraja = (nuevaBaraja: 'tradicional' | 'osho') => {
    setBarajaSeleccionada(nuevaBaraja);
    setCartasSeleccionadas([]);
    if (modoLibre) {
      setTiradaSeleccionada({ ...tiradaLibreBase, numeroCartas: 1 });
      setPosicionActualParaSelector(0);
    } else if (tiradaSeleccionada) {
      setPosicionActualParaSelector(0);
    }
  };

  const handleCartaAdd = (carta: CartaSeleccionada) => {
    if (modoLibre) {
      const nuevaCartaConPosicion = { ...carta, posicion: cartasSeleccionadas.length + 1 };
      setCartasSeleccionadas(prevCartas => [...prevCartas, nuevaCartaConPosicion]);

      setTiradaSeleccionada(prevTirada => {
        const currentNumCartas = prevTirada?.numeroCartas || 0;
        const nextNumCartas = currentNumCartas + 1;
        const newPosicionData = {
          numero: nextNumCartas,
          nombre: `Carta ${nextNumCartas}`,
          descripcion: 'Selecciona otra carta',
        };
        return {
          ...(prevTirada || tiradaLibreBase),
          numeroCartas: nextNumCartas,
          posiciones: [...(prevTirada?.posiciones || tiradaLibreBase.posiciones), newPosicionData]
        };
      });
      setPosicionActualParaSelector(prevPos => prevPos + 1);

    } else {
      setCartasSeleccionadas(prevCartas => {
        const existe = prevCartas.some(c => c.posicion === carta.posicion);
        if (existe) {
          return prevCartas.map(c => c.posicion === carta.posicion ? carta : c);
        } else {
          return [...prevCartas, carta];
        }
      });
      if (tiradaSeleccionada && (posicionActualParaSelector + 1) < tiradaSeleccionada.numeroCartas) {
        setPosicionActualParaSelector(prevPos => prevPos + 1);
      } else if (tiradaSeleccionada && (posicionActualParaSelector + 1) === tiradaSeleccionada.numeroCartas) {
        setPosicionActualParaSelector(prevPos => prevPos + 1);
      }
    }
  };

  const handleCartaToggle = (posicion: number) => {
    setCartasSeleccionadas(cartasSeleccionadas.map(carta =>
      carta.posicion === posicion
        ? { ...carta, invertida: !carta.invertida }
        : carta
    ));
  };

  const handleDeshacerUltimaCarta = () => {
    if (cartasSeleccionadas.length > 0) {
      const nuevasCartas = cartasSeleccionadas.slice(0, -1);
      setCartasSeleccionadas(nuevasCartas);

      if (modoLibre) {
        if (nuevasCartas.length === 0) {
          setTiradaSeleccionada(tiradaLibreBase);
          setPosicionActualParaSelector(0);
        } else {
          const ultimaPosicionNum = nuevasCartas.length;
          setTiradaSeleccionada(prevTirada => ({
            ...(prevTirada || tiradaLibreBase),
            numeroCartas: ultimaPosicionNum,
            posiciones: prevTirada?.posiciones.slice(0, ultimaPosicionNum) || tiradaLibreBase.posiciones.slice(0, ultimaPosicionNum)
          }));
          setPosicionActualParaSelector(ultimaPosicionNum);
        }
      } else {
        if (posicionActualParaSelector > 0) {
          setPosicionActualParaSelector(prevPos => prevPos - 1);
        } else {
          setPosicionActualParaSelector(0);
        }
      }
    } else {
      setPosicionActualParaSelector(0);
    }
  };

  const handleLimpiarCartas = () => {
    setCartasSeleccionadas([]);
    if (modoLibre) {
      setTiradaSeleccionada(tiradaLibreBase);
      setPosicionActualParaSelector(0);
    } else {
      setPosicionActualParaSelector(0);
    }
  };

  // **MODIFICADO:** Lógica de handleVolver para las nuevas vistas de Runas
  const handleVolver = () => {
    if (vistaActual === 'cartas') {
      if (modoLibre) {
        setVistaActual('seleccionBarajaLibre');
        setCartasSeleccionadas([]);
        setPosicionActualParaSelector(0);
      } else {
        setVistaActual('tiradas');
        setCartasSeleccionadas([]);
        setPosicionActualParaSelector(0);
      }
    } else if (vistaActual === 'interpretacion') {
      setVistaActual('cartas');
    } else if (vistaActual === 'seleccionBarajaLibre') {
      setVistaActual('tarotOptions');
      setModoLibre(false);
      setBarajaSeleccionada('tradicional');
      setTiradaSeleccionada(null);
    } else if (vistaActual === 'tiradas') {
      setVistaActual('tarotOptions');
      setTiradaSeleccionada(null);
      setCartasSeleccionadas([]);
      setPosicionActualParaSelector(0);
    } else if (vistaActual === 'tarotOptions') {
      setVistaActual('inicio'); // Vuelve a la pantalla de inicio principal
      setTiradaSeleccionada(null);
      setCartasSeleccionadas([]);
      setPosicionActualParaSelector(0);
    } else if (vistaActual === 'runasOptions') {
      setVistaActual('inicio'); // Vuelve a la pantalla de inicio principal
    } else if (vistaActual === 'runas') { // Esta es la vista donde está RunaSelector
      setVistaActual('runasOptions'); // Vuelve a las opciones de Runas
      setSelectedRunaForInterpretation(null); // Limpia la runa seleccionada si vuelves
    } else if (vistaActual === 'interpretacionRunas') {
      setVistaActual('runas'); // Vuelve a la pantalla de RunaSelector
      setSelectedRunaForInterpretation(null); // Limpia la runa interpretada al volver
    }
    // Si estamos en 'inicio' y la URL cambia (por el Link al I Ching), no necesitamos un handleVolver aquí.
  };

  const handleInterpretarCartas = () => {
    setVistaActual('interpretacion');
  };

  const puedeIrAInterpretacion = () => {
    if (modoLibre) {
      return cartasSeleccionadas.length > 0;
    } else {
      return tiradaSeleccionada && cartasSeleccionadas.length === tiradaSeleccionada.numeroCartas;
    }
  };

  return (
    <div className="relative min-h-screen">
      {vistaActual === 'interpretacion' && tiradaSeleccionada && (
        <InterpretacionCartas
          tirada={tiradaSeleccionada}
          cartasSeleccionadas={cartasSeleccionadas}
          onVolver={handleVolver}
          modoLibre={modoLibre}
          baraja={barajaSeleccionada}
        />
      )}

      {vistaActual === 'cartas' && tiradaSeleccionada && (
        <CartaSelector
          tirada={tiradaSeleccionada}
          baraja={barajaSeleccionada}
          cartasSeleccionadas={cartasSeleccionadas}
          onCartaAdd={handleCartaAdd}
          onCartaToggle={handleCartaToggle}
          onVolver={handleVolver}
          onInterpretarCartas={handleInterpretarCartas}
          onLimpiarCartas={handleLimpiarCartas}
          onDeshacerUltimaCarta={handleDeshacerUltimaCarta}
          puedeIrAInterpretacion={puedeIrAInterpretacion()}
          modoLibre={modoLibre}
          onCambiarBaraja={handleCambiarBaraja}
        />
      )}

      {vistaActual === 'tiradas' && (
        <TiradaSelector
          onTiradaSelect={handleTiradaSelect}
          onVolver={handleVolver}
        />
      )}

      {vistaActual === 'seleccionBarajaLibre' && modoLibre && (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex items-center justify-center">
          <div className="container mx-auto px-4 py-8 max-w-xl">
            <Card className="bg-white/90 backdrop-blur-sm border-amber-200 shadow-lg">
              <CardContent className="p-8 text-center space-y-6">
                <h2 className="text-3xl font-serif text-amber-900 mb-4">
                  Elige tu Baraja para el Modo Libre
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button
                    size="lg"
                    className="h-16 bg-amber-600 hover:bg-amber-700 text-white font-semibold"
                    onClick={() => handleBarajaLibreSelect('tradicional')}
                  >
                    Tarot Tradicional
                  </Button>
                  <Button
                    size="lg"
                    className="h-16 bg-orange-600 hover:bg-orange-700 text-white font-semibold"
                    onClick={() => handleBarajaLibreSelect('osho')}
                  >
                    Tarot de Osho
                  </Button>
                </div>
                <Button
                  variant="outline"
                  onClick={handleVolver}
                  className="w-full mt-4"
                >
                  Volver
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* **NUEVA VISTA:** Opciones de Tarot (Agrupa Seleccionar Cartas y Seleccionar Tiradas) */}
      {vistaActual === 'tarotOptions' && (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex flex-col items-center py-8 px-4">
          <div className="container mx-auto max-w-2xl w-full">
            {/* CORREGIDO: Se añadió la prop onVolver */}
            <BackButton onVolver={handleVolver} label="Volver a Oráculos" />
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Card
                className="group bg-white/80 backdrop-blur-sm border-amber-200 hover:border-amber-400 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1"
                onClick={handleSeleccionLibre}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <CreditCard className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-serif text-amber-900 mb-3">
                      Seleccionar Cartas
                    </h3>
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-medium"
                  >
                    Comenzar Lectura
                  </Button>
                </CardContent>
              </Card>

              <Card
                className="group bg-white/80 backdrop-blur-sm border-amber-200 hover:border-amber-400 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1"
                onClick={handleSeleccionTiradas}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Layers className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-serif text-amber-900 mb-3">
                      Seleccionar Tiradas
                    </h3>
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-medium"
                  >
                    Explorar Tiradas
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}

      {/* **NUEVA VISTA:** Opciones de Runas (por ahora simple) */}
      {vistaActual === 'runasOptions' && (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 flex flex-col items-center py-8 px-4">
          <div className="container mx-auto max-w-2xl w-full">
            {/* CORREGIDO: Se añadió la prop onVolver */}
            <BackButton onVolver={handleVolver} label="Volver a Oráculos" className="mb-8 inline-flex items-center" />
            <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
              <Card
                className="group bg-white/80 backdrop-blur-sm border-emerald-200 hover:border-emerald-400 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1"
                onClick={() => setVistaActual('runas')} // Simplificado por ahora
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Activity className="w-8 h-8 text-white" /> {/* Placeholder icon */}
                    </div>
                    <h3 className="text-2xl font-serif text-emerald-900 mb-3">
                      Lanzar Runas
                    </h3>
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-medium"
                  >
                    Comenzar Lectura
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}

      {/* **NUEVA VISTA:** Componente para la selección/lanzamiento de Runas */}
      {vistaActual === 'runas' && (
          <RunaSelector
            onVolver={handleVolver} // Pasa la función de volver
            onSelectRunaForInterpretation={handleSelectRunaForInterpretation} // Pasa la función para interpretar
          />
      )}

      {/* **NUEVA VISTA:** Componente para la interpretación de Runas */}
      {vistaActual === 'interpretacionRunas' && selectedRunaForInterpretation && ( // Asegúrate de que hay una runa seleccionada
          <InterpretacionRunas
            runa={selectedRunaForInterpretation} // Pasa la runa seleccionada
            onVolver={handleVolver} // Pasa la función de volver
          />
      )}

      {/* **VISTA INICIAL:** Ahora con 3 opciones */}
      {vistaActual === 'inicio' && (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex flex-col items-center py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {/* Opción para Tarot */}
              <Card
                className="group bg-white/80 backdrop-blur-sm border-amber-200 hover:border-amber-400 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1"
                onClick={handleShowTarotOptions}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-rose-400 to-red-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Activity className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-serif text-amber-900 mb-3">
                      Tarot
                    </h3>
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white font-medium"
                  >
                    Explorar Lecturas
                  </Button>
                </CardContent>
              </Card>

              {/* Opción para I Ching (sigue siendo un Link) */}
              <Link to="/iching" className="col-span-full md:col-span-1">
                <Card
                  className="group bg-white/80 backdrop-blur-sm border-amber-200 hover:border-amber-400 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1"
                >
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <BookOpenText className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-serif text-amber-900 mb-3">
                        I Ching
                      </h3>
                    </div>
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium"
                    >
                      seleccionar hexagrama
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              {/* **NUEVA OPCIÓN:** Runas */}
              <Card
                className="group bg-white/80 backdrop-blur-sm border-amber-200 hover:border-amber-400 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1"
                onClick={handleShowRunasOptions}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Layers className="w-8 h-8 text-white" /> {/* Icono provisional para runas */}
                    </div>
                    <h3 className="text-2xl font-serif text-amber-900 mb-3">
                      Runas
                    </h3>
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium"
                  >
                    Lanzar Runas
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;