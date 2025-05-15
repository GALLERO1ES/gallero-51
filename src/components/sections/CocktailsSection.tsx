import React from "react";
import { GlassWater } from "lucide-react";

interface Cocktail {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  preparation?: string[];
  decoration?: string;
  image: string;
  tip?: string;
}

const CocktailsSection: React.FC = () => {
  const cocktails: Cocktail[] = [
    {
      id: 1,
      name: "Gallero Espresso",
      description: "Un martini cremoso con alma de horchata y carácter de café. Ideal como digestivo o para una noche especial.",
      ingredients: [
        "60 ml de GALLERO sabor horchata",
        "30 ml de café espresso",
        "15 ml de licor de café (como Kahlúa)",
        "Hielo",
        "Granos de café para decorar"
      ],
      preparation: [
        "Agita todos los ingredientes en una coctelera con hielo.",
        "Cuela en una copa tipo martini.",
        "Decora con 2 o 3 granos de café encima."
      ],
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "🍓 GALLERO Pink",
      description: "Un twist frutal del clásico margarita, con mucho estilo y sabor a fresa.",
      ingredients: [
        "60 ml de Gallero sabor fresa (2 partes)",
        "30 ml de licor triple seco (1 parte)",
        "30 ml de zumo de lima natural (1 parte)",
        "Hielo al gusto",
        "Sal para el borde del vaso",
        "Rodaja de lima para decorar"
      ],
      preparation: [
        "Prepara la copa: Pasa una lima por el borde de la copa y rebózalo en sal para darle ese toque clásico tipo margarita.",
        "Mezcla los ingredientes: En una coctelera, añade Gallero de fresa, el triple seco y el zumo de lima.",
        "Enfría y agita: Agrega unos cubitos de hielo, cierra la coctelera y agita con energía durante unos segundos.",
        "Sirve y decora: Cuela la mezcla en la copa preparada y añade una rodaja de lima como toque final."
      ],
      tip: "Si quieres una versión más suave, puedes añadir un chorrito de soda o un poco de hielo picado para convertirlo en un frozen.",
      image: "/lovable-uploads/35d49e6a-65c8-48a7-afd8-f1bf3cf84bc4.png"
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
            Eleva tu experiencia con nuestras recetas de cócteles artesanales, diseñadas para mostrar los sabores distintivos de Gallero.
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
              <div className="w-full lg:w-1/2 glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GlassWater className="text-primary" size={28} />
                  <h3 className="text-2xl md:text-3xl font-bold">{cocktail.name}</h3>
                </div>
                <p className="text-lg text-gray-300 mb-6">{cocktail.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-primary mb-3">Ingredientes:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 ml-2">
                    {cocktail.ingredients.map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                
                {cocktail.preparation && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary mb-3">Preparación:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-2">
                      {cocktail.preparation.map((step, i) => (
                        <li key={i} className="pl-1">{step}</li>
                      ))}
                    </ol>
                  </div>
                )}
                
                {cocktail.tip && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-primary mb-2">🌟 Tip:</h4>
                    <p className="text-gray-300">{cocktail.tip}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CocktailsSection;
