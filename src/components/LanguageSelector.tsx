import React from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSelectorProps {
  onSelectLanguage: () => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onSelectLanguage }) => {
  const { i18n, t } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    onSelectLanguage();
  };

  return (
    <div className="absolute top-full right-0 mt-2 p-2 bg-white shadow-lg rounded-md z-50 min-w-40">
      <ul className="space-y-1">
        <li>
          <button
            onClick={() => changeLanguage('fr')}
            className={`w-full text-left px-4 py-2 rounded-md ${
              i18n.language === 'fr' ? 'bg-gray-100 font-medium' : 'hover:bg-gray-50'
            }`}
          >
            {t('languages.fr')}
          </button>
        </li>
        <li>
          <button
            onClick={() => changeLanguage('en')}
            className={`w-full text-left px-4 py-2 rounded-md ${
              i18n.language === 'en' ? 'bg-gray-100 font-medium' : 'hover:bg-gray-50'
            }`}
          >
            {t('languages.en')}
          </button>
        </li>
        <li>
          <button
            onClick={() => changeLanguage('ar')}
            className={`w-full text-left px-4 py-2 rounded-md ${
              i18n.language === 'ar' ? 'bg-gray-100 font-medium' : 'hover:bg-gray-50'
            }`}
          >
            {t('languages.ar')}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSelector;