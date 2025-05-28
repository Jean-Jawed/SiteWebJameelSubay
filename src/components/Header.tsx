import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  const toggleLanguageSelector = () => setIsLanguageSelectorOpen(!isLanguageSelectorOpen);

  const isHomePage = location.pathname === '/';
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled || !isHomePage 
      ? 'bg-white shadow-md py-2' 
      : 'bg-transparent py-4'
  }`;

  const textColor = isScrolled || !isHomePage ? 'text-gray-900' : 'text-white';

  return (
    <header className={headerClasses}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className={`text-xl font-serif font-bold ${textColor} hover:opacity-80 transition-opacity duration-300`}
          onClick={closeMenu}
        >
          Jameel Subay
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/gallery" 
            className={`nav-link ${textColor}`}
          >
            {t('navigation.gallery')}
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${textColor}`}
          >
            {t('navigation.about')}
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${textColor}`}
          >
            {t('navigation.contact')}
          </Link>
          
          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={toggleLanguageSelector}
              className={`flex items-center ${textColor} hover:opacity-80 transition-opacity duration-300`}
              aria-label="Toggle language menu"
            >
              <Globe size={20} />
            </button>
            
            {isLanguageSelectorOpen && (
              <LanguageSelector 
                onSelectLanguage={() => setIsLanguageSelectorOpen(false)}
              />
            )}
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className={`md:hidden ${textColor}`}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white pt-20">
          <nav className="flex flex-col items-center space-y-6 p-8">
            <Link 
              to="/gallery" 
              className="text-2xl text-gray-900 hover:text-gray-600 transition-colors duration-300"
              onClick={closeMenu}
            >
              {t('navigation.gallery')}
            </Link>
            <Link 
              to="/about" 
              className="text-2xl text-gray-900 hover:text-gray-600 transition-colors duration-300"
              onClick={closeMenu}
            >
              {t('navigation.about')}
            </Link>
            <Link 
              to="/contact" 
              className="text-2xl text-gray-900 hover:text-gray-600 transition-colors duration-300"
              onClick={closeMenu}
            >
              {t('navigation.contact')}
            </Link>
            
            {/* Mobile Language Selector */}
            <div className="flex flex-col items-center space-y-2 mt-6 pt-6 border-t border-gray-200 w-full">
              <p className="text-sm text-gray-500">{t('languages.fr')}</p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => {
                    const languageSelector = document.querySelector('#mobile-language-selector') as HTMLSelectElement;
                    languageSelector.value = 'fr';
                    languageSelector.dispatchEvent(new Event('change'));
                    closeMenu();
                  }}
                  className="text-gray-900 hover:text-gray-600 transition-colors duration-300"
                >
                  FR
                </button>
                <button 
                  onClick={() => {
                    const languageSelector = document.querySelector('#mobile-language-selector') as HTMLSelectElement;
                    languageSelector.value = 'en';
                    languageSelector.dispatchEvent(new Event('change'));
                    closeMenu();
                  }}
                  className="text-gray-900 hover:text-gray-600 transition-colors duration-300"
                >
                  EN
                </button>
                <button 
                  onClick={() => {
                    const languageSelector = document.querySelector('#mobile-language-selector') as HTMLSelectElement;
                    languageSelector.value = 'ar';
                    languageSelector.dispatchEvent(new Event('change'));
                    closeMenu();
                  }}
                  className="text-gray-900 hover:text-gray-600 transition-colors duration-300"
                >
                  عربي
                </button>
              </div>
              <select 
                id="mobile-language-selector"
                className="hidden"
                onChange={(e) => {
                  const lang = e.target.value;
                  const { i18n } = require('react-i18next');
                  i18n.changeLanguage(lang);
                }}
              >
                <option value="fr">Français</option>
                <option value="en">English</option>
                <option value="ar">العربية</option>
              </select>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;