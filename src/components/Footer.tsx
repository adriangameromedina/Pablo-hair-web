
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  // Función para manejar el scroll al inicio cuando se navega
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-medical-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Manolito</h3>
            <p className="text-gray-300 mb-4">
              Cirujano Capilar y Director médico de Clinica X.
              Especialista en tratamientos capilares avanzados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-medical-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="tel:+34600000000" className="hover:text-medical-300 transition-colors">
                <Phone size={20} />
              </a>
              <a href="#" className="hover:text-medical-300 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={scrollToTop} className="hover:text-medical-300 transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/injerto-capilar" onClick={scrollToTop} className="hover:text-medical-300 transition-colors">Injerto Capilar</Link>
              </li>
              <li>
                <Link to="/tratamientos" onClick={scrollToTop} className="hover:text-medical-300 transition-colors">Tratamientos</Link>
              </li>
              <li>
                <Link to="/sobre-mi" onClick={scrollToTop} className="hover:text-medical-300 transition-colors">Sobre Mí</Link>
              </li>
              <li>
                <Link to="/contacto" onClick={scrollToTop} className="hover:text-medical-300 transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 shrink-0 mt-1" size={18} />
                <span>C/ Hamlet 22, Málaga, España</span>
              </li>
              <li className="flex items-start">
                <a href="tel:+34600000000" className="flex items-start hover:text-medical-300 transition-colors">
                  <Phone className="mr-2 shrink-0 mt-1" size={18} />
                  <span>+34 600 00 00 00</span>
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 shrink-0 mt-1" size={18} />
                <span>consulta@drmanolito.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Dr. Manolito. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
