import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  
  // Update document title
  useEffect(() => {
    document.title = `${t('contact.title')} | Jameel Subay`;
  }, [t]);

  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif mb-10 slide-up">
            {t('contact.title')}
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif mb-6">
                {t('contact.form.subject')}
              </h2>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-serif mb-6">
                {t('contact.professionalInfo')}
              </h2>
              <div className="bg-white shadow-sm rounded-lg p-8 mb-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Mail className="mt-1 mr-3 text-gray-500" size={20} />
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href="mailto:contact@jameelsubay.com" 
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        contact@jameelsubay.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="mt-1 mr-3 text-gray-500" size={20} />
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <a 
                        href="tel:+33123456789" 
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        +33 1 23 45 67 89
                      </a>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="font-medium mb-3">{t('footer.follow')}</p>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-900 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-900 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-900 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-serif mb-6">
                  {t('contact.pressContact')}
                </h2>
                <div className="bg-white shadow-sm rounded-lg p-8">
                  <p className="font-medium">Marie Laurent</p>
                  <p className="text-gray-600">Press Agent</p>
                  <a 
                    href="mailto:press@jameelsubay.com" 
                    className="text-gray-600 hover:text-gray-900 transition-colors mt-2 block"
                  >
                    press@jameelsubay.com
                  </a>
                  <a 
                    href="tel:+33123456789" 
                    className="text-gray-600 hover:text-gray-900 transition-colors block"
                  >
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;