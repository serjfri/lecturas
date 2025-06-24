// src/pages/TarotPage.tsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import CartaSelector from '@/components/CartaSelector';
import TiradaSelector from '@/components/TiradaSelector';
import InterpretacionCartas from '@/components/InterpretacionCartas';
import BackButton from '@/components/BackButton';

// Interfaces from original Index.tsx - keep these for context
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

const TarotPage = () => {
  const navigate = useNavigate();
  const [vistaActual, setVistaActual] = useState<'tarotOptions' | 'seleccionLibre' | 'tiradas' | 'cartas' | 'interpretacion' | 'seleccionBarajaLibre'>('tarotOptions');
  const [tiradaSeleccionada, setTiradaSeleccionada] = useState<Tirada | null>(null);
  const [barajaSeleccionada, setBarajaSeleccionada] = useState<'tradicional' | 'osho'>('tradicional');
  const [cartasSeleccionadas, setCartasSeleccionadas] = useState<CartaSeleccionada[]>([]);
  const [modoLibre, setModoLibre] = useState(false);

  const [posicionActualParaSelector, setPosicionActualParaSelector] = useState(0);

  useEffect(() => {
    if (vistaActual === 'cartas' && !modoLibre && tiradaSeleccionada) {
      setPosicionActualParaSelector(cartasSeleccionadas.length);
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

  // Lógica del botón de retroceso para TarotPage
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
      setVistaActual('tarotOptions'); // Vuelve a las opciones de Tarot
      setModoLibre(false);
      setBarajaSeleccionada('tradicional');
      setTiradaSeleccionada(null);
    } else if (vistaActual === 'tiradas') {
      setVistaActual('tarotOptions'); // Vuelve a las opciones de Tarot
      setTiradaSeleccionada(null);
      setCartasSeleccionadas([]);
      setPosicionActualParaSelector(0);
    } else if (vistaActual === 'tarotOptions') {
      // Si estamos en las opciones principales de Tarot, volvemos al inicio de la aplicación ('/')
      navigate('/'); // Usa el hook `useNavigate()` de react-router-dom
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
      {/* InterpretacionCartas View */}
      {vistaActual === 'interpretacion' && tiradaSeleccionada && (
        <>
          {/* Back button for InterpretacionCartas - keep as round icon-only */}
          <BackButton onVolver={handleVolver} className="fixed top-4 left-4 z-50" isRound={true} />
          <InterpretacionCartas
            tirada={tiradaSeleccionada}
            cartasSeleccionadas={cartasSeleccionadas}
            onVolver={handleVolver}
            modoLibre={modoLibre}
            baraja={barajaSeleccionada}
          />
        </>
      )}

      {/* CartaSelector View */}
      {vistaActual === 'cartas' && tiradaSeleccionada && (
        <>
          {/* Back button for CartaSelector - keep as round icon-only */}
          <BackButton onVolver={handleVolver} className="fixed top-4 left-4 z-50" isRound={true} />
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
        </>
      )}

      {/* TiradaSelector View */}
      {vistaActual === 'tiradas' && (
        <>
          {/* Back button for TiradaSelector - keep as round icon-only */}
          <BackButton onVolver={handleVolver} className="fixed top-4 left-4 z-50" isRound={true} />
          <TiradaSelector
            onTiradaSelect={handleTiradaSelect}
            onVolver={handleVolver}
          />
        </>
      )}

      {/* Seleccion Baraja Libre View */}
      {vistaActual === 'seleccionBarajaLibre' && modoLibre && (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex items-center justify-center">
          {/* Back button for Seleccion Baraja Libre - make it round icon-only */}
          <BackButton onVolver={handleVolver} className="fixed top-4 left-4 z-50" isRound={true} />
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
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Tarot Options View (Main Menu) */}
      {vistaActual === 'tarotOptions' && (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex flex-col items-center py-8 px-4">
          {/* This is the key change: make this BackButton round and icon-only */}
          <BackButton onVolver={handleVolver} className="fixed top-4 left-4 z-50" isRound={true} />
          <div className="container mx-auto max-w-2xl w-full">
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto pt-16">
              <Card
                className="group bg-white/80 backdrop-blur-sm border-amber-200 hover:border-amber-400 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1"
                onClick={handleSeleccionLibre}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-cards w-8 h-8 text-white"><path d="M12 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4"/><path d="M10 17H4a2 2 0 0 0-2 2v2"/><path d="M12 11h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z"/></svg>
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers w-8 h-8 text-white"><path d="m12.83 2.18-.73.49A2 2 0 0 0 12 3c-1.12-.04-2.2-.45-2.94-1.2L9 1.63c-.8-.74-1.95-1.04-3.11-.79C3.3 1.34 2.3 3.65 2 6c-.3 3.32-.3 6.68 0 10 1.25 1.73 2.92 2.5 4.88 2.5A4.55 4.55 0 0 0 10 18.5c1.47-.79 2.56-2.23 3-4 .08-.33.16-.67.24-1H6.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H13c.33-.88.68-1.74 1.05-2.58.4-.9.84-1.76 1.32-2.55C16.8 4.2 18 3 20 3c1.78 0 2.76 2.03 2 4-.8 2-1.57 4-2.18 6.27-.05.18-.08.37-.13.55a.46.46 0 0 1-.22.36c-.3.1-.56.02-.7-.2-.2-.3-.47-.56-.7-.86-.5-.65-1.1-1.3-1.8-1.95-.56-.51-1.2-.9-1.9-1.2-.55-.26-1.15-.4-1.75-.4a1.01 1 0 0 0-.75.36l-1.37 1.48c-.08.09-.12.2-.13.31-.02.2-.02.4 0 .61.02.2.06.4.1.59.1.48.26.96.47 1.4L13.5 16h-2c-.52 0-.96.2-.96.2-.42.22-.92.3-1.4.2a2.3 2.3 0 0 1-1.4-.73c-.27-.3-.52-.6-.73-.9l-.8-1.1c-.2-.27-.4-.5-.6-.7-.1-.08-.2-.14-.3-.2C5.6 13.6 4.9 13.5 4 13.5c-.88 0-1.6.09-2.2.27A1 1 0 0 0 1.2 14c-.1.3-.2.6-.2 1 0 .6.1 1.2.3 1.7.2 1 .5 2 .9 3 .3 1 .8 2 1.3 2.7.6.8 1.4 1.4 2.2 1.8.8.4 1.7.6 2.6.5 1.5-.1 2.8-.7 3.9-1.6l.8-.75c.4-.35.8-.7 1.2-1.1l1.4-.97c.4-.3.8-.57 1.2-.8.5-.3 1-.5 1.5-.6.6-.08 1.3-.02 1.9.2l.6.28c.4.2.9.4 1.3.5.6.2 1.3.3 1.9.2l.6-.2c.4-.1.7-.3 1.1-.5.3-.2.7-.4.9-.7.4-.5.6-1.1.7-1.7.07-.4.1-.9.1-1.3.02-.6-.05-1.2-.1-1.8-.07-.7-.2-1.3-.4-1.9ZM12 16.5c-1.97.2-3.7-.35-5.1-.95C5.4 15.1 4.5 14 4 13c-.1-.2-.2-.5-.2-.7-.1-.2-.1-.5-.1-.7 0-.3 0-.6.1-.8.08-.2.17-.4.27-.6.2-.3.4-.6.7-.9.6-.7 1.3-1.2 2-1.5.7-.3 1.4-.4 2.2-.2l2 .5c.4.1.7.3 1.1.5.3.2.7.4.9.7.4.5.6 1.1.7 1.7.07.4.1.9.1 1.3.02-.6-.05-1.2-.1-1.8-.07-.7-.2-1.3-.4-1.9ZM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/></svg>
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
    </div>
  );
};

export default TarotPage;