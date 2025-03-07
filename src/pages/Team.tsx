import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Facebook, User, Star, Quote } from 'lucide-react';

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

  // Témoignages détaillés des directeurs
  const testimonials = [
    {
      id: 1,
      name: "Mr Benchendikh Noreddine",
      position: "Directeur du CEM Benaouda Benzerdjeb",
      quote: "HarounSolution a révolutionné notre infrastructure informatique en 2015 avec l'installation d'un réseau fiable et performant. Aujourd'hui, nous sommes ravis de voir leur retour sous le nom de NetScolaire-DZ, avec une expertise encore plus ciblée pour les établissements scolaires. Leur professionnalisme et leur réactivité restent inégalés. Nous avons hâte de poursuivre notre collaboration avec cette startup innovante qui comprend parfaitement les défis technologiques du secteur éducatif.",
      rating: 5
    },
    {
      id: 2,
      name: "Mr Affif Bouguedba",
      position: "Directeur du CEM Belaid Toufik",
      quote: "Grâce à HarounSolution, notre établissement a bénéficié d'un système de télémaintenance en 2014 qui nous a fait gagner un temps précieux. Leur retour sous l'identité de NetScolaire-DZ, avec une vision encore plus adaptée aux besoins scolaires, est une excellente nouvelle pour notre secteur. Nous sommes impatients de découvrir leurs nouvelles solutions et de renforcer notre partenariat avec cette startup dynamique qui a toujours su évoluer pour répondre à nos attentes spécifiques.",
      rating: 5
    },
    {
      id: 3,
      name: "Mr Ould ALI",
      position: "Directeur du CEM Laarbi Tebessi",
      quote: "HarounSolution nous avait déjà impressionnés par leur expertise technique lors de l'installation de notre premier réseau en 2016. Leur transformation en NetScolaire-DZ, avec une offre dédiée aux établissements scolaires, est exactement ce dont notre secteur avait besoin. Le déploiement de notre réseau Wi-Fi couvrant l'ensemble de l'établissement témoigne de leur évolution constante. Nous sommes enthousiastes à l'idée de continuer notre collaboration avec cette startup visionnaire.",
      rating: 5
    },
    {
      id: 4,
      name: "Mme Khadidja Benhalou",
      position: "Directrice du CEM Boutchatcha",
      quote: "Le système de sauvegarde automatique mis en place par HarounSolution en 2017 a été une véritable révolution pour la sécurité de nos données. Leur retour en tant que NetScolaire-DZ, avec une approche encore plus spécialisée, nous a permis de bénéficier d'une formation exceptionnelle pour notre personnel. Nous sommes impatients de voir les prochaines innovations que cette startup prometteuse va apporter au secteur éducatif et de renforcer notre partenariat dans les années à venir.",
      rating: 5
    },
    {
      id: 5,
      name: "Mr Mhamdi Abdelkader",
      position: "Directeur du CEM Abdelmadjid Meziane",
      quote: "HarounSolution avait posé les bases de notre infrastructure réseau en 2013, mais c'est avec leur intervention en 2018 que nous avons véritablement modernisé l'ensemble de notre système. Cette évolution témoigne de leur capacité à se réinventer et à s'adapter aux besoins spécifiques des établissements scolaires. Le système de surveillance qu'ils ont installé est parfaitement adapté à notre environnement. Nous avons hâte de poursuivre notre collaboration avec cette startup innovante qui comprend parfaitement nos enjeux.",
      rating: 5
    },
    {
      id: 6,
      name: "Mr Belarbi Abdelkader",
      position: "Directeur du CEM Zedour Mohamed",
      quote: "Notre première salle informatique avait été installée par HarounSolution en 2011 avec un professionnalisme remarquable. Leur intervention quelques années plus tard nous a permis de bénéficier d'une mise à niveau complète avec 20 postes et un serveur central parfaitement configurés. La formation dispensée à nos enseignants témoigne de leur engagement envers l'éducation. Nous sommes enthousiastes à l'idée de continuer à travailler avec cette startup dynamique qui a su évoluer tout en conservant ses valeurs d'excellence et de proximité.",
      rating: 5
    },
    {
      id: 7,
      name: "Mme Khadidja Benhalou",
      position: "Directrice du CEM Ibn Sina",
      quote: "L'audit informatique réalisé par HarounSolution en 2016 a été d'une précision remarquable, identifiant des problèmes que nous n'avions pas détectés. Leur évolution vers NetScolaire-DZ montre leur engagement croissant envers le secteur éducatif. La mise à niveau de notre réseau a transformé notre établissement, offrant une connexion stable et performante dans toutes les salles. Leur équipe technique allie expertise et pédagogie, prenant toujours le temps d'expliquer les interventions réalisées. Nous sommes ravis de poursuivre cette collaboration avec une entreprise qui comprend si bien les enjeux numériques des établissements scolaires.",
      rating: 5
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

  // Fonction pour afficher les étoiles de notation
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        size={16} 
        className={`${index < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
      />
    ));
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
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a 
                      href={`mailto:${member.contact.email}`} 
                      className="text-gray-600 hover:text-primary transition-colors"
                      title="Email"
                    >
                      <Mail size={18} />
                    </a>
                    <a 
                      href={`tel:${member.contact.phone}`} 
                      className="text-gray-600 hover:text-primary transition-colors"
                      title="Téléphone"
                    >
                      <Phone size={18} />
                    </a>
                    <a 
                      href={member.contact.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-primary transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href={member.contact.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-primary transition-colors"
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
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Expertise</h3>
              <p className="text-gray-600">
                Notre équipe se forme continuellement pour rester à la pointe de la technologie et vous offrir les meilleures solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Réactivité</h3>
              <p className="text-gray-600">
                Nous comprenons l'importance d'un système informatique fonctionnel dans un environnement éducatif et nous nous engageons à intervenir rapidement.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
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
          <div className="bg-secondary text-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-bold mb-4">Contrat de maintenance pour l'année scolaire</h2>
                <p className="mb-6">
                  Établissements scolaires, assurez la fiabilité de votre infrastructure informatique pour toute l'année scolaire ! Notre contrat de maintenance annuel renouvelable vous offre une tranquillité d'esprit à un prix unique et avantageux.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-white text-secondary w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">✓</span>
                    </div>
                    <p>12 visites annuelles incluses (une par mois)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white text-secondary w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">✓</span>
                    </div>
                    <p>Rapport détaillé après chaque intervention</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white text-secondary w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">✓</span>
                    </div>
                    <p>Prix fixe et avantageux : 35 700 DZ/An</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link 
                    to="/contact" 
                    className="inline-block bg-white text-secondary hover:bg-gray-100 font-bold py-3 px-6 rounded-md transition-colors"
                  >
                    Demander votre contrat maintenant
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 bg-secondary-light flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mx-auto mb-6 bg-primary w-40 h-40 rounded-full flex items-center justify-center">
                    <span className="text-white text-5xl font-bold">35 700</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">DZ/An</h3>
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
              Découvrez comment HarounSolution a transformé les infrastructures informatiques de ces établissements entre 2008 et 2018 et comment ils accueillent avec enthousiasme son retour sous la forme de NetScolaire-DZ, une startup dédiée au secteur éducatif.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 6).map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  {/* Remplacer l'image par une icône de profil avec un fond coloré */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mr-4 ${getBackgroundColor(testimonial.id)}`}>
                    <User size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <div className="flex mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="absolute text-primary-light -top-2 -left-2" size={40} />
                  <p className="text-gray-700 italic relative z-10 pl-4">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Témoignage de la directrice du CEM Ibn Sina au milieu */}
          <div className="mt-8 flex justify-center">
            {testimonials.slice(6).map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow max-w-2xl">
                <div className="flex items-start mb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mr-4 ${getBackgroundColor(testimonial.id)}`}>
                    <User size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <div className="flex mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="absolute text-primary-light -top-2 -left-2" size={40} />
                  <p className="text-gray-700 italic relative z-10 pl-4">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-center">De HarounSolution à NetScolaire-DZ</h3>
            <p className="text-gray-700 mb-4">
              Après avoir fait ses preuves sous le nom de HarounSolution entre 2008 et 2018, notre équipe revient avec une vision renouvelée et une expertise encore plus ciblée pour le secteur éducatif. NetScolaire-DZ représente l'évolution naturelle de notre engagement envers les établissements scolaires de la région.
            </p>
            <p className="text-gray-700 font-medium text-center">
              Nous sommes ravis de constater l'enthousiasme de nos clients historiques à poursuivre l'aventure avec notre startup, et nous nous engageons à continuer d'innover pour répondre toujours mieux à leurs besoins spécifiques.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;