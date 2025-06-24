import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import BackButton from '@/components/BackButton';

// Importa los datos del I Ching desde tu archivo iching.json
import ichingHexagramsData from '@/data/iching.json';

interface HexagramLine {
  numero: number;
  text: string;
}

interface HexagramMeaning {
  numero: number;
  name: string;
  character: string;
  trigram_top: string;
  trigram_bottom: string;
  judgment: string;
  image: string;
  lines: HexagramLine[];
  significado_profundo: string;
  arquetipo: string;
  elemento: string;
  estacion_asociada: string;
  direccion_geografica_simbolica: string;
  analogias: string[];
  citas_textuales: string[];
}

const ichingHexagrams: HexagramMeaning[] = ichingHexagramsData as HexagramMeaning[];

const trigramLinesMap: { [key: string]: string } = {
  "Cielo": "111",
  "Tierra": "000",
  "Trueno": "001",
  "Agua (Abismo)": "010",
  "Montaña (Inmovilidad)": "100",
  "Fuego (Lo Aferrarse)": "101",
  "Viento (Suavidad)": "110",
  "Lago (Alegría)": "011"
};

const HexagramLineDisplay: React.FC<{ type: 'solid' | 'broken' }> = ({ type }) => (
  <div className="flex justify-between items-center h-1.5 my-0.5 w-24 sm:w-28 md:w-32">
    {type === 'solid' ? (
      <div className="bg-indigo-950 h-full w-full rounded-sm"></div>
    ) : (
      <>
        <div className="bg-indigo-950 h-full w-[45%] rounded-sm"></div>
        <div className="bg-indigo-950 h-full w-[45%] rounded-sm"></div>
      </>
    )}
  </div>
);

const generateHexagramLines = (topTrigram: string, bottomTrigram: string): string => {
  const topLines = trigramLinesMap[topTrigram] || "111";
  const bottomLines = trigramLinesMap[bottomTrigram] || "000";
  return bottomLines + topLines;
};

const IchingSearchPage: React.FC = () => {
  const [hexagramInput, setHexagramInput] = useState<string>('');
  const [foundHexagram, setFoundHexagram] = useState<HexagramMeaning | null>(null);
  const { toast } = useToast();

  const handleSearchHexagram = async () => {
    if (!hexagramInput.trim()) {
      toast({
        title: "Entrada Vacía",
        description: "Por favor, introduce el nombre o número de un hexagrama.",
        variant: "destructive",
      });
      return;
    }

    const normalizedInput = hexagramInput.toLowerCase().trim();
    const hexagram = ichingHexagrams.find(
      h => h.name.toLowerCase() === normalizedInput ||
           h.numero.toString() === normalizedInput
    );

    if (hexagram) {
      setFoundHexagram(hexagram);
    } else {
      setFoundHexagram(null);
      toast({
        title: "Hexagrama No Encontrado",
        description: "No se encontró el hexagrama. Por favor, verifica el nombre o número.",
        variant: "destructive",
      });
    }
  };

  const handleClearSearch = () => {
    setFoundHexagram(null);
    setHexagramInput('');
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-4 sm:py-8 flex flex-col items-center">
      {/* BackButton ahora con 'fixed' */}
      <BackButton 
        onVolver={handleGoBack} 
        isRound={true} 
        className="fixed top-4 left-4 z-50" 
      />
      
      <div className="container mx-auto w-full px-2 sm:px-4 md:px-6 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl space-y-4 sm:space-y-6 relative">
        {/* Ajuste de margen superior para el título para que no se solape con el botón */}
        {/* Usamos 'pt-16' para empujar el contenido hacia abajo, dejando espacio para el fixed button */}
        <div className="text-center mb-4 sm:mb-6 pt-16"> 
          <h2 className="text-2xl sm:text-3xl font-serif text-indigo-900 mb-2">
            Consulta del I Ching
          </h2>
          <p className="text-indigo-700 text-base sm:text-lg px-2">
            Introduce el nombre o número de un hexagrama para obtener su interpretación.
          </p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-indigo-200 shadow-lg p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="text"
              placeholder="Ej: La Paz (11) o El Conflicto (6)"
              value={hexagramInput}
              onChange={(e) => setHexagramInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSearchHexagram();
                }
              }}
              className="flex-grow bg-indigo-50 border-indigo-200 focus:border-indigo-400 focus:ring focus:ring-indigo-200"
            />
            <Button
              onClick={handleSearchHexagram}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium"
            >
              <Send className="w-4 h-4 mr-2" />
              Consultar
            </Button>
          </div>
        </Card>

        {foundHexagram && (
          <Card className="bg-white/80 backdrop-blur-sm border-indigo-200 shadow-lg p-4 sm:p-6">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl sm:text-2xl font-serif text-indigo-950 flex flex-col items-center gap-0">
                <div className="flex flex-col mb-4">
                  {generateHexagramLines(foundHexagram.trigram_top, foundHexagram.trigram_bottom)
                    .split('')
                    .reverse()
                    .map((lineType, index) => (
                      <HexagramLineDisplay 
                        key={index} 
                        type={lineType === '1' ? 'solid' : 'broken'} 
                      />
                    ))}
                </div>
                <span className="mt-2 text-center text-2xl sm:text-3xl font-bold px-2">{foundHexagram.name}</span>
              </CardTitle>
              <p className="text-indigo-600 text-base text-center">
                Hexagrama N° {foundHexagram.numero}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-indigo-950 mb-1">Trigramas Constituyentes:</h4>
                <p className="text-indigo-700 text-sm sm:text-base leading-relaxed">
                  Trigrama Superior: {foundHexagram.trigram_top} <br />
                  Trigrama Inferior: {foundHexagram.trigram_bottom}
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold text-indigo-950 mb-1">Juicio:</h4>
                <p className="text-indigo-700 text-sm sm:text-base leading-relaxed">{foundHexagram.judgment}</p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold text-indigo-950 mb-1">Imagen (Daxiang):</h4>
                <p className="text-indigo-700 text-sm sm:text-base leading-relaxed">{foundHexagram.image}</p>
              </div>

              {foundHexagram.lines && foundHexagram.lines.length > 0 && (
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-indigo-950 mb-1">Líneas (Yaoci):</h4>
                  <ul className="list-disc list-inside text-indigo-700 text-sm sm:text-base space-y-1 pl-2">
                    {foundHexagram.lines.map((line, index) => (
                      <li key={index} className="leading-relaxed">
                        <strong>{line.numero}:</strong> {line.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {foundHexagram.significado_profundo && (
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-indigo-950 mb-1">Significado Profundo:</h4>
                  <p className="text-indigo-700 text-sm sm:text-base leading-relaxed">{foundHexagram.significado_profundo}</p>
                </div>
              )}

              {foundHexagram.arquetipo && (
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-indigo-950 mb-1">Arquetipo:</h4>
                  <p className="text-indigo-700 text-sm sm:text-base leading-relaxed">{foundHexagram.arquetipo}</p>
                </div>
              )}

              {foundHexagram.elemento && (
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-indigo-950 mb-1">Elemento:</h4>
                  <p className="text-indigo-700 text-sm sm:text-base leading-relaxed">{foundHexagram.elemento}</p>
                </div>
              )}

              {foundHexagram.estacion_asociada && (
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-indigo-950 mb-1">Estación Asociada:</h4>
                  <p className="text-indigo-700 text-sm sm:text-base leading-relaxed">{foundHexagram.estacion_asociada}</p>
                </div>
              )}

              {foundHexagram.direccion_geografica_simbolica && (
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-indigo-950 mb-1">Dirección Geográfica Simbólica:</h4>
                  <p className="text-indigo-700 text-sm sm:text-base leading-relaxed">{foundHexagram.direccion_geografica_simbolica}</p>
                </div>
              )}

              {foundHexagram.analogias && Array.isArray(foundHexagram.analogias) && foundHexagram.analogias.length > 0 && (
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-indigo-950 mb-1">Analogías:</h4>
                  <ul className="list-disc list-inside text-indigo-700 text-sm sm:text-base space-y-1 pl-2">
                    {foundHexagram.analogias.map((analogia, index) => (
                      <li key={index} className="leading-relaxed">{analogia}</li>
                    ))}
                  </ul>
                </div>
              )}

              {foundHexagram.citas_textuales && Array.isArray(foundHexagram.citas_textuales) && foundHexagram.citas_textuales.length > 0 && (
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-indigo-950 mb-1">Citas Textuales:</h4>
                  <ul className="list-disc list-inside text-indigo-700 text-sm sm:text-base space-y-1 pl-2">
                    {foundHexagram.citas_textuales.map((cita, index) => (
                      <li key={index} className="leading-relaxed">{cita}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex justify-center mt-4 sm:mt-6">
                <Button
                  variant="outline"
                  className="text-indigo-700 border-indigo-300 hover:bg-indigo-50"
                  onClick={handleClearSearch}
                >
                  Nueva Consulta
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default IchingSearchPage;