
import React from "react";
import { Button } from "@/components/ui/button";

interface Cocktail {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  image: string;
}

const CocktailsSection: React.FC = () => {
  const cocktails: Cocktail[] = [
    {
      id: 1,
      name: "Delicia de Fresa",
      description: "Un cóctel refrescante con nuestro Tequila Crema de Fresa, lima fresca y menta.",
      ingredients: ["60ml Gallero Crema de Fresa", "30ml zumo de lima fresco", "15ml néctar de agave", "Hojas de menta fresca", "Agua con gas"],
      image: "https://images.unsplash.com/photo-1486428128344-5413e434ad35?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Atardecer Jalisciense",
      description: "Un cóctel vibrante y tropical que equilibra perfectamente la dulzura con el suave golpe de nuestro tequila premium.",
      ingredients: ["60ml Gallero Blanco", "30ml zumo de naranja", "30ml zumo de piña", "15ml granadina", "Rodaja de naranja para decorar"],
      image: "https://images.unsplash.com/photo-1582538884247-ae5e4costudios03?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Mula Mexicana",
      description: "Nuestra versión picante del clásico mule, con nuestro tequila Reposado y un toque de jengibre.",
      ingredients: ["60ml Gallero Reposado", "15ml zumo de lima", "Cerveza de jengibre", "Rodaja de jalapeño", "Rodaja de lima para decorar"],
      image: "https://images.unsplash.com/photo-1613676138902-fdf245798ade?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <section id="cocktails" className="section bg-neutral-900">
      <div className="container-fluid">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Cócteles Exclusivos</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Eleva tu experiencia con nuestras recetas de cócteles artesanales, diseñadas para mostrar los sabores distintivos de Gallero Tequila.
          </p>
        </div>
        
        <div className="space-y-16">
          {cocktails.map((cocktail, index) => (
            <div 
              key={cocktail.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-70"></div>
                  <img 
                    src={cocktail.image} 
                    alt={cocktail.name} 
                    className="relative rounded-lg w-full h-[300px] md:h-[400px] object-cover"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{cocktail.name}</h3>
                <p className="text-lg text-gray-300 mb-4">{cocktail.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-primary mb-2">Ingredientes:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {cocktail.ingredients.map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <Button className="btn-primary">Ver Receta Completa</Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="outline" className="btn-outline" size="lg">
            Ver Todos los Cócteles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CocktailsSection;
