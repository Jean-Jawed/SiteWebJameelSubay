export interface Exhibition {
  id: string;
  title: string;
  location: string;
  date: string;
  description: string;
  image?: string;
}

export interface Publication {
  id: string;
  title: string;
  publisher: string;
  date: string;
  description: string;
  link?: string;
  image?: string;
}

export interface Collaboration {
  id: string;
  name: string;
  role: string;
  description: string;
  image?: string;
}

export const biography = {
  en: `Jameel Subay is a documentary photographer born in Yemen. His work focuses on social issues, political conflicts, and cultural diversity across the Middle East and North Africa.

After studying photojournalism in Cairo, Jameel began documenting the Arab Spring movements in 2011. His unflinching portrayal of everyday life amidst political upheaval quickly gained international recognition.

Jameel's photography is characterized by an intimate approach that prioritizes human dignity over sensationalism. His long-term projects often explore overlooked communities and social dynamics, challenging prevalent narratives about the region.

His work has been exhibited internationally and published in major publications including The New York Times, Le Monde, and Al Jazeera. He has received multiple awards for his contribution to documentary photography.

Currently dividing his time between Paris and Sana'a, Jameel continues to document the evolving social landscape of the Arab world.`,

  fr: `Jameel Subay est un photographe documentaire né au Yémen. Son travail se concentre sur les questions sociales, les conflits politiques et la diversité culturelle au Moyen-Orient et en Afrique du Nord.

Après avoir étudié le photojournalisme au Caire, Jameel a commencé à documenter les mouvements du Printemps arabe en 2011. Sa représentation sans concession de la vie quotidienne au milieu des bouleversements politiques lui a rapidement valu une reconnaissance internationale.

La photographie de Jameel se caractérise par une approche intime qui privilégie la dignité humaine plutôt que le sensationnalisme. Ses projets à long terme explorent souvent des communautés négligées et des dynamiques sociales, remettant en question les récits dominants sur la région.

Son travail a été exposé à l'international et publié dans d'importantes publications, notamment The New York Times, Le Monde et Al Jazeera. Il a reçu plusieurs prix pour sa contribution à la photographie documentaire.

Partageant actuellement son temps entre Paris et Sanaa, Jameel continue de documenter l'évolution du paysage social du monde arabe.`,

  ar: `جميل صباي هو مصور وثائقي ولد في اليمن. يركز عمله على القضايا الاجتماعية والصراعات السياسية والتنوع الثقافي في الشرق الأوسط وشمال إفريقيا.

بعد دراسة التصوير الصحفي في القاهرة، بدأ جميل في توثيق حركات الربيع العربي في عام 2011. وسرعان ما اكتسب تصويره الصريح للحياة اليومية وسط الاضطرابات السياسية اعترافًا دوليًا.

يتميز تصوير جميل بنهج حميم يعطي الأولوية للكرامة الإنسانية على الإثارة. غالبًا ما تستكشف مشاريعه طويلة المدى المجتمعات والديناميكيات الاجتماعية المهملة، متحدية الروايات السائدة حول المنطقة.

تم عرض أعماله دوليًا ونشرها في منشورات رئيسية بما في ذلك نيويورك تايمز ولوموند والجزيرة. حصل على جوائز متعددة لمساهمته في التصوير الوثائقي.

يقسم جميل حاليًا وقته بين باريس وصنعاء، ويواصل توثيق المشهد الاجتماعي المتطور في العالم العربي.`
};

export const pastExhibitions: Exhibition[] = [
  {
    id: '1',
    title: 'Visages du Yémen',
    location: 'Institut du Monde Arabe, Paris',
    date: '2020',
    description: 'Une exposition solo présentant des portraits de Yéménites de tous horizons, capturant la diversité humaine et culturelle du pays.',
    image: 'https://images.pexels.com/photos/1647372/pexels-photo-1647372.jpeg'
  },
  {
    id: '2',
    title: 'Arab Spring: A Decade Later',
    location: 'International Center of Photography, New York',
    date: '2021',
    description: 'A collective exhibition examining the long-term impact of the Arab Spring movements through the lens of photographers from the region.',
    image: 'https://images.pexels.com/photos/3105404/pexels-photo-3105404.jpeg'
  },
  {
    id: '3',
    title: 'Mémoires de Saada',
    location: 'FRAC Normandie, Caen',
    date: '2019',
    description: 'Une exposition documentant l\'architecture, les traditions et la vie quotidienne dans la région historique de Saada au Yémen.',
    image: 'https://images.pexels.com/photos/4256852/pexels-photo-4256852.jpeg'
  },
  {
    id: '4',
    title: 'Intersecciones',
    location: 'Centre de Cultura Contemporània de Barcelona',
    date: '2018',
    description: 'Una exposición que explora las identidades marginadas y las intersecciones culturales en el mundo árabe contemporáneo.',
    image: 'https://images.pexels.com/photos/3045825/pexels-photo-3045825.jpeg'
  },
  {
    id: '5',
    title: 'Between Worlds',
    location: 'Contemporary Image Collective, Cairo',
    date: '2017',
    description: 'An exhibition focusing on minority communities across the Middle East, highlighting their cultural contributions and challenges.',
    image: 'https://images.pexels.com/photos/1535285/pexels-photo-1535285.jpeg'
  }
];

export const upcomingExhibitions: Exhibition[] = [
  {
    id: '1',
    title: 'Fragments d\'Exil',
    location: 'MUCEM, Marseille',
    date: '2023',
    description: 'Une exploration visuelle de l\'expérience des réfugiés yéménites à travers la Méditerranée, mettant en lumière leurs parcours et leurs espoirs.',
    image: 'https://images.pexels.com/photos/2260839/pexels-photo-2260839.jpeg'
  },
  {
    id: '2',
    title: 'Contested Spaces',
    location: 'Tate Modern, London',
    date: '2023',
    description: 'A group exhibition examining how photographers document territories and communities affected by political conflict and environmental change.',
    image: 'https://images.pexels.com/photos/907828/pexels-photo-907828.jpeg'
  }
];

export const publications: Publication[] = [
  {
    id: '1',
    title: 'Yemen: The Forgotten War',
    publisher: 'Aperture Foundation',
    date: '2020',
    description: 'A photobook documenting the humanitarian impact of the ongoing conflict in Yemen, with essays by leading journalists and human rights experts.',
    link: 'https://aperture.org',
    image: 'https://images.pexels.com/photos/2927582/pexels-photo-2927582.jpeg'
  },
  {
    id: '2',
    title: 'Margins and Centers',
    publisher: 'Phaidon Press',
    date: '2019',
    description: 'A collection of essays and photographs exploring the concept of marginality in contemporary Middle Eastern societies.',
    link: 'https://phaidon.com',
    image: 'https://images.pexels.com/photos/6344231/pexels-photo-6344231.jpeg'
  },
  {
    id: '3',
    title: 'Arab Identities in Transit',
    publisher: 'Thames & Hudson',
    date: '2018',
    description: 'A collaborative work examining the evolution of cultural and political identities in the post-Arab Spring landscape.',
    link: 'https://thamesandhudson.com',
    image: 'https://images.pexels.com/photos/8108391/pexels-photo-8108391.jpeg'
  }
];

export const collaborations: Collaboration[] = [
  {
    id: '1',
    name: 'Médecins Sans Frontières',
    role: 'Documentary Photographer',
    description: 'A long-term collaboration documenting MSF\'s humanitarian work in conflict zones across Yemen and the Horn of Africa.',
    image: 'https://images.pexels.com/photos/6994984/pexels-photo-6994984.jpeg'
  },
  {
    id: '2',
    name: 'UNESCO World Heritage Centre',
    role: 'Contributing Photographer',
    description: 'Documentation of endangered cultural heritage sites in Yemen, contributing to preservation and awareness efforts.',
    image: 'https://images.pexels.com/photos/5602979/pexels-photo-5602979.jpeg'
  },
  {
    id: '3',
    name: 'Al Jazeera Documentary Channel',
    role: 'Visual Consultant',
    description: 'Collaboration on documentary series exploring social transformations in the Arab world, providing visual direction and photography.',
    image: 'https://images.pexels.com/photos/7775638/pexels-photo-7775638.jpeg'
  }
];