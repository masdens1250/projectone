import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Clock, Facebook, Instagram, Youtube, Laptop, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-secondary text-neutral py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={16} className="mr-1" />
              <span className="text-sm">(+213) 07.83.32.87.29</span>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-1" />
              <span className="text-sm">harounsolution@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span className="text-sm">Dim-Jeu: 8h-17h</span>
            </div>
            <div className="flex items-center space-x-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Facebook size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram size={16} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main header with logo and navigation */}
      <div className={`${isScrolled ? 'bg-neutral/95 backdrop-blur-sm shadow-md py-2' : 'bg-neutral shadow-md py-4'} transition-all duration-300`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Laptop className="text-primary mr-2" size={32} />
            <div>
              <h1 className="text-2xl font-bold text-secondary">NetScolaire-DZ</h1>
              <p className="text-xs text-secondary-light">Connecter l'éducation, assurer l'innovation</p>
            </div>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-secondary hover:text-primary">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className={`relative py-2 px-1 font-medium ${location.pathname === '/' ? 'text-primary' : 'text-secondary-light'} hover:text-primary transition-colors group`}>
                  Accueil
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform ${location.pathname === '/' ? 'scale-x-100' : ''}`}></span>
                </Link>
              </li>
              <li>
                <Link to="/about" className={`relative py-2 px-1 font-medium ${location.pathname === '/about' ? 'text-primary' : 'text-secondary-light'} hover:text-primary transition-colors group`}>
                  Qui sommes-nous
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform ${location.pathname === '/about' ? 'scale-x-100' : ''}`}></span>
                </Link>
              </li>
              <li>
                <Link to="/services" className={`relative py-2 px-1 font-medium ${location.pathname === '/services' ? 'text-primary' : 'text-secondary-light'} hover:text-primary transition-colors group`}>
                  Nos services
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform ${location.pathname === '/services' ? 'scale-x-100' : ''}`}></span>
                </Link>
              </li>
              <li>
                <Link to="/projects" className={`relative py-2 px-1 font-medium ${location.pathname === '/projects' ? 'text-primary' : 'text-secondary-light'} hover:text-primary transition-colors group`}>
                  Nos réalisations
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform ${location.pathname === '/projects' ? 'scale-x-100' : ''}`}></span>
                </Link>
              </li>
              <li>
                <Link to="/pricing" className={`relative py-2 px-1 font-medium ${location.pathname === '/pricing' ? 'text-primary' : 'text-secondary-light'} hover:text-primary transition-colors group`}>
                  Prix
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform ${location.pathname === '/pricing' ? 'scale-x-100' : ''}`}></span>
                </Link>
              </li>
              <li>
                <Link to="/team" className={`relative py-2 px-1 font-medium ${location.pathname === '/team' ? 'text-primary' : 'text-secondary-light'} hover:text-primary transition-colors group`}>
                  Notre équipe
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform ${location.pathname === '/team' ? 'scale-x-100' : ''}`}></span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`relative py-2 px-1 font-medium ${location.pathname === '/contact' ? 'text-primary' : 'text-secondary-light'} hover:text-primary transition-colors group`}>
                  Contact
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform ${location.pathname === '/contact' ? 'scale-x-100' : ''}`}></span>
                </Link>
              </li>
              <li>
                <Link to="/remote-support" className="bg-primary hover:bg-primary-dark text-neutral py-2 px-4 rounded-md transition-colors">
                  Assistance à distance
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-neutral shadow-lg">
          <ul className="py-2 px-4">
            <li className="py-2 border-b border-gray-100">
              <Link to="/" className={`block ${location.pathname === '/' ? 'text-primary' : 'text-secondary-light'}`}>
                Accueil
              </Link>
            </li>
            <li className="py-2 border-b border-gray-100">
              <Link to="/about" className={`block ${location.pathname === '/about' ? 'text-primary' : 'text-secondary-light'}`}>
                Qui sommes-nous
              </Link>
            </li>
            <li className="py-2 border-b border-gray-100">
              <Link to="/services" className={`block ${location.pathname === '/services' ? 'text-primary' : 'text-secondary-light'}`}>
                Nos services
              </Link>
            </li>
            <li className="py-2 border-b border-gray-100">
              <Link to="/projects" className={`block ${location.pathname === '/projects' ? 'text-primary' : 'text-secondary-light'}`}>
                Nos réalisations
              </Link>
            </li>
            <li className="py-2 border-b border-gray-100">
              <Link to="/pricing" className={`block ${location.pathname === '/pricing' ? 'text-primary' : 'text-secondary-light'}`}>
                Prix
              </Link>
            </li>
            <li className="py-2 border-b border-gray-100">
              <Link to="/team" className={`block ${location.pathname === '/team' ? 'text-primary' : 'text-secondary-light'}`}>
                Notre équipe
              </Link>
            </li>
            <li className="py-2 border-b border-gray-100">
              <Link to="/contact" className={`block ${location.pathname === '/contact' ? 'text-primary' : 'text-secondary-light'}`}>
                Contact
              </Link>
            </li>
            <li className="py-2">
              <Link to="/remote-support" className="block bg-primary text-neutral py-2 px-4 rounded-md mt-2">
                Assistance à distance
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;