import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BackButton from '@/components/BackButton'; // Asumiendo que tienes este componente
import { Layers } from "lucide-react"; // Importar Layers para el ícono

import RunaSelector from '@/components/RunaSelector';
import InterpretacionRunas from '@/components/InterpretacionRunas';
import { RunaMeaning } from '@/data/runaMeanings'; // Importa la interfaz RunaMeaning

const RunesPage = () => {
  // Todo el estado relacionado con las Runas vivirá aquí
  const [vistaActual, setVistaActual] = useState<'runesOptions' | 'runas' | 'interpretacionRunas'>('runesOptions');
  const [selectedRunaForInterpretation, setSelectedRunaForInterpretation] = useState<RunaMeaning | null>(null);

  // Función para manejar la selección de una runa desde RunaSelector y pasarla a InterpretacionRunas
  const handleSelectRunaForInterpretation = (runa: RunaMeaning) => {
    setSelectedRunaForInterpretation(runa);
    setVistaActual('interpretacionRunas');
  };

  // Lógica del botón de retroceso para RunesPage
  const handleVolver = () => {
    if (vistaActual === 'runas') {
      setVistaActual('runesOptions'); // Vuelve a las opciones de Runas
      setSelectedRunaForInterpretation(null); // Limpia la runa seleccionada si vuelves
    } else if (vistaActual === 'interpretacionRunas') {
      setVistaActual('runas'); // Vuelve a la pantalla de RunaSelector
      setSelectedRunaForInterpretation(null); // Limpia la runa interpretada al volver
    } else if (vistaActual === 'runesOptions') {
      // Si estamos en las opciones principales de Runas, volvemos al inicio de la aplicación ('/')
      // Esto usará react-router-dom para navegar
      window.history.back(); // O usa el hook `useNavigate()` de react-router-dom
    }
  };

  return (
    <div className="relative min-h-screen">
      {vistaActual === 'runesOptions' && (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 flex flex-col items-center py-8 px-4">
          <div className="container mx-auto max-w-2xl w-full">
            <BackButton onVolver={handleVolver} label="Volver a Inicio" className="mb-8 inline-flex items-center" />
            <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
              <Card
                className="group bg-white/80 backdrop-blur-sm border-emerald-200 hover:border-emerald-400 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1"
                onClick={() => setVistaActual('runas')} // Ir directamente a la selección/lanzamiento de runas
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Layers className="w-8 h-8 text-white" /> {/* Ícono para runas */}
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

      {vistaActual === 'runas' && (
        <RunaSelector
          onVolver={handleVolver}
          onSelectRunaForInterpretation={handleSelectRunaForInterpretation}
        />
      )}

      {vistaActual === 'interpretacionRunas' && selectedRunaForInterpretation && (
        <InterpretacionRunas
          runa={selectedRunaForInterpretation}
          onVolver={handleVolver}
        />
      )}
    </div>
  );
};

export default RunesPage;
