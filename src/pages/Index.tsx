
import React, { useState } from "react";
import AgeVerification from "@/components/AgeVerification";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import CocktailsSection from "@/components/sections/CocktailsSection";
import StorySection from "@/components/sections/StorySection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  const [ageVerified, setAgeVerified] = useState(false);

  const handleAgeVerification = () => {
    setAgeVerified(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <AgeVerification onVerify={handleAgeVerification} />
      <Header />
      <main>
        <HeroSection ageVerified={ageVerified} />
        <ProductsSection />
        <CocktailsSection />
        <StorySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
