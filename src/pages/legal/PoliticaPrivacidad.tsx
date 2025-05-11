
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaPrivacidad: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-fluid">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-golden font-kritik text-center">POLÍTICA DE PRIVACIDAD</h1>
          
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <div className="space-y-6 font-mexican text-sm md:text-base">
              <p>
                En GALLERO, nos comprometemos a proteger y respetar tu privacidad. Esta política explica cómo recopilamos, utilizamos y protegemos la información que nos proporcionas.
              </p>
              
              <h2 className="text-2xl font-bold text-golden mt-8">1. INFORMACIÓN QUE RECOPILAMOS</h2>
              <p>
                Podemos recopilar la siguiente información:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nombre y apellidos</li>
                <li>Información de contacto, incluyendo correo electrónico</li>
                <li>Información demográfica como código postal, preferencias e intereses</li>
                <li>Otra información relevante para encuestas y/o ofertas</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-golden mt-8">2. QUÉ HACEMOS CON LA INFORMACIÓN</h2>
              <p>
                La información recopilada se utiliza para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mantener registros internos</li>
                <li>Mejorar nuestros productos y servicios</li>
                <li>Enviar correos promocionales sobre nuevos productos o información relevante</li>
                <li>Contactarte en relación a encuestas de mercado</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-golden mt-8">3. SEGURIDAD</h2>
              <p>
                Estamos comprometidos a garantizar que tu información esté segura. Para prevenir accesos no autorizados o divulgación, hemos implementado procedimientos físicos, electrónicos y administrativos adecuados para salvaguardar y asegurar la información que recopilamos en línea.
              </p>
              
              <h2 className="text-2xl font-bold text-golden mt-8">4. COOKIES</h2>
              <p>
                Utilizamos cookies para analizar el tráfico web y personalizar el contenido. Puedes consultar nuestra política de cookies para más información.
              </p>
              
              <h2 className="text-2xl font-bold text-golden mt-8">5. ENLACES A OTROS SITIOS WEB</h2>
              <p>
                Nuestro sitio web puede contener enlaces a otros sitios de interés. Sin embargo, una vez que hayas utilizado estos enlaces para salir de nuestro sitio, debes tener en cuenta que no tenemos control sobre ese otro sitio web. Por lo tanto, no podemos ser responsables de la protección y privacidad de cualquier información que proporciones al visitar tales sitios y tales sitios no están regulados por esta declaración de privacidad.
              </p>
              
              <h2 className="text-2xl font-bold text-golden mt-8">6. CONTROL DE TU INFORMACIÓN PERSONAL</h2>
              <p>
                Puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición contactándonos a través de contacto@gallero.es
              </p>
              
              <h2 className="text-2xl font-bold text-golden mt-8">7. CONTACTO</h2>
              <p>
                Si tienes alguna pregunta sobre esta política de privacidad o cómo manejamos tus datos personales, contáctanos en contacto@gallero.es
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

export default PoliticaPrivacidad;
