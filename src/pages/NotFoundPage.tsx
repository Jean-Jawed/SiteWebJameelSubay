import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-serif mb-8">Page not found</h2>
        <Link 
          to="/" 
          className="btn btn-primary inline-flex items-center"
        >
          <Home size={20} className="mr-2" />
          {t('navigation.home')}
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;