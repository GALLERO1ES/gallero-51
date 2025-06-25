import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Eventos from "./pages/Eventos";
import NotFound from "./pages/NotFound";
import PoliticaPrivacidad from "./pages/legal/PoliticaPrivacidad";
import TerminosServicio from "./pages/legal/TerminosServicio";
import PoliticaCookies from "./pages/legal/PoliticaCookies";
import AvisoLegal from "./pages/legal/AvisoLegal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner closeButton position="bottom-center" />
      <BrowserRouter
        basename={import.meta.env.DEV ? "/" : "/gallero-51/"}
      >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route
            path="/politica-privacidad"
            element={<PoliticaPrivacidad />}
          />
          <Route
            path="/terminos-servicio"
            element={<TerminosServicio />}
          />
          <Route
            path="/politica-cookies"
            element={<PoliticaCookies />}
          />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
