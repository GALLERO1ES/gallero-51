
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TerminosServicio: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-fluid">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-golden font-kritik text-center">TÉRMINOS DE SERVICIO</h1>
          
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <div className="space-y-6 font-mexican text-sm md:text-base">
              <p>
                Bienvenido a GALLERO. Al acceder y utilizar este sitio web, aceptas estos términos y condiciones en su totalidad. Si no estás de acuerdo con estos términos y condiciones o cualquier parte de estos, no debes utilizar este sitio web.
              </p>
              
              <h2 className="text-2xl font-bold text-golden mt-8">1. USO DEL SITIO WEB</h2>
              <p>
                El sitio web de GALLERO está destinado a proporcionar información sobre nuestros productos y servicios. El uso de este sitio web está sujeto a las siguientes condiciones:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>La información contenida en este sitio web se proporciona únicamente con fines informativos.</li>
                <li>El acceso y uso de este sitio web implica la aceptación de estos términos y condiciones.</li>
                <li>No puedes utilizar este sitio web para fines ilegales o prohibidos por estos términos y condiciones.</li>
                <li>Debes ser mayor de edad (18 años) para consumir o comprar nuestros productos.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-golden mt-8">2. PROPIEDAD INTELECTUAL</h2>
              <p>
                Todo el contenido de este sitio web, incluyendo texto, gráficos, logos, íconos, imágenes y software, es propiedad de GALLERO o de sus proveedores de contenido y está protegido por leyes internacionales de derechos de autor. La reproducción, modificación, distribución o republicación del contenido sin el consentimiento previo por escrito está estrictamente prohibida.
              </p>
              
              <h2 className="text-2xl font-bold text-golden mt-8">3. LIMITACIONES DE RESPONSABILIDAD</h2>
              <p>
                En ningún caso GALLERO será responsable por daños directos, indirectos, incidentales, consecuentes o especiales que surjan del uso o la imposibilidad de usar este sitio web o productos adquiridos a través de él.
              </p>
              
              <h2 className="text-2xl font-bold text-golden mt-8">4. CONSUMO RESPONSABLE</h2>
              <p>
                GALLERO promueve el consumo responsable de alcohol. Nuestros productos están destinados a ser consumidos únicamente por personas mayores de 18 años. Al utilizar este sitio web, confirmas que tienes la edad legal para consumir alcohol en tu país de residencia.
              </p>
              
              <h2 className="text-2xl font-bold text-golden mt-8">5. ENLACES A OTROS SITIOS WEB</h2>
              <p>
                Nuestro sitio web puede contener enlaces a otros sitios web que no están bajo nuestro control. No tenemos control sobre la naturaleza, el contenido y la disponibilidad de esos sitios. La inclusión de cualquier enlace no implica necesariamente una recomendación o que respaldemos las opiniones expresadas en ellos.
              </p>
              
              <h2 className="text-2xl font-bold text-golden mt-8">6. MODIFICACIONES</h2>
              <p>
                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web. Es tu responsabilidad revisar periódicamente estos términos.
              </p>
              
              <h2 className="text-2xl font-bold text-golden mt-8">7. LEY APLICABLE</h2>
              <p>
                Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes de España, y cualquier disputa relacionada con estos términos y condiciones estará sujeta a la jurisdicción exclusiva de los tribunales de España.
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

export default TerminosServicio;
