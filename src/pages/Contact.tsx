
import React, { useState, useEffect } from 'react';
import { Instagram, Phone, MessageCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();

  // Scroll to top when navigating directly to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto con usted en breve.",
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="pt-20" id="top">
      {/* Hero Section */}
      <div className="bg-medical-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Estamos aquí para resolver todas sus dudas. No dude en contactar con nosotros.
          </p>
        </div>
      </div>
      
      {/* Contact Information */}
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-medical-700">Envíenos un mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-medical-500 focus:border-medical-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-medical-500 focus:border-medical-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-medical-500 focus:border-medical-500"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-medical-600 text-white py-3 px-6 rounded-md hover:bg-medical-700 focus:outline-none focus:ring-2 focus:ring-medical-500 focus:ring-offset-2 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-medical-700">Información de contacto</h2>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg mb-2">Dirección</h3>
                  <p className="text-gray-700 mb-4">C/ Hamlet 22, Málaga, España</p>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.235379443897!2d-4.455548!3d36.719832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7be196ff4c3%3A0x96b1c56cabc1a7cf!2sC.%20Hamlet%2C%2022%2C%20M%C3%A1laga!5e0!3m2!1ses!2ses!4v1713016217893!5m2!1ses!2ses" 
                      width="100%" 
                      height="200" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-md"
                    ></iframe>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg mb-4">Contacto directo</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="p-2 bg-medical-100 rounded-md mr-4">
                        <Phone className="text-medical-700" size={24} />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Teléfono</p>
                        <a href="tel:+34600000000" className="text-medical-600 hover:text-medical-700">
                          +34 600 00 00 00
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-2 bg-medical-100 rounded-md mr-4">
                        <MessageCircle className="text-medical-700" size={24} />
                      </div>
                      <div>
                        <p className="font-medium mb-1">WhatsApp</p>
                        <a href="https://wa.me/34600000000" className="text-medical-600 hover:text-medical-700">
                          +34 600 00 00 00
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-2 bg-medical-100 rounded-md mr-4">
                        <Instagram className="text-medical-700" size={24} />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Instagram</p>
                        <a href="https://instagram.com/drmanolito" className="text-medical-600 hover:text-medical-700">
                          @drmanolito
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg mb-2">Horario de atención</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>Lunes - Viernes:</span>
                      <span>9:00 - 20:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sábado:</span>
                      <span>10:00 - 14:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Domingo:</span>
                      <span>Cerrado</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Preguntas Frecuentes</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2 text-medical-700">¿Cómo puedo solicitar una consulta?</h3>
              <p className="text-gray-700">
                Puede solicitar una consulta utilizando nuestro formulario de contacto, llamando por teléfono o enviándonos un WhatsApp. Le responderemos en menos de 24 horas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2 text-medical-700">¿La primera consulta es gratuita?</h3>
              <p className="text-gray-700">
                Sí, ofrecemos una consulta inicial gratuita donde evaluamos su caso, explicamos las opciones de tratamiento y resolvemos todas sus dudas sin compromiso.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2 text-medical-700">¿Ofrecen consultas online?</h3>
              <p className="text-gray-700">
                Sí, disponemos de consultas por videollamada para pacientes que no pueden acudir presencialmente. Esta opción es ideal para una primera valoración.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
