import React from 'react';

const testimonies = [
  {
    name: 'Hubert Michel',
    photo: '/icons/homme.png',
    speech: 'Grâce à la formation reçue à Radio Flambeau-Banka, j’ai pu lancer ma propre émission et aujourd’hui je travaille comme journaliste à Douala equinox radio.',
    status: 'Journaliste, Douala'
  },
  {
    name: 'Tchokonthe Zibi',
    photo: '/icons/homme.png',
    speech: 'La radio m’a permis de découvrir ma passion pour l’animation. Je suis maintenant animateur principal.',
    status: 'Animateur principal'
  },
  {
    name: 'Vanelle simo',
    photo: '/icons/femme.png',
    speech: 'Après mon passage à Radio Flambeau-Banka, j’ai intégré une grande station à Yaoundé Mboa Foot. Merci pour l’opportunité !',
    status: 'Technicien radio, Yaoundé'
  },
  {
    name: 'Robinson Piffo',
    photo: '/icons/homme.png',
    speech: 'Après mon passage à Radio Flambeau-Banka, Je suis maintenant animateur principal',
    status: 'PDG d\'une radio, Yaoundé'
  }
];

const TestimonySection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Témoignages des Formés
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonies.map((testimony, idx) => (
          <div key={idx} className="bg-gray-50 rounded-2xl shadow p-6 flex flex-col items-center text-center">
            <img
              src={testimony.photo}
              alt={testimony.name}
              className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-purple-100"
              onError={e => { e.target.src = '/images/logo.png'; }}
            />
            <h3 className="text-lg font-bold text-purple-700 mb-2">{testimony.name}</h3>
            <p className="text-gray-600 italic mb-2">“{testimony.speech}”</p>
            <div className="text-sm text-gray-500">{testimony.status}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonySection; 