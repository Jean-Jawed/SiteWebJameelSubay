import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import { 
  biography, 
  pastExhibitions, 
  upcomingExhibitions, 
  publications, 
  collaborations 
} from '../data/about';

const AboutPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  // Update document title
  useEffect(() => {
    document.title = `${t('about.title')} | Jameel Subay`;
  }, [t]);

  // Get biography in current language (default to English if not available)
  const currentBio = biography[i18n.language as keyof typeof biography] || biography.en;

  return (
    <div className="bg-white min-h-screen">
      <div className="container-custom py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif mb-10 slide-up">
            {t('about.title')}
          </h1>
          
          {/* Biography Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-serif mb-6 border-b border-gray-200 pb-2">
              {t('about.bio')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <img 
                  src="/public/images/jameel.jpg" 
                  alt="Jameel Subay"
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="md:col-span-2">
                <div className="prose prose-lg max-w-none">
                  {currentBio.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
          
          {/* Video Interview */}
          <section className="mb-20">
            <h2 className="text-2xl font-serif mb-6 border-b border-gray-200 pb-2">
              {t('about.interview')}
            </h2>
            <div className="aspect-video overflow-hidden rounded-lg">
              <iframe
                src="https://www.youtube.com/embed/8EvMg48Dqko?si=9_b9PilS9njQyV8O"
                title="Interview with Jameel Subay"
                className="w-full h-full border-0"
                allowFullScreen
              />
            </div>
          </section>
          
          {/* Past Exhibitions */}
          <section className="mb-20">
            <h2 className="text-2xl font-serif mb-6 border-b border-gray-200 pb-2">
              {t('about.pastExhibitions')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastExhibitions.map(exhibition => (
                <div key={exhibition.id} className="bg-gray-50 p-6 rounded-lg">
                  {exhibition.image && (
                    <img 
                      src={exhibition.image} 
                      alt={exhibition.title}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                  )}
                  <h3 className="text-xl font-medium mb-1">{exhibition.title}</h3>
                  <p className="text-gray-600 mb-3">{exhibition.location}, {exhibition.date}</p>
                  <p className="text-gray-700">{exhibition.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Upcoming Exhibitions */}
          <section className="mb-20">
            <h2 className="text-2xl font-serif mb-6 border-b border-gray-200 pb-2">
              {t('about.upcomingExhibitions')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingExhibitions.map(exhibition => (
                <div key={exhibition.id} className="bg-gray-50 p-6 rounded-lg">
                  {exhibition.image && (
                    <img 
                      src={exhibition.image} 
                      alt={exhibition.title}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                  )}
                  <div className="inline-block bg-gray-900 text-white px-3 py-1 text-sm font-medium rounded-full mb-2">
                    {exhibition.date}
                  </div>
                  <h3 className="text-xl font-medium mb-1">{exhibition.title}</h3>
                  <p className="text-gray-600 mb-3">{exhibition.location}</p>
                  <p className="text-gray-700">{exhibition.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Publications */}
          <section className="mb-20">
            <h2 className="text-2xl font-serif mb-6 border-b border-gray-200 pb-2">
              {t('about.press')}
            </h2>
            <div className="space-y-8">
              {publications.map(publication => (
                <div key={publication.id} className="flex flex-col md:flex-row gap-6">
                  {publication.image && (
                    <img 
                      src={publication.image} 
                      alt={publication.title}
                      className="w-full md:w-1/4 h-auto object-cover rounded-md"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-medium mb-1">{publication.title}</h3>
                    <p className="text-gray-600 mb-3">{publication.publisher}, {publication.date}</p>
                    <p className="text-gray-700 mb-3">{publication.description}</p>
                    {publication.link && (
                      <a 
                        href={publication.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-900 hover:underline"
                      >
                        View Publication <ExternalLink size={16} className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Collaborations */}
          <section>
            <h2 className="text-2xl font-serif mb-6 border-b border-gray-200 pb-2">
              {t('about.collaborations')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {collaborations.map(collaboration => (
                <div key={collaboration.id} className="bg-gray-50 p-6 rounded-lg">
                  {collaboration.image && (
                    <img 
                      src={collaboration.image} 
                      alt={collaboration.name}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                  )}
                  <h3 className="text-xl font-medium mb-1">{collaboration.name}</h3>
                  <p className="text-gray-600 font-medium mb-3">{collaboration.role}</p>
                  <p className="text-gray-700">{collaboration.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;