
import React, { useState, useEffect } from "react";
import { toast } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";

interface AgeVerificationProps {
  onVerify: () => void;
}

const AgeVerification: React.FC<AgeVerificationProps> = ({ onVerify }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if the user has already verified their age
    const hasVerified = localStorage.getItem("age-verified");
    if (hasVerified === "true") {
      setIsVisible(false);
      onVerify();
    }
  }, [onVerify]);

  const handleVerify = () => {
    localStorage.setItem("age-verified", "true");
    setIsVisible(false);
    onVerify();
    toast.success("Edad verificada correctamente");
  };

  const handleDeny = () => {
    toast.error("Debes tener la edad legal para consumir alcohol para visitar este sitio");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="glass-card p-8 max-w-md w-full animate-appear">
        <div className="flex justify-center mb-6">
          <img 
            src="/lovable-uploads/dcc56214-4a30-442f-b741-07f29b5d7239.png" 
            alt="Gallero Tequila" 
            className="h-32 object-contain"
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-playfair text-center mb-6">
          Bienvenido a <span className="text-gradient font-bold">Gallero</span>
        </h2>
        <p className="text-center mb-8 text-gray-300">
          Por favor, verifica que tienes la edad legal para consumir alcohol en tu país o región para acceder a este sitio.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            onClick={handleVerify} 
            className="btn-primary"
          >
            Tengo la edad legal para beber
          </Button>
          <Button 
            onClick={handleDeny}
            variant="outline" 
            className="btn-outline"
          >
            No tengo la edad legal
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;
