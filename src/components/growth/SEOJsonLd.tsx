import type {
  WithContext,
  Organization,
  WebSite,
  BreadcrumbList,
  FAQPage,
  TravelAgency,
  TouristDestination,
} from 'schema-dts';

const BASE_URL = 'https://cityguide.ma';

/* ─── Organization Schema ─── */
const organizationSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CityGuide',
  alternateName: 'CityGuide Morocco',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/logo.png`,
    width: '512',
    height: '512',
    caption: 'CityGuide - Morocco Travel Guide',
  },
  description:
    'The most comprehensive Morocco tourism directory and travel guide. Explore destinations, tours, accommodations, restaurants, and plan your perfect Moroccan adventure.',
  foundingDate: '2024',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+212-5-00-000-000',
      contactType: 'customer service',
      availableLanguage: ['English', 'French', 'Arabic'],
      areaServed: 'Worldwide',
    },
  ],
  sameAs: [
    'https://facebook.com/cityguide',
    'https://instagram.com/cityguide',
    'https://twitter.com/cityguide_ma',
    'https://youtube.com/cityguide',
    'https://pinterest.com/cityguide',
    'https://linkedin.com/company/cityguide',
    'https://tiktok.com/@cityguide',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'MA',
    addressRegion: 'Marrakech-Safi',
    addressLocality: 'Marrakech',
  },
};

/* ─── WebSite Schema with SearchAction ─── */
const websiteSchema: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CityGuide',
  alternateName: 'CityGuide - Morocco Travel Companion',
  url: BASE_URL,
  description:
    'Your complete Morocco travel companion. Explore 50+ cities, 1,000+ attractions, curated tours, and expert travel tips.',
  publisher: {
    '@type': 'Organization',
    name: 'CityGuide',
    url: BASE_URL,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  } as unknown as WebSite['potentialAction'],
  inLanguage: ['en', 'fr', 'ar'],
};

/* ─── TravelAgency Schema ─── */
const travelAgencySchema: WithContext<TravelAgency> = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'CityGuide Morocco',
  url: BASE_URL,
  description:
    'Morocco travel planning platform offering comprehensive guides to 50+ cities, curated tours, accommodation bookings, restaurant recommendations, and expert travel advice for the Kingdom of Morocco.',
  image: `${BASE_URL}/logo.png`,
  telephone: '+212-5-00-000-000',
  email: 'info@cityguide.ma',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Medina',
    addressLocality: 'Marrakech',
    addressRegion: 'Marrakech-Safi',
    postalCode: '40000',
    addressCountry: 'MA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.6295,
    longitude: -7.9811,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Morocco',
    sameAs: 'https://en.wikipedia.org/wiki/Morocco',
  },
  priceRange: '$-$$$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: [
    'https://facebook.com/cityguide',
    'https://instagram.com/cityguide',
    'https://twitter.com/cityguide_ma',
  ],
} as WithContext<TravelAgency>;

/* ─── TouristDestination Schemas for Major Cities ─── */
const touristDestinations: WithContext<TouristDestination>[] = [
  {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Marrakech',
    alternateName: 'The Red City',
    description:
      'Marrakech is Morocco\'s most popular tourist destination, known for the bustling Jemaa el-Fnaa square, vibrant souks, Majorelle Garden, Bahia Palace, and the Koutoubia Mosque. A former imperial city with a medina that is a UNESCO World Heritage Site.',
    url: `${BASE_URL}/cities/marrakech`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.6295,
      longitude: -7.9811,
    },
    image: `${BASE_URL}/images/cities/marrakech.jpg`,
    touristType: ['Cultural tourism', 'Heritage tourism', 'Shopping tourism'],
    includesAttraction: [
      {
        '@type': 'TouristAttraction',
        name: 'Jemaa el-Fnaa',
        url: `${BASE_URL}/attractions/jemaa-el-fnaa`,
      },
      {
        '@type': 'TouristAttraction',
        name: 'Jardin Majorelle',
        url: `${BASE_URL}/attractions/jardin-majorelle`,
      },
      {
        '@type': 'TouristAttraction',
        name: 'Bahia Palace',
        url: `${BASE_URL}/attractions/bahia-palace`,
      },
    ],
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  } as WithContext<TouristDestination>,
  {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Fes',
    alternateName: 'The Spiritual Capital',
    description:
      'Fes is home to the world\'s oldest university (Al-Qarawiyyin, founded 859 AD) and the largest car-free urban area on Earth. Its medieval medina, Fes el-Bali, is a UNESCO World Heritage Site famous for its tanneries, mosques, and madrasas.',
    url: `${BASE_URL}/cities/fes`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.0181,
      longitude: -5.0078,
    },
    image: `${BASE_URL}/images/cities/fes.jpg`,
    touristType: ['Cultural tourism', 'Heritage tourism', 'Educational tourism'],
    includesAttraction: [
      {
        '@type': 'TouristAttraction',
        name: 'Fes Medina (Fes el-Bali)',
        url: `${BASE_URL}/attractions/fes-medina`,
      },
      {
        '@type': 'TouristAttraction',
        name: 'Chouara Tannery',
        url: `${BASE_URL}/attractions/chouara-tannery`,
      },
    ],
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  } as WithContext<TouristDestination>,
  {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Chefchaouen',
    alternateName: 'The Blue Pearl',
    description:
      'Chefchaouen is a picturesque mountain town in the Rif Mountains, famous for its striking blue-washed buildings. It is one of the most photographed cities in Morocco, offering a relaxed atmosphere, hiking trails, and traditional handicrafts.',
    url: `${BASE_URL}/cities/chefchaouen`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.1688,
      longitude: -5.2636,
    },
    image: `${BASE_URL}/images/cities/chefchaouen.jpg`,
    touristType: ['Cultural tourism', 'Adventure tourism', 'Photography tourism'],
    includesAttraction: [
      {
        '@type': 'TouristAttraction',
        name: 'Chefchaouen Medina',
        url: `${BASE_URL}/attractions/chefchaouen-medina`,
      },
    ],
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  } as WithContext<TouristDestination>,
  {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Casablanca',
    alternateName: 'The Economic Capital',
    description:
      'Casablanca is Morocco\'s largest city and economic hub, home to the Hassan II Mosque (the third-largest mosque in the world with a minaret reaching 210 meters), stunning Art Deco architecture, and a vibrant modern dining and nightlife scene.',
    url: `${BASE_URL}/cities/casablanca`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.5731,
      longitude: -7.5898,
    },
    image: `${BASE_URL}/images/cities/casablanca.jpg`,
    touristType: ['Cultural tourism', 'Business tourism', 'Architecture tourism'],
    includesAttraction: [
      {
        '@type': 'TouristAttraction',
        name: 'Hassan II Mosque',
        url: `${BASE_URL}/attractions/hassan-ii-mosque`,
      },
    ],
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  } as WithContext<TouristDestination>,
  {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Essaouira',
    alternateName: 'The Wind City',
    description:
      'Essaouira is a charming Atlantic coastal town known for its Portuguese-era fortifications, vibrant arts scene, world-class windsurfing, fresh seafood, and relaxed bohemian atmosphere. Its medina is a UNESCO World Heritage Site and a Game of Thrones filming location.',
    url: `${BASE_URL}/cities/essaouira`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.5085,
      longitude: -9.7595,
    },
    image: `${BASE_URL}/images/cities/essaouira.jpg`,
    touristType: ['Coastal tourism', 'Adventure tourism', 'Cultural tourism'],
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  } as WithContext<TouristDestination>,
  {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Merzouga',
    alternateName: 'Gateway to the Sahara',
    description:
      'Merzouga is a small desert village on the edge of Erg Chebbi, Morocco\'s largest sand dune field with dunes reaching up to 150 meters. It is the starting point for camel treks, desert camping under the stars, and experiencing authentic Berber culture.',
    url: `${BASE_URL}/cities/merzouga`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.0801,
      longitude: -4.0083,
    },
    image: `${BASE_URL}/images/cities/merzouga.jpg`,
    touristType: ['Adventure tourism', 'Ecotourism', 'Cultural tourism'],
    includesAttraction: [
      {
        '@type': 'TouristAttraction',
        name: 'Erg Chebbi Dunes',
        url: `${BASE_URL}/attractions/erg-chebbi`,
      },
    ],
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  } as WithContext<TouristDestination>,
  {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Rabat',
    alternateName: 'The Capital',
    description:
      'Rabat is the capital of Morocco, blending historic sites with modern culture. Home to the Kasbah of the Udayas, Hassan Tower, Chellah necropolis, and the Mohammed V Mausoleum. A UNESCO World Heritage city with a pleasant Atlantic climate.',
    url: `${BASE_URL}/cities/rabat`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.0209,
      longitude: -6.8416,
    },
    image: `${BASE_URL}/images/cities/rabat.jpg`,
    touristType: ['Cultural tourism', 'Heritage tourism', 'Political tourism'],
    includesAttraction: [
      {
        '@type': 'TouristAttraction',
        name: 'Kasbah of the Udayas',
        url: `${BASE_URL}/attractions/kasbah-udayas`,
      },
      {
        '@type': 'TouristAttraction',
        name: 'Hassan Tower',
        url: `${BASE_URL}/attractions/hassan-tower`,
      },
    ],
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  } as WithContext<TouristDestination>,
  {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Tangier',
    alternateName: 'The Gateway to Africa',
    description:
      'Tangier sits at the confluence of the Atlantic Ocean and Mediterranean Sea, just 14 km from Spain. A cosmopolitan city with a storied literary history, the Caves of Hercules, the ancient Kasbah, and a rapidly modernizing port and cultural scene.',
    url: `${BASE_URL}/cities/tangier`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.7595,
      longitude: -5.834,
    },
    image: `${BASE_URL}/images/cities/tangier.jpg`,
    touristType: ['Cultural tourism', 'Coastal tourism', 'Historical tourism'],
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  } as WithContext<TouristDestination>,
];

/* ─── BreadcrumbList Template Helper ─── */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(
  items: BreadcrumbItem[]
): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem' as const,
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

/* ─── FAQPage Schema Template Helper ─── */
export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question' as const,
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer' as const,
        text: faq.answer,
      },
    })),
  };
}

/* ─── Homepage BreadcrumbList ─── */
const homeBreadcrumbSchema: WithContext<BreadcrumbList> = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: BASE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Morocco Travel Guide',
      item: `${BASE_URL}/cities`,
    },
  ],
};

/* ─── SEOJsonLd Component ─── */
export default function SEOJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(travelAgencySchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeBreadcrumbSchema),
        }}
      />
      {touristDestinations.map((destination, index) => (
        <script
          key={`destination-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(destination),
          }}
        />
      ))}
    </>
  );
}
