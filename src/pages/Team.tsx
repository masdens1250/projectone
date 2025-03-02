import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Facebook, User } from 'lucide-react';

const Team = () => {
  // Sample team data
  const teamMembers = [
    {
      id: 1,
      name: "Haroun Karim",
      role: "Fondateur & Directeur",
      bio: "Ingénieur en informatique avec plus de 10 ans d'expérience dans le domaine de la maintenance informatique et l'installation de réseaux. Passionné par les nouvelles technologies et l'éducation.",
      contact: {
        email: "harounsolution@gmail.com",
        phone: "(+213) 07.83.32.87.29",
        linkedin: "https://linkedin.com/in/harounkarim",
        facebook: "https://facebook.com/harounkarim"
      }
    },
    {
      id: 2,
      name: "Mohamed Kadri",
      role: "Responsable technique",
      bio: "Technicien supérieur en réseaux informatiques avec une expertise particulière dans la configuration et la sécurisation des réseaux pour les établissements scolaires.",
      contact: {
        email: "karimrouabeh915@gmail.com",
        phone: "(+213) 07.83.32.87.29",
        linkedin: "https://linkedin.com/in/karimrouabeh",
        facebook: "https://facebook.com/karimrouabeh"
      }
    },
    {
      id: 3,
      name: "Ahmed Benali",
      role: "Technicien informatique",
      bio: "Spécialiste en maintenance informatique avec 5 ans d'expérience dans le dépannage et la réparation de matériel informatique. Expert en diagnostic et résolution de problèmes techniques.",
      contact: {
        email: "ahmed.benali@netscolaire-dz.com",
        phone: "(+213) 07.83.32.87.29",
        linkedin: "https://linkedin.com/in/ahmedbenali",
        facebook: "https://facebook.com/ahmedbenali"
      }
    },
    {
      id: 4,
      name: "Fatima Zahra",
      role: "Responsable administrative",
      bio: "En charge de la gestion administrative et de la relation client. Assure le suivi des contrats et la planification des interventions pour garantir un service de qualité.",
      contact: {
        email: "fatima.zahra@netscolaire-dz.com",
        phone: "(+213) 07.83.32.87.29",
        linkedin: "https://linkedin.com/in/fatimazahra",
        facebook: "https://facebook.com/fatimazahra"
      }
    }
  ];

  // Fonction pour générer une couleur de fond aléatoire mais cohérente pour chaque membre
  const getBackgroundColor = (id) => {
    const colors = [
      'bg-blue-500',
      'bg-green-500',
      'bg-purple-500',
      'bg-orange-500',
      'bg-pink-500',
      'bg-teal-500'
    ];
    return colors[(id - 1) % colors.length];
  };

  // Fonction pour obtenir les initiales d'un nom
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#2c3e50] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Notre Équipe</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez les professionnels passionnés qui travaillent chaque jour pour assurer le bon fonctionnement de votre infrastructure informatique.
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Une équipe d'experts à votre service</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chez NetScolaire-DZ, nous sommes fiers de notre équipe de professionnels qualifiés et passionnés. Chacun de nos membres apporte son expertise et son engagement pour vous offrir un service de qualité.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`w-full h-64 flex items-center justify-center ${getBackgroundColor(member.id)}`}>
                  <div className="text-white text-center">
                    <div className="mx-auto mb-4 bg-white/20 w-32 h-32 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <User size={64} className="text-white" />
                    </div>
                    <div className="text-2xl font-bold">{getInitials(member.name)}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a 
                      href={`mailto:${member.contact.email}`} 
                      className="text-gray-600 hover:text-green-600 transition-colors"
                      title="Email"
                    >
                      <Mail size={18} />
                    </a>
                    <a 
                      href={`tel:${member.contact.phone}`} 
                      className="text-gray-600 hover:text-green-600 transition-colors"
                      title="Téléphone"
                    >
                      <Phone size={18} />
                    </a>
                    <a 
                      href={member.contact.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-green-600 transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href={member.contact.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-green-600 transition-colors"
                      title="Facebook"
                    >
                      <Facebook size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos valeurs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ces principes guident notre équipe au quotidien et définissent notre approche du service client.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Expertise</h3>
              <p className="text-gray-600">
                Notre équipe se forme continuellement pour rester à la pointe de la technologie et vous offrir les meilleures solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Réactivité</h3>
              <p className="text-gray-600">
                Nous comprenons l'importance d'un système informatique fonctionnel dans un environnement éducatif et nous nous engageons à intervenir rapidement.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Engagement</h3>
              <p className="text-gray-600">
                Nous nous engageons pleinement dans chaque projet et nous nous efforçons de dépasser les attentes de nos clients pour leur entière satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contrat de Maintenance Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-green-700 text-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-bold mb-4">Contrat de maintenance pour l'année scolaire</h2>
                <p className="mb-6">
                  Établissements scolaires, assurez la fiabilité de votre infrastructure informatique pour toute l'année scolaire ! Notre contrat de maintenance annuel renouvelable vous offre une tranquillité d'esprit à un prix unique et avantageux.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-white text-green-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">✓</span>
                    </div>
                    <p>12 visites annuelles incluses (une par mois)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white text-green-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">✓</span>
                    </div>
                    <p>Rapport détaillé après chaque intervention</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white text-green-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">✓</span>
                    </div>
                    <p>Prix fixe et avantageux : 35 700 DA/an</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link 
                    to="/contact" 
                    className="inline-block bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-md transition-colors"
                  >
                    Demander votre contrat maintenant
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 bg-green-800 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mx-auto mb-6 bg-white/20 w-40 h-40 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white text-5xl font-bold">35 700</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">DA/an</h3>
                  <p className="text-white/80">
                    Agissez vite ! Nombre limité de contrats disponibles pour cette année scolaire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ce que disent nos clients de notre équipe</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              La satisfaction de nos clients est notre priorité. Voici quelques témoignages sur notre équipe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-700 font-bold text-xl">M</span>
                </div>
                <div>
                  <h3 className="font-bold">Mme Benaouda</h3>
                  <p className="text-sm text-gray-600">Directrice, Lycée Zerrouki</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "L'équipe de NetScolaire-DZ est très professionnelle et réactive. Ils ont su résoudre rapidement nos problèmes informatiques et ont mis en place un réseau fiable dans notre établissement."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-700 font-bold text-xl">K</span>
                </div>
                <div>
                  <h3 className="font-bold">M. Kaddour</h3>
                  <p className="text-sm text-gray-600">Responsable informatique, CEM Benzerdjeb</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Je tiens à souligner le professionnalisme de Karim qui a su comprendre nos besoins spécifiques et nous proposer des solutions adaptées. Son expertise technique est remarquable."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-700 font-bold text-xl">S</span>
                </div>
                <div>
                  <h3 className="font-bold">M. Saïd</h3>
                  <p className="text-sm text-gray-600">Directeur, Lycée Khmisti</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "L'équipe administrative est très efficace dans le suivi des interventions. Fatima est toujours disponible pour répondre à nos questions et planifier les visites selon nos disponibilités."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;