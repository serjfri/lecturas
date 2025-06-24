import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Layers, BookOpenText, Activity } from "lucide-react"; // Keeping these icons for demonstration
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

        {/* MODIFIED: Changed grid-cols-1 to grid-cols-3 to display side-by-side on mobile too.
            Adjusted font and button sizes, and padding/margins for small screens to prevent overflow. */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-4xl mx-auto"> {/* Adjusted gap */}
          {/* Opción para Tarot */}
          <Link to="/tarot" className="block">
            <Card
              className="group bg-white/80 backdrop-blur-sm border-purple-200 hover:border-purple-400 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1"
            >
              <CardContent className="p-3 sm:p-8 text-center"> {/* Adjusted padding */}
                <div className="mb-2 sm:mb-6"> {/* Adjusted margin-bottom */}
                  <div className="mx-auto w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-rose-400 to-red-500 rounded-full flex items-center justify-center mb-1 sm:mb-4 group-hover:scale-110 transition-transform"> {/* Adjusted icon size */}
                    <Activity className="w-5 h-5 sm:w-8 sm:h-8 text-white" /> {/* Adjusted icon size */}
                  </div>
                  <h3 className="text-lg sm:text-2xl font-serif text-indigo-900 mb-1 sm:mb-3"> {/* Adjusted font size */}
                    Tarot
                  </h3>
                </div>
                <Button
                  size="sm" // Adjusted button size for smaller screens
                  className="w-full bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white font-medium text-xs sm:text-base" // Explicitly set text-xs for mobile
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
              <CardContent className="p-3 sm:p-8 text-center"> {/* Adjusted padding */}
                <div className="mb-2 sm:mb-6"> {/* Adjusted margin-bottom */}
                  <div className="mx-auto w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mb-1 sm:mb-4 group-hover:scale-110 transition-transform"> {/* Adjusted icon size */}
                    <BookOpenText className="w-5 h-5 sm:w-8 sm:h-8 text-white" /> {/* Adjusted icon size */}
                  </div>
                  <h3 className="text-lg sm:text-2xl font-serif text-indigo-900 mb-1 sm:mb-3"> {/* Adjusted font size */}
                    I Ching
                  </h3>
                </div>
                <Button
                  size="sm" // Adjusted button size for smaller screens
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium text-xs sm:text-base" // Explicitly set text-xs for mobile
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
              <CardContent className="p-3 sm:p-8 text-center"> {/* Adjusted padding */}
                <div className="mb-2 sm:mb-6"> {/* Adjusted margin-bottom */}
                  <div className="mx-auto w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-1 sm:mb-4 group-hover:scale-110 transition-transform"> {/* Adjusted icon size */}
                    <Layers className="w-5 h-5 sm:w-8 sm:h-8 text-white" /> {/* Icon for Runes */}
                  </div>
                  <h3 className="text-lg sm:text-2xl font-serif text-indigo-900 mb-1 sm:mb-3"> {/* Adjusted font size */}
                    Runas
                  </h3>
                </div>
                <Button
                  size="sm" // Adjusted button size for smaller screens
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium text-xs sm:text-base" // Explicitly set text-xs for mobile
                >
                  Lanzar
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
