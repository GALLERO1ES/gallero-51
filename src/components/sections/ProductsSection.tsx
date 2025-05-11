
import React from "react";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  color: string;
}

const ProductsSection: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Strawberry Cream Tequila",
      description: "Our signature blend, combining premium tequila with the sweet essence of strawberry cream for a uniquely smooth experience.",
      image: "/lovable-uploads/d9d23a60-7325-4c90-a8db-84bb4b7e3da9.png",
      color: "from-pink-500/20 to-red-500/20"
    },
    {
      id: 2,
      name: "Blanco Silver",
      description: "Unaged and pure, our Blanco offers crisp, bright flavors with the perfect balance of agave sweetness and subtle herbal notes.",
      image: "https://images.unsplash.com/photo-1662870514290-192ed2b2959f?q=80&w=1974&auto=format&fit=crop",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 3,
      name: "Reposado Gold",
      description: "Aged for 8 months in oak barrels, delivering a smooth character with notes of vanilla, caramel and subtle spice.",
      image: "https://images.unsplash.com/photo-1550985543-f1ea83b166d5?q=80&w=1974&auto=format&fit=crop",
      color: "from-amber-500/20 to-yellow-500/20"
    }
  ];

  return (
    <section id="products" className="section bg-black">
      <div className="container-fluid">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Our Products</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover our range of premium tequilas, each crafted with passion and precision to deliver an exceptional drinking experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="glass-card p-6 rounded-2xl relative group">
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <div className="h-80 flex items-center justify-center mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="max-h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                <p className="text-gray-300 mb-6">{product.description}</p>
                <Button className="btn-primary w-full">Learn More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
