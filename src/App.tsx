import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { initializeEmailJS } from "@/config/emailjs";
import Index from "./pages/Index";
import StylesPage from "./pages/StylesPage";
import ServicesPage from "./pages/ServicesPage";
import EquipmentPage from "./pages/EquipmentPage";
import ContactPage from "./pages/ContactPage";
import IndoorStylePage from "./pages/IndoorStylePage";
import WeddingStylePage from "./pages/WeddingStylePage";
import SportStylePage from "./pages/SportStylePage";
import OutdoorStylePage from "./pages/OutdoorStylePage";
import EventStylePage from "./pages/EventStylePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Initialize EmailJS when the app starts
initializeEmailJS();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/styles" element={<StylesPage />} />
          <Route path="/styles/indoor" element={<IndoorStylePage />} />
          <Route path="/styles/wedding" element={<WeddingStylePage />} />
          <Route path="/styles/sport" element={<SportStylePage />} />
          <Route path="/styles/outdoor" element={<OutdoorStylePage />} />
          <Route path="/styles/event" element={<EventStylePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/equipment" element={<EquipmentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
