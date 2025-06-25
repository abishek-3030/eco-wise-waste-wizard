
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WasteFinder from "./pages/WasteFinder";
import BinsGuide from "./pages/BinsGuide";
import WasteEducation from "./pages/WasteEducation";
import WorldEvents from "./pages/WorldEvents";
import EcoFacts from "./pages/EcoFacts";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/finder" element={<WasteFinder />} />
          <Route path="/bins" element={<BinsGuide />} />
          <Route path="/education" element={<WasteEducation />} />
          <Route path="/events" element={<WorldEvents />} />
          <Route path="/facts" element={<EcoFacts />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
