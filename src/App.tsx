// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importa tus componentes existentes
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import IchingSearchPage from "./pages/IchingSearchPage";

// IMPORTA AQUÍ TU COMPONENTE PARA LA SECCIÓN DE TAROT
import TarotPage from "./pages/TarotPage";

// IMPORTA AQUÍ TU COMPONENTE PARA LA SECCIÓN DE RUNAS
// Asegúrate de que el nombre aquí coincida exactamente con el nombre de tu archivo.
// Si tu archivo es 'RunesPage.tsx', la importación debe ser 'RunesPage'.
import RunesPage from "./pages/RunesPage"; // <--- ¡CORREGIDO PARA RunesPage.tsx!

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter basename="/lecturas">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/iching" element={<IchingSearchPage />} />

          {/* Ruta para la sección de Tarot */}
          <Route path="/tarot" element={<TarotPage />} />

          {/* Ruta para la sección de Runas */}
          {/* Aquí también el elemento debe ser RunesPage para coincidir con la importación */}
          <Route path="/runas" element={<RunesPage />} /> {/* <--- ¡CORREGIDO PARA RunesPage! */}

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
