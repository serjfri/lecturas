// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importa tus componentes existentes
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import IchingSearchPage from "./pages/IchingSearchPage";

// IMPORTA AQUÍ TU NUEVO COMPONENTE PARA LA SECCIÓN DE TAROT
// Necesitarás crear este archivo (ej: src/pages/TarotPage.tsx)
import TarotPage from "./pages/TarotPage"; // <--- ¡NUEVA IMPORTACIÓN!

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter basename="/lecturas">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/iching" element={<IchingSearchPage />} />

          {/* ¡NUEVA RUTA PARA LA SECCIÓN DE TAROT! */}
          {/* Esta ruta ahora manejará todo lo relacionado con el Tarot */}
          <Route path="/tarot" element={<TarotPage />} /> {/* <--- ¡AÑADE ESTA LÍNEA! */}

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;