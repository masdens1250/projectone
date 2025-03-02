import React from 'react';
import { CheckCircle } from 'lucide-react';

const Projects = () => {
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "CEM Benaouda Benzerdjeb",
      description: "Installation complète d'un réseau informatique et mise en place d'un contrat de maintenance annuel.",
      image: "https://images.unsplash.com/photo-1562516155-e0c1ee44059b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      services: ["Installation de réseau", "Maintenance informatique", "Configuration de salle informatique"],
      year: 2023,
      director: "Mr Benchendikh Noreddine"
    },
    {
      id: 2,
      title: "CEM Belaid Toufik",
      description: "Rénovation du parc informatique et installation d'un système de télémaintenance.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      services: ["Rénovation informatique", "Installation de télémaintenance", "Formation du personnel"],
      year: 2023,
      director: "Mr Affif Bouguedba"
    },
    {
      id: 3,
      title: "CEM Laarbi Tebessi",
      description: "Déploiement d'un réseau Wi-Fi couvrant l'ensemble de l'établissement et sécurisation des accès.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      services: ["Installation Wi-Fi", "Sécurisation réseau", "Maintenance préventive"],
      year: 2024,
      director: "Mr Ould ALI"
    },
    {
      id: 6,
      title: "CEM Boutchatcha",
      description: "Installation d'un système de sauvegarde automatique et formation du personnel administratif.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      services: ["Système de sauvegarde", "Formation administrative", "Sécurisation des données"],
      year: 2024,
      director: "Mme Khadidja Benhalou"
    },
    {
      id: 7,
      title: "CEM Abdelmadjid Meziane",
      description: "Modernisation complète de l'infrastructure réseau et mise en place d'un système de surveillance.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      services: ["Modernisation réseau", "Système de surveillance", "Maintenance informatique"],
      year: 2024,
      director: "Mr Mhamdi Abdelkader"
    },
    {
      id: 5,
      title: "CEM Ibn Sina",
      description: "Audit complet de l'infrastructure existante et mise à niveau du réseau informatique.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      services: ["Audit informatique", "Mise à niveau réseau", "Optimisation système"],
      year: 2024,
      director: "Mme Khadidja Benhalou"
    },
    {
      id: 4,
      title: "CEM Zedour Mohamed",
      description: "Mise en place d'une salle informatique complète avec 20 postes et serveur central.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      services: ["Installation de salle informatique", "Configuration serveur", "Formation des enseignants"],
      year: 2024,
      director: "Mr Belarbi Abdelkader"
    }
  ];

  // Fonction pour organiser les projets dans l'ordre souhaité
  const organizeProjects = () => {
    // Créer un tableau pour stocker les projets dans l'ordre souhaité
    const organizedProjects = [];
    
    // Trouver les projets spécifiques
    const meziane = projects.find(p => p.title === "CEM Abdelmadjid Meziane");
    const zedour = projects.find(p => p.title === "CEM Zedour Mohamed");
    
    // Filtrer les autres projets (exclure Meziane et Zedour)
    const otherProjects = projects.filter(p => 
      p.title !== "CEM Abdelmadjid Meziane" && 
      p.title !== "CEM Zedour Mohamed"
    );
    
    // Ajouter les 3 premiers projets
    organizedProjects.push(otherProjects[0], otherProjects[1], otherProjects[2]);
    
    // Ajouter Meziane en 4ème position
    if (meziane) organizedProjects.push(meziane);
    
    // Ajouter les 2 projets suivants
    organizedProjects.push(otherProjects[3], otherProjects[4]);
    
    // Ajouter Zedour en dernière position (position centrale)
    if (zedour) organizedProjects.push(zedour);
    
    return organizedProjects;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#2c3e50] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nos Réalisations</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez les établissements scolaires qui ont bénéficié de nos prestations dans la région de Mostaganem.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {organizeProjects().slice(0, 6).map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <span className="text-sm bg-green-100 text-green-700 py-1 px-2 rounded">{project.year}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{project.description}</p>
                  <p className="text-gray-700 mb-4"><span className="text-green-600 font-medium">Directeur:</span> <span className="text-green-600 font-medium">{project.director}</span></p>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">Services fournis :</h4>
                    <ul className="space-y-1">
                      {project.services.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={14} />
                          <span className="text-sm text-gray-600">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Zedour Mohamed au centre */}
          <div className="mt-8 flex justify-center">
            {organizeProjects().slice(6).map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300 overflow-hidden max-w-md">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <span className="text-sm bg-green-100 text-green-700 py-1 px-2 rounded">{project.year}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{project.description}</p>
                  <p className="text-gray-700 mb-4"><span className="text-green-600 font-medium">Directeur:</span> <span className="text-green-600 font-medium">{project.director}</span></p>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">Services fournis :</h4>
                    <ul className="space-y-1">
                      {project.services.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={14} />
                          <span className="text-sm text-gray-600">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#3a7d44] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <p>Établissements clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p>Projets réalisés</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">300+</div>
              <p>Interventions de maintenance</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p>Satisfaction client</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Vous souhaitez devenir notre prochain projet réussi ?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://wa.me/213783328729" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center shadow-md"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contacter par WhatsApp
            </a>
            <a href="tel:+213783328729" className="bg-transparent hover:bg-green-100 border-2 border-green-700 text-green-700 py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;