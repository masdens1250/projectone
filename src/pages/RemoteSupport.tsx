import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Monitor, Shield, CheckCircle, HelpCircle, AlertTriangle, Phone } from 'lucide-react';

const RemoteSupport = () => {
  const [activeTab, setActiveTab] = useState('teamviewer');
  const [sessionId, setSessionId] = useState('');
  const [sessionPassword, setSessionPassword] = useState('');
  const [requestSent, setRequestSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!sessionId.trim()) {
      setError('Veuillez entrer un ID de session');
      return;
    }
    
    if (!sessionPassword.trim()) {
      setError('Veuillez entrer un mot de passe');
      return;
    }
    
    // Simuler l'envoi de la demande d'assistance
    setRequestSent(true);
    setError('');
    
    // Dans une application réelle, vous enverriez ces informations à votre serveur
    console.log('Demande d\'assistance envoyée:', {
      tool: activeTab,
      sessionId,
      sessionPassword
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Assistance à distance</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Bénéficiez d'un support technique rapide et efficace grâce à nos solutions de télémaintenance.
          </p>
        </div>
      </section>

      {/* Remote Support Request Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Demander une assistance à distance</h2>
            
            {requestSent ? (
              <div className="bg-green-100 text-green-700 p-4 rounded-md mb-6">
                <div className="flex items-start">
                  <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-bold">Demande envoyée avec succès!</p>
                    <p>Un technicien va vous contacter dans les plus brefs délais pour vous assister.</p>
                    <button 
                      onClick={() => {
                        setRequestSent(false);
                        setSessionId('');
                        setSessionPassword('');
                      }}
                      className="mt-2 text-secondary hover:text-secondary-dark font-medium"
                    >
                      Envoyer une nouvelle demande
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-gray-600 mb-4">
                    Pour bénéficier d'une assistance à distance, veuillez suivre ces étapes :
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                    <li>Téléchargez et installez l'un des outils de télémaintenance ci-dessous</li>
                    <li>Lancez l'application et notez l'ID et le mot de passe de session</li>
                    <li>Remplissez le formulaire ci-dessous avec ces informations</li>
                    <li>Un technicien vous contactera rapidement pour vous assister</li>
                  </ol>
                </div>
                
                {/* Tabs for choosing remote support tool */}
                <div className="mb-6">
                  <div className="flex border-b">
                    <button 
                      className={`px-4 py-2 font-medium ${activeTab === 'teamviewer' ? 'text-secondary border-b-2 border-secondary' : 'text-gray-500 hover:text-secondary'}`}
                      onClick={() => setActiveTab('teamviewer')}
                    >
                      TeamViewer
                    </button>
                    <button 
                      className={`px-4 py-2 font-medium ${activeTab === 'rustdesk' ? 'text-secondary border-b-2 border-secondary' : 'text-gray-500 hover:text-secondary'}`}
                      onClick={() => setActiveTab('rustdesk')}
                    >
                      RustDesk
                    </button>
                  </div>
                </div>
                
                {/* Download section */}
                <div className="mb-8 p-4 bg-gray-50 rounded-md">
                  {activeTab === 'teamviewer' ? (
                    <div className="flex flex-col items-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/TeamViewer_logo.svg" alt="TeamViewer Logo" className="h-12 mb-3" />
                      <p className="text-sm text-gray-600 text-center mb-4">
                        Logiciel de télémaintenance sécurisé permettant à nos techniciens d'accéder à votre ordinateur à distance pour résoudre vos problèmes.
                      </p>
                      <a 
                        href="https://www.teamviewer.com/fr/telecharger/windows/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-[#f39c12] text-white px-4 py-2 rounded-md hover:bg-[#e67e22] transition-colors"
                      >
                        <Download className="mr-2" size={16} />
                        Télécharger TeamViewer
                      </a>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="flex items-center mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Rustdesk.svg/768px-Rustdesk.svg.png" alt="RustDesk Logo" className="h-12" />
                        <span className="text-blue-600 ml-2 text-xl font-medium">RustDesk</span>
                      </div>
                      <p className="text-sm text-gray-600 text-center mb-4">
                        Alternative open-source pour l'assistance à distance, offrant une connexion sécurisée pour le support technique.
                      </p>
                      <a 
                        href="https://github.com/rustdesk/rustdesk/releases/download/1.3.8/rustdesk-1.3.8-x86_64.exe" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-[#f39c12] text-white px-4 py-2 rounded-md hover:bg-[#e67e22] transition-colors"
                      >
                        <Download className="mr-2" size={16} />
                        Télécharger RustDesk
                      </a>
                    </div>
                  )}
                </div>
                
                {/* Form */}
                {error && (
                  <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4">
                    <div className="flex items-center">
                      <AlertTriangle className="mr-2 flex-shrink-0" size={18} />
                      <p>{error}</p>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="sessionId" className="block text-sm font-medium text-gray-700 mb-1">
                      ID de session {activeTab === 'teamviewer' ? 'TeamViewer' : 'RustDesk'} *
                    </label>
                    <input
                      type="text"
                      id="sessionId"
                      value={sessionId}
                      onChange={(e) => setSessionId(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder={activeTab === 'teamviewer' ? 'Ex: 123 456 789' : 'Ex: 123456789'}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="sessionPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Mot de passe *
                    </label>
                    <input
                      type="text"
                      id="sessionPassword"
                      value={sessionPassword}
                      onChange={(e) => setSessionPassword(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Ex: abc123"
                      required
                    />
                  </div>
                  
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-md transition-colors inline-flex items-center"
                    >
                      Demander une assistance
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comment ça fonctionne</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre service de télémaintenance vous permet de bénéficier d'une assistance technique rapide et efficace sans déplacement.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-secondary-light"></div>
              
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-xl font-bold mb-2">Téléchargez l'outil</h3>
                    <p className="text-gray-600">
                      Téléchargez et installez TeamViewer ou RustDesk sur votre ordinateur en utilisant les liens ci-dessus.
                    </p>
                  </div>
                  <div className="md:w-12 flex justify-center my-4 md:my-0">
                    <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xl z-10">1</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left"></div>
                </div>
                
                {/* Step 2 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right"></div>
                  <div className="md:w-12 flex justify-center my-4 md:my-0">
                    <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xl z-10">2</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left">
                    <h3 className="text-xl font-bold mb-2">Remplissez le formulaire</h3>
                    <p className="text-gray-600">
                      Entrez l'ID et le mot de passe générés par l'application dans le formulaire ci-dessus.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-xl font-bold mb-2">Attendez notre appel</h3>
                    <p className="text-gray-600">
                      Un technicien vous contactera rapidement pour confirmer votre demande et commencer la session d'assistance.
                    </p>
                  </div>
                  <div className="md:w-12 flex justify-center my-4 md:my-0">
                    <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xl z-10">3</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left"></div>
                </div>
                
                {/* Step 4 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right"></div>
                  <div className="md:w-12 flex justify-center my-4 md:my-0">
                    <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xl z-10">4</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left">
                    <h3 className="text-xl font-bold mb-2">Résolution du problème</h3>
                    <p className="text-gray-600">
                      Notre technicien se connecte à votre ordinateur et résout votre problème en temps réel, tout en vous expliquant les actions entreprises.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sécurité et confidentialité</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              La sécurité de vos données est notre priorité. Voici comment nous protégeons votre confidentialité lors des sessions de télémaintenance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-secondary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Connexion sécurisée</h3>
              <p className="text-gray-600 text-center">
                Toutes les connexions sont chiffrées de bout en bout pour garantir la confidentialité de vos données.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-secondary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Contrôle total</h3>
              <p className="text-gray-600 text-center">
                Vous gardez le contrôle total de la session et pouvez l'interrompre à tout moment si nécessaire.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-secondary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Transparence</h3>
              <p className="text-gray-600 text-center">
                Vous voyez toutes les actions effectuées par notre technicien en temps réel sur votre écran.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus courantes concernant notre service de télémaintenance.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <HelpCircle className="text-secondary mr-2" size={20} />
                La télémaintenance est-elle incluse dans le contrat de maintenance ?
              </h3>
              <p className="text-gray-600">
                Oui, la télémaintenance est incluse dans notre contrat de maintenance annuel. Pour les établissements qui ne sont pas sous contrat, ce service est facturé à l'intervention.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <HelpCircle className="text-secondary mr-2" size={20} />
                Quels types de problèmes peuvent être résolus à distance ?
              </h3>
              <p className="text-gray-600">
                La télémaintenance permet de résoudre de nombreux problèmes logiciels : configuration de logiciels, résolution de problèmes de système d'exploitation, suppression de virus et logiciels malveillants, mise à jour de pilotes, etc. Cependant, les problèmes matériels nécessitent généralement une intervention sur site.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <HelpCircle className="text-secondary mr-2" size={20} />
                Dois-je être présent pendant la session de télémaintenance ?
              </h3>
              <p className="text-gray-600">
                Il est préférable que vous soyez présent au début de la session pour expliquer le problème et fournir les accès nécessaires. Vous pouvez ensuite rester pour observer les actions effectuées ou vaquer à vos occupations, selon votre préférence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <HelpCircle className="text-secondary mr-2" size={20} />
                Quelle est la différence entre TeamViewer et RustDesk ?
              </h3>
              <p className="text-gray-600">
                TeamViewer est un logiciel commercial largement utilisé, tandis que RustDesk est une alternative open-source gratuite. Les deux offrent des fonctionnalités similaires, mais RustDesk ne nécessite pas d'inscription et peut être une bonne option si vous préférez les solutions open-source.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-yellow-50 border-l-4 border-primary p-6 rounded-md">
            <div className="flex items-start">
              <AlertTriangle className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">Important</h3>
                <p className="text-gray-700">
                  Pour des raisons de sécurité, ne partagez jamais vos identifiants TeamViewer ou RustDesk avec des personnes inconnues ou non autorisées. NetScolaire-DZ ne vous demandera jamais vos identifiants par email ou par téléphone sans que vous n'ayez préalablement sollicité une intervention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Besoin d'assistance technique ?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Téléchargez l'un de nos outils de télémaintenance et contactez-nous pour bénéficier d'une assistance rapide et efficace.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="bg-white text-secondary hover:bg-gray-100 font-bold py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center">
              Nous contacter
            </Link>
            <a 
              href="tel:+213783328729" 
              className="bg-transparent hover:bg-secondary-dark border-2 border-white py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2" size={18} />
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RemoteSupport;