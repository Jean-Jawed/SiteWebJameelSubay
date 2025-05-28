export interface Gallery {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  images: { src: string; alt: string; caption?: string }[];
  content?: string;
  videoUrl?: string;
  mapUrl?: string;
}

export const galleries: Gallery[] = [
  {
    id: '1',
    title: 'Corne de l\'Afrique',
    slug: 'corne-de-afrique',
    description: 'Une exploration photographique des pays de la Corne de l\'Afrique, capturant les paysages et la vie quotidienne.',
    coverImage: '/images/CorneCover.JPG',
    images: [
      { 
        src: '/images/CorneCover.JPG', 
        alt: 'Paysage aride en Éthiopie', 
        caption: 'Paysage aride en Éthiopie, 2019'
      },
      { 
        src: '/images/CorneCover.JPG', 
        alt: 'Village traditionnel en Somalie', 
        caption: 'Village traditionnel en Somalie, 2018'
      },
      { 
        src: '/images/CorneCover.JPG', 
        alt: 'Scène de marché à Djibouti', 
        caption: 'Scène de marché à Djibouti, 2020'
      },
      { 
        src: '/images/CorneCover.JPG', 
        alt: 'Éleveurs de bétail en Érythrée', 
        caption: 'Éleveurs de bétail en Érythrée, 2019'
      }
    ],
    content: 'Cette série explore les communautés de la Corne de l\'Afrique, une région marquée par des contrastes saisissants entre tradition et modernité. À travers ces images, je cherche à capturer la résilience des populations locales face aux défis environnementaux et politiques.'
  },
  {
    id: '2',
    title: 'Printemps Arabe',
    slug: 'printemps-arabe',
    description: 'Un témoignage visuel des mouvements populaires qui ont marqué le monde arabe à partir de 2010.',
    coverImage: '/images/Printemps.JPG',
    images: [
      { 
        src: '/images/Printemps.JPG', 
        alt: 'Manifestations en Tunisie', 
        caption: 'Manifestations en Tunisie, 2011'
      },
      { 
        src: '/images/Printemps.JPG', 
        alt: 'Scènes de rue au Caire', 
        caption: 'Scènes de rue au Caire, 2011'
      },
      { 
        src: '/images/Printemps.JPG', 
        alt: 'Jeunesse libyenne', 
        caption: 'Jeunesse libyenne, 2012'
      },
      { 
        src: '/images/Printemps.JPG', 
        alt: 'Graffitis révolutionnaires', 
        caption: 'Graffitis révolutionnaires, 2013'
      }
    ],
    content: 'Cette série documente les mouvements populaires qui ont balayé le monde arabe à partir de décembre 2010. À travers ces images, je témoigne des aspirations de millions de personnes à la liberté, à la dignité et à la démocratie, ainsi que des défis et des transformations qui ont suivi ces soulèvements historiques.'
  },
  {
    id: '3',
    title: 'Minorités juives',
    slug: 'minorites-juives',
    description: 'Un regard intime sur les communautés juives à travers le Moyen-Orient et l\'Afrique du Nord.',
    coverImage: '/images/Juives.JPG',
    images: [
      { 
        src: '/images/Juives.JPG', 
        alt: 'Synagogue historique à Marrakech', 
        caption: 'Synagogue historique à Marrakech, 2017'
      },
      { 
        src: '/images/Juives.JPG', 
        alt: 'Célébration de Hanoukka au Yémen', 
        caption: 'Célébration de Hanoukka au Yémen, 2016'
      },
      { 
        src: '/images/Juives.JPG', 
        alt: 'Artisanat juif tunisien', 
        caption: 'Artisanat juif tunisien, 2018'
      },
      { 
        src: '/images/Juives.JPG', 
        alt: 'Portrait d\'un rabbin égyptien', 
        caption: 'Portrait d\'un rabbin égyptien, 2019'
      }
    ],
    content: 'Cette série est le fruit d\'un travail documentaire sur les communautés juives historiques du Moyen-Orient et d\'Afrique du Nord. À travers ces images, je témoigne de la richesse d\'un patrimoine culturel millénaire et de la résilience de ces communautés face aux défis contemporains.'
  },
  {
    id: '4',
    title: 'Les Marginaux noirs',
    slug: 'marginaux-noirs',
    description: 'Une exploration visuelle des communautés noires marginalisées dans les sociétés arabes contemporaines.',
    coverImage: 'https://images.pexels.com/photos/1082962/pexels-photo-1082962.jpeg',
    images: [
      { 
        src: 'https://images.pexels.com/photos/1082962/pexels-photo-1082962.jpeg', 
        alt: 'Quartier populaire à Khartoum', 
        caption: 'Quartier populaire à Khartoum, 2019'
      },
      { 
        src: 'https://images.pexels.com/photos/6146290/pexels-photo-6146290.jpeg', 
        alt: 'Musicien gnawa au Maroc', 
        caption: 'Musicien gnawa au Maroc, 2018'
      },
      { 
        src: 'https://images.pexels.com/photos/6146931/pexels-photo-6146931.jpeg', 
        alt: 'Familles nubiennes en Égypte', 
        caption: 'Familles nubiennes en Égypte, 2020'
      },
      { 
        src: 'https://images.pexels.com/photos/3229782/pexels-photo-3229782.jpeg', 
        alt: 'Communauté afro-irakienne', 
        caption: 'Communauté afro-irakienne, 2019'
      }
    ],
    content: 'Cette série explore la vie et les défis des communautés noires marginalisées dans différentes sociétés arabes. À travers ces portraits et scènes de vie quotidienne, je mets en lumière des réalités souvent méconnues et des luttes pour la reconnaissance sociale et culturelle.'
  },
  {
    id: '5',
    title: 'Les Houthis à Saada',
    slug: 'houthis-saada',
    description: 'Un reportage unique au cœur du territoire contrôlé par les Houthis dans le nord du Yémen.',
    coverImage: 'https://images.pexels.com/photos/4946415/pexels-photo-4946415.jpeg',
    images: [
      { 
        src: 'https://images.pexels.com/photos/4946415/pexels-photo-4946415.jpeg', 
        alt: 'Paysage montagneux de Saada', 
        caption: 'Paysage montagneux de Saada, 2018'
      },
      { 
        src: 'https://images.pexels.com/photos/6579551/pexels-photo-6579551.jpeg', 
        alt: 'Vie quotidienne sous autorité houthie', 
        caption: 'Vie quotidienne sous autorité houthie, 2018'
      },
      { 
        src: 'https://images.pexels.com/photos/4553031/pexels-photo-4553031.jpeg', 
        alt: 'Enfants dans un village isolé', 
        caption: 'Enfants dans un village isolé, 2019'
      },
      { 
        src: 'https://images.pexels.com/photos/3965551/pexels-photo-3965551.jpeg', 
        alt: 'Architecture traditionnelle yéménite', 
        caption: 'Architecture traditionnelle yéménite, 2018'
      }
    ],
    content: 'Ce reportage est le résultat d\'une immersion dans la région de Saada, bastion du mouvement Houthi dans le nord du Yémen. À travers ces images, je documente la vie quotidienne, les défis humanitaires et les réalités sociales dans une région marquée par le conflit et souvent inaccessible aux médias internationaux.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240924.69271869483!2d43.41977235!3d16.94157695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1603c9b786c642c1%3A0xc544d0f3e5df83fd!2sSa\'dah%2C%20Yemen!5e0!3m2!1sen!2sfr!4v1667926846164!5m2!1sen!2sfr'
  }
];