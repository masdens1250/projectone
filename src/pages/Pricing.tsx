import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, X, HelpCircle, AlertTriangle } from 'lucide-react';

const Pricing = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#2c3e50] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nos Tarifs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Des solutions transparentes et adaptées aux besoins des établissements scolaires.
          </p>
        </div>
      </section>

      {/* Main Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Maintenance Contract */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
              <div className="bg-secondary text-white p-6 text-center">
                <h2 className="text-2xl font-bold">Contrat de Maintenance Informatique</h2>
                <div className="mt-4 flex items-center justify-center">
                  <span className="text-4xl font-bold">35 700 DZ</span>
                  <span className="ml-2 text-secondary-light">/An</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-medium">12 visites annuelles incluses</span>
                      <p className="text-sm text-gray-600">Une visite par mois pour assurer le bon fonctionnement de votre infrastructure.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-medium">Rapport détaillé après chaque intervention</span>
                      <p className="text-sm text-gray-600">Documentation complète des problèmes identifiés et des solutions apportées.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-medium">Télémaintenance via TeamViewer et RustDesk</span>
                      <p className="text-sm text-gray-600">Résolution rapide de certains problèmes techniques à distance.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-medium">Maintenance préventive</span>
                      <p className="text-sm text-gray-600">Identification et résolution des problèmes potentiels avant qu'ils n'affectent votre système.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-medium">Assistance téléphonique prioritaire</span>
                      <p className="text-sm text-gray-600">Ligne dédiée pour les clients sous contrat.</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <Link to="/contact" className="inline-block bg-secondary hover:bg-secondary-light text-white font-bold py-3 px-6 rounded-md transition-colors">
                    Souscrire au contrat
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Network Installation */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-secondary text-white p-6 text-center">
                <h2 className="text-2xl font-bold">Installation de Réseaux Internet</h2>
                <div className="mt-4 flex items-center justify-center">
                  <span className="text-xl font-bold">Sur devis</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6 text-center">
                  Le prix varie en fonction de la taille de l'établissement, du nombre de points d'accès nécessaires et des équipements requis.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-medium">Étude préalable gratuite</span>
                      <p className="text-sm text-gray-600">Analyse de vos besoins et de votre infrastructure existante.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-medium">Devis détaillé et transparent</span>
                      <p className="text-sm text-gray-600">Présentation claire des coûts pour chaque aspect du projet.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-medium">Installation professionnelle</span>
                      <p className="text-sm text-gray-600">Mise en place par des techniciens qualifiés.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-medium">Configuration et tests</span>
                      <p className="text-sm text-gray-600">Vérification complète du bon fonctionnement du réseau.</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <Link to="/contact" className="inline-block bg-secondary hover:bg-secondary-light text-white font-bold py-3 px-6 rounded-md transition-colors">
                    Demander un devis
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-md">
            <div className="flex items-start">
              <AlertTriangle className="text-yellow-500 mr-3 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-bold text-yellow-700 mb-2">Information importante</h3>
                <p className="text-gray-700">
                  Tout service, qu'il s'agisse d'un contrat de maintenance ou d'une installation de réseau, ne sera effectué qu'après la délivrance d'un bon de commande officiel par l'établissement scolaire. Ce document est indispensable pour le démarrage de nos prestations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comparaison des services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez en détail ce qui est inclus dans nos différentes offres.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="py-4 px-6 text-left">Service</th>
                  <th className="py-4 px-6 text-center">Contrat de maintenance</th>
                  <th className="py-4 px-6 text-center">Installation de réseau</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Maintenance préventive</td>
                  <td className="py-4 px-6 text-center"><CheckCircle className="text-primary mx-auto" size={20} /></td>
                  <td className="py-4 px-6 text-center"><X className="text-red-500 mx-auto" size={20} /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Maintenance curative</td>
                  <td className="py-4 px-6 text-center"><CheckCircle className="text-primary mx-auto" size={20} /></td>
                  <td className="py-4 px-6 text-center"><X className="text-red-500 mx-auto" size={20} /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Rapport d'intervention</td>
                  <td className="py-4 px-6 text-center"><CheckCircle className="text-primary mx-auto" size={20} /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle className="text-primary mx-auto" size={20} /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Télémaintenance</td>
                  <td className="py-4 px-6 text-center"><CheckCircle className="text-primary mx-auto" size={20} /></td>
                  <td className="py-4 px-6 text-center"><X className="text-red-500 mx-auto" size={20} /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Assistance téléphonique</td>
                  <td className="py-4 px-6 text-center"><CheckCircle className="text-primary mx-auto" size={20} /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle className="text-primary mx-auto" size={20} /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Délai d'intervention</td>
                  <td className="py-4 px-6 text-center"><span className="font-medium text-primary">24-48h</span></td>
                  <td className="py-4 px-6 text-center"><span className="font-medium text-primary">Planifié</span></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Bon de commande requis</td>
                  <td className="py-4 px-6 text-center"><CheckCircle className="text-primary mx-auto" size={20} /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle className="text-primary mx-auto" size={20} /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Tarif</td>
                  <td className="py-4 px-6 text-center"><span className="font-medium">35 700 DZ/An</span></td>
                  <td className="py-4 px-6 text-center"><span className="font-medium">Sur devis</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus courantes concernant nos services et tarifs.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <HelpCircle className="text-primary mr-2" size={20} />
                Que comprend exactement le contrat de maintenance ?
              </h3>
              <p className="text-gray-600">
                Notre contrat de maintenance comprend 12 visites annuelles (une par mois), la maintenance préventive et curative de votre parc informatique, l'assistance à distance via TeamViewer ou RustDesk, et un rapport détaillé après chaque intervention. Il inclut également une assistance téléphonique prioritaire.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <HelpCircle className="text-primary mr-2" size={20} />
                Comment est calculé le prix d'une installation de réseau ?
              </h3>
              <p className="text-gray-600">
                Le prix d'une installation de réseau dépend de plusieurs facteurs : la taille de l'établissement, le nombre de points d'accès nécessaires, les équipements requis (routeurs, switches, etc.), et la complexité de l'installation. Nous réalisons une étude préalable gratuite pour vous fournir un devis détaillé et transparent.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <HelpCircle className="text-primary mr-2" size={20} />
                Est-il possible de personnaliser le contrat de maintenance ?
              </h3>
              <p className="text-gray-600">
                Oui, nous pouvons adapter notre contrat de maintenance en fonction des besoins spécifiques de votre établissement. N'hésitez pas à nous contacter pour discuter de vos exigences particulières et obtenir une proposition personnalisée.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <HelpCircle className="text-primary mr-2" size={20} />
                Que se passe-t-il si nous avons besoin de plus de 12 visites par an ?
              </h3>
              <p className="text-gray-600">
                Si vous avez besoin de visites supplémentaires au-delà des 12 incluses dans le contrat, nous pouvons les facturer séparément à un tarif préférentiel pour les clients sous contrat. Nous pouvons également discuter d'une mise à niveau de votre contrat si vos besoins ont évolué.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <HelpCircle className="text-primary mr-2" size={20} />
                Quelles méthodes de maintenance préventive utilisez-vous ?
              </h3>
              <p className="text-gray-600">
                Notre approche de maintenance préventive inclut la congélation du système, une technique qui permet de préserver l'état optimal des ordinateurs et de les restaurer rapidement en cas de problème. Cette méthode est particulièrement efficace dans les environnements scolaires où les postes sont utilisés par de nombreux utilisateurs différents. Nous effectuons également des nettoyages réguliers, des mises à jour système et des vérifications de sécurité pour prévenir les problèmes avant qu'ils n'apparaissent.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <HelpCircle className="text-primary mr-2" size={20} />
                Quels avantages offrez-vous en matière de sécurité informatique ?
              </h3>
              <p className="text-gray-600">
                Les établissements scolaires qui souscrivent à notre contrat annuel bénéficient de l'installation d'un antivirus professionnel avec une licence sans expiration. Cette solution de sécurité complète protège vos systèmes contre les virus, malwares, ransomwares et autres menaces informatiques. Contrairement aux solutions grand public qui nécessitent des renouvellements réguliers, notre solution antivirus reste active et à jour sans frais supplémentaires pendant toute la durée de votre contrat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à améliorer l'infrastructure informatique de votre établissement ?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="bg-white text-secondary hover:bg-gray-100 font-bold py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center">
              Nous contacter
            </Link>
            <a 
              href="https://wa.me/213783328729" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-secondary-light border-2 border-white py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contacter par WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;