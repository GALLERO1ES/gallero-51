
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { Instagram, Mail } from "lucide-react";
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const contactEmail = "contacto@gallero.es";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor, introduce un correo electrónico válido';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es obligatorio';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio';
    }

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Por favor, corrige los errores en el formulario.");
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: contactEmail
      };

      await emailjs.send(
        'service_wgiwqvb',
        'template_e5hct4q',
        templateParams,
        'flqILqUyo043-uhy7'
      );

      toast.success("¡Mensaje enviado correctamente! Te responderemos pronto.");
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

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
                        Nombre *
                      </label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Tu nombre" 
                        className={`bg-white/5 border-white/10 text-white focus:border-golden ${errors.name ? 'border-red-500' : ''}`}
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                      />
                      {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Correo *
                      </label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Tu correo" 
                        className={`bg-white/5 border-white/10 text-white focus:border-golden ${errors.email ? 'border-red-500' : ''}`}
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                      />
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Asunto *
                    </label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="Asunto del mensaje" 
                      className={`bg-white/5 border-white/10 text-white focus:border-golden ${errors.subject ? 'border-red-500' : ''}`}
                      value={formData.subject}
                      onChange={handleInputChange}
                      required 
                    />
                    {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Mensaje *
                    </label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tu mensaje" 
                      className={`bg-white/5 border-white/10 text-white focus:border-golden ${errors.message ? 'border-red-500' : ''}`}
                      rows={5} 
                      value={formData.message}
                      onChange={handleInputChange}
                      required 
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                  </div>
                  
                  <div className="flex justify-center">
                    <Button type="submit" className="btn-primary" size="lg" disabled={isSubmitting}>
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
