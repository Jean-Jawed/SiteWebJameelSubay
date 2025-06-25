import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface GalleryCardProps {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  slug: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ 
  title, 
  description, 
  coverImage, 
  slug 
}) => {
  const { t } = useTranslation();

  return (
    <div className="group relative overflow-hidden rounded-md transition-transform duration-300 hover:-translate-y-1">
      <Link to={`/gallery/${slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={import.meta.env.BASE_URL + coverImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-serif mb-1">{title}</h3>
          <p className="text-sm text-gray-200 line-clamp-2 mb-2">{description}</p>
          <span className="inline-block text-sm font-medium border-b border-white pb-1 transition-all duration-300 group-hover:border-opacity-100">
            {t('gallery.viewGallery')}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default GalleryCard;