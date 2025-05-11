
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
      name: "Tequila Crema de Fresa",
      description: "Nuestra mezcla insignia, combinando tequila premium con la dulce esencia de crema de fresa para una experiencia excepcionalmente suave.",
      image: "/lovable-uploads/dcc56214-4a30-442f-b741-07f29b5d7239.png",
      color: "from-pink-500/20 to-red-500/20"
    },
    {
      id: 2,
      name: "Blanco Plata",
      description: "Sin envejecer y puro, nuestro Blanco ofrece sabores nítidos y brillantes con el equilibrio perfecto entre la dulzura del agave y notas herbales sutiles.",
      image: "https://images.unsplash.com/photo-1662870514290-192ed2b2959f?q=80&w=1974&auto=format&fit=crop",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 3,
      name: "Reposado Oro",
      description: "Envejecido durante 8 meses en barricas de roble, que proporciona un carácter suave con notas de vainilla, caramelo y sutiles especias.",
      image: "https://images.unsplash.com/photo-1550985543-f1ea83b166d5?q=80&w=1974&auto=format&fit=crop",
      color: "from-amber-500/20 to-yellow-500/20"
    }
  ];

  return (
    <section id="products" className="section bg-black">
      <div className="container-fluid">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Nuestros Productos</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Descubre nuestra gama de tequilas premium, cada uno elaborado con pasión y precisión para ofrecer una experiencia de bebida excepcional.
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
                <Button className="btn-primary w-full">Saber Más</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
