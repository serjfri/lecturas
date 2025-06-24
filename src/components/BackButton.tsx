// src/components/BackButton.tsx
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface BackButtonProps {
  onVolver: () => void;
  label?: string;
  className?: string;
  isRound?: boolean;
}

const BackButton: React.FC<BackButtonProps> = ({ onVolver, label, className, isRound = false }) => {
  // Determine if we need flex layout for content (icon + label)
  const needsFlexContent = !!label || !isRound; // If there's a label, or it's not round (meaning it might have text implicitly by default variant)

  return (
    <Button
      variant="outline"
      onClick={onVolver}
      className={`
        ${isRound ? 'rounded-full w-12 h-12 p-0 flex items-center justify-center' : 'rounded-md px-4 py-2'}
        bg-white/80 backdrop-blur-sm
        ${isRound ? 'border-orange-300 text-orange-700 hover:bg-orange-50 hover:border-orange-400' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}
        ${needsFlexContent && !isRound ? 'flex items-center space-x-2' : ''} /* Apply flex and space-x-2 ONLY if there's a label AND it's not round */
        ${isRound ? 'flex items-center justify-center' : ''} /* Ensure round button is always centered */
        shadow-md
        ${className || ''}
      `}
    >
      <ChevronLeft className={`${isRound ? 'w-6 h-6' : 'w-5 h-5'} `} />
      {label && <span className="font-medium">{label}</span>}
      {!label && isRound && <span className="sr-only">Volver</span>}
    </Button>
  );
};

export default BackButton;