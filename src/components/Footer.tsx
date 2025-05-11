
import React from "react";
import { Instagram } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12">
      <div className="container-fluid">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Gallero Tequila</h4>
            <p className="text-gray-400 mb-4">
              Experience the artistry of premium tequila, crafted to perfection.
            </p>
            <p className="text-gray-400 text-sm">
              Please drink responsibly.
            </p>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Links</h5>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#our-story" className="text-gray-400 hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-primary transition-colors">Products</a></li>
              <li><a href="#cocktails" className="text-gray-400 hover:text-primary transition-colors">Cocktails</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Legal</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Connect</h5>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/gallero_es/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/30 transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="text-white" size={20} />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-gray-400 mb-2">Subscribe to our newsletter</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 rounded-l px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary text-white w-full"
                />
                <button className="bg-primary text-white px-4 py-2 rounded-r hover:bg-secondary transition-colors">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Gallero Tequila. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
