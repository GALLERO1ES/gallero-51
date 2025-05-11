
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
    toast.success("Age verified successfully");
  };

  const handleDeny = () => {
    toast.error("You must be of legal drinking age to visit this site");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="glass-card p-8 max-w-md w-full animate-appear">
        <div className="flex justify-center mb-6">
          <img 
            src="/lovable-uploads/d9d23a60-7325-4c90-a8db-84bb4b7e3da9.png" 
            alt="Gallero Tequila" 
            className="h-32 object-contain"
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-playfair text-center mb-6">
          Welcome to <span className="text-gradient font-bold">Gallero</span>
        </h2>
        <p className="text-center mb-8 text-gray-300">
          Please verify that you are of legal drinking age in your country or region to enter this site.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            onClick={handleVerify} 
            className="btn-primary"
          >
            I am of legal drinking age
          </Button>
          <Button 
            onClick={handleDeny}
            variant="outline" 
            className="btn-outline"
          >
            I am not of legal age
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;
