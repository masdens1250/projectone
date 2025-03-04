import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Wifi, Headset, FileText, Server, Shield, CheckCircle } from 'lucide-react';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#2c3e50] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nos Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Des solutions informatiques complètes pour les établissements scolaires de Mostaganem et environs.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Maintenance Informatique */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300 border border-gray-100">
              <Monitor className="text-primary mb-4" size={48} />
              <h2 className="text-2xl font-bold mb-4">Contrat de maintenance informatique</h2>
              <p className="text-gray-600 mb-6">
                Notre contrat de maintenance informatique est conçu spécifiquement pour les établissements scolaires, offrant un suivi régulier et des interventions rapides en cas de problème.
              </p>
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2">Ce que comprend notre contrat :</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">12 visites annuelles incluses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Rapport détaillé après chaque intervention</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Maintenance préventive et curative</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Option de télémaintenance via TeamViewer et RustDesk</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Tarif fixe : 35 700 DZ/An</span>
                  </li>
                </ul>
              </div>
              <Link to="/contact" className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition-colors shadow-md">
                Demander votre contrat
              </Link>
            </div>
            
            {/* Installation de réseaux */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300 border border-gray-100">
              <Wifi className="text-primary mb-4" size={48} />
              <h2 className="text-2xl font-bold mb-4">Installation de réseaux internet</h2>
              <p className="text-gray-600 mb-6">
                Nous concevons et installons des réseaux internet adaptés aux besoins spécifiques des établissements scolaires, en tenant compte de la taille des locaux, du nombre d'utilisateurs et des exigences particulières.
              </p>
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2">Nos services d'installation comprennent :</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Étude préalable et devis personnalisé</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Installation de câblage structuré</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Configuration des équipements réseau</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Mise en place de solutions Wi-Fi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Sécurisation du réseau</span>
                  </li>
                </ul>
              </div>
              <Link to="/contact" className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition-colors shadow-md">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Services complémentaires</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              En plus de nos services principaux, nous proposons également des services complémentaires pour répondre à tous vos besoins informatiques.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Télémaintenance */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <Headset className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Télémaintenance</h3>
              <p className="text-gray-600 mb-4">
                Résolution rapide des problèmes techniques à distance via TeamViewer et RustDesk, sans nécessiter de déplacement.
              </p>
              <Link to="/remote-support" className="text-primary font-medium hover:text-primary-dark inline-flex items-center">
                En savoir plus
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            
            {/* Audit et conseil */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <FileText className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Audit et conseil</h3>
              <p className="text-gray-600 mb-4">
                Évaluation de votre infrastructure informatique existante et recommandations pour l'optimiser selon vos besoins et votre budget.
              </p>
              <Link to="/contact" className="text-primary font-medium hover:text-primary-dark inline-flex items-center">
                Nous contacter
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre processus</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous suivons un processus structuré pour garantir un service de qualité et répondre efficacement à vos besoins.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-light/30"></div>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-xl font-bold mb-2">Évaluation des besoins</h3>
                  <p className="text-gray-600">
                    Nous commençons par une évaluation approfondie de vos besoins informatiques, en tenant compte de la taille de votre établissement, de votre budget et de vos exigences spécifiques.
                  </p>
                </div>
                <div className="md:w-12 flex justify-center my-4 md:my-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl z-10">1</div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left"></div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right"></div>
                <div className="md:w-12 flex justify-center my-4 md:my-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl z-10">2</div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="text-xl font-bold mb-2">Proposition de solution</h3>
                  <p className="text-gray-600">
                    Sur la base de notre évaluation, nous vous proposons une solution adaptée à vos besoins, accompagnée d'un devis détaillé et transparent.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-xl font-bold mb-2">Mise en œuvre</h3>
                  <p className="text-gray-600">
                    Une fois la proposition acceptée, nous procédons à la mise en œuvre de la solution, en veillant à minimiser les perturbations dans votre établissement.
                  </p>
                </div>
                <div className="md:w-12 flex justify-center my-4 md:my-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl z-10">3</div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left"></div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right"></div>
                <div className="md:w-12 flex justify-center my-4 md:my-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl z-10">4</div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="text-xl font-bold mb-2">Suivi et maintenance</h3>
                  <p className="text-gray-600">
                    Nous assurons un suivi régulier et une maintenance préventive pour garantir le bon fonctionnement de votre infrastructure informatique à long terme.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à améliorer votre infrastructure informatique ?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="bg-white hover:bg-gray-100 text-secondary font-bold py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center shadow-md">
              Nous contacter
            </Link>
            <Link to="/pricing" className="bg-transparent hover:bg-secondary-light border-2 border-white text-white py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center">
              Voir nos tarifs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;