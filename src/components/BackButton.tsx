// src/components/BackButton.tsx
import React from 'react';
import { Button } from "@/components/ui/button"; // Asegúrate de que esta importación sea correcta si tienes el componente Button de shadcn/ui.
import { ChevronLeft } from "lucide-react";

interface BackButtonProps {
  onVolver: () => void;
  label?: string; // Opcional: si se proporciona, el botón tendrá texto. Si no, será solo icono.
  className?: string; // Para clases CSS adicionales
  isRound?: boolean; // NUEVA PROP: Para controlar si es redondo y solo icono
}

const BackButton: React.FC<BackButtonProps> = ({ onVolver, label, className, isRound = false }) => {
  return (
    <Button
      variant="outline"
      onClick={onVolver}
      // CLASES CONDICIONALES BASADAS EN isRound
      className={`
        ${isRound ? 'rounded-full w-12 h-12 p-0 flex items-center justify-center' : 'rounded-md px-4 py-2'}
        bg-white/80 backdrop-blur-sm
        ${isRound ? 'border-orange-300 text-orange-700 hover:bg-orange-50 hover:border-orange-400' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}
        flex items-center space-x-2
        shadow-md
        ${className || ''}
      `}
    >
      <ChevronLeft className={`${isRound ? 'w-6 h-6' : 'w-5 h-5'} `} /> {/* Ajusta el tamaño del icono */}
      {label && <span className="font-medium">{label}</span>} {/* Renderiza el label SOLO si existe */}
      {!label && isRound && <span className="sr-only">Volver</span>} {/* sr-only para accesibilidad si es solo icono */}
    </Button>
  );
};

export default BackButton;