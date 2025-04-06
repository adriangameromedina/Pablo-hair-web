
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Injerto Capilar", path: "/injerto-capilar" },
    { name: "Tratamientos", path: "/tratamientos" },
    { name: "Sobre Mí", path: "/sobre-mi" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="/"
          className={`font-bold text-xl md:text-2xl ${
            scrolled || location.pathname !== '/' ? 'text-medical-700' : 'text-white'
          }`}
        >
          DUEÑAS
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-medium transition-colors duration-300 ${
                location.pathname === item.path
                  ? scrolled || location.pathname !== '/'
                    ? 'text-medical-600 border-b-2 border-medical-600'
                    : 'text-white border-b-2 border-white'
                  : scrolled || location.pathname !== '/'
                  ? 'text-gray-700 hover:text-medical-600'
                  : 'text-white hover:text-gray-200'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className={`md:hidden ${
            scrolled || location.pathname !== '/' ? 'text-medical-700' : 'text-white'
          }`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`font-medium ${
                  location.pathname === item.path
                    ? 'text-medical-600'
                    : 'text-gray-700 hover:text-medical-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
