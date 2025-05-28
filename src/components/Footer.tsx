import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Copyright */}
          <div className="space-y-4">
            <Link to="/" className="text-xl font-serif font-bold">Jameel Subay</Link>
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Jameel Subay. {t('footer.rights')}
            </p>
          </div>
          
          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                {t('navigation.home')}
              </Link>
              <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors duration-300">
                {t('navigation.gallery')}
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                {t('navigation.about')}
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                {t('navigation.contact')}
              </Link>
            </nav>
          </div>
          
          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">{t('footer.follow')}</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="mailto:contact@jameelsubay.com" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;