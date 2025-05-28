import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import GalleryCard from '../components/GalleryCard';
import { galleries } from '../data/galleries';

const GalleryPage: React.FC = () => {
  const { t } = useTranslation();

  // Update document title
  useEffect(() => {
    document.title = `${t('gallery.title')} | Jameel Subay`;
  }, [t]);

  return (
    <div className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 slide-up">
            {t('gallery.title')}
          </h1>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleries.map(gallery => (
            <GalleryCard
              key={gallery.id}
              id={gallery.id}
              title={gallery.title}
              description={gallery.description}
              coverImage={gallery.coverImage}
              slug={gallery.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;