
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { Instagram } from "lucide-react";

const ContactSection: React.FC = () => {
  const contactEmail = "contacto@gallero.es";
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const subject = formData.get('subject')?.toString() || '';
    const message = formData.get('message')?.toString() || '';
    
    try {
      // Simple email validation
      if (!email.includes('@')) {
        throw new Error("Por favor, introduce un correo electrónico válido.");
      }
      
      // This would typically be an API call to your backend
      // For now we'll simulate sending the email
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("¡Mensaje enviado correctamente!");
      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-gradient-to-b from-neutral-900 to-black">
      <div className="container-fluid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Contáctanos</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              ¿Tienes preguntas sobre nuestros productos o estás interesado en tener GALLERO en tu establecimiento? Nos encantaría saber de ti.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Información de Contacto</h3>
                <p className="text-gray-300 mb-3">
                  <strong>Correo:</strong> {contactEmail}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Síguenos</h3>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/gallero_es/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-golden/30 transition-colors">
                    <span className="sr-only">Instagram</span>
                    <Instagram className="text-white" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="glass-card p-8 rounded-2xl relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-golden/30 to-golden/30 rounded-2xl blur-sm opacity-70"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-center">Envíanos un Mensaje</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Nombre
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Tu nombre"
                        className="bg-white/5 border-white/10 text-white focus:border-golden"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Correo
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Tu correo"
                        className="bg-white/5 border-white/10 text-white focus:border-golden"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Asunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Asunto del mensaje"
                      className="bg-white/5 border-white/10 text-white focus:border-golden"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tu mensaje"
                      className="bg-white/5 border-white/10 text-white focus:border-golden"
                      rows={5}
                      required
                    />
                  </div>
                  
                  <div className="flex justify-center">
                    <Button 
                      type="submit" 
                      className="btn-primary" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
