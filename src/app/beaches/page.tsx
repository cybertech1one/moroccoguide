import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Waves,
  Wind,
  Sun,
  Thermometer,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  AlertTriangle,
  Shield,
  Car,
  Calendar,
  Compass,
  Heart,
  Camera,
  Navigation,
  Anchor,
  Umbrella,
  Hotel,
  ArrowRight,
  PhoneCall,
  Droplets,
} from 'lucide-react';
import BeachesClient from './BeachesClient';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Beach Guide | 20 Best Beaches for Surfing, Swimming & More',
  description:
    'Discover Morocco\'s stunning 3,500 km coastline. From the legendary surf breaks of Taghazout to the secluded sands of Legzira, our guide covers 20 beaches across the Atlantic and Mediterranean coasts with surfing, kitesurfing, safety tips, and a 10-day coastal road trip itinerary.',
  keywords: [
    'Morocco beaches',
    'best beaches Morocco',
    'Taghazout surf',
    'Essaouira beach',
    'Legzira beach',
    'Dakhla kitesurfing',
    'Morocco surfing',
    'Morocco coastal guide',
    'Atlantic coast Morocco',
    'Mediterranean Morocco',
    'Saidia beach',
    'Oualidia lagoon',
    'Morocco beach holiday',
    'Morocco water sports',
    'Agadir beach',
    'Morocco coastal road trip',
  ],
  openGraph: {
    title: 'Morocco Beach Guide - 20 Best Beaches',
    description:
      'The ultimate guide to Morocco\'s beaches. Atlantic surf, Mediterranean coves, and hidden gems along 3,500 km of coastline.',
    url: 'https://citytoursmorocco.com/beaches',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Beautiful Moroccan beach with golden sand and turquoise water',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/beaches' },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TouristAttraction',
      '@id': 'https://citytoursmorocco.com/beaches#guide',
      name: 'Morocco Beaches Guide',
      description:
        'Complete guide to the 20 best beaches in Morocco along the Atlantic and Mediterranean coasts, covering surfing, kitesurfing, swimming, safety, and coastal road trips.',
      url: 'https://citytoursmorocco.com/beaches',
      touristType: ['Beach tourism', 'Water sports', 'Surfing', 'Kitesurfing'],
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'MA',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best time to surf in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The best surf season in Morocco is October to March, when consistent Atlantic swells deliver world-class waves to spots like Taghazout, Anchor Point, and Imsouane. Summer offers smaller, cleaner waves suitable for beginners.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is the best kitesurfing in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dakhla is the undisputed kitesurfing capital of Morocco and one of the top destinations globally, with consistent winds from March to November and a vast, flat-water lagoon. Essaouira is another excellent option with strong trade winds from April to September.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it safe to swim in Moroccan beaches?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Many Moroccan beaches are safe for swimming, particularly Mediterranean beaches and sheltered Atlantic spots like Oualidia and Agadir. However, Atlantic beaches can have strong currents and undertow. Always swim at lifeguarded beaches, check local conditions, and look for flag warnings.',
          },
        },
      ],
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   BEACH DATA
   ═══════════════════════════════════════════════════════════════ */

export interface Beach {
  name: string;
  city: string;
  type: string[];
  coast: 'Atlantic' | 'Mediterranean';
  region: string;
  description: string;
  image: string;
  bestSeason: string;
  facilities: string[];
  rating: number;
  waterTemp?: string;
  bestFor?: string[];
  gettingThere?: string;
  nearbyStays?: string;
}

