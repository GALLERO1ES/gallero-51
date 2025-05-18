import React from "react";
interface HeroBackgroundProps {
  ageVerified: boolean;
}
const HeroBackground: React.FC<HeroBackgroundProps> = ({
  ageVerified
}) => {
  return <div className="absolute inset-0 overflow-hidden z-0">
      
      
      {/* Background with rooster-headed people */}
      

      {/* Fondo principal */}
      

      {/* Nuevos elementos de fondo con gallos */}
      
      
      {/* Efectos de iluminación nuevos */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {/* Efectos de luz radiales */}
        <div className="absolute top-[20%] left-[15%] w-[300px] h-[300px] rounded-full bg-golden/5 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[30%] right-[25%] w-[250px] h-[250px] rounded-full bg-golden/5 blur-3xl animate-pulse-slow" style={{
        animationDelay: '2s'
      }}></div>
        
        {/* Rayos de luz */}
        <div className="absolute top-0 left-1/4 h-[50%] w-[2px] bg-gradient-to-b from-golden/0 via-golden/10 to-golden/0 blur-sm animate-pulse-slow"></div>
        <div className="absolute top-[20%] right-[30%] h-[40%] w-[3px] bg-gradient-to-b from-golden/0 via-golden/10 to-golden/0 blur-sm animate-pulse-slow" style={{
        animationDelay: '1.5s'
      }}></div>
        
        {/* Destellos */}
        <div className="absolute top-[10%] right-[10%] w-2 h-2 rounded-full bg-golden/30 animate-twinkle"></div>
        <div className="absolute top-[40%] left-[20%] w-3 h-3 rounded-full bg-golden/30 animate-twinkle" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-[20%] left-[40%] w-2 h-2 rounded-full bg-golden/30 animate-twinkle" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute top-[30%] right-[40%] w-1 h-1 rounded-full bg-golden/30 animate-twinkle" style={{
        animationDelay: '0.5s'
      }}></div>
      </div>

      {/* Video de fondo con efecto de vibración sutil */}
      {ageVerified}
    </div>;
};
export default HeroBackground;