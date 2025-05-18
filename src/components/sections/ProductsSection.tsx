
import React from "react";
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  color: string;
}
const ProductsSection: React.FC = () => {
  const products: Product[] = [{
    id: 1,
    name: "GALLERO crema de horchata con tequila",
    description: "Una fusión exquisita de tequila premium con la tradicional horchata mexicana, creando una bebida cremosa con notas de canela y vainilla.",
    image: "/lovable-uploads/a78fa027-0f7e-4d1f-93d8-7245699e5419.png",
    color: "from-amber-500/20 to-yellow-500/20"
  }, {
    id: 2,
    name: "GALLERO crema de fresa con tequila",
    description: "Nuestra mezcla insignia, combinando tequila premium con la dulce esencia de crema de fresa para una experiencia excepcionalmente suave.",
    image: "/lovable-uploads/67fd8436-5f8d-4c0e-8438-b8446d494763.png",
    color: "from-pink-500/20 to-red-500/20"
  }];
  return <section id="products" className="section bg-black">
      <div className="container-fluid">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Nuestros Productos</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Descubre nuestra gama de tequilas premium, cada uno elaborado con pasión y precisión para ofrecer una experiencia de bebida excepcional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map(product => <div key={product.id} className="glass-card p-6 rounded-2xl relative group">
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <div className="h-80 flex items-center justify-center mb-6">
                  <img src={product.image} alt={product.name} className="max-h-full object-contain transform group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-bold mb-3 text-center text-xl">{product.name}</h3>
                <p className="text-gray-300 mb-6">{product.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ProductsSection;
