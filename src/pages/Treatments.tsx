
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TreatmentCardProps {
  title: string;
  shortDescription: string;
  fullDescription: React.ReactNode;
  onSelect: () => void;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({ 
  title, 
  shortDescription, 
  onSelect 
}) => {
  return (
    <div 
      className="treatment-card bg-[#FEF7E0] p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
      onClick={onSelect}
    >
      <h3 className="text-xl font-bold mb-3 text-medical-700">{title}</h3>
      <p className="text-gray-600">{shortDescription}</p>
      <div className="mt-4 text-medical-600 font-medium">Ver más →</div>
    </div>
  );
};

interface TreatmentModalProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const TreatmentModal: React.FC<TreatmentModalProps> = ({ 
  title, 
  content, 
  isOpen, 
  onClose 
}) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-medical-700">{title}</h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Cerrar"
            >
              <X size={24} />
            </button>
          </div>
          <div className="prose max-w-none">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

const Treatments = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null);
  
  const treatments = [
    {
      id: "injerto-capilar",
      title: "Injerto Capilar",
      shortDescription: "Solución definitiva para la calvicie con resultados naturales y duraderos.",
      fullDescription: (
        <>
          <p>
            El injerto capilar es un procedimiento quirúrgico mínimamente invasivo que consiste en trasplantar folículos pilosos desde una zona donante hacia las áreas con calvicie o menor densidad capilar.
          </p>
          <p>
            En nuestra clínica utilizamos las técnicas más avanzadas (FUE y FUSS) para garantizar resultados naturales y duraderos, con una recuperación rápida y mínimas molestias.
          </p>
          <h4 className="text-lg font-bold mt-4 mb-2">Beneficios:</h4>
          <ul className="list-disc pl-5">
            <li>Resultados permanentes</li>
            <li>Procedimiento mínimamente invasivo</li>
            <li>Aspecto completamente natural</li>
            <li>Alta densidad capilar</li>
            <li>Recuperación rápida</li>
          </ul>
          <h4 className="text-lg font-bold mt-4 mb-2">Proceso:</h4>
          <p>
            El procedimiento se realiza con anestesia local y tiene una duración aproximada de 6-8 horas, dependiendo del número de injertos. La recuperación es rápida y los resultados definitivos se aprecian entre los 12 y 18 meses.
          </p>
        </>
      )
    },
    {
      id: "injerto-sin-rasurado",
      title: "Injerto Capilar Sin Rasurado",
      shortDescription: "Tratamiento discreto que permite volver inmediatamente a la vida social.",
      fullDescription: (
        <>
          <p>
            El injerto capilar sin rasurado (también conocido como técnica FUE sin rasurado) es una variante del trasplante capilar tradicional que permite realizar el procedimiento sin necesidad de rapar la zona donante.
          </p>
          <p>
            Esta técnica es ideal para pacientes que no pueden permitirse cambios drásticos en su apariencia debido a compromisos laborales o sociales.
          </p>
          <h4 className="text-lg font-bold mt-4 mb-2">Ventajas:</h4>
          <ul className="list-disc pl-5">
            <li>Sin necesidad de rasurar toda la cabeza</li>
            <li>Discreto y poco detectable</li>
            <li>Rápida reincorporación social</li>
            <li>Mismos resultados que un trasplante tradicional</li>
            <li>Mínimamente invasivo</li>
          </ul>
          <h4 className="text-lg font-bold mt-4 mb-2">Consideraciones:</h4>
          <p>
            El procedimiento puede ser más laborioso y requerir más tiempo que un trasplante tradicional. Además, el número de injertos que se pueden extraer en una sesión puede ser menor. Durante la consulta evaluaremos si es la opción adecuada para su caso específico.
          </p>
        </>
      )
    },
    {
      id: "reparacion-cicatrices",
      title: "Reparación de Cicatrices",
      shortDescription: "Corrección de cicatrices resultantes de cirugías capilares previas.",
      fullDescription: (
        <>
          <p>
            La reparación de cicatrices es un tratamiento especializado destinado a mejorar la apariencia de cicatrices resultantes de cirugías capilares previas, lesiones o quemaduras en el cuero cabelludo.
          </p>
          <p>
            Utilizamos técnicas avanzadas para trasplantar folículos pilosos directamente en las áreas cicatrizadas, ayudando a camuflar estas zonas y restaurar una apariencia natural.
          </p>
          <h4 className="text-lg font-bold mt-4 mb-2">Aplicaciones:</h4>
          <ul className="list-disc pl-5">
            <li>Cicatrices de técnica FUSS (tira)</li>
            <li>Cicatrices de accidentes o quemaduras</li>
            <li>Cicatrices quirúrgicas</li>
            <li>Cicatrices de infecciones o enfermedades del cuero cabelludo</li>
          </ul>
          <h4 className="text-lg font-bold mt-4 mb-2">Proceso:</h4>
          <p>
            El tratamiento comienza con una evaluación detallada de la cicatriz y su elasticidad. Dependiendo del tipo y tamaño de la cicatriz, podemos utilizar diferentes técnicas, como trasplante capilar directo o expansores de tejido para casos más complejos.
          </p>
          <p>
            Los resultados se aprecian gradualmente, con una mejora significativa en la apariencia de la cicatriz y una mayor cobertura capilar en la zona afectada.
          </p>
        </>
      )
    },
    {
      id: "correccion-intervenciones",
      title: "Corrección de Intervenciones Previas",
      shortDescription: "Soluciones para mejorar resultados insatisfactorios de trasplantes anteriores.",
      fullDescription: (
        <>
          <p>
            La corrección de intervenciones previas está diseñada para pacientes que han quedado insatisfechos con los resultados de un trasplante capilar realizado en otra clínica.
          </p>
          <p>
            Con nuestra experiencia y técnicas avanzadas, podemos corregir y mejorar resultados no deseados como líneas frontales artificiales, distribución irregular, dirección incorrecta del cabello o baja densidad.
          </p>
          <h4 className="text-lg font-bold mt-4 mb-2">Problemas comunes que corregimos:</h4>
          <ul className="list-disc pl-5">
            <li>Líneas frontales no naturales o demasiado rectas</li>
            <li>Distribución irregular o no homogénea</li>
            <li>Dirección y ángulo incorrectos del cabello</li>
            <li>Baja densidad o aspecto "en muñeco"</li>
            <li>Zonas con "agujeros" o falta de cobertura</li>
          </ul>
          <h4 className="text-lg font-bold mt-4 mb-2">Nuestro enfoque:</h4>
          <p>
            Cada caso de revisión es único y requiere un enfoque personalizado. Durante la consulta, analizaremos detalladamente su situación actual y diseñaremos un plan de tratamiento para corregir los problemas existentes y conseguir un resultado natural y estético.
          </p>
          <p>
            En algunos casos, puede ser necesario esperar para permitir la completa recuperación del tejido antes de realizar un nuevo procedimiento.
          </p>
        </>
      )
    },
    {
      id: "injerto-cejas",
      title: "Injerto Capilar en Cejas",
      shortDescription: "Restauración y densificación de cejas para un aspecto natural y definido.",
      fullDescription: (
        <>
          <p>
            El injerto capilar en cejas es un procedimiento especializado para reconstruir, densificar o remodelar las cejas en casos de pérdida por sobredepilación, cicatrices, genética u otras causas.
          </p>
          <p>
            Este tratamiento requiere una técnica meticulosa y precisa, ya que los folículos deben colocarse siguiendo la dirección natural de crecimiento y con un ángulo muy específico para lograr un resultado estético óptimo.
          </p>
          <h4 className="text-lg font-bold mt-4 mb-2">Indicaciones:</h4>
          <ul className="list-disc pl-5">
            <li>Pérdida de pelo en las cejas por sobredepilación</li>
            <li>Cicatrices en la zona de las cejas</li>
            <li>Cejas naturalmente poco pobladas o irregulares</li>
            <li>Asimetría en las cejas</li>
            <li>Condiciones médicas que afectan al crecimiento del vello</li>
          </ul>
          <h4 className="text-lg font-bold mt-4 mb-2">El procedimiento:</h4>
          <p>
            Se realiza extrayendo unidades foliculares finas, generalmente de la parte posterior de la cabeza, y trasplantándolas meticulosamente a la zona de las cejas. El procedimiento se realiza con anestesia local y tiene una duración aproximada de 2-3 horas.
          </p>
          <p>
            Es importante destacar que el pelo trasplantado conservará las características del pelo donante, por lo que será necesario recortarlo periódicamente, ya que crecerá como cabello normal.
          </p>
        </>
      )
    }
  ];
  
  const handleSelectTreatment = (id: string) => {
    setSelectedTreatment(id);
  };
  
  const handleCloseModal = () => {
    setSelectedTreatment(null);
  };
  
  const selectedTreatmentData = treatments.find(
    treatment => treatment.id === selectedTreatment
  );

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-medical-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Tratamientos Capilares</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Soluciones avanzadas y personalizadas para cada tipo de alopecia.
          </p>
        </div>
      </div>
      
      {/* Treatments Grid */}
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment) => (
              <TreatmentCard
                key={treatment.id}
                title={treatment.title}
                shortDescription={treatment.shortDescription}
                fullDescription={treatment.fullDescription}
                onSelect={() => handleSelectTreatment(treatment.id)}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Treatment Modal */}
      <TreatmentModal
        title={selectedTreatmentData?.title || ""}
        content={selectedTreatmentData?.fullDescription || <></>}
        isOpen={!!selectedTreatment}
        onClose={handleCloseModal}
      />
      
      {/* Additional Information */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Mi Enfoque</h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-center mb-12">
              En mi práctica profesional, creo en un enfoque personalizado para cada paciente. Todos los tratamientos se adaptan a sus necesidades específicas y objetivos estéticos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-medical-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-medical-700">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-medical-700">Seguridad</h3>
                <p className="text-gray-600">
                  Todos mis procedimientos cumplen con los más altos estándares de seguridad y calidad.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-medical-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-medical-700">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-medical-700">Innovación</h3>
                <p className="text-gray-600">
                  Utilizo las técnicas y tecnologías más avanzadas en el campo del trasplante capilar.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-medical-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-medical-700">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-medical-700">Personalización</h3>
                <p className="text-gray-600">
                  Cada tratamiento se adapta a las necesidades específicas y características únicas de cada paciente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-medical-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Quiere saber qué tratamiento es el indicado para usted?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Contacte conmigo para una consulta personalizada y sin compromiso.
          </p>
          <Link to="/contacto#top" className="btn-cta rounded-full">
            Reservar Consulta Gratuita
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
