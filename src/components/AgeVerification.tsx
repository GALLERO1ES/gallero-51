
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
      <div className="glass-card p-8 max-w-md w-full animate-appear border border-primary/30 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 opacity-10 rotate-12">
          <svg viewBox="0 0 100 100" width="150" height="150" fill="currentColor" className="text-primary">
            <path d="M50,10 C40,10 30,20 30,35 C30,45 35,50 40,55 C45,60 45,65 40,70 C35,75 25,75 20,85 C15,95 25,95 30,90 C35,85 40,85 45,85 C50,85 55,80 55,75 C55,70 50,65 50,60 C50,55 55,55 60,50 C65,45 70,40 70,30 C70,20 60,10 50,10 Z" />
          </svg>
        </div>
        
        <div className="flex justify-center mb-8 relative z-10">
          <img
            src={`${import.meta.env.BASE_URL}lovable-uploads/624f2092-5f74-4ce5-999d-9fa859ced2ef.png`}
            alt="Gallero"
            className="h-40 object-contain"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-8 relative z-10">
          Bienvenido a <span className="text-gradient font-bold">Gallero</span>
        </h2>
        <p className="text-center mb-10 text-gray-300 text-lg relative z-10">
          Por favor, verifica que tienes la edad legal para consumir alcohol en tu país o región para acceder a este sitio.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10">
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
