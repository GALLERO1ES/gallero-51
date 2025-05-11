
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
      name: "Strawberry Bliss",
      description: "A refreshing cocktail featuring our signature Strawberry Cream Tequila with fresh lime and mint.",
      ingredients: ["2 oz Gallero Strawberry Cream", "1 oz fresh lime juice", "0.5 oz agave nectar", "Fresh mint leaves", "Soda water"],
      image: "https://images.unsplash.com/photo-1486428128344-5413e434ad35?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Jalisco Sunset",
      description: "A vibrant, tropical cocktail that perfectly balances sweetness with the smooth kick of our premium tequila.",
      ingredients: ["2 oz Gallero Blanco", "1 oz orange juice", "1 oz pineapple juice", "0.5 oz grenadine", "Orange slice for garnish"],
      image: "https://images.unsplash.com/photo-1582538884247-ae5e4costudios03?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Mexican Mule",
      description: "Our spicy take on the classic mule, featuring our Reposado tequila and a kick of ginger.",
      ingredients: ["2 oz Gallero Reposado", "0.5 oz lime juice", "Ginger beer", "Jalapeño slice", "Lime wedge for garnish"],
      image: "https://images.unsplash.com/photo-1613676138902-fdf245798ade?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <section id="cocktails" className="section bg-neutral-900">
      <div className="container-fluid">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Signature Cocktails</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Elevate your experience with our handcrafted cocktail recipes, designed to showcase the distinctive flavors of Gallero Tequila.
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
                  <h4 className="text-lg font-semibold text-primary mb-2">Ingredients:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {cocktail.ingredients.map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <Button className="btn-primary">View Full Recipe</Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="outline" className="btn-outline" size="lg">
            View All Cocktails
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CocktailsSection;
