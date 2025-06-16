import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AvisoLegal: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-fluid">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-golden font-kritik text-center">AVISO LEGAL</h1>
          
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <div className="space-y-6 font-mexican text-sm md:text-base">
              <h2 className="text-2xl font-bold text-golden">INFORMACIÓN GENERAL</h2>
              <p>
                En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa que este sitio web es propiedad de GALLERO.
              </p>
              
              <h2 className="text-2xl font-bold text-golden mt-8">DATOS IDENTIFICATIVOS</h2>
              <p>
                Denominación social: SANSOL INVESTMENTS S.L.<br />
                NIF: B87951844<br />
                Domicilio social: Calle del Castillo 24 28010 MADRID<br />
                Contacto: contacto@gallero.es
              </p>
              
              <h2 className="text-2xl font-bold text-golden mt-8">PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
              <p>
                Todos los derechos de propiedad intelectual e industrial del sitio web, incluyendo, pero no limitado a, su estructura, diseño, textos, imágenes, gráficos, sonidos, bases de datos, software, códigos fuente y cualquier otro material que aparezca en el sitio web, son propiedad de GALLERO o ha obtenido la autorización correspondiente para su uso.
              </p>
              <p>
                Queda prohibida la reproducción, distribución, transformación o comunicación pública, y cualquier otro acto de explotación de la totalidad o parte de los contenidos (imágenes, textos, diseño, índices, formas, etc.) que integran el sitio web, así como de las bases de datos y del software necesario para la visualización o el funcionamiento del mismo, sin la autorización expresa y por escrito de GALLERO.
              </p>
              
              <h2 className="text-2xl font-bold text-golden mt-8">CONDICIONES DE USO</h2>
              <p>
                El acceso a este sitio web implica la aceptación de estas condiciones de uso. El usuario se compromete a utilizar el sitio web, sus servicios y contenidos sin contravenir la legislación vigente, la buena fe, los usos generalmente aceptados y el orden público.
              </p>
              <p>
                Queda prohibido el uso del sitio web con fines ilícitos o lesivos contra GALLERO o cualquier tercero, o que pudieran causar daño o perjuicio a su imagen o reputación.
              </p>
              
              <h2 className="text-2xl font-bold text-golden mt-8">RESPONSABILIDADES</h2>
              <p>
                GALLERO no se hace responsable de los daños y perjuicios que puedan derivarse de interferencias, omisiones, interrupciones, virus informáticos, averías telefónicas o desconexiones en el funcionamiento operativo del sistema electrónico, motivados por causas ajenas a GALLERO.
              </p>
              <p>
                Asimismo, GALLERO excluye cualquier responsabilidad por los daños y perjuicios de toda naturaleza que puedan deberse a la falta de disponibilidad o continuidad del funcionamiento del sitio web y de los servicios.
              </p>
              
              <h2 className="text-2xl font-bold text-golden mt-8">LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h2>
              <p>
                Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia que pudiera surgir en relación con el acceso o uso de este sitio web, el usuario y GALLERO acuerdan someterse a la jurisdicción de los tribunales de [Ciudad], España, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
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

export default AvisoLegal;
