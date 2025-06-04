// src/pages/Index.tsx
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Layers } from "lucide-react";
// Importa un ícono para el I Ching, por ejemplo, `BookOpenText` o `GanttChart` (si usas Lucide Icons)
import { BookOpenText } from "lucide-react"; // O el icono que prefieras
import { Link } from 'react-router-dom'; // <--- IMPORTANTE: Importa Link de react-router-dom

import CartaSelector from '@/components/CartaSelector';
import TiradaSelector from '@/components/TiradaSelector';
import InterpretacionCartas from '@/components/InterpretacionCartas';

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
  const [vistaActual, setVistaActual] = useState<'inicio' | 'seleccionLibre' | 'tiradas' | 'cartas' | 'interpretacion' | 'seleccionBarajaLibre'>('inicio');
  const [tiradaSeleccionada, setTiradaSeleccionada] = useState<Tirada | null>(null);
  const [barajaSeleccionada, setBarajaSeleccionada] = useState<'tradicional' | 'osho'>('tradicional');
  const [cartasSeleccionadas, setCartasSeleccionadas] = useState<CartaSeleccionada[]>([]);
  const [modoLibre, setModoLibre] = useState(false);

  const [posicionActualParaSelector, setPosicionActualParaSelector] = useState(0);

  useEffect(() => {
    if (vistaActual === 'cartas' && !modoLibre && tiradaSeleccionada) {
      setPosicionActualParaSelector(0);
    } else if (vistaActual === 'cartas' && modoLibre) {
      setPosicionActualParaSelector(cartasSeleccionadas.length);
    }
  }, [vistaActual, modoLibre, tiradaSeleccionada, cartasSeleccionadas.length]);

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
      setVistaActual('inicio');
      setModoLibre(false);
      setBarajaSeleccionada('tradicional');
      setTiradaSeleccionada(null);
    }
    else { // Si estamos en 'tiradas'
      setVistaActual('inicio');
      setTiradaSeleccionada(null);
      setCartasSeleccionadas([]);
      setPosicionActualParaSelector(0);
    }
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
                  Volver al Inicio
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {vistaActual === 'inicio' && (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-serif text-amber-900 mb-4">
                  Guía de Tarot
                </h1>
              </div>

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

                {/* ¡NUEVA CARD PARA EL I CHING! */}
                <Link to="/iching" className="col-span-full"> {/* Envuelve toda la Card con Link para que sea clicable */}
                  <Card
                    className="group bg-white/80 backdrop-blur-sm border-amber-200 hover:border-amber-400 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1"
                    // No necesitas onClick aquí, el Link se encarga
                  >
                    <CardContent className="p-8 text-center">
                      <div className="mb-6">
                        <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <BookOpenText className="w-8 h-8 text-white" /> {/* Icono para I Ching */}
                        </div>
                        <h3 className="text-2xl font-serif text-amber-900 mb-3">
                          Consultar I Ching
                        </h3>
                      </div>
                      <Button
                        size="lg"
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium"
                      >
                        Descubrir la Sabiduría
                      </Button>
                    </CardContent>
                  </Card>
                </Link>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;