// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importa tus componentes existentes
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Importa el nuevo componente para el I Ching (lo crearemos en el siguiente paso)
import IchingSearchPage from "./pages/IchingSearchPage"; // Nueva importación

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/lecturas">
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ¡NUEVA RUTA PARA EL I CHING! */}
          <Route path="/iching" element={<IchingSearchPage />} /> {/* Añade esta línea */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;