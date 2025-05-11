
import React from "react";

const StorySection: React.FC = () => {
  return (
    <section id="our-story" className="section bg-gradient-to-b from-black to-neutral-900">
      <div className="container-fluid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Our Story</span>
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              Founded in the heart of Jalisco, Mexico, Gallero Tequila emerged from a passion for tradition and innovation. Our journey began with a simple vision: to create a tequila that honors the rich heritage of Mexico while embracing bold new flavors.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              Our master distillers handcraft each batch using time-honored techniques passed down through generations, combined with a creative approach that gives Gallero its distinctive character.
            </p>
            <p className="text-lg text-gray-300">
              The result is our signature Strawberry Cream Tequila – a perfect balance of premium blue agave tequila and the sweet essence of fresh strawberries, creating an unparalleled drinking experience that captures the spirit of celebration.
            </p>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-xl opacity-70"></div>
              <img 
                src="/lovable-uploads/d9d23a60-7325-4c90-a8db-84bb4b7e3da9.png" 
                alt="Gallero Tequila Bottle" 
                className="relative rounded-lg object-contain w-full max-h-[500px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
