import React from 'react';
import { Star } from 'lucide-react';

const AboutMe = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-medical-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
            <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-200 shrink-0">
              {/* Placeholder for doctor's image */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                <span className="text-lg">Foto de Dr. Manolito</span>
              </div>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Dr. Manolito</h1>
              <p className="text-xl mb-4">Cirujano Capilar y Director médico de Clinica X</p>
              <p className="text-gray-200">
                Especialista en trasplante capilar con más de 15 años de experiencia y reconocimiento internacional. 
                Pionero en técnicas avanzadas de restauración capilar.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Education Section */}
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Formación Académica</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-medical-500">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <h3 className="text-xl font-bold text-medical-700">Doctor en Medicina y Cirugía</h3>
                <span className="text-gray-500 mt-1 md:mt-0">2000 - 2006</span>
              </div>
              <p className="text-gray-700 mb-2">Universidad de [Nombre]</p>
              <p className="text-gray-600">
                Graduado con honores. Especializado en dermatología y cirugía plástica. 
                Tesis doctoral enfocada en la regeneración del folículo piloso.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-medical-500">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <h3 className="text-xl font-bold text-medical-700">Especialidad en Dermatología</h3>
                <span className="text-gray-500 mt-1 md:mt-0">2006 - 2010</span>
              </div>
              <p className="text-gray-700 mb-2">Hospital Universitario [Nombre]</p>
              <p className="text-gray-600">
                Formación MIR en dermatología con enfoque específico en tricología y 
                patología capilar. Rotación en hospitales de prestigio internacional.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-medical-500">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <h3 className="text-xl font-bold text-medical-700">Máster en Tricología y Trasplante Capilar</h3>
                <span className="text-gray-500 mt-1 md:mt-0">2010 - 2011</span>
              </div>
              <p className="text-gray-700 mb-2">Instituto Internacional de [Nombre]</p>
              <p className="text-gray-600">
                Formación especializada en técnicas avanzadas de trasplante capilar, 
                incluyendo FUE, FUSS y procedimientos de regeneración folicular.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Experience Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Experiencia Profesional</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <h3 className="text-xl font-bold text-medical-700">Director Médico</h3>
                <span className="text-gray-500 mt-1 md:mt-0">2015 - Actualidad</span>
              </div>
              <p className="text-gray-700 mb-2">Clínica X</p>
              <p className="text-gray-600 mb-4">
                Fundador y director médico de la clínica, especializada en trasplante capilar 
                y tratamientos avanzados para la alopecia. Responsable del equipo médico y 
                de la implementación de protocolos de calidad.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Más de 3,000 procedimientos de trasplante capilar realizados</li>
                <li>Implementación de técnicas innovadoras de preservación folicular</li>
                <li>Desarrollo de protocolos personalizados para optimizar resultados</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <h3 className="text-xl font-bold text-medical-700">Dermatólogo y Cirujano Capilar</h3>
                <span className="text-gray-500 mt-1 md:mt-0">2011 - 2015</span>
              </div>
              <p className="text-gray-700 mb-2">Hospital [Nombre]</p>
              <p className="text-gray-600 mb-4">
                Especialista en el departamento de dermatología, con enfoque en tricología 
                y cirugía de restauración capilar. Colaborador en investigaciones clínicas 
                sobre nuevos tratamientos para la alopecia.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Miembro del equipo de investigación en terapias regenerativas capilares</li>
                <li>Desarrollo de protocolos de tratamiento combinado para la alopecia</li>
                <li>Formación de residentes en técnicas de trasplante capilar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Conferences Section */}
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Comunicaciones y Congresos</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-medical-700">Ponencias destacadas</h3>
              <ul className="space-y-4">
                <li className="border-b border-gray-100 pb-4">
                  <p className="font-semibold text-gray-800 mb-1">Congreso Internacional de Trasplante Capilar</p>
                  <p className="text-gray-700 mb-2">"Avances en la técnica FUE: Maximizando la supervivencia folicular"</p>
                  <p className="text-gray-500">Madrid, 2022</p>
                </li>
                <li className="border-b border-gray-100 pb-4">
                  <p className="font-semibold text-gray-800 mb-1">Simposio Europeo de Dermatología</p>
                  <p className="text-gray-700 mb-2">"Tratamiento integral de la alopecia: Combinación de técnicas quirúrgicas y médicas"</p>
                  <p className="text-gray-500">París, 2021</p>
                </li>
                <li>
                  <p className="font-semibold text-gray-800 mb-1">Congreso Nacional de Medicina Estética</p>
                  <p className="text-gray-700 mb-2">"Reparación de cicatrices post-trasplante: Nuevos enfoques"</p>
                  <p className="text-gray-500">Barcelona, 2020</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-medical-700">Publicaciones científicas</h3>
              <ul className="space-y-4">
                <li className="border-b border-gray-100 pb-4">
                  <p className="font-semibold text-gray-800 mb-1">Journal of Dermatological Surgery</p>
                  <p className="text-gray-700 mb-2">"Optimización de la extracción folicular en la técnica FUE: Un estudio comparativo"</p>
                  <p className="text-gray-500">2021</p>
                </li>
                <li className="border-b border-gray-100 pb-4">
                  <p className="font-semibold text-gray-800 mb-1">International Journal of Trichology</p>
                  <p className="text-gray-700 mb-2">"Factores predictivos del éxito en el trasplante capilar: Análisis retrospectivo de 1,000 casos"</p>
                  <p className="text-gray-500">2019</p>
                </li>
                <li>
                  <p className="font-semibold text-gray-800 mb-1">Dermatology Research and Practice</p>
                  <p className="text-gray-700 mb-2">"Manejo de la alopecia cicatricial mediante técnicas avanzadas de trasplante"</p>
                  <p className="text-gray-500">2018</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Doctoralia Reviews Section - NUEVA SECCIÓN */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Valoraciones en Doctoralia</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-medical-700">Opiniones en Doctoralia</h3>
                  <p className="text-gray-600">Valoración media de mis pacientes</p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-medical-700 mr-2">4.8</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-6 w-6 ${star <= 5 ? 'text-blue-500 fill-blue-500' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">Basado en 93 opiniones</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">Laura M.</h4>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className="h-4 w-4 text-blue-500 fill-blue-500" 
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">Hace 1 mes</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    "Excelente profesional. Me explicó claramente mi situación y las opciones de tratamiento. El seguimiento ha sido impecable y me siento mucho mejor desde que inicié el tratamiento."
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">Alberto S.</h4>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className={`h-4 w-4 ${star <= 5 ? 'text-blue-500 fill-blue-500' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">Hace 2 meses</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    "Mi experiencia con el trasplante capilar ha sido inmejorable. El doctor explicó todo el proceso detalladamente y el resultado es natural y exactamente lo que esperaba."
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">Marta L.</h4>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className={`h-4 w-4 ${star <= 4 ? 'text-blue-500 fill-blue-500' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">Hace 3 meses</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    "Un médico que realmente se preocupa por sus pacientes. Me recomendó el mejor tratamiento para mi caso particular y siempre responde a mis dudas con rapidez y claridad."
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">Javier C.</h4>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className="h-4 w-4 text-blue-500 fill-blue-500" 
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">Hace 1 mes</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    "Profesionalidad absoluta. La clínica es moderna y el personal muy amable. El doctor resolvió todas mis dudas y me siento muy satisfecho con los resultados obtenidos."
                  </p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <a 
                  href="https://www.doctoralia.es/manuel-miras-estacio/cirujano-general/madrid" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-medical-600 text-white rounded-md hover:bg-medical-700 transition-colors"
                >
                  Ver todas las reseñas en Doctoralia
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Memberships */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Afiliaciones Profesionales</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-medical-700">Asociaciones médicas</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Sociedad Internacional de Cirugía de Restauración Capilar (ISHRS)</li>
                  <li>Academia Europea de Dermatología y Venereología (EADV)</li>
                  <li>Sociedad Española de Medicina y Cirugía Cosmética (SEMCC)</li>
                  <li>Asociación Española de Dermatología y Venereología (AEDV)</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-medical-700">Comités científicos</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Miembro del comité científico de la Asociación Española de Trasplante Capilar</li>
                  <li>Revisor para el Journal of Dermatological Treatment</li>
                  <li>Asesor técnico para desarrollos en instrumentación de microcirugía capilar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-medical-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Interesado en conocer más sobre nuestros tratamientos?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Pida cita para una consulta personalizada y descubra cómo podemos ayudarle con su caso específico.
          </p>
          <a href="/contacto" onClick={() => window.scrollTo(0, 0)} className="btn-cta rounded-full">
            Solicitar Consulta Gratuita
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
