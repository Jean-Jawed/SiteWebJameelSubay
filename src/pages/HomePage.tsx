import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';
import GalleryCard from '../components/GalleryCard';
import { galleries } from '../data/galleries';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  // Update document title
  useEffect(() => {
    document.title = `Jameel Subay | ${t('navigation.home')}`;
  }, [t]);

  // Carousel images
  const carouselImages = [
    {
      // MODIFICATION ICI : Ajout de import.meta.env.BASE_URL +
      src: import.meta.env.BASE_URL + 'images/caroussel2.JPG',
      alt: 'Featured photograph by Jameel Subay'
    },
    {
      // MODIFICATION ICI
      src: import.meta.env.BASE_URL + 'images/caroussel3.JPG',
      alt: 'Featured photograph by Jameel Subay'
    },
    {
      // MODIFICATION ICI
      src: import.meta.env.BASE_URL + 'images/caroussel1.JPG',
      alt: 'Featured photograph by Jameel Subay'
    }
  ];

  // Featured galleries (show only 3)
  const featuredGalleries = galleries.slice(0, 3);

  // Scroll to content section
  const scrollToContent = () => {
    const contentSection = document.getElementById('content');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative hero-section flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            // MODIFICATION ICI : Ajout de import.meta.env.BASE_URL +
            src={import.meta.env.BASE_URL + 'images/main.JPG'}
            alt="Jameel Subay"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="relative z-10 text-center text-white fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-4">
            {t('home.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            {t('home.subtitle')}
          </p>
          <Link
            to="/gallery"
            className="btn btn-primary mx-2"
          >
            {t('home.viewGalleries')}
          </Link>
        </div>

        <button
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          aria-label="Scroll to content"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* Carousel Section */}
      <section id="content" className="pt-12 pb-8 bg-white">
        <div className="container-custom">
          <ImageCarousel
            images={carouselImages}
            height="h-[60vh]"
            effect="fade"
          />
        </div>
      </section>

      {/* Featured Galleries */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-serif mb-10 text-center">
            {t('home.latestWork')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGalleries.map(gallery => (
              <GalleryCard
                key={gallery.id}
                id={gallery.id}
                title={gallery.title}
                description={gallery.description}
                // coverImage={gallery.coverImage} // <-- Cette ligne sera traitée dans GalleryCard ou galleries.ts
                // Gardez celle-ci en l'état pour l'instant
                coverImage={gallery.coverImage}
                slug={gallery.slug}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="btn btn-outline"
            >
              {t('gallery.title')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;