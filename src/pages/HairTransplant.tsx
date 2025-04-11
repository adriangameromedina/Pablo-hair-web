import React from 'react';

const HairTransplant = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-medical-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Injerto Capilar</h1>
          <p className="text-xl max-w-3xl mx-auto">
            La solución definitiva para la pérdida de cabello con resultados naturales y duraderos.
          </p>
        </div>
      </div>
      
      {/* Introduction */}
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-medical-700">
            ¿Qué es el Injerto Capilar?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            El injerto capilar es un procedimiento quirúrgico mínimamente invasivo que consiste en trasplantar folículos pilosos desde una zona donante (generalmente la parte posterior o lateral de la cabeza) hacia las áreas con calvicie o menor densidad capilar.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Este procedimiento aprovecha que los folículos de la zona donante son genéticamente resistentes a la hormona DHT (dihidrotestosterona), responsable de la caída del cabello en la alopecia androgénica. Al trasplantarlos a las zonas afectadas, estos folículos conservan sus características originales y siguen creciendo con normalidad.
          </p>
          <div className="bg-medical-50 p-6 rounded-lg border border-medical-200 mb-8">
            <h3 className="text-xl font-bold mb-2 text-medical-700">Ventajas del Injerto Capilar</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Resultados permanentes y naturales</li>
              <li>Procedimiento mínimamente invasivo</li>
              <li>Recuperación rápida</li>
              <li>Sin necesidad de tratamientos continuos</li>
              <li>Aumento de la autoestima y confianza</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Techniques */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Técnicas de Injerto Capilar</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-medical-500">
              <h3 className="text-xl font-bold mb-4 text-medical-700">Técnica FUE</h3>
              <p className="text-gray-700 mb-4">
                La técnica FUE (Follicular Unit Extraction) consiste en la extracción individual de unidades foliculares de la zona donante utilizando un micromotor con punches de pequeño diámetro.
              </p>
              <p className="text-gray-700 mb-4">
                Esta técnica no deja cicatriz lineal, tiene una recuperación más rápida y permite retomar la actividad normal en pocos días.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Sin puntos de sutura</li>
                <li>Recuperación más rápida</li>
                <li>Sin cicatriz visible</li>
                <li>Ideal para personas con pelo corto</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Process */}
      <div className="section-container">
        <h2 className="section-title">El Proceso del Injerto Capilar</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute top-0 left-6 h-full w-0.5 bg-medical-300"></div>
            
            <div className="relative pl-16 pb-12">
              <div className="absolute top-0 left-0 bg-medical-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-3 text-medical-700">Consulta Inicial</h3>
              <p className="text-gray-700">
                En la primera visita, realizaremos un análisis detallado de su cuero cabelludo, antecedentes médicos y expectativas. Le explicaremos las opciones de tratamiento más adecuadas para su caso específico.
              </p>
            </div>
            
            <div className="relative pl-16 pb-12">
              <div className="absolute top-0 left-0 bg-medical-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-3 text-medical-700">Diseño de Línea Frontal</h3>
              <p className="text-gray-700">
                El día de la intervención, diseñaremos meticulosamente la línea frontal y las áreas a tratar, considerando factores como su edad, fisonomía y progresión futura de la alopecia.
              </p>
            </div>
            
            <div className="relative pl-16 pb-12">
              <div className="absolute top-0 left-0 bg-medical-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-3 text-medical-700">Extracción de Unidades Foliculares</h3>
              <p className="text-gray-700">
                Mediante la técnica elegida (FUE o FUSS), se extraen las unidades foliculares de la zona donante. Este proceso se realiza con anestesia local para garantizar su comodidad.
              </p>
            </div>
            
            <div className="relative pl-16 pb-12">
              <div className="absolute top-0 left-0 bg-medical-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-3 text-medical-700">Preparación de Injertos</h3>
              <p className="text-gray-700">
                Las unidades foliculares extraídas son cuidadosamente seleccionadas, clasificadas y preparadas para su implantación, manteniendo condiciones óptimas de hidratación y temperatura.
              </p>
            </div>
            
            <div className="relative pl-16 pb-12">
              <div className="absolute top-0 left-0 bg-medical-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">5</div>
              <h3 className="text-xl font-bold mb-3 text-medical-700">Implantación</h3>
              <p className="text-gray-700">
                Los folículos se implantan uno a uno en las zonas receptoras, respetando la dirección, ángulo y distribución natural del cabello para lograr un resultado estético óptimo.
              </p>
            </div>
            
            <div className="relative pl-16">
              <div className="absolute top-0 left-0 bg-medical-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">6</div>
              <h3 className="text-xl font-bold mb-3 text-medical-700">Seguimiento Post-operatorio</h3>
              <p className="text-gray-700">
                Tras la intervención, le proporcionaremos instrucciones detalladas para el cuidado del área tratada y programaremos visitas de seguimiento para monitorizar su evolución.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Results */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Resultados y Recuperación</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold mb-4 text-medical-700">Evolución del Injerto</h3>
                <ul className="space-y-4">
                  <li className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="font-bold block text-medical-600">1-3 días:</span>
                    Posible inflamación y enrojecimiento en las zonas tratadas.
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="font-bold block text-medical-600">7-14 días:</span>
                    Las costras se desprenden y los folículos trasplantados entran en fase de reposo.
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="font-bold block text-medical-600">2-3 meses:</span>
                    La mayoría de los cabellos trasplantados suelen caerse (fase de reposo).
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="font-bold block text-medical-600">3-6 meses:</span>
                    Comienza el nuevo crecimiento del cabello trasplantado.
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="font-bold block text-medical-600">12-18 meses:</span>
                    Resultado final con cabello maduro en grosor y densidad.
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-medical-700">Cuidados Post-operatorios</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <ul className="list-disc pl-5 space-y-3">
                    <li>Evitar tocar o frotar la zona tratada durante los primeros días.</li>
                    <li>Lavar suavemente el cabello siguiendo las instrucciones específicas.</li>
                    <li>Dormir con la cabeza ligeramente elevada durante la primera semana.</li>
                    <li>Evitar la exposición directa al sol durante el primer mes.</li>
                    <li>No realizar actividad física intensa durante 2-3 semanas.</li>
                    <li>No fumar ni consumir alcohol durante al menos 7 días.</li>
                    <li>Tomar la medicación prescrita según las indicaciones.</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-medical-50 p-6 rounded-lg border border-medical-200">
              <h3 className="text-xl font-bold mb-4 text-medical-700">¿Es permanente el injerto capilar?</h3>
              <p className="text-gray-700 mb-4">
                Sí, el injerto capilar ofrece resultados permanentes, ya que los folículos trasplantados conservan sus características genéticas originales y son resistentes a la hormona DHT.
              </p>
              <p className="text-gray-700">
                Sin embargo, es importante entender que el proceso de alopecia puede continuar afectando a los cabellos no trasplantados. Por ello, en algunos casos, se puede recomendar tratamientos complementarios para mantener y proteger el cabello existente.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-medical-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Interesado en un Injerto Capilar?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Contacte con nosotros para una consulta gratuita donde evaluaremos su caso y le ofreceremos la mejor solución personalizada.
          </p>
          <a href="/contacto" className="btn-cta rounded-full">
            Solicitar Consulta Gratuita
          </a>
        </div>
      </div>
    </div>
  );
};

export default HairTransplant;
