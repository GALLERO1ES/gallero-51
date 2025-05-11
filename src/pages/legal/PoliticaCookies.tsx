
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaCookies: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-fluid">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-golden font-kritik text-center">POLÍTICA DE COOKIES</h1>
          
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <div className="space-y-6 font-mexican text-sm md:text-base">
              <p>
                En GALLERO utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Esta política explica qué son las cookies, cómo las utilizamos y cómo puedes controlarlas.
              </p>
              
              <h2 className="text-2xl font-bold text-golden mt-8">1. ¿QUÉ SON LAS COOKIES?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o móvil) cuando visitas un sitio web. Las cookies permiten al sitio web reconocer tu dispositivo y recordar información sobre tu visita, como tus preferencias de idioma, configuraciones y otra información de navegación.
              </p>
              
              <h2 className="text-2xl font-bold text-golden mt-8">2. TIPOS DE COOKIES QUE UTILIZAMOS</h2>
              <p>
                En GALLERO utilizamos los siguientes tipos de cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cookies esenciales:</strong> Son necesarias para el funcionamiento del sitio web y no pueden ser desactivadas en nuestros sistemas.</li>
                <li><strong>Cookies de rendimiento:</strong> Nos permiten contar visitas y fuentes de tráfico para medir y mejorar el rendimiento de nuestro sitio.</li>
                <li><strong>Cookies de funcionalidad:</strong> Permiten al sitio web proporcionar una funcionalidad y personalización mejoradas.</li>
                <li><strong>Cookies de publicidad:</strong> Pueden ser utilizadas para crear un perfil de tus intereses y mostrarte anuncios relevantes en otros sitios.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-golden mt-8">3. ¿CÓMO CONTROLAMOS LAS COOKIES?</h2>
              <p>
                Puedes controlar y/o eliminar las cookies según tus preferencias. Puedes eliminar todas las cookies que ya están en tu dispositivo y puedes configurar la mayoría de los navegadores para evitar que se coloquen. Sin embargo, si haces esto, es posible que tengas que ajustar manualmente algunas preferencias cada vez que visites un sitio y algunos servicios y funcionalidades pueden no funcionar.
              </p>
              
              <h2 className="text-2xl font-bold text-golden mt-8">4. CÓMO DESHABILITAR LAS COOKIES</h2>
              <p>
                Puedes deshabilitar las cookies en la configuración de tu navegador. A continuación, te indicamos cómo hacerlo en los navegadores más comunes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Chrome:</strong> Configuración > Privacidad y seguridad > Cookies y otros datos del sitio</li>
                <li><strong>Firefox:</strong> Menú > Opciones > Privacidad & Seguridad > Cookies y datos del sitio</li>
                <li><strong>Safari:</strong> Preferencias > Privacidad > Cookies y datos del sitio web</li>
                <li><strong>Edge:</strong> Configuración > Privacidad, búsqueda y servicios > Cookies</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-golden mt-8">5. ACTUALIZACIONES A ESTA POLÍTICA</h2>
              <p>
                Podemos actualizar esta política de cookies para reflejar cambios en nuestras prácticas. Te recomendamos que revises esta página regularmente para estar informado sobre nuestro uso de cookies.
              </p>
              
              <h2 className="text-2xl font-bold text-golden mt-8">6. CONTACTO</h2>
              <p>
                Si tienes alguna pregunta sobre nuestra política de cookies, por favor contáctanos en contacto@gallero.es
              </p>
              
              <p className="mt-8 text-sm text-gray-400">
                Última actualización: Mayo 2025
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaCookies;
