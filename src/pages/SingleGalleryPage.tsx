import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { galleries } from '../data/galleries';

interface SingleGalleryPageProps {
  galleryId: string;
}

const SingleGalleryPage: React.FC<SingleGalleryPageProps> = ({ galleryId }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  // Find the gallery with the matching ID
  const gallery = galleries.find(g => g.id === galleryId);
  
  // Redirect to gallery page if no matching gallery is found
  useEffect(() => {
    if (!gallery) {
      navigate('/gallery');
    }
  }, [gallery, navigate]);
  
  // Update document title
  useEffect(() => {
    if (gallery) {
      document.title = `${gallery.title} | Jameel Subay`;
    }
  }, [gallery]);
  
  if (!gallery) {
    return null;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={gallery.coverImage} 
            alt={gallery.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            {gallery.title}
          </h1>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16">
        <div className="container-custom">
          <Link 
            to="/gallery" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            {t('gallery.backToGalleries')}
          </Link>
          
          {gallery.content && (
            <div className="max-w-3xl mx-auto mb-16">
              <p className="text-lg leading-relaxed text-gray-700">
                {gallery.content}
              </p>
            </div>
          )}
          
          {/* Gallery Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {gallery.images.map((image, index) => (
              <figure key={index} className="group overflow-hidden rounded-md">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                {image.caption && (
                  <figcaption className="mt-2 text-sm text-gray-500">
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
          
          {/* Additional Content for Houthis at Saada */}
          {gallery.slug === 'houthis-saada' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Map */}
              {gallery.mapUrl && (
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-serif mb-4">La région de Saada</h3>
                  <div className="aspect-video overflow-hidden rounded-md">
                    <iframe 
                      src={gallery.mapUrl} 
                      title="Map of Saada region"
                      className="w-full h-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              )}
              
              {/* Video */}
              {gallery.videoUrl && (
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-serif mb-4">Documentaire: Saada</h3>
                  <div className="aspect-video overflow-hidden rounded-md">
                    <iframe 
                      src={gallery.videoUrl} 
                      title="Documentary about Saada"
                      className="w-full h-full border-0"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SingleGalleryPage;