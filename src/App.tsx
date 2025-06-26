// src/App.tsx (MODIFICADO)
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importa tus componentes existentes
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import IchingSearchPage from "./pages/IchingSearchPage";
import IchingInterpretationPage from "./pages/IchingInterpretationPage"; // Importa el nuevo componente

// IMPORTA AQUÍ TU COMPONENTE PARA LA SECCIÓN DE TAROT
import TarotPage from "./pages/TarotPage";

// IMPORTA AQUÍ TU COMPONENTE PARA LA SECCIÓN DE RUNAS
import RunesPage from "./pages/RunesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter basename="/lecturas">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/iching" element={<IchingSearchPage />} />
          <Route path="/iching/interpretation" element={<IchingInterpretationPage />} /> {/* NUEVA RUTA */}

          {/* Ruta para la sección de Tarot */}
          <Route path="/tarot" element={<TarotPage />} />

          {/* Ruta para la sección de Runas */}
          <Route path="/runas" element={<RunesPage />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;