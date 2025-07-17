import React from 'react';

const services = [
  {
    name: 'Mairie de Banka',
    description: "La mairie gère l'administration locale, l'état civil, les projets de développement et les services publics.",
    contact: '+237 699 123 456',
    image: '/images/logo/logo.jpg',
    address: "Centre-ville, Banka"
  },
  {
    name: 'Préfecture de Banka',
    description: "La préfecture supervise l'ordre public, la sécurité et la coordination administrative.",
    contact: '+237 677 234 567',
    image: '/images/bafang.jpg',
    address: "Quartier administratif, Banka"
  },
  {
    name: 'Centre de Santé Intégré',
    description: "Le centre de santé offre des soins médicaux de base, des consultations et des campagnes de vaccination.",
    contact: '+237 655 345 678',
    image: '/images/protege.jpg',
    address: "Quartier Centre, Banka"
  },
  {
    name: 'Brigade de Gendarmerie',
    description: "La gendarmerie assure la sécurité, la protection des personnes et des biens.",
    contact: '+237 699 456 789',
    image: '/images/qv1.jpg',
    address: "Entrée Est, Banka"
  },
  {
    name: 'Commissariat de Police',
    description: "Le commissariat veille à l'ordre public et à la sécurité routière.",
    contact: '+237 677 567 890',
    image: '/images/clovy.jpg',
    address: "Avenue principale, Banka"
  }
];

const AdministrativeServicesSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Services Administratifs de la Ville de Banka
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-gray-50 rounded-2xl shadow p-6 flex flex-col items-center text-center">
            <img
              src={service.image}
              alt={service.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-blue-100"
              onError={e => { e.target.src = '/images/logo.png'; }}
            />
            <h3 className="text-xl font-bold text-blue-700 mb-2">{service.name}</h3>
            <p className="text-gray-600 mb-2">{service.description}</p>
            <div className="text-sm text-gray-500 mb-1">{service.address}</div>
            <div className="text-sm text-blue-600 font-semibold">{service.contact}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AdministrativeServicesSection; 