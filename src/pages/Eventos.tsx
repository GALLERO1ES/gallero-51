
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventosHeroSection from "@/components/eventos/EventosHeroSection";
import EventosServicesSection from "@/components/eventos/EventosServicesSection";
import EventosTypesSection from "@/components/eventos/EventosTypesSection";
import EventosCTASection from "@/components/eventos/EventosCTASection";

const Eventos: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Header />
      <main className="pt-32 pb-20">
        <EventosHeroSection />
        <EventosServicesSection />
        <EventosTypesSection />
        <EventosCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Eventos;