const beaches: Beach[] = [
  {
    name: 'Taghazout Beach',
    city: 'Taghazout',
    type: ['Surf', 'Water Sports'],
    coast: 'Atlantic',
    region: 'Souss-Massa',
    description:
      'Morocco\'s surf capital and one of Africa\'s best surf destinations. The village has transformed from a sleepy fishing hamlet into a world-class surf hub with camps, yoga retreats, and board rentals. Anchor Point, just north of town, is a legendary right-hand point break. The vibe is relaxed, international, and endlessly sun-kissed.',
    image: 'https://images.unsplash.com/photo-1455729552457-5c322b47ff7e?q=80&w=800',
    bestSeason: 'October - March (surf), Year-round (village)',
    facilities: ['Surf schools', 'Board rental', 'Restaurants', 'Yoga studios', 'Accommodation'],
    rating: 4.7,
    waterTemp: '16-17C winter, 20-22C summer',
    bestFor: ['Surfing', 'Yoga retreats', 'Digital nomads'],
    gettingThere: '20 min north of Agadir by taxi or local bus. Agadir Al Massira Airport (AGA) is the nearest airport.',
    nearbyStays: 'Surf camps from 200 MAD/night, boutique guesthouses from 500 MAD, Hyatt Place Taghazout Bay from 1,500 MAD.',
  },
  {
    name: 'Essaouira Beach',
    city: 'Essaouira',
    type: ['Water Sports', 'Swimming', 'Family'],
    coast: 'Atlantic',
    region: 'Marrakech-Safi',
    description:
      'A sweeping crescent of golden sand stretching south from the historic fortified city. Known as the "Wind City of Africa," Essaouira is a world-class destination for kitesurfing and windsurfing, especially from April to September. The northern end near the medina is sheltered and good for swimming; the southern end catches the famous trade winds.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800',
    bestSeason: 'June - September (wind sports), Year-round',
    facilities: ['Water sports schools', 'Restaurants', 'Changing rooms', 'Horse/camel rides', 'Lifeguards in summer'],
    rating: 4.6,
    waterTemp: '17-18C winter, 20-21C summer',
    bestFor: ['Windsurfing', 'Kitesurfing', 'Couples', 'Photography'],
    gettingThere: '2.5 hours from Marrakech by bus or car. Essaouira-Mogador Airport has seasonal flights.',
    nearbyStays: 'Medina riads from 400 MAD, Heure Bleue Palais from 2,500 MAD, beachfront guesthouses from 600 MAD.',
  },
  {
    name: 'Legzira Beach',
    city: 'Sidi Ifni',
    type: ['Secluded', 'Swimming'],
    coast: 'Atlantic',
    region: 'Souss-Massa',
    description:
      'Famous for its dramatic natural stone arches carved into red cliffs by centuries of Atlantic waves. One arch collapsed in 2016, but the remaining formation is still breathtaking. The beach stretches for miles with golden-red sand and powerful waves. Best visited at low tide when you can walk to the arches.',
    image: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=800',
    bestSeason: 'September - November',
    facilities: ['Parking', 'Small cafes', 'No lifeguard'],
    rating: 4.8,
    waterTemp: '17-18C winter, 21-22C summer',
    bestFor: ['Photography', 'Hiking', 'Nature lovers'],
    gettingThere: '10 km north of Sidi Ifni. Grand taxi from Sidi Ifni or drive from Agadir (3 hours south via N1).',
    nearbyStays: 'Small guesthouses at beach from 250 MAD, hotels in Sidi Ifni from 300 MAD.',
  },
  {
    name: 'Oualidia Lagoon',
    city: 'Oualidia',
    type: ['Swimming', 'Family'],
    coast: 'Atlantic',
    region: 'Casablanca-Settat',
    description:
      'A sheltered turquoise lagoon on the Atlantic coast, Oualidia is Morocco\'s hidden gem. The calm, warm waters are perfect for swimming and safe for children. Famous for its oyster farms (the best in Morocco), you can eat freshly shucked oysters at waterside shacks for a fraction of European prices. King Mohammed VI has a palace here, which tells you about the quality.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800',
    bestSeason: 'June - September',
    facilities: ['Oyster restaurants', 'Boat tours', 'Hotels', 'Parking', 'Calm water for kids'],
    rating: 4.6,
    waterTemp: '17-18C winter, 21-22C summer',
    bestFor: ['Families', 'Food lovers', 'Couples', 'Swimming'],
    gettingThere: '2.5 hours south of Casablanca via the coastal road N1, or 3 hours from Marrakech.',
    nearbyStays: 'La Sultana Oualidia from 3,000 MAD (luxury), L\'Hippocampe from 800 MAD, guesthouses from 400 MAD.',
  },
  {
    name: 'Moulay Bousselham',
    city: 'Moulay Bousselham',
    type: ['Family', 'Swimming'],
    coast: 'Atlantic',
    region: 'Rabat-Sale-Kenitra',
    description:
      'A charming coastal village built around a lagoon that is home to Merja Zerga, one of Morocco\'s most important bird sanctuaries. The lagoon is calm and perfect for swimming, while the ocean beach on the other side offers waves. Boat trips through the wetlands to see flamingos, herons, and migrating birds are a highlight. A favorite weekend escape for Moroccans.',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=800',
    bestSeason: 'June - September',
    facilities: ['Boat tours', 'Fish restaurants', 'Small hotels', 'Bird watching'],
    rating: 4.3,
    waterTemp: '16-17C winter, 20-21C summer',
    bestFor: ['Bird watching', 'Families', 'Nature lovers'],
    gettingThere: '1.5 hours north of Rabat via N1. Grand taxi from Souk el Arba du Gharb.',
    nearbyStays: 'Small local hotels from 300 MAD, guesthouses from 200 MAD.',
  },
  {
    name: 'Agadir Beach',
    city: 'Agadir',
    type: ['Swimming', 'Family', 'Water Sports'],
    coast: 'Atlantic',
    region: 'Souss-Massa',
    description:
      'Morocco\'s premier resort beach with 10 km of wide, golden sand and over 300 days of sunshine per year. The city was rebuilt after a devastating 1960 earthquake, resulting in a modern, purpose-built beach resort. The water is warmer here than further north, and the beach has every facility imaginable. Perfect for families and those who prefer comfort.',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800',
    bestSeason: 'Year-round (warmest June - September)',
    facilities: ['Full resort amenities', 'Lifeguards', 'Beach clubs', 'Water sports', 'Restaurants', 'Parking'],
    rating: 4.3,
    waterTemp: '17-18C winter, 21-23C summer',
    bestFor: ['Families', 'Resort holidays', 'Swimming'],
    gettingThere: 'Agadir Al Massira Airport (AGA) with flights from Europe. City center is 25 km from the airport.',
    nearbyStays: 'Sofitel Agadir from 2,000 MAD, Iberostar from 1,200 MAD, budget hotels from 400 MAD.',
  },
  {
    name: 'Dakhla Beach',
    city: 'Dakhla',
    type: ['Water Sports', 'Secluded'],
    coast: 'Atlantic',
    region: 'Dakhla-Oued Ed-Dahab',
    description:
      'A remote paradise on a narrow peninsula in the deep south of Morocco. Dakhla is one of the world\'s top kitesurfing destinations, with a vast lagoon offering flat water and consistent winds. The setting is otherworldly: desert dunes meet turquoise waters, flamingos wade in the shallows, and the light is extraordinary. A long journey but worth every kilometer.',
    image: 'https://images.unsplash.com/photo-1502680390548-bdbac40cee81?q=80&w=800',
    bestSeason: 'March - November (kitesurf), Year-round',
    facilities: ['Kitesurf centers', 'Eco-lodges', 'Restaurants', 'Yoga'],
    rating: 4.8,
    waterTemp: '18-19C winter, 21-23C summer',
    bestFor: ['Kitesurfing', 'Solitude seekers', 'Adventure travelers'],
    gettingThere: 'Dakhla Airport (VIL) with flights from Casablanca. By road: 20+ hours from Marrakech, or overnight bus.',
    nearbyStays: 'Dakhla Attitude from 1,500 MAD, Ocean Vagabond from 1,200 MAD, PK25 camps from 800 MAD.',
  },
  {
    name: 'Mirleft Beach',
    city: 'Mirleft',
    type: ['Surf', 'Secluded'],
    coast: 'Atlantic',
    region: 'Souss-Massa',
    description:
      'A series of stunning cove beaches below a clifftop village between Tiznit and Sidi Ifni. Each beach has its own character: some have surf, others have calm swimming. The village of Mirleft is a growing surf destination with a laid-back atmosphere, colorful houses, and a growing number of surf camps and guesthouses. Still relatively undiscovered.',
    image: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=800',
    bestSeason: 'September - May',
    facilities: ['Surf camps', 'Guesthouses', 'Small restaurants', 'Board rental'],
    rating: 4.5,
    waterTemp: '17-18C winter, 21-22C summer',
    bestFor: ['Surfing', 'Solitude seekers', 'Couples'],
    gettingThere: '40 min south of Tiznit on the N1. Grand taxi from Tiznit, or drive 2 hours south of Agadir.',
    nearbyStays: 'Aftas Surf House from 350 MAD, Hotel Abertih from 500 MAD, Dar Najmat from 600 MAD.',
  },
  {
    name: 'Sidi Kaouki',
    city: 'Sidi Kaouki',
    type: ['Surf', 'Secluded'],
    coast: 'Atlantic',
    region: 'Marrakech-Safi',
    description:
      'A wild, windswept beach 25 km south of Essaouira with a mystical atmosphere centered on the whitewashed marabout (saint\'s tomb) on the bluff. Less developed than Taghazout, it attracts surfers, windsurfers, and those seeking solitude. The village has a handful of guesthouses, surf camps, and a legendary sunset. Camel rides along the beach are popular.',
    image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=800',
    bestSeason: 'September - April (surf), Year-round',
    facilities: ['Surf camps', 'Small guesthouses', 'Camel rides', 'Basic cafes'],
    rating: 4.5,
    waterTemp: '16-17C winter, 20-21C summer',
    bestFor: ['Surfing', 'Yoga retreats', 'Off-grid travelers'],
    gettingThere: '25 km south of Essaouira. Grand taxi or local bus from Essaouira, or drive.',
    nearbyStays: 'Rebali Riads from 1,200 MAD, Sidi Kaouki Surf Station from 300 MAD.',
  },
  {
    name: 'Al Hoceima Beaches',
    city: 'Al Hoceima',
    type: ['Swimming', 'Secluded'],
    coast: 'Mediterranean',
    region: 'Tanger-Tetouan-Al Hoceima',
    description:
      'The crown jewel of the Rif Mediterranean, Al Hoceima sits on a stunning bay surrounded by the national park that bears its name. Plage Quemado is the main town beach, but the real treasures are the secluded coves of the national park: Cala Iris, Badis, and Torres are accessible by boat or rough track. Crystal-clear turquoise water rivaling anything in Greece.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800',
    bestSeason: 'June - September',
    facilities: ['Town beach amenities', 'Boat excursions', 'Fish restaurants', 'National park access'],
    rating: 4.5,
    waterTemp: '16-17C winter, 23-25C summer',
    bestFor: ['Swimming', 'Snorkeling', 'Nature lovers', 'Photography'],
    gettingThere: 'Al Hoceima Cherif Al Idrissi Airport (AHU) with flights from Casablanca. 6 hours by road from Fes through the Rif mountains.',
    nearbyStays: 'Hotel Suites Mohamed V from 800 MAD, local apartments from 400 MAD.',
  },
  {
    name: 'Cabo Negro',
    city: 'Tetouan',
    type: ['Swimming', 'Family'],
    coast: 'Mediterranean',
    region: 'Tanger-Tetouan-Al Hoceima',
    description:
      'An upscale residential beach resort between Tetouan and M\'diq. The beach is well-maintained with fine sand and calm Mediterranean waters. The area is popular with wealthy Moroccan families and has a golf course, yacht club, and high-end restaurants. It feels like a different Morocco here, closer to the Spanish Costa del Sol vibe.',
    image: 'https://images.unsplash.com/photo-1520942702018-0862200e6873?q=80&w=800',
    bestSeason: 'June - September',
    facilities: ['Golf course', 'Yacht club', 'Restaurants', 'Beach clubs', 'Parking'],
    rating: 4.1,
    waterTemp: '15-16C winter, 22-24C summer',
    bestFor: ['Families', 'Golf', 'Upscale beach holiday'],
    gettingThere: '10 min from Tetouan by taxi. 1 hour from Tangier via the autoroute.',
    nearbyStays: 'Sofitel Tamuda Bay from 2,500 MAD, Hotel Cabo Negro from 700 MAD.',
  },
  {
    name: "M'diq Beach",
    city: "M'diq",
    type: ['Swimming', 'Family'],
    coast: 'Mediterranean',
    region: 'Tanger-Tetouan-Al Hoceima',
    description:
      'One of the most popular Mediterranean beaches in northern Morocco. M\'diq has calm, warm waters, a lively promenade, and a modern marina. The beach fills with Moroccan families in July and August. Less visited by international tourists, it offers an authentic Moroccan beach holiday experience with excellent seafood restaurants.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800',
    bestSeason: 'June - September',
    facilities: ['Marina', 'Restaurants', 'Beach clubs', 'Parking', 'Lifeguards'],
    rating: 4.2,
    waterTemp: '15-16C winter, 22-24C summer',
    bestFor: ['Families', 'Seafood', 'Local culture'],
    gettingThere: '30 min from Tetouan, 1 hour from Tangier by car or grand taxi.',
    nearbyStays: 'Hotel Golden Beach from 600 MAD, local apartments from 300 MAD.',
  },
  {
    name: 'Saidia Beach',
    city: 'Saidia',
    type: ['Swimming', 'Family', 'Water Sports'],
    coast: 'Mediterranean',
    region: 'Oriental',
    description:
      'Known as the "Blue Pearl," Saidia boasts 14 km of fine sandy beach on the Mediterranean near the Algerian border. The water is warm and calm, and a massive resort complex (Mediterrania Saidia) has brought international-standard facilities including an 18-hole golf course, marina, and aquapark. The best Mediterranean beach infrastructure in Morocco.',
    image: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=800',
    bestSeason: 'June - September',
    facilities: ['Golf course', 'Aquapark', 'Marina', 'Resort hotels', 'Restaurants', 'Water sports'],
    rating: 4.3,
    waterTemp: '15-16C winter, 23-25C summer',
    bestFor: ['Families', 'Resort holidays', 'Golf', 'Water sports'],
    gettingThere: 'Oujda Angads Airport (OUD) is 60 km away. 6.5 hours from Fes by road.',
    nearbyStays: 'Iberostar Saidia from 1,500 MAD, Be Live from 1,000 MAD, local apartments from 400 MAD.',
  },
  {
    name: 'Fnideq Beach',
    city: 'Fnideq',
    type: ['Swimming', 'Family'],
    coast: 'Mediterranean',
    region: 'Tanger-Tetouan-Al Hoceima',
    description:
      'A bustling Mediterranean beach town just south of the Ceuta border crossing. Fnideq (formerly Castillejos) has a long, wide sandy beach with calm, warm water. The town is a major shopping destination for Moroccans crossing from Ceuta. The beach is lively and authentically Moroccan, with family picnics, grilled fish vendors, and a festive summer atmosphere.',
    image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=800',
    bestSeason: 'June - September',
    facilities: ['Restaurants', 'Beach vendors', 'Parking', 'Promenade'],
    rating: 3.9,
    waterTemp: '15-16C winter, 22-24C summer',
    bestFor: ['Local culture', 'Families', 'Budget travelers'],
    gettingThere: '30 min south of Ceuta, 45 min from Tangier via the coastal road.',
    nearbyStays: 'Local hotels from 300 MAD, Restinga Smir resorts from 700 MAD.',
  },
  {
    name: 'Asilah Beach',
    city: 'Asilah',
    type: ['Swimming', 'Family'],
    coast: 'Atlantic',
    region: 'Tanger-Tetouan-Al Hoceima',
    description:
      'The beach at this art-filled coastal town stretches south from the whitewashed medina in a wide arc of golden sand. Asilah is known for its annual mural festival and beautifully painted old town. The beach is popular with Moroccan families in summer and wonderfully quiet in the shoulder seasons. The sunsets over the Atlantic are legendary.',
    image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=800',
    bestSeason: 'June - September',
    facilities: ['Restaurants', 'Beach vendors', 'Changing facilities', 'Parking'],
    rating: 4.4,
    waterTemp: '16-17C winter, 20-22C summer',
    bestFor: ['Art lovers', 'Families', 'Photography'],
    gettingThere: '45 min south of Tangier by train or grand taxi.',
    nearbyStays: 'Medina riads from 400 MAD, Hotel Al Alba from 600 MAD.',
  },
  {
    name: 'Sidi Ifni Beach',
    city: 'Sidi Ifni',
    type: ['Secluded', 'Surf'],
    coast: 'Atlantic',
    region: 'Souss-Massa',
    description:
      'A former Spanish colony with Art Deco architecture and a long, wide beach that catches excellent swell. Sidi Ifni has a melancholic charm with its crumbling colonial buildings and misty climate (the "Blue Town" of the south). The beach is vast and often empty, with good surf at the southern end. Sunday market draws people from surrounding villages.',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?q=80&w=800',
    bestSeason: 'September - April',
    facilities: ['Basic cafes', 'Accommodation in town', 'Sunday market'],
    rating: 4.2,
    waterTemp: '17-18C winter, 20-22C summer',
    bestFor: ['Surfing', 'History lovers', 'Off-the-beaten-path'],
    gettingThere: '3 hours south of Agadir on the N1. Grand taxi from Tiznit.',
    nearbyStays: 'Hotel Bellevue from 300 MAD, Dar Sidi Ifni from 500 MAD.',
  },
  {
    name: 'Dragon Beach (Dakhla)',
    city: 'Dakhla',
    type: ['Water Sports', 'Secluded'],
    coast: 'Atlantic',
    region: 'Dakhla-Oued Ed-Dahab',
    description:
      'A surreal spot on Dakhla\'s lagoon where a sand spit creates the shape of a dragon when seen from above. This is where kiteboarders come for the flattest water and most consistent winds in Morocco. The setting is utterly unique: desert on both sides, turquoise water, and virtually no one around. One of the top 5 kitesurfing spots on Earth.',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=800',
    bestSeason: 'March - November',
    facilities: ['Kitesurf camps', 'Basic facilities', 'Transfers from Dakhla town'],
    rating: 4.9,
    waterTemp: '18-19C winter, 21-23C summer',
    bestFor: ['Kitesurfing', 'Advanced riders', 'Photography'],
    gettingThere: 'Transfer from Dakhla town (25 km). Most kite camps arrange transport.',
    nearbyStays: 'Dakhla Attitude Camp, PK25 Kite Camp, Ocean Vagabond from 800 MAD.',
  },
  {
    name: 'Plage Blanche',
    city: 'Guelmim',
    type: ['Secluded'],
    coast: 'Atlantic',
    region: 'Guelmim-Oued Noun',
    description:
      'An immense, virtually untouched white sand beach stretching 40 km along the Atlantic coast. Accessible only by 4x4, Plage Blanche is one of the most pristine beaches in all of Africa. No buildings, no people, no sound except the waves. Endangered monk seals have been spotted here. This is the ultimate remote beach experience for those willing to make the journey.',
    image: 'https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?q=80&w=800',
    bestSeason: 'Year-round (best October - April)',
    facilities: ['None - bring everything', '4x4 required'],
    rating: 4.7,
    waterTemp: '17-18C winter, 20-22C summer',
    bestFor: ['Adventure travelers', 'Nature lovers', 'Solitude seekers'],
    gettingThere: 'From Guelmim, 60 km via piste (dirt track). 4x4 essential. Arrange through Guelmim agencies.',
    nearbyStays: 'Wild camping only. Nearest hotels in Guelmim (60 km).',
  },
  {
    name: 'Paradise Valley',
    city: 'Agadir',
    type: ['Swimming', 'Secluded'],
    coast: 'Atlantic',
    region: 'Souss-Massa',
    description:
      'Not a beach but a series of natural freshwater pools and waterfalls in a palm-lined valley 30 minutes from Agadir. Locals and travelers swim in the emerald pools, jump from rocks, and picnic under palm trees. The water is refreshingly cold compared to the coast. A perfect half-day escape from the beach. Go early to avoid crowds.',
    image: 'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=800',
    bestSeason: 'April - October',
    facilities: ['Local guides', 'Basic cafes', 'Parking'],
    rating: 4.4,
    waterTemp: '15-18C year-round (freshwater)',
    bestFor: ['Day trips', 'Families', 'Nature lovers'],
    gettingThere: '30 min northeast of Agadir. Taxi or rental car; some sections require a short hike.',
    nearbyStays: 'Day trip from Agadir recommended. No accommodation on-site.',
  },
  {
    name: 'Imsouane',
    city: 'Imsouane',
    type: ['Surf', 'Secluded'],
    coast: 'Atlantic',
    region: 'Souss-Massa',
    description:
      'A tiny fishing village perched above a sheltered bay that produces one of the longest rideable waves in Africa. The Bay offers a gentle, incredibly long right-hander perfect for longboarding and beginners, while the Cathedral break outside the bay delivers powerful reef waves for advanced surfers. The village has a raw, pre-tourism charm with fresh seafood shacks and a tight-knit surf community.',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=800',
    bestSeason: 'October - April (surf), Year-round',
    facilities: ['Surf camps', 'Fish shacks', 'Board rental', 'Basic guesthouses'],
    rating: 4.6,
    waterTemp: '16-17C winter, 20-22C summer',
    bestFor: ['Longboarding', 'Beginner surfers', 'Authentic atmosphere'],
    gettingThere: '1.5 hours north of Agadir on the coastal road, or 45 min from Essaouira.',
    nearbyStays: 'Surf camps from 200 MAD, guesthouses from 300 MAD.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   SURF SPOTS DATA
   ═══════════════════════════════════════════════════════════════ */

const surfSpots = [
  {
    name: 'Anchor Point',
    location: 'Taghazout',
    level: 'Intermediate - Advanced',
    waveType: 'Right-hand point break',
    bestSwell: 'NW - W, 4-10 ft',
    season: 'October - March',
    description:
      'Morocco\'s most famous wave. A long, fast, barreling right that wraps around a rocky point. Can hold big swell and offers rides of 200+ meters on the best days. Gets crowded but the quality is undeniable.',
  },
  {
    name: 'Killer Point',
    location: 'Taghazout',
    level: 'Advanced',
    waveType: 'Right-hand reef break',
    bestSwell: 'NW, 6-12 ft',
    season: 'November - February',
    description:
      'A heavy, fast right that breaks over a shallow reef shelf. Named for the orcas sometimes spotted offshore. The paddle-out can be challenging, and the wave packs serious power. Not for beginners.',
  },
  {
    name: 'Imsouane Bay',
    location: 'Imsouane',
    level: 'Beginner - Intermediate',
    waveType: 'Right-hand point break',
    bestSwell: 'Any W swell, 2-6 ft',
    season: 'Year-round (best Oct - Apr)',
    description:
      'Possibly the longest wave in Africa. A gentle, forgiving right that peels across the bay for hundreds of meters. Perfect for longboarding and learning. The inside section is incredibly mellow.',
  },
  {
    name: 'Boilers',
    location: 'Taghazout',
    level: 'Advanced',
    waveType: 'Right-hand reef break',
    bestSwell: 'N - NW, 4-8 ft',
    season: 'October - March',
    description:
      'Named after a shipwreck boiler visible at low tide. A punchy, hollow right that breaks close to rocks. Shorter rides than Anchor Point but more intense. Experienced surfers only due to the rocky lineup.',
  },
  {
    name: 'Sidi Kaouki',
    location: 'Sidi Kaouki',
    level: 'Beginner - Intermediate',
    waveType: 'Beach break',
    bestSwell: 'W - NW, 3-6 ft',
    season: 'September - April',
    description:
      'A wide, sandy beach break offering multiple peaks. Less consistent than Taghazout but much less crowded. Great for progression and longboarding. The wind can be a factor, especially in the afternoon.',
  },
  {
    name: 'Panoramas',
    location: 'Taghazout',
    level: 'Beginner - Intermediate',
    waveType: 'Beach break / reef',
    bestSwell: 'NW, 3-6 ft',
    season: 'October - March',
    description:
      'A mellow, user-friendly wave just south of Taghazout village. Perfect for intermediate surfers looking to build confidence. The inside is sandy and forgiving, while the outside offers more powerful sections.',
  },
  {
    name: 'Dracula',
    location: 'Taghazout area',
    level: 'Intermediate - Advanced',
    waveType: 'Right-hand reef break',
    bestSwell: 'NW, 4-8 ft',
    season: 'November - February',
    description:
      'A fast, hollow right that breaks over a rock shelf north of Taghazout. Less crowded than Anchor Point with a similar quality wave on its day. The takeoff zone is narrow and the reef is shallow.',
  },
  {
    name: 'Mirleft Breaks',
    location: 'Mirleft',
    level: 'Intermediate',
    waveType: 'Various beach and reef breaks',
    bestSwell: 'W - NW, 3-8 ft',
    season: 'September - May',
    description:
      'Multiple breaks across Mirleft\'s cove beaches. Each cove faces a slightly different direction, meaning you can usually find something working. Far fewer crowds than Taghazout and a more raw, adventurous surf experience.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   COASTAL ROAD TRIP ITINERARY
   ═══════════════════════════════════════════════════════════════ */

const roadTripDays = [
  {
    day: 1,
    title: 'Tangier to Asilah',
    distance: '46 km',
    highlights: ['Tangier Kasbah and Cap Spartel', 'Caves of Hercules', 'Asilah medina and murals', 'Sunset on Asilah Beach'],
    overnight: 'Asilah',
    description:
      'Start in Tangier where the Atlantic meets the Mediterranean at Cap Spartel. Visit the Caves of Hercules, then drive the scenic coast road south to Asilah. Spend the afternoon exploring the painted medina and enjoy a seafood dinner overlooking the ramparts.',
  },
  {
    day: 2,
    title: 'Asilah to Oualidia',
    distance: '380 km',
    highlights: ['Coastal highway south', 'Rabat Kasbah des Oudaias (optional stop)', 'El Jadida Portuguese cistern', 'Oualidia lagoon sunset'],
    overnight: 'Oualidia',
    description:
      'A longer driving day south along the Atlantic coast. Consider a lunch stop in Rabat at the stunning Kasbah des Oudaias, or push through to El Jadida to see the UNESCO-listed Portuguese cistern. Arrive in Oualidia for oysters at sunset by the lagoon.',
  },
  {
    day: 3,
    title: 'Oualidia',
    distance: '0 km (rest day)',
    highlights: ['Morning lagoon swim', 'Oyster farm visit', 'Boat tour of the lagoon', 'La Sultana spa (optional)'],
    overnight: 'Oualidia',
    description:
      'A rest day to enjoy the tranquil lagoon. Swim in the calm turquoise waters, visit an oyster farm and taste freshly shucked oysters with lemon and Tabasco. Take a boat tour of the lagoon and watch the birds. La Sultana has an excellent spa if you want to treat yourself.',
  },
  {
    day: 4,
    title: 'Oualidia to Essaouira',
    distance: '200 km',
    highlights: ['Coastal drive through Safi', 'Safi pottery workshops', 'Arrival in Essaouira medina', 'Sunset on the ramparts'],
    overnight: 'Essaouira',
    description:
      'Drive south through Safi, Morocco\'s pottery capital, where you can watch artisans at work. Continue along the scenic coast to Essaouira. Check into a riad in the medina and walk the ramparts at golden hour. Dinner at a fish grill on the port.',
  },
  {
    day: 5,
    title: 'Essaouira',
    distance: '0 km (rest day)',
    highlights: ['Medina and souks', 'Windsurfing or kitesurfing lesson', 'Gnaoua music at Place Moulay Hassan', 'Sidi Kaouki excursion (optional)'],
    overnight: 'Essaouira',
    description:
      'Explore the UNESCO-listed medina, browse the thuya wood workshops, and try a wind sport on the beach. If conditions are calm, swim at the northern end of the beach. For a quieter experience, hire a taxi to Sidi Kaouki for the afternoon.',
  },
  {
    day: 6,
    title: 'Essaouira to Imsouane',
    distance: '95 km',
    highlights: ['Scenic coastal drive', 'Argan oil cooperative visit', 'Arrival in Imsouane', 'Surf the famous long wave'],
    overnight: 'Imsouane',
    description:
      'A short and beautiful drive south along the coast, passing through argan forests. Stop at a women\'s cooperative to learn about argan oil production. Arrive in tiny Imsouane and rent a board to ride the legendary long wave. Fresh sardines for dinner at the port.',
  },
  {
    day: 7,
    title: 'Imsouane to Taghazout',
    distance: '85 km',
    highlights: ['Morning surf at Imsouane Bay', 'Drive to Taghazout', 'Afternoon surf or yoga', 'Sunset from the village'],
    overnight: 'Taghazout',
    description:
      'One more morning session at Imsouane, then continue south to Taghazout, Morocco\'s surf capital. Check into a surf camp or guesthouse. Afternoon options include surfing Panoramas, a yoga class, or simply soaking up the village atmosphere. Watch sunset from the rocks.',
  },
  {
    day: 8,
    title: 'Taghazout and Agadir',
    distance: '25 km',
    highlights: ['Morning surf at Anchor Point or Panoramas', 'Paradise Valley excursion', 'Agadir promenade and beach', 'Souk el Had d\'Agadir'],
    overnight: 'Agadir',
    description:
      'Start with a dawn surf session, then drive inland to Paradise Valley for a swim in the natural freshwater pools surrounded by palm trees. Afternoon at Agadir\'s resort beach to relax, and visit the massive Souk el Had for souvenirs and spices.',
  },
  {
    day: 9,
    title: 'Agadir to Mirleft and Legzira',
    distance: '150 km',
    highlights: ['Tiznit silver souk', 'Mirleft cove beaches', 'Legzira stone arches at low tide', 'Clifftop sunset'],
    overnight: 'Mirleft or Sidi Ifni',
    description:
      'Drive south through Tiznit (stop to see the silversmiths) and on to Mirleft, where dramatic cove beaches sit below colorful cliffs. Continue to Legzira to see the legendary red rock arches, timing your visit for low tide. Stay in a clifftop guesthouse with Atlantic views.',
  },
  {
    day: 10,
    title: 'Legzira to Agadir (return)',
    distance: '150 km',
    highlights: ['Morning walk on Legzira', 'Sidi Ifni Art Deco architecture', 'Return to Agadir via inland route', 'Final sunset on Agadir beach'],
    overnight: 'Agadir (departure)',
    description:
      'A morning walk on Legzira\'s red sand before driving to nearby Sidi Ifni to see the faded Spanish colonial architecture. Return to Agadir via the inland route through the Anti-Atlas foothills. Final evening watching the sunset from Agadir\'s promenade before your departure.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   BEACH HOTELS DATA
   ═══════════════════════════════════════════════════════════════ */

const beachHotels = [
  {
    name: 'La Sultana Oualidia',
    location: 'Oualidia',
    category: 'Luxury',
    priceFrom: '3,000 MAD/night',
    description:
      'Perched on the lagoon with private boat access, infinity pool, and a celebrated restaurant serving the freshest oysters. Each suite has lagoon views and private terraces.',
    highlights: ['Lagoon-front suites', 'Infinity pool', 'Oyster bar', 'Spa', 'Boat excursions'],
  },
  {
    name: 'Heure Bleue Palais',
    location: 'Essaouira',
    category: 'Luxury',
    priceFrom: '2,500 MAD/night',
    description:
      'A Relais & Chateaux property in the heart of the medina with a rooftop pool, cinema, and art collection. Steps from the beach and the ramparts.',
    highlights: ['Rooftop pool', 'Private cinema', 'Art gallery', 'Hammam', 'Medina location'],
  },
  {
    name: 'Dakhla Attitude',
    location: 'Dakhla',
    category: 'Mid-range / Sport',
    priceFrom: '1,500 MAD/night',
    description:
      'A purpose-built kitesurf camp on the Dakhla lagoon with direct water access, equipment storage, and courses for all levels. Eco-lodge style rooms with lagoon views.',
    highlights: ['Direct lagoon access', 'Kite school', 'Equipment rental', 'Yoga deck', 'Restaurant'],
  },
  {
    name: 'Sofitel Tamuda Bay',
    location: 'Cabo Negro / M\'diq',
    category: 'Luxury',
    priceFrom: '2,500 MAD/night',
    description:
      'A sleek, contemporary luxury resort on the Mediterranean coast with private beach, multiple pools, and a spa. The best luxury option on the north coast.',
    highlights: ['Private beach', 'Multiple pools', 'Spa', 'Fine dining', 'Marina access'],
  },
  {
    name: 'Hyatt Place Taghazout Bay',
    location: 'Taghazout',
    category: 'Mid-range',
    priceFrom: '1,500 MAD/night',
    description:
      'Modern resort hotel in the new Taghazout Bay development with ocean-view rooms, pool, and easy access to the surf. A step up from the village surf camps.',
    highlights: ['Ocean views', 'Pool', 'Surf access', 'Fitness center', 'Restaurant'],
  },
  {
    name: 'Sofitel Agadir Royal Bay',
    location: 'Agadir',
    category: 'Luxury',
    priceFrom: '2,000 MAD/night',
    description:
      'Agadir\'s premier beachfront hotel with expansive gardens, multiple pools, and direct beach access. Ideal for families wanting a polished resort experience.',
    highlights: ['Beachfront', 'Heated pools', 'Kids club', 'Spa', 'Multiple restaurants'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   SEASONAL GUIDE DATA
   ═══════════════════════════════════════════════════════════════ */

const seasonalGuide = [
  {
    season: 'Winter (December - February)',
    atlantic: {
      conditions: 'Big Atlantic swells, cooler air (15-20C), water around 16-17C. Uncrowded beaches except Taghazout surf spots.',
      bestFor: 'Surfing (peak season for Taghazout, Imsouane, Mirleft). Dakhla still warm and windy for kitesurfing.',
      avoid: 'Swimming on most Atlantic beaches (cold water, strong swells). Mediterranean coast is rainy and quiet.',
    },
    mediterranean: {
      conditions: 'Cool and wet, 12-16C. Beaches mostly deserted. Strong winds possible.',
      bestFor: 'Off-season travel for lower prices and empty towns. Al Hoceima has dramatic winter scenery.',
      avoid: 'Swimming (too cold). Most beach facilities are closed.',
    },
  },
  {
    season: 'Spring (March - May)',
    atlantic: {
      conditions: 'Warming up (18-24C air), swell decreasing, water 17-19C. Wildflowers along the coast.',
      bestFor: 'Surfing still good through April. Kitesurfing season begins in Dakhla. Oualidia and Moulay Bousselham are pleasant without summer crowds.',
      avoid: 'Easter week can be busy at popular spots. Essaouira wind picks up in late spring.',
    },
    mediterranean: {
      conditions: 'Warming (18-24C), water still cool (17-19C). Clear skies, green landscapes.',
      bestFor: 'Hiking near coastal areas. Exploring Rif mountain coast. Saidia before the summer rush.',
      avoid: 'Swimming still cool for most. Wait until June for Mediterranean beach days.',
    },
  },
  {
    season: 'Summer (June - August)',
    atlantic: {
      conditions: 'Warm (25-30C), small swell, water 20-22C. Trade winds at Essaouira. Busy at popular beaches.',
      bestFor: 'Swimming (Agadir, Oualidia, Asilah). Windsurfing and kitesurfing at Essaouira. Family beach holidays.',
      avoid: 'Surfing is generally flat except for occasional south swells. Taghazout and Imsouane are quiet surf-wise.',
    },
    mediterranean: {
      conditions: 'Hot (30-35C), calm seas, water 22-25C. Peak season, very crowded with Moroccan families.',
      bestFor: 'Swimming, snorkeling, and water sports everywhere. Saidia, M\'diq, Cabo Negro, Al Hoceima at their best.',
      avoid: 'July-August is extremely crowded at popular Mediterranean spots. Book accommodation well in advance.',
    },
  },
  {
    season: 'Autumn (September - November)',
    atlantic: {
      conditions: 'Warm (22-28C), first autumn swells arrive, water 20-22C. Beaches emptying after summer.',
      bestFor: 'Best all-round season for Atlantic coast. Good surf returning, warm swimming water, fewer crowds. Legzira and Mirleft at their finest.',
      avoid: 'Early September can still be crowded. October rain possible in the north.',
    },
    mediterranean: {
      conditions: 'Warm through September (25-30C), cooling in November. Water still warm (20-23C in Sep).',
      bestFor: 'September is ideal for Mediterranean coast: warm water, fewer crowds. Great for Al Hoceima and Saidia.',
      avoid: 'By November, Mediterranean beach season is essentially over. Weather becomes unpredictable.',
    },
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function BeachesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2800)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Beaches</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Beach Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            3,500 kilometers of coastline where the Atlantic and Mediterranean meet. From world-class surf breaks to hidden lagoons and desert beaches that stretch to the horizon.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#beaches" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors">
              <Waves className="w-4 h-4" />
              Explore 20 Beaches
            </a>
            <a href="#surfing-guide" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">
              <Wind className="w-4 h-4" />
              Surfing Guide
            </a>
            <a href="#road-trip" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">
              <Car className="w-4 h-4" />
              Coastal Road Trip
            </a>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco&apos;s Spectacular Coastline
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is blessed with one of the most diverse coastlines in the world. The Atlantic coast, stretching from Tangier in the north to Dakhla in the deep south, delivers over 2,900 km of beaches ranging from world-class surf spots to remote, untouched sands. The Mediterranean coast, from Tangier to the Algerian border near Saidia, offers calmer, warmer waters and a distinctly different beach culture shaped by centuries of exchange with southern Europe.
              </p>
              <p>
                The Atlantic side is defined by its raw power: consistent swell driven by North Atlantic storm systems, dramatic cliffs carved by millennia of erosion, and beaches backed by argan forests and Saharan desert. The water is cooler here, fed by the Canary Current that sweeps down from the north, but the trade-off is some of the best surfing conditions in the world. From the legendary point breaks of Taghazout to the world-class kitesurfing lagoon of Dakhla, the Atlantic coast is a water sports paradise.
              </p>
              <p>
                The Mediterranean side is more sheltered, with cove beaches tucked between the Rif mountains and a coastline of pine-backed bays. The water is warmer, calmer, and more turquoise. From the upscale resorts of Cabo Negro to the wild coves of Al Hoceima National Park and the 14-kilometer strand of Saidia, the Mediterranean offers the classic beach holiday experience that draws millions of Moroccan families every summer.
              </p>
              <p>
                Between these two coasts lies a country that offers everything from the solitude of a 40-kilometer beach with no other human in sight (Plage Blanche) to the festive energy of a packed Mediterranean resort town in August. This guide covers the best of both worlds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Coastline Stats ── */}
      <section className="py-12 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Waves, value: '3,500 km', label: 'Total Coastline' },
              { icon: Sun, value: '300+', label: 'Sunny Days Per Year' },
              { icon: Compass, value: '2 Coasts', label: 'Atlantic & Mediterranean' },
              { icon: Wind, value: '20+', label: 'World-Class Beaches' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-3">
                  <stat.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">{stat.value}</div>
                <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Interactive Beach Directory ── */}
      <div id="beaches">
        <BeachesClient beaches={beaches} />
      </div>

      {/* ── Surfing Guide ── */}
      <section id="surfing-guide" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Waves className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Morocco Surfing Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco is one of the world&apos;s premier surf destinations, with consistent Atlantic swell, warm water by European standards, and a surf culture that rivals anything in Portugal, Indonesia, or California.
            </p>
          </div>

          {/* Surf Overview */}
          <div className="card-moroccan p-6 md:p-8 mb-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[var(--color-primary)]" />
                  Why Morocco for Surfing?
                </h3>
                <div className="space-y-3 text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    Morocco&apos;s Atlantic coast faces directly into the path of North Atlantic storm systems that generate powerful, consistent swell from October through March. The coastline&apos;s varied geography &mdash; rocky points, reef shelves, and sandy bays &mdash; creates an extraordinary variety of wave types, from gentle longboard-friendly rollers to heavy, barreling reef breaks.
                  </p>
                  <p>
                    The epicenter of Moroccan surfing is the 30-kilometer stretch between Taghazout and Tamraght, which packs more quality breaks per kilometer than almost anywhere on Earth. But the surf extends far beyond this zone: from Imsouane&apos;s endless right-hander to Mirleft&apos;s secluded cove breaks, there are waves for every level and taste.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[var(--color-primary)]" />
                  Surf Seasons
                </h3>
                <div className="space-y-4">
                  {[
                    { period: 'October - December', label: 'Early Season', desc: 'First swells arrive. Water still warm (20C). Fewer crowds. Great for intermediate surfers as swell builds gradually.' },
                    { period: 'January - March', label: 'Peak Season', desc: 'Biggest, most consistent swells. Cooler water (16-17C). Most crowded at Taghazout. World-class conditions at all breaks.' },
                    { period: 'April - June', label: 'Late Season', desc: 'Swell decreasing but still surfable. Warmer weather. Great time for beginners at mellow spots like Imsouane.' },
                    { period: 'July - September', label: 'Off-Season', desc: 'Small, inconsistent surf. Good for absolute beginners at beach breaks. Many surf camps offer discounts.' },
                  ].map((s) => (
                    <div key={s.period} className="flex gap-3">
                      <div className="w-1 rounded-full bg-[var(--color-primary)] shrink-0" />
                      <div>
                        <div className="font-semibold text-[var(--text-primary)] text-sm">{s.period} &mdash; {s.label}</div>
                        <div className="text-sm text-[var(--text-secondary)]">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Surf Spots Grid */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Top Surf Breaks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {surfSpots.map((spot) => (
              <div key={spot.name} className="card-moroccan p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-[var(--text-primary)]">{spot.name}</h4>
                    <p className="text-sm text-[var(--color-primary)] font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {spot.location}
                    </p>
                  </div>
                  <span className="tag tag-primary text-[10px]">{spot.level}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{spot.description}</p>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="bg-[var(--surface-muted)] rounded-lg p-2 text-center">
                    <div className="text-[var(--text-muted)] mb-0.5">Wave</div>
                    <div className="font-semibold text-[var(--text-primary)]">{spot.waveType.split(' ')[0]}</div>
                  </div>
                  <div className="bg-[var(--surface-muted)] rounded-lg p-2 text-center">
                    <div className="text-[var(--text-muted)] mb-0.5">Swell</div>
                    <div className="font-semibold text-[var(--text-primary)]">{spot.bestSwell.split(',')[0]}</div>
                  </div>
                  <div className="bg-[var(--surface-muted)] rounded-lg p-2 text-center">
                    <div className="text-[var(--text-muted)] mb-0.5">Season</div>
                    <div className="font-semibold text-[var(--text-primary)]">{spot.season.split('(')[0].trim()}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Surf Schools & Practical Info */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6">
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Star className="w-4 h-4 text-[var(--color-accent)]" />
                Surf Schools
              </h4>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <p>Morocco has hundreds of surf schools, especially around Taghazout and Essaouira. Expect to pay:</p>
                <ul className="space-y-1.5">
                  {[
                    '2-hour group lesson: 250-400 MAD',
                    'Private lesson: 500-800 MAD',
                    'Week surf camp (all-in): 3,000-6,000 MAD',
                    'Board rental (day): 100-200 MAD',
                    'Wetsuit rental (day): 50-100 MAD',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Thermometer className="w-4 h-4 text-[var(--color-accent)]" />
                What to Bring
              </h4>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <p>Morocco&apos;s water temperature ranges from 16C in winter to 22C in summer. Pack accordingly:</p>
                <ul className="space-y-1.5">
                  {[
                    'Winter (Oct-Mar): 4/3mm full wetsuit',
                    'Summer (Jun-Sep): 2mm shorty or boardshorts',
                    'Spring/Autumn: 3/2mm full suit',
                    'Reef booties for rocky breaks',
                    'Sun protection (zinc, rash guard)',
                    'Ear plugs for cold-water surfers',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[var(--color-accent)]" />
                Surf Etiquette
              </h4>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <p>Respect in the water ensures everyone has a good session:</p>
                <ul className="space-y-1.5">
                  {[
                    'Person closest to the peak has priority',
                    'Don\'t drop in on someone already riding',
                    'Paddle around the break, not through it',
                    'Respect locals &mdash; they surf here every day',
                    'Don\'t paddle out at breaks above your level',
                    'Keep beaches clean: pack out your trash',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Kitesurfing & Windsurfing ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10 mb-4">
              <Wind className="w-6 h-6 text-[var(--color-secondary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Kitesurfing &amp; Windsurfing
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s consistent trade winds and diverse conditions make it one of the world&apos;s top destinations for kite and wind sports.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Dakhla */}
            <div className="card-moroccan overflow-hidden">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1502680390548-bdbac40cee81?q=80&w=800"
                  alt="Kitesurfing on the Dakhla lagoon, Morocco"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="tag tag-primary mb-2 inline-block">Kitesurfing Capital</span>
                  <h3 className="text-2xl font-bold text-white">Dakhla</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  Dakhla&apos;s lagoon is one of the top 3 kitesurfing destinations on the planet. A 40-km-long bay between the Sahara desert and the Atlantic Ocean creates a vast, shallow, flat-water paradise with thermal winds averaging 20-30 knots from March to November. The lagoon&apos;s shallow depth (often waist-deep) makes it safe for beginners, while the consistent, strong winds challenge advanced riders. Dragon Beach, a sand spit shaped like a dragon when seen from above, is the most iconic spot.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {[
                    { label: 'Best Months', value: 'Apr - Oct' },
                    { label: 'Wind Speed', value: '20-30 knots' },
                    { label: 'Water Temp', value: '19-23C' },
                    { label: 'Level', value: 'All levels' },
                  ].map((item) => (
                    <div key={item.label} className="bg-[var(--surface-muted)] rounded-lg p-3 text-center">
                      <div className="text-xs text-[var(--text-muted)]">{item.label}</div>
                      <div className="font-semibold text-[var(--text-primary)]">{item.value}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                  <p className="font-semibold text-[var(--text-primary)]">Schools & Camps:</p>
                  <ul className="space-y-1">
                    {['Dakhla Attitude (IKO certified)', 'Ocean Vagabond', 'PK25 Kite Camp', 'Dakhla Spirit', 'Westpoint Dakhla'].map((s) => (
                      <li key={s} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-[var(--color-primary)] shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Essaouira */}
            <div className="card-moroccan overflow-hidden">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800"
                  alt="Windsurfing on Essaouira beach, Morocco"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="tag tag-secondary mb-2 inline-block">Wind City of Africa</span>
                  <h3 className="text-2xl font-bold text-white">Essaouira</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  Essaouira has been a windsurfing destination since the 1980s and has evolved into an equally popular kitesurfing spot. The Alizee trade winds funnel through the bay from April to September, creating consistent 15-25 knot conditions almost every afternoon. The main beach offers wave riding in the chop, while the flatter area near Moulay Bouzerktoune (25 km north) provides smoother conditions. The medina backdrop makes this the most photogenic wind sports destination in Morocco.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {[
                    { label: 'Best Months', value: 'Apr - Sep' },
                    { label: 'Wind Speed', value: '15-25 knots' },
                    { label: 'Water Temp', value: '18-21C' },
                    { label: 'Level', value: 'Intermediate+' },
                  ].map((item) => (
                    <div key={item.label} className="bg-[var(--surface-muted)] rounded-lg p-3 text-center">
                      <div className="text-xs text-[var(--text-muted)]">{item.label}</div>
                      <div className="font-semibold text-[var(--text-primary)]">{item.value}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                  <p className="font-semibold text-[var(--text-primary)]">Schools & Rentals:</p>
                  <ul className="space-y-1">
                    {['ION Club Essaouira (windsurf + kite)', 'Explora Watersports', 'Magic Fun Afrika', 'Ocean Vagabond Essaouira', 'Kitesurfmaroc'].map((s) => (
                      <li key={s} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-[var(--color-primary)] shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="card-moroccan p-6 mt-8">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Anchor className="w-5 h-5 text-[var(--color-primary)]" />
              Kitesurfing &amp; Windsurfing Costs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { item: 'Group kite lesson (3h)', price: '500-800 MAD' },
                { item: 'Private kite lesson (2h)', price: '800-1,200 MAD' },
                { item: 'Full kite course (9-12h)', price: '3,500-5,000 MAD' },
                { item: 'Equipment rental (day)', price: '500-800 MAD' },
                { item: 'Windsurf lesson (2h)', price: '400-600 MAD' },
                { item: 'Windsurf rental (day)', price: '400-600 MAD' },
                { item: 'Week kite package (all-in)', price: '8,000-15,000 MAD' },
                { item: 'Storage per day', price: '50-100 MAD' },
              ].map((p) => (
                <div key={p.item} className="bg-[var(--surface-muted)] rounded-lg p-3">
                  <div className="text-xs text-[var(--text-muted)] mb-1">{p.item}</div>
                  <div className="font-bold text-[var(--color-primary)]">{p.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Beach Safety Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-red-500/10 mb-4">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Beach Safety in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s Atlantic coast in particular can be dangerous for inexperienced swimmers. Understanding local conditions is essential for a safe visit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Understand the Currents',
                icon: Waves,
                tips: [
                  'Atlantic beaches often have strong rip currents that pull swimmers out to sea',
                  'If caught in a rip current, swim parallel to shore, never against it',
                  'Look for channels of darker, calmer water between waves \u2014 these are rip currents',
                  'Mediterranean beaches are generally much calmer and safer for swimming',
                ],
              },
              {
                title: 'Flag System',
                icon: AlertTriangle,
                tips: [
                  'Green flag: safe swimming conditions',
                  'Yellow flag: caution, moderate conditions',
                  'Red flag: dangerous, no swimming',
                  'Many Atlantic beaches are unguarded \u2014 no flag does not mean safe',
                  'Only swim at lifeguarded beaches if you are not a strong swimmer',
                ],
              },
              {
                title: 'Sun Protection',
                icon: Sun,
                tips: [
                  'Morocco has intense UV, especially in summer (UV index 9-11)',
                  'Wear SPF 50+ and reapply every 2 hours',
                  'Avoid peak sun between 12:00-16:00 in summer',
                  'Stay hydrated \u2014 dehydration is common on beach days',
                  'Wear a hat and UV-protective sunglasses',
                ],
              },
              {
                title: 'Tides & Timing',
                icon: Clock,
                tips: [
                  'Atlantic coast has significant tidal range (up to 3 meters)',
                  'Some beaches (like Legzira) are only accessible at low tide',
                  'Check tide times before visiting cove beaches to avoid being trapped',
                  'Rocks exposed at low tide can be very slippery',
                ],
              },
              {
                title: 'Jellyfish & Marine Life',
                icon: Droplets,
                tips: [
                  'Jellyfish are occasional on both coasts, mainly in summer',
                  'Portuguese man-of-war sightings are rare but occur on the Atlantic',
                  'Sea urchins on rocky Mediterranean beaches \u2014 wear water shoes',
                  'No dangerous sharks in Moroccan coastal waters',
                ],
              },
              {
                title: 'Emergency Information',
                icon: PhoneCall,
                tips: [
                  'Emergency number: 150 (civil protection) or 19 (police)',
                  'Lifeguards are present at major beaches June-September',
                  'Carry a charged phone in a waterproof pouch',
                  'Tell someone where you are going if visiting remote beaches',
                  'Keep valuables locked in your car, not on the beach',
                ],
              },
            ].map((section) => (
              <div key={section.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <section.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  {section.title}
                </h3>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Beach Hotels ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Hotel className="w-6 h-6 text-[var(--color-accent-dark)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Beach Hotels &amp; Riads
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From luxury lagoon-side retreats to purpose-built kitesurf camps, these are the finest coastal stays in Morocco.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beachHotels.map((hotel) => (
              <div key={hotel.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">{hotel.name}</h3>
                    <p className="text-sm text-[var(--color-primary)] font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {hotel.location}
                    </p>
                  </div>
                  <span className={`tag text-[10px] ${
                    hotel.category === 'Luxury' ? 'tag-accent' : 'tag-secondary'
                  }`}>
                    {hotel.category}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {hotel.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {hotel.highlights.map((h) => (
                    <span key={h} className="text-[10px] bg-[var(--surface-muted)] text-[var(--text-muted)] px-2 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle className="w-2.5 h-2.5" /> {h}
                    </span>
                  ))}
                </div>
                <div className="text-sm font-semibold text-[var(--color-primary)]">
                  From {hotel.priceFrom}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10-Day Coastal Road Trip ── */}
      <section id="road-trip" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Car className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Beach Hopper&apos;s Itinerary
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A 10-day coastal road trip from Tangier to Legzira, covering the best of Morocco&apos;s Atlantic coastline. Approximately 1,130 km of driving with beaches, medinas, surf breaks, and seafood along the way.
            </p>
          </div>

          {/* Road Trip Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: 'Duration', value: '10 Days', icon: Calendar },
              { label: 'Total Distance', value: '~1,130 km', icon: Navigation },
              { label: 'Beaches Visited', value: '12+', icon: Waves },
              { label: 'Best Season', value: 'Sep - Nov', icon: Sun },
            ].map((stat) => (
              <div key={stat.label} className="card-moroccan p-4 text-center">
                <stat.icon className="w-5 h-5 text-[var(--color-primary)] mx-auto mb-2" />
                <div className="text-lg font-bold text-[var(--text-primary)]">{stat.value}</div>
                <div className="text-xs text-[var(--text-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Day-by-Day */}
          <div className="space-y-6">
            {roadTripDays.map((day) => (
              <div key={day.day} className="card-moroccan overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-20 bg-[var(--color-primary)] flex items-center justify-center py-3 md:py-0 shrink-0">
                    <div className="text-center text-white">
                      <div className="text-xs font-medium uppercase tracking-wider">Day</div>
                      <div className="text-2xl font-bold">{day.day}</div>
                    </div>
                  </div>
                  <div className="p-5 md:p-6 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-lg font-bold text-[var(--text-primary)]">{day.title}</h3>
                      <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mt-1 sm:mt-0">
                        <span className="flex items-center gap-1">
                          <Car className="w-3 h-3" /> {day.distance}
                        </span>
                        <span className="flex items-center gap-1">
                          <Hotel className="w-3 h-3" /> {day.overnight}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                      {day.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {day.highlights.map((h) => (
                        <span key={h} className="text-[11px] bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2.5 py-1 rounded-full font-medium">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Road Trip Tips */}
          <div className="card-moroccan p-6 md:p-8 mt-8">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Compass className="w-5 h-5 text-[var(--color-primary)]" />
              Road Trip Practical Tips
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-[var(--text-secondary)]">
              <div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Car Rental</h4>
                <ul className="space-y-1.5">
                  {[
                    'Book in advance, especially in summer. Budget from 300 MAD/day for a small car.',
                    'Rent from airports for the best selection. Tangier or Agadir airports work for this route.',
                    'Choose a vehicle with good ground clearance if visiting remote beaches.',
                    'Automatic transmission costs more but is available at all major agencies.',
                    'Full insurance (CDW + theft) is strongly recommended.',
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ArrowRight className="w-3 h-3 text-[var(--color-primary)] mt-1 shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Driving Tips</h4>
                <ul className="space-y-1.5">
                  {[
                    'The N1 coastal highway is well-maintained. Speed limit: 120 km/h on autoroutes, 60 km/h in towns.',
                    'Fuel stations are plentiful. Fill up before remote stretches south of Tiznit.',
                    'Avoid driving at night in rural areas (unlit roads, animals, pedestrians).',
                    'Tolls on autoroutes are modest: Tangier to Rabat is about 70 MAD.',
                    'Parking is easy outside cities. In towns, use official parking (5-10 MAD).',
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ArrowRight className="w-3 h-3 text-[var(--color-primary)] mt-1 shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Seasonal Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Calendar className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              When to Visit: Seasonal Coastal Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s two coastlines have very different characters depending on the season. Here is what to expect throughout the year.
            </p>
          </div>

          <div className="space-y-6">
            {seasonalGuide.map((s) => (
              <div key={s.season} className="card-moroccan overflow-hidden">
                <div className="bg-[var(--color-primary)] px-6 py-3">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {s.season}
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--border-light)]">
                  {/* Atlantic */}
                  <div className="p-6">
                    <h4 className="font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                      <Waves className="w-4 h-4 text-[var(--color-secondary)]" />
                      Atlantic Coast
                    </h4>
                    <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                      <div>
                        <span className="font-semibold text-[var(--text-primary)]">Conditions:</span>{' '}
                        {s.atlantic.conditions}
                      </div>
                      <div>
                        <span className="font-semibold text-green-700">Best for:</span>{' '}
                        {s.atlantic.bestFor}
                      </div>
                      <div>
                        <span className="font-semibold text-red-600">Avoid:</span>{' '}
                        {s.atlantic.avoid}
                      </div>
                    </div>
                  </div>
                  {/* Mediterranean */}
                  <div className="p-6">
                    <h4 className="font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                      <Sun className="w-4 h-4 text-[var(--color-accent)]" />
                      Mediterranean Coast
                    </h4>
                    <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                      <div>
                        <span className="font-semibold text-[var(--text-primary)]">Conditions:</span>{' '}
                        {s.mediterranean.conditions}
                      </div>
                      <div>
                        <span className="font-semibold text-green-700">Best for:</span>{' '}
                        {s.mediterranean.bestFor}
                      </div>
                      <div>
                        <span className="font-semibold text-red-600">Avoid:</span>{' '}
                        {s.mediterranean.avoid}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ-Style Quick Reference ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Quick Reference
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Best beach for families?',
                a: 'Oualidia Lagoon has calm, shallow water and is the safest Atlantic option. On the Mediterranean, Saidia has the best facilities including an aquapark. Agadir is the most convenient with resort-level amenities.',
              },
              {
                q: 'Best beach for couples?',
                a: 'Mirleft for secluded cove beaches and romantic sunsets. Essaouira for the medina-meets-beach atmosphere. Oualidia for oysters and a luxury lagoon-side stay at La Sultana.',
              },
              {
                q: 'Best beach for surfing?',
                a: 'Taghazout is the surf capital with breaks for all levels nearby. Imsouane has the longest wave. Sidi Kaouki for a quieter, less crowded experience.',
              },
              {
                q: 'Best beach for kitesurfing?',
                a: 'Dakhla is world-class and operates March to November. Essaouira is excellent from April to September with easier access from Marrakech.',
              },
              {
                q: 'Best remote/secluded beach?',
                a: 'Plage Blanche (Guelmim) is a 40 km untouched strand accessible only by 4x4. For something more accessible, Mirleft and Al Hoceima National Park have stunning secluded coves.',
              },
              {
                q: 'Can I swim in Morocco year-round?',
                a: 'Yes, but location matters. Agadir and Dakhla are comfortable year-round. Mediterranean beaches are warm June to September only. Atlantic water is coolest January to March (16-17C).',
              },
            ].map((faq, i) => (
              <div key={i} className="card-moroccan p-5">
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{faq.q}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Plan Your Beach Holiday
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Combine beach time with city exploration using our trip planner, or browse coastal accommodation options and road trip itineraries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              Plan Your Trip
            </Link>
            <Link
              href="/accommodations"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Coastal Stays
            </Link>
            <Link
              href="/road-trips"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              More Road Trips
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
