
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
    <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4">
      <div className="glass-card p-8 max-w-md w-full animate-appear border border-primary/30">
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/624f2092-5f74-4ce5-999d-9fa859ced2ef.png" 
            alt="Gallero" 
            className="h-40 object-contain"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-8">
          Bienvenido a <span className="text-gradient font-bold">Gallero</span>
        </h2>
        <p className="text-center mb-10 text-gray-300 text-lg">
          Por favor, verifica que tienes la edad legal para consumir alcohol en tu país o región para acceder a este sitio.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Button 
            onClick={handleVerify} 
            className="btn-primary text-lg"
          >
            Soy mayor de edad
          </Button>
          <Button 
            onClick={handleDeny}
            variant="outline" 
            className="btn-outline text-lg"
          >
            No tengo la edad legal
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;
