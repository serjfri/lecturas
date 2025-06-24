import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Layers, BookOpenText, Activity } from "lucide-react";
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    // Updated background and flex properties for better centering and spacing
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center py-8 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        {/* REMOVED: Updated title and introductory text to gain space */}
        {/* The section below has been removed to free up screen space.
            Original content:
            <h1 className="text-4xl md:text-5xl font-serif text-indigo-900 mb-8 animate-fade-in-down">
              Bienvenido a tu Espacio de Consulta
            </h1>
            <p className="text-lg text-indigo-700 mb-12 animate-fade-in-up">
              Explora las herramientas disponibles:
            </p>
        */}

        {/* MODIFICADO: Cambiado grid-cols-3 a grid-cols-1 por defecto (para móvil)
                     y añadido md:grid-cols-3 para tabletas/escritorio.
                     Ajustado el gap para mejor espaciado vertical en móvil. */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 max-w-4xl mx-auto"> {/* Adjusted gap and responsive grid */}
          {/* Opción para Tarot */}
          <Link to="/tarot" className="block">
            <Card
              className="group bg-white/80 backdrop-blur-sm border-purple-200 hover:border-purple-400 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1"
            >
              <CardContent className="p-4 sm:p-8 text-center"> {/* Ajustado padding para móvil */}
                <div className="mb-3 sm:mb-6"> {/* Ajustado margin-bottom */}
                  <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-rose-400 to-red-500 rounded-full flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform"> {/* Ajustado tamaño del icono */}
                    <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-white" /> {/* Ajustado tamaño del icono */}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-indigo-900 mb-2 sm:mb-3"> {/* Ajustado tamaño de fuente */}
                    Tarot
                  </h3>
                </div>
                <Button
                  size="default" // Usar default o md para un tamaño más estándar en móvil
                  className="w-full bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white font-medium text-sm sm:text-base" // Explicitly set text-xs for mobile
                >
                  Explorar
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Opción para I Ching */}
          <Link to="/iching" className="block">
            <Card
              className="group bg-white/80 backdrop-blur-sm border-purple-200 hover:border-purple-400 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1"
            >
              <CardContent className="p-4 sm:p-8 text-center"> {/* Ajustado padding para móvil */}
                <div className="mb-3 sm:mb-6"> {/* Ajustado margin-bottom */}
                  <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform"> {/* Ajustado tamaño del icono */}
                    <BookOpenText className="w-6 h-6 sm:w-8 sm:h-8 text-white" /> {/* Ajustado tamaño del icono */}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-indigo-900 mb-2 sm:mb-3"> {/* Ajustado tamaño de fuente */}
                    I Ching
                  </h3>
                </div>
                <Button
                  size="default" // Usar default o md para un tamaño más estándar en móvil
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium text-sm sm:text-base" // Explicitly set text-xs for mobile
                >
                  Consultar
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Opción para Runas */}
          <Link to="/runas" className="block">
            <Card
              className="group bg-white/80 backdrop-blur-sm border-purple-200 hover:border-purple-400 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1"
            >
              <CardContent className="p-4 sm:p-8 text-center"> {/* Ajustado padding para móvil */}
                <div className="mb-3 sm:mb-6"> {/* Ajustado margin-bottom */}
                  <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform"> {/* Ajustado tamaño del icono */}
                    <Layers className="w-6 h-6 sm:w-8 sm:h-8 text-white" /> {/* Icon for Runes */}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-indigo-900 mb-2 sm:mb-3"> {/* Ajustado tamaño de fuente */}
                    Runas
                  </h3>
                </div>
                <Button
                  size="default" // Usar default o md para un tamaño más estándar en móvil
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium text-sm sm:text-base" // Explicitly set text-xs for mobile
                >
                  Lanzar
                </Button>
              </CardContent>
            </Card>
          </Link>
          {/* Si tuvieras un cuarto botón que fue temporalmente removido y CreditCard era para él, asegúrate de que no hay ningún otro uso o si debería ser removido del import */}
          {/* <CreditCard /> (Esto es solo un icono, no un componente completo, lo dejo para ilustrar) */}
        </div>
      </div>
    </div>
  );
};

export default Index;