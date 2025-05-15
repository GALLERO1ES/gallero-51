
import React from "react";

const ParticlesEffect: React.FC = () => {
  return (
    <div className="absolute inset-0 z-5">
      <div className="particles-container">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className={`particle absolute bg-primary/20 rounded-full animate-float`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ParticlesEffect;
