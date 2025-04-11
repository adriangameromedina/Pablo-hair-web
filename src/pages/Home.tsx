
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Scroll to top when link is clicked
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="hero-section h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            Dr. Manolito
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-8">
            Cirujano Capilar y Director médico de Clinica X
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link to="/contacto" className="btn-cta rounded-full transition-transform hover:scale-105" onClick={handleLinkClick}>
              Consulta Gratuita
            </Link>
            <Link to="/sobre-mi" className="btn-secondary rounded-full text-base px-5 py-3.5 whitespace-nowrap" onClick={handleLinkClick}>
              Sobre Mí
            </Link>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="section-container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4 text-medical-700">Injerto Capilar</h3>
            <p className="text-gray-600 mb-4">
              Utilizamos las técnicas más avanzadas para ofrecerle un resultado natural y duradero.
            </p>
            <Link to="/injerto-capilar" className="text-medical-600 font-medium hover:underline" onClick={handleLinkClick}>
              Saber más →
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4 text-medical-700">Tratamientos Capilares</h3>
            <p className="text-gray-600 mb-4">
              Ofrecemos diversos tratamientos adaptados a sus necesidades específicas.
            </p>
            <Link to="/tratamientos" className="text-medical-600 font-medium hover:underline" onClick={handleLinkClick}>
              Saber más →
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4 text-medical-700">Consulta Personalizada</h3>
            <p className="text-gray-600 mb-4">
              Evaluación detallada de su caso para determinar el mejor tratamiento posible.
            </p>
            <Link to="/contacto" className="text-medical-600 font-medium hover:underline" onClick={handleLinkClick}>
              Contactar →
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 py-16 bg-why-choose-us bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay for better text readability */}
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="section-title text-white">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-medical-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-medical-700 font-bold text-2xl">15+</span>
              </div>
              <h3 className="font-bold mb-2 text-white">Años de Experiencia</h3>
              <p className="text-gray-200">Extensa trayectoria en cirugía capilar.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-medical-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-medical-700 font-bold text-2xl">2k+</span>
              </div>
              <h3 className="font-bold mb-2 text-white">Pacientes Satisfechos</h3>
              <p className="text-gray-200">Testimonios que avalan nuestra calidad.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-medical-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-medical-700 font-bold text-2xl">100%</span>
              </div>
              <h3 className="font-bold mb-2 text-white">Tecnología Avanzada</h3>
              <p className="text-gray-200">Equipamiento de última generación.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-medical-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-medical-700 font-bold text-2xl">24/7</span>
              </div>
              <h3 className="font-bold mb-2 text-white">Atención Continua</h3>
              <p className="text-gray-200">Seguimiento post-operatorio personalizado.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-medical-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para recuperar tu cabello?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a conseguir el resultado que deseas.
          </p>
          <Link to="/contacto" className="btn-cta rounded-full" onClick={handleLinkClick}>
            Reservar Consulta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
