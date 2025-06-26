// RunesPage.tsx (UPDATED)

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BackButton from '@/components/BackButton';
import { Layers } from "lucide-react";

import RunaSelector from '@/components/RunaSelector';
import InterpretacionRunas from '@/components/InterpretacionRunas'; // For single rune
import InterpretacionRunasLista from '@/components/InterpretacionRunasLista'; // Import the new component
import { RunaMeaning } from '@/data/runaMeanings';

const RunesPage = () => {
  const [vistaActual, setVistaActual] = useState<'runesOptions' | 'runas' | 'interpretacionRunas'>('runesOptions');
  const [selectedRunaForInterpretation, setSelectedRunaForInterpretation] = useState<RunaMeaning | null>(null);
  const [selectedRunasListForInterpretation, setSelectedRunasListForInterpretation] = useState<RunaMeaning[] | null>(null);

  const handleInterpretIndividualRuna = (runa: RunaMeaning) => {
    setSelectedRunaForInterpretation(runa);
    setSelectedRunasListForInterpretation(null);
    setVistaActual('interpretacionRunas');
  };

  const handleInterpretRunasList = (runas: RunaMeaning[]) => {
    setSelectedRunasListForInterpretation(runas);
    setSelectedRunaForInterpretation(null);
    setVistaActual('interpretacionRunas');
  };

  const handleVolver = () => {
    if (vistaActual === 'runas') {
      setVistaActual('runesOptions');
      setSelectedRunaForInterpretation(null);
      setSelectedRunasListForInterpretation(null);
    } else if (vistaActual === 'interpretacionRunas') {
      setVistaActual('runas'); // Go back to RunaSelector
      setSelectedRunaForInterpretation(null);
      setSelectedRunasListForInterpretation(null);
    } else if (vistaActual === 'runesOptions') {
      window.history.back();
    }
  };

  return (
    <div className="relative min-h-screen">
      <BackButton
        onVolver={handleVolver}
        isRound={true}
        className="fixed top-4 left-4 z-50"
      />

      {vistaActual === 'runesOptions' && (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 flex flex-col items-center py-8 px-4">
          <div className="container mx-auto max-w-2xl w-full">
            <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto pt-16">
              <Card
                className="group bg-white/80 backdrop-blur-sm border-emerald-200 hover:border-emerald-400 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1"
                onClick={() => setVistaActual('runas')}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Layers className="w-8 h-8 text-white" />
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
          onInterpretIndividualRuna={handleInterpretIndividualRuna}
          onInterpretRunasList={handleInterpretRunasList}
        />
      )}

      {vistaActual === 'interpretacionRunas' && (
        // Conditionally render based on whether it's a single rune or a list
        selectedRunaForInterpretation ? (
          <InterpretacionRunas
            runa={selectedRunaForInterpretation}
            onVolver={handleVolver}
          />
        ) : selectedRunasListForInterpretation && selectedRunasListForInterpretation.length > 0 ? (
          // Render the new InterpretacionRunasLista component here
          <InterpretacionRunasLista
            runas={selectedRunasListForInterpretation}
            onVolver={handleVolver}
          />
        ) : (
          <p className="text-red-600 text-center mt-20">Error: No se encontró runa o lista para interpretar.</p>
        )
      )}
    </div>
  );
};

export default RunesPage;