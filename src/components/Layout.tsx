import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Set the html lang attribute based on the current language
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    
    // Add or remove RTL class based on language
    if (i18n.language === 'ar') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }, [i18n.language]);

  // Page transition effect
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {isLoading ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="w-10 h-10 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="fade-in">
            <Outlet />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;