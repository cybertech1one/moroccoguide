import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  Clock,
  Plane,
  DollarSign,
  Building2,
  Utensils,
  Hotel,
  Train,
  Camera,
  Star,
  Users,
  Waves,
  Music,
  Briefcase,
  ChevronRight,
  Info,
  Calendar,
  Shield,
  Home,
  ArrowRight,
  Compass,
  Heart,
  Sun,
  Coffee,
  ShoppingBag,
  Globe,
  Sparkles,
} from 'lucide-react';
import ExploreMore from '@/components/sections/ExploreMore';

/* ================================================================
   METADATA + SEO
   ================================================================ */

export const metadata: Metadata = {
  title:
    "Casablanca Travel Guide 2025 -- Morocco's Modern Metropolis | citytoursmorocco.com",
  description:
    'Complete Casablanca travel guide: Hassan II Mosque, Art Deco architecture, Corniche beaches, Old Medina, restaurants, hotels & nightlife. Plan your visit to Morocco\'s largest city.',
  keywords: [
    'Casablanca travel guide',
    'Hassan II Mosque',
    'Morocco largest city',
    'Casablanca restaurants',
    'Casablanca hotels',
    'Casablanca Art Deco',
    'Corniche Casablanca',
    'Rick Cafe Casablanca',
    'Morocco Mall',
    'Casablanca nightlife',
  ],
  openGraph: {
    title:
      "Casablanca Travel Guide 2025 -- Morocco's Modern Metropolis | citytoursmorocco.com",
    description:
      'Complete Casablanca travel guide: Hassan II Mosque, Art Deco architecture, Corniche beaches, Old Medina, restaurants, hotels & nightlife.',
    url: 'https://citytoursmorocco.com/cities/casablanca',
    type: 'website',
    images: [
      {
        url: 'https://citytoursmorocco.com/images/hero-hassan-ii-ocean.webp',
        width: 2800,
        height: 1600,
        alt: 'Hassan II Mosque overlooking the Atlantic Ocean in Casablanca - citytoursmorocco.com',
      },
    ],
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/cities/casablanca',
  },
};

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function CasablancaPage() {
  /* -- JSON-LD Structured Data -- */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Casablanca',
    description:
      'Morocco\'s largest city and economic capital. A cosmopolitan metropolis famous for the Hassan II Mosque, Art Deco architecture, vibrant nightlife, and the Corniche beachfront.',
    url: 'https://citytoursmorocco.com/cities/casablanca',
    touristType: [
      'Business Travelers',
      'Architecture Enthusiasts',
      'Culture Seekers',
      'Food Lovers',
      'Nightlife Enthusiasts',
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.5731,
      longitude: -7.5898,
    },
    includesAttraction: [
      { '@type': 'TouristAttraction', name: 'Hassan II Mosque' },
      { '@type': 'TouristAttraction', name: 'Old Medina of Casablanca' },
      { '@type': 'TouristAttraction', name: 'Habous Quarter' },
      { '@type': 'TouristAttraction', name: 'Corniche Ain Diab' },
      { '@type': 'TouristAttraction', name: 'Rick\'s Cafe' },
      { '@type': 'TouristAttraction', name: 'Morocco Mall' },
      { '@type': 'TouristAttraction', name: 'Cathedral of the Sacred Heart' },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is the Hassan II Mosque open to non-Muslims?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The Hassan II Mosque is one of the very few mosques in Morocco open to non-Muslim visitors. Guided tours are offered daily except Friday, with tickets costing 130 MAD for adults.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I get from Casablanca airport to the city center?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The ONCF train from Mohammed V Airport (CMN) to Casa Voyageurs station runs every hour and takes about 45 minutes, costing 70 MAD. Grand taxis and ride-hailing apps are also available, typically costing 250-350 MAD.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best time to visit Casablanca?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best time to visit Casablanca is from April to June or September to November when temperatures are pleasant (20-27 C). Summers can be hot and humid, while winters are mild but rainy.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Casablanca safe for tourists?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Casablanca is generally safe for tourists. As with any large city, be aware of petty theft in crowded areas. Stick to well-lit streets at night, use official taxis, and keep valuables secure. The main tourist areas are well-policed.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many days do you need in Casablanca?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Two to three days is ideal for seeing Casablanca\'s highlights including the Hassan II Mosque, Old Medina, Art Deco district, Corniche, and enjoying the culinary scene. Business travelers often extend to explore nearby Rabat or El Jadida.',
        },
      },
      {
        '@type': 'Question',
        name: 'What currency is used in Casablanca?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Moroccan Dirham (MAD) is the official currency. ATMs are widely available throughout Casablanca, and many upscale hotels and restaurants accept credit cards. Exchange bureaus can be found in the city center and at the airport.',
        },
      },
    ],
  };

  /* -- Data Arrays -- */

  const attractions = [
    {
      name: 'Hassan II Mosque',
      description:
        'Rising from the edge of the Atlantic Ocean, this architectural masterpiece is the largest mosque in Africa and the third largest in the world. Its 210-meter minaret is the tallest religious structure on earth. Non-Muslim visitors can explore the lavish interior on guided tours.',
      image: '/images/hero-hassan-ii-ocean.webp',
      type: 'Landmark',
      rating: 4.9,
    },
    {
      name: 'Old Medina',
      description:
        'The historic walled quarter of Casablanca is a labyrinth of narrow alleys, bustling souks, and artisan workshops. Smaller and more manageable than the medinas of Fes or Marrakech, it offers an authentic glimpse into traditional Moroccan life within steps of the modern city.',
      image: '/images/hero-morocco-medina.webp',
      type: 'Heritage',
      rating: 4.5,
    },
    {
      name: 'Art Deco District',
      description:
        'Casablanca boasts one of the finest collections of Art Deco architecture in the world. Wander through Boulevard Mohammed V and surrounding streets to discover hundreds of ornate facades blending Moorish motifs with European modernism from the 1920s-1940s French Protectorate era.',
      image: '/images/hero-morocco-hero.webp',
      type: 'Architecture',
      rating: 4.7,
    },
    {
      name: 'Corniche Ain Diab',
      description:
        'Casablanca\'s vibrant beachfront promenade stretches along the Atlantic coast, lined with beach clubs, restaurants, luxury hotels, and entertainment venues. At sunset, the Corniche comes alive with locals and visitors enjoying the ocean breeze and golden light.',
      image: '/images/hero-hassan-ii-ocean.webp',
      type: 'Waterfront',
      rating: 4.6,
    },
    {
      name: 'Habous Quarter',
      description:
        'Built in the 1930s by the French as a "new medina," the Habous Quarter elegantly fuses French urban planning with traditional Moroccan architecture. Its clean orderly streets are perfect for shopping for pastries, olives, spices, and handcrafted goods.',
      image: '/images/hero-morocco-medina.webp',
      type: 'Quarter',
      rating: 4.6,
    },
    {
      name: 'Rick\'s Cafe',
      description:
        'Inspired by the 1942 Humphrey Bogart film "Casablanca," this atmospheric restaurant-bar recreates the ambiance of the fictional nightclub. Set in a beautifully restored courtyard riad near the Old Medina, it features live jazz, fine cuisine, and classic film memorabilia.',
      image: '/images/hero-morocco-hero.webp',
      type: 'Dining',
      rating: 4.4,
    },
  ];

  const thingsToDo = [
    {
      title: 'Tour Hassan II Mosque',
      description:
        'Join a guided tour of this awe-inspiring mosque where the ocean floor is visible through the glass floor and the retractable roof opens to the sky.',
      icon: Building2,
    },
    {
      title: 'Walk the Art Deco Trail',
      description:
        'Follow a self-guided walking tour through downtown to admire over 100 beautifully preserved Art Deco and Mauresque buildings.',
      icon: Camera,
    },
    {
      title: 'Sunset at the Corniche',
      description:
        'Stroll along the seaside promenade as the Atlantic sun sinks below the horizon, then settle into a beachfront cafe for mint tea.',
      icon: Waves,
    },
    {
      title: 'Haggle in the Old Medina',
      description:
        'Navigate the narrow alleys of the historic quarter to find leather goods, spices, lanterns, and handmade jewelry at local prices.',
      icon: ShoppingBag,
    },
    {
      title: 'Dine at Rick\'s Cafe',
      description:
        'Enjoy live jazz piano, classic cocktails, and refined Moroccan cuisine in the setting of cinema\'s most famous nightclub.',
      icon: Music,
    },
    {
      title: 'Explore the Habous Quarter',
      description:
        'Browse the orderly "new medina" for Moroccan pastries, olive varieties, traditional clothing, and religious artifacts.',
      icon: Compass,
    },
    {
      title: 'Visit Morocco Mall',
      description:
        'Discover Africa\'s largest shopping mall complete with an aquarium housing thousands of marine species and an indoor ice rink.',
      icon: ShoppingBag,
    },
    {
      title: 'Taste Casaoui Street Food',
      description:
        'Try the local specialties: fresh seafood at the central market, bocadillos at corner stalls, and pastilla from Habous bakeries.',
      icon: Utensils,
    },
  ];

  const restaurants = [
    {
      name: 'La Sqala',
      cuisine: 'Traditional Moroccan',
      price: '$$',
      neighborhood: 'Old Medina',
      description:
        'Set within the walls of a restored 18th-century fortification, La Sqala serves exceptional Moroccan cuisine in a garden courtyard dripping with bougainvillea. The breakfast pastilla and fresh orange juice are legendary among locals.',
      priceRange: '120-250 MAD per person',
    },
    {
      name: 'Le Cabestan',
      cuisine: 'French-Mediterranean',
      price: '$$$',
      neighborhood: 'Corniche',
      description:
        'Perched on the rocks overlooking the crashing Atlantic waves, Le Cabestan is Casablanca\'s most dramatic fine-dining setting. The seafood platters and wine list are outstanding, and the terrace at sunset is unforgettable.',
      priceRange: '350-600 MAD per person',
    },
    {
      name: 'Brasserie La Tour',
      cuisine: 'French Brasserie',
      price: '$$$',
      neighborhood: 'Twin Center',
      description:
        'Located in the iconic Twin Center towers, this elegant brasserie offers classic French dishes with a Moroccan twist, an extensive wine cellar, and panoramic city views from the upper floors.',
      priceRange: '300-500 MAD per person',
    },
    {
      name: 'Basmane',
      cuisine: 'Modern Moroccan',
      price: '$$',
      neighborhood: 'Maarif',
      description:
        'A contemporary take on Moroccan gastronomy in the trendy Maarif district. Chef-driven seasonal menus reinterpret traditional tagines and couscous using locally sourced ingredients and modern plating techniques.',
      priceRange: '150-300 MAD per person',
    },
    {
      name: 'La Bodega',
      cuisine: 'Spanish Tapas',
      price: '$$',
      neighborhood: 'Racine',
      description:
        'One of Casablanca\'s longest-running tapas bars, La Bodega brings Spanish warmth to the heart of the city. Enjoy patatas bravas, grilled calamari, and sangria in a lively atmosphere with live music on weekends.',
      priceRange: '100-200 MAD per person',
    },
    {
      name: 'Blend Gourmet Burger',
      cuisine: 'Burgers and Grills',
      price: '$$',
      neighborhood: 'Anfa',
      description:
        'Casablanca\'s best burger destination serves premium beef, wagyu, and lamb burgers with creative toppings in a stylish industrial-chic setting popular with the city\'s young professionals.',
      priceRange: '80-180 MAD per person',
    },
    {
      name: 'Port de Peche',
      cuisine: 'Fresh Seafood',
      price: '$',
      neighborhood: 'Central Market',
      description:
        'The freshest fish in town. Choose your catch from the market stalls and have it grilled to order at the tiny restaurants surrounding the fish market. A true Casablanca institution for budget-friendly seafood.',
      priceRange: '50-120 MAD per person',
    },
    {
      name: 'Iloli',
      cuisine: 'Japanese Fusion',
      price: '$$$',
      neighborhood: 'Gauthier',
      description:
        'Casablanca\'s premier Japanese restaurant serves impeccable sushi, sashimi, and creative fusion dishes in an elegant minimalist setting. The omakase menu is considered one of the finest dining experiences in Morocco.',
      priceRange: '400-700 MAD per person',
    },
  ];

  const hotels = [
    {
      name: 'Four Seasons Hotel Casablanca',
      type: 'Luxury Hotel',
      price: '$$$',
      neighborhood: 'Corniche',
      description:
        'The crown jewel of Casablanca hospitality, this oceanfront palace offers world-class service, stunning Atlantic views, a full-service spa, and multiple acclaimed restaurants. Rooms start from around 3,500 MAD per night.',
    },
    {
      name: 'Hyatt Regency Casablanca',
      type: 'Business Hotel',
      price: '$$$',
      neighborhood: 'Place des Nations Unies',
      description:
        'Commanding a prime position in the heart of the city overlooking Place des Nations Unies, the Hyatt is the go-to hotel for business travelers. Modern rooms, excellent conference facilities, and rooftop dining. From 1,800 MAD per night.',
    },
    {
      name: 'Hotel and Spa Le Doge',
      type: 'Boutique Hotel',
      price: '$$$',
      neighborhood: 'City Center',
      description:
        'A stunning Art Deco mansion converted into a five-star Relais and Chateaux boutique hotel. Each of the 16 rooms is individually designed, and the in-house spa and restaurant are exceptional. From 2,500 MAD per night.',
    },
    {
      name: 'Kenzi Tower Hotel',
      type: 'Business Hotel',
      price: '$$',
      neighborhood: 'Twin Center',
      description:
        'Occupying the upper floors of the landmark Twin Center towers, the Kenzi offers sweeping city views, a rooftop pool, multiple dining options, and a prime business district location. From 1,200 MAD per night.',
    },
    {
      name: 'Sofitel Casablanca Tour Blanche',
      type: 'Luxury Hotel',
      price: '$$$',
      neighborhood: 'City Center',
      description:
        'French luxury meets Moroccan elegance in this centrally located five-star hotel. The rooftop bar, refined restaurant, and signature MyBed concept make it a favorite among discerning travelers. From 2,000 MAD per night.',
    },
    {
      name: 'Melliber Appart Hotel',
      type: 'Apart-Hotel',
      price: '$',
      neighborhood: 'Maarif',
      description:
        'Perfect for longer stays, Melliber offers spacious self-catering apartments in the vibrant Maarif neighborhood. Close to restaurants, shopping, and the tramway. Studios from 500 MAD per night.',
    },
  ];

  const dayTrips = [
    {
      destination: 'Rabat',
      distance: '90 km (1 hour by train)',
      description:
        'Morocco\'s elegant capital city is an easy day trip on the high-speed Al Boraq train. Visit the Kasbah des Oudayas, the Hassan Tower and Mohammed V Mausoleum, and the award-winning Mohammed VI Museum of Modern and Contemporary Art. The medina is a UNESCO World Heritage Site with a calmer atmosphere than Casablanca.',
      highlights: ['Kasbah des Oudayas', 'Hassan Tower', 'Chellah Ruins', 'Mohammed VI Museum'],
      cost: '80 MAD round-trip train',
    },
    {
      destination: 'El Jadida',
      distance: '100 km (1.5 hours by car)',
      description:
        'This charming Atlantic coastal town features the UNESCO-listed Portuguese Cistern, one of Morocco\'s most photographed interiors. Walk the 16th-century Mazagan fortress walls, relax on Sidi Bouzid Beach, and feast on the freshest seafood on the coast.',
      highlights: ['Portuguese Cistern', 'Mazagan Fortress', 'Sidi Bouzid Beach', 'Seafood'],
      cost: '60 MAD by bus / 150 MAD grand taxi',
    },
    {
      destination: 'Azemmour',
      distance: '80 km (1 hour by car)',
      description:
        'A hidden gem on the Oum Er-Rbia river, Azemmour is one of Morocco\'s most underrated destinations. Its whitewashed medina is decorated with vibrant street art, and the Portuguese ramparts offer sweeping river views. Far fewer tourists than any other destination in the region.',
      highlights: ['Street Art Medina', 'Portuguese Ramparts', 'Oum Er-Rbia River', 'Haouzia Beach'],
      cost: '40 MAD by grand taxi',
    },
  ];

  const nightlifeVenues = [
    {
      name: 'Sky 28',
      type: 'Rooftop Bar',
      neighborhood: 'Twin Center',
      description: 'The highest rooftop bar in Casablanca with panoramic city views. Craft cocktails, international DJs on weekends, and a sophisticated dress code.',
    },
    {
      name: 'Le Balcon',
      type: 'Lounge Bar',
      neighborhood: 'Corniche',
      description: 'Elegant oceanfront lounge with live music, premium spirits, and a terrace overlooking the Atlantic. A favorite for after-dinner drinks.',
    },
    {
      name: 'Maison B',
      type: 'Cocktail Bar',
      neighborhood: 'Gauthier',
      description: 'A speakeasy-style cocktail bar hidden in the Gauthier district. Creative mixology, intimate atmosphere, and a curated wine list.',
    },
    {
      name: 'Le Village',
      type: 'Nightclub',
      neighborhood: 'Corniche',
      description: 'One of Casablanca\'s premier nightclubs featuring international and local DJs, VIP areas, and themed party nights. Opens late and runs until dawn.',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ================================================================
          HERO SECTION
          ================================================================ */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-hassan-ii-ocean.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/cities" className="hover:text-white transition-colors">
              Cities
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Casablanca</span>
          </nav>

          {/* Hero Title */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              Casablanca
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 font-[family-name:var(--font-display)] italic mb-4">
            Morocco&apos;s Modern Metropolis
          </p>
          <p className="text-lg text-white/80 max-w-2xl mb-8">
            Where Art Deco grandeur meets Moorish tradition on the shores of the Atlantic.
            Africa&apos;s most cosmopolitan city pulses with commerce, culture, and the
            monumental Hassan II Mosque rising from the ocean itself.
          </p>

          {/* Hero Tags */}
          <div className="flex flex-wrap gap-3">
            <span className="tag bg-white/15 text-white backdrop-blur-sm">
              <Building2 className="w-3.5 h-3.5 mr-1.5" /> Economic Capital
            </span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm">
              <Waves className="w-3.5 h-3.5 mr-1.5" /> Atlantic Coast
            </span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm">
              <Camera className="w-3.5 h-3.5 mr-1.5" /> Art Deco Heritage
            </span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm">
              <Users className="w-3.5 h-3.5 mr-1.5" /> 3.7 Million People
            </span>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ================================================================
          QUICK FACTS GRID
          ================================================================ */}
      <section className="py-10 md:py-14 bg-[#EDE8E0]">
        <div className="container-morocco">
          <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-6 text-center">
            Casablanca at a Glance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="card-moroccan p-5 text-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(160,82,45,0.08)] mx-auto mb-3">
                <Users className="w-5 h-5 text-[#A0522D]" />
              </div>
              <p className="text-xs font-[family-name:var(--font-heading)] font-semibold text-[#A0522D] uppercase tracking-wider mb-1">
                Population
              </p>
              <p className="text-lg font-bold text-[#1A1814]">3.7 Million</p>
              <p className="text-xs text-[#1A1814]/60">Morocco&apos;s largest city</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(160,82,45,0.08)] mx-auto mb-3">
                <Clock className="w-5 h-5 text-[#A0522D]" />
              </div>
              <p className="text-xs font-[family-name:var(--font-heading)] font-semibold text-[#A0522D] uppercase tracking-wider mb-1">
                Timezone
              </p>
              <p className="text-lg font-bold text-[#1A1814]">GMT+1</p>
              <p className="text-xs text-[#1A1814]/60">Western European Time</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(160,82,45,0.08)] mx-auto mb-3">
                <Plane className="w-5 h-5 text-[#A0522D]" />
              </div>
              <p className="text-xs font-[family-name:var(--font-heading)] font-semibold text-[#A0522D] uppercase tracking-wider mb-1">
                Airport
              </p>
              <p className="text-lg font-bold text-[#1A1814]">CMN</p>
              <p className="text-xs text-[#1A1814]/60">Mohammed V International</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(160,82,45,0.08)] mx-auto mb-3">
                <DollarSign className="w-5 h-5 text-[#A0522D]" />
              </div>
              <p className="text-xs font-[family-name:var(--font-heading)] font-semibold text-[#A0522D] uppercase tracking-wider mb-1">
                Currency
              </p>
              <p className="text-lg font-bold text-[#1A1814]">MAD</p>
              <p className="text-xs text-[#1A1814]/60">Moroccan Dirham</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          OVERVIEW - COSMOPOLITAN HEART
          ================================================================ */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-6">
              The Cosmopolitan Heart of Morocco
            </h2>
            <p className="text-lg text-[#1A1814]/70 leading-relaxed mb-4">
              Casablanca defies the expectations of travelers who arrive hoping for the
              romantic exoticism of the Humphrey Bogart film. What they find instead is
              something far more compelling: a living, breathing megacity where Morocco&apos;s
              past and future collide in spectacular fashion. This is the engine that drives
              the Moroccan economy, a city of five million in the greater metropolitan area
              where French colonial boulevards are flanked by soaring glass towers, where
              ancient medina walls give way to haute couture boutiques, and where the
              call to prayer echoes alongside the buzz of international commerce.
            </p>
            <p className="text-lg text-[#1A1814]/70 leading-relaxed mb-4">
              Founded as the small Berber settlement of Anfa, Casablanca was transformed
              by the Portuguese in the 15th century and reinvented again under the French
              Protectorate in the early 20th century. The French architect Henri Prost
              designed a European-style ville nouvelle that became a laboratory for Art
              Deco and Modernist architecture, resulting in one of the most remarkable
              collections of early 20th-century buildings anywhere on earth.
            </p>
            <p className="text-lg text-[#1A1814]/70 leading-relaxed">
              Today, Casablanca is a city of contrasts and energy. The monumental Hassan
              II Mosque rises directly from the Atlantic, its minaret piercing the sky at
              210 meters. The Corniche beachfront buzzes with nightlife. The Maarif and
              Gauthier neighborhoods overflow with contemporary restaurants and art
              galleries. And through it all, the warmth and hospitality that defines
              Morocco shines through in every interaction.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          HERO IMAGE BREAK
          ================================================================ */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="/images/hero-hassan-ii-ocean.webp"
          alt="Panoramic view of the Hassan II Mosque and Atlantic coastline in Casablanca - citytoursmorocco.com"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-center">
          <p className="text-white text-lg font-[family-name:var(--font-display)] font-semibold">
            The Hassan II Mosque at the edge of the Atlantic Ocean
          </p>
        </div>
      </section>

      {/* ================================================================
          HASSAN II MOSQUE - DETAILED SECTION
          ================================================================ */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              Hassan II Mosque
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <img
                src="/images/hero-hassan-ii-ocean.webp"
                alt="Interior detail of the Hassan II Mosque in Casablanca showing intricate zellige tilework - citytoursmorocco.com"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-4">
                A Monument Built on the Sea
              </h3>
              <p className="text-[#1A1814]/70 leading-relaxed mb-4">
                Commissioned by King Hassan II and completed in 1993, the Hassan II Mosque
                stands on a promontory overlooking the Atlantic Ocean, fulfilling the
                king&apos;s vision of a house of worship where the faithful could pray over
                God&apos;s sea. The mosque can accommodate 25,000 worshippers inside and
                another 80,000 in its vast esplanade, making it one of the largest
                religious structures in the world.
              </p>
              <p className="text-[#1A1814]/70 leading-relaxed mb-4">
                The craftsmanship is staggering. Over 6,000 Moroccan artisans spent six
                years creating the intricate zellige tilework, carved plaster, painted
                cedar wood ceilings, and marble floors. The 210-meter minaret is topped
                with a laser beam that shines toward Mecca, visible for 30 kilometers.
                Perhaps most spectacular is the retractable roof over the main prayer hall,
                which slides open to reveal the sky, and the glass floor panels that allow
                worshippers to see the ocean waves beneath their feet.
              </p>

              {/* Practical Info Box */}
              <div className="card-moroccan p-5 bg-[#EDE8E0]">
                <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3 flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#A0522D]" />
                  Visitor Information
                </h4>
                <ul className="space-y-2 text-sm text-[#1A1814]/70">
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-[#A0522D] mt-0.5 shrink-0" />
                    <span>
                      <strong>Tours:</strong> Sat-Thu at 9:00, 10:00, 11:00, and 14:00. Closed
                      Fridays and during prayer times.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-4 h-4 text-[#A0522D] mt-0.5 shrink-0" />
                    <span>
                      <strong>Entry:</strong> 130 MAD for adults, 40 MAD for children (6-12).
                      Free for children under 6.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-[#A0522D] mt-0.5 shrink-0" />
                    <span>
                      <strong>Dress Code:</strong> Modest clothing required. Knees and shoulders
                      must be covered. Shoes removed inside. Scarves available at the entrance.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Camera className="w-4 h-4 text-[#A0522D] mt-0.5 shrink-0" />
                    <span>
                      <strong>Photography:</strong> Allowed inside during guided tours. No flash.
                      Tripods not permitted.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#A0522D] mt-0.5 shrink-0" />
                    <span>
                      <strong>Tip:</strong> Arrive 15 minutes early. The 9:00 AM tour is the
                      least crowded. The esplanade is free to visit anytime and offers stunning
                      sunset photos.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          OLD MEDINA AND HABOUS QUARTER
          ================================================================ */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <Compass className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              Old Medina and Habous Quarter
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Old Medina */}
            <div className="card-moroccan overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="/images/hero-morocco-medina.webp"
                  alt="Narrow alleyway in the Old Medina of Casablanca with traditional architecture - citytoursmorocco.com"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="tag bg-white/90 text-[#A0522D] font-semibold">Old Medina</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3">
                  The Ancient Heart of Casablanca
                </h3>
                <p className="text-[#1A1814]/70 leading-relaxed mb-4">
                  Nestled between the port and Boulevard des Almohades, the Old Medina is the
                  original Casablanca. Winding alleys open onto small squares filled with the
                  scent of spices and leather. Unlike the medinas of Fes or Marrakech, this one
                  is compact enough to explore in a few hours without a guide, though the
                  experience of getting pleasantly lost is half the charm.
                </p>
                <p className="text-[#1A1814]/70 leading-relaxed mb-4">
                  Key highlights include the Shrine of Sidi Allal El Karaouani, the Clock Tower
                  (a remnant of Portuguese fortifications), and the many small artisan workshops
                  where craftsmen produce leather goods, metalwork, and wooden items. The medina
                  is also home to several excellent street food stalls serving fresh seafood,
                  harira soup, and Moroccan pastries.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="tag bg-[#EDE8E0] text-[#1A1814]/70 text-xs">Free entry</span>
                  <span className="tag bg-[#EDE8E0] text-[#1A1814]/70 text-xs">2-3 hours to explore</span>
                  <span className="tag bg-[#EDE8E0] text-[#1A1814]/70 text-xs">Open daily</span>
                </div>
              </div>
            </div>

            {/* Habous Quarter */}
            <div className="card-moroccan overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="/images/hero-morocco-hero.webp"
                  alt="Orderly arcaded streets of the Habous Quarter in Casablanca - citytoursmorocco.com"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="tag bg-white/90 text-[#A0522D] font-semibold">Habous Quarter</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3">
                  The New Medina with Old-World Charm
                </h3>
                <p className="text-[#1A1814]/70 leading-relaxed mb-4">
                  Built by the French in the 1930s as a model Moroccan quarter, the Habous
                  (or Quartier des Habous) blends French urban planning with traditional
                  Moroccan architecture. The result is a clean, orderly souk experience that
                  feels both authentic and approachable. Arcaded walkways shade stalls selling
                  everything from hand-embroidered kaftans to fragrant olive oil.
                </p>
                <p className="text-[#1A1814]/70 leading-relaxed mb-4">
                  The Habous is particularly famous for its pastry shops, where you can find
                  the finest cornes de gazelle (almond-filled pastry crescents), chebakia
                  (honey-dipped sesame cookies), and briouat (flaky pastry triangles). The
                  Mahkama du Pacha, a stunning Hispano-Moorish courthouse with 64 rooms of
                  intricate zellige and carved cedar, is the architectural highlight.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="tag bg-[#EDE8E0] text-[#1A1814]/70 text-xs">Free entry</span>
                  <span className="tag bg-[#EDE8E0] text-[#1A1814]/70 text-xs">Best for pastries and olives</span>
                  <span className="tag bg-[#EDE8E0] text-[#1A1814]/70 text-xs">Morning visits best</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          ART DECO HERITAGE
          ================================================================ */}
      <section className="py-12 md:py-16 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <Camera className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              Art Deco Heritage
            </h2>
          </div>
          <p className="text-lg text-[#1A1814]/70 leading-relaxed max-w-3xl mb-8">
            Between 1912 and 1956, French architects and Moroccan craftsmen created one of the
            world&apos;s most remarkable collections of Art Deco, Art Nouveau, and Neo-Moorish
            buildings. Casablanca&apos;s architectural heritage rivals that of Miami Beach or
            Buenos Aires, yet it remains largely unknown to international visitors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3">
                Boulevard Mohammed V
              </h3>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                The grand artery of Casablanca is lined with dozens of Art Deco facades.
                Notable buildings include the Glaoui Residence with its ornate balconies,
                the Cinema Rialto with its streamlined curves, and the Hotel Lincoln
                featuring geometric Moroccan patterns rendered in European Art Deco style.
                Walk the entire length from Place des Nations Unies to the Parc de la
                Ligue Arabe for the full experience.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3">
                Cathedral of the Sacred Heart
              </h3>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                No longer a functioning church, this stunning 1930s cathedral is a masterpiece
                of Neo-Gothic and Art Deco fusion. Its soaring white towers and stained glass
                windows make it one of the most photographed buildings in the city. The
                interior hosts occasional cultural exhibitions and art installations. Entry
                is typically 20 MAD.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3">
                Villa des Arts
              </h3>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                Housed in a beautifully restored 1934 Art Deco villa near the Parc de la
                Ligue Arabe, this foundation-run museum showcases contemporary Moroccan and
                international art in rotating exhibitions. The building itself is worth the
                visit, with its curved staircases, terrazzo floors, and period ironwork.
                Entry is free.
              </p>
            </div>
          </div>

          <div className="card-moroccan p-6 bg-white">
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3 flex items-center gap-2">
              <Info className="w-4 h-4 text-[#C4960C]" />
              Self-Guided Art Deco Walking Tour
            </h3>
            <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-3">
              Start at <strong>Place des Nations Unies</strong>, the bustling central square.
              Walk south down <strong>Boulevard Mohammed V</strong>, admiring the Deco facades
              on both sides. Turn right at <strong>Rue Idriss Lahrizi</strong> toward the
              <strong> Marche Central</strong> (Central Market). Continue to the beautiful
              <strong> Parc de la Ligue Arabe</strong> and the <strong>Cathedral of the Sacred
              Heart</strong>. End at <strong>Villa des Arts</strong> for a cultural finish.
              Total distance: approximately 3 kilometers. Allow 2-3 hours with photo stops.
            </p>
            <p className="text-xs text-[#C4960C] font-semibold">
              Tip: The Casamemoire association offers guided architectural tours on select
              weekends. Check their website for schedules. Tours cost around 100 MAD.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          CORNICHE AND AIN DIAB
          ================================================================ */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <Waves className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              Corniche and Ain Diab
            </h2>
          </div>
          <p className="text-lg text-[#1A1814]/70 leading-relaxed max-w-3xl mb-8">
            Casablanca&apos;s beach district stretches along the Atlantic coast west of the
            Hassan II Mosque. The Corniche is where the city comes to play, with a long
            oceanfront promenade, private beach clubs, restaurants, and nightlife venues.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(160,82,45,0.08)] mb-4">
                <Waves className="w-6 h-6 text-[#A0522D]" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                Beach Clubs
              </h3>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-3">
                The Corniche is dotted with private beach clubs offering pools, sun loungers,
                restaurants, and direct beach access. Popular options include Tahiti Beach Club,
                Miami Beach Club, and Boudoir Beach. Day passes typically cost 150-300 MAD per
                person, often redeemable against food and drinks. Most are open May through
                September.
              </p>
              <p className="text-xs text-[#A0522D] font-semibold">Peak season: June-August</p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(160,82,45,0.08)] mb-4">
                <Utensils className="w-6 h-6 text-[#A0522D]" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                Oceanfront Dining
              </h3>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-3">
                The Corniche offers some of Casablanca&apos;s most memorable dining
                experiences. Le Cabestan serves French-Mediterranean cuisine literally on the
                rocks, while La Corniche 123 and Chez Paul offer fresh seafood with Atlantic
                views. For casual bites, try the fish grills at Ain Diab or the crepe stands
                along the promenade. Expect to pay 200-500 MAD for a full meal with views.
              </p>
              <p className="text-xs text-[#A0522D] font-semibold">Book ahead for sunset tables</p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(160,82,45,0.08)] mb-4">
                <Sun className="w-6 h-6 text-[#A0522D]" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                The Promenade
              </h3>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-3">
                The public promenade runs for several kilometers along the coast and is free
                to access at all times. It is Casablanca&apos;s favorite place for jogging,
                cycling, and evening walks. On weekends, families pack the walkway, vendors
                sell roasted corn and fresh juice, and the atmosphere is wonderfully festive.
                The lighthouse at El Hank marks the western end and offers panoramic views.
              </p>
              <p className="text-xs text-[#A0522D] font-semibold">Best at sunset and weekends</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          MOROCCO MALL AND TWIN CENTER
          ================================================================ */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingBag className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              Modern Shopping
            </h2>
          </div>
          <p className="text-lg text-[#1A1814]/70 leading-relaxed max-w-3xl mb-8">
            Casablanca is Morocco&apos;s undisputed shopping capital, home to mega-malls,
            designer boutiques, and everything in between. Whether you seek international
            luxury brands or locally designed fashion, the city delivers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3">
                Morocco Mall
              </h3>
              <p className="text-[#1A1814]/70 leading-relaxed mb-4">
                Africa&apos;s largest shopping center is a destination in itself. With over
                600 stores, an IMAX cinema, an indoor ice rink, a musical fountain, and a
                massive aquarium containing over 40 species of fish, Morocco Mall transcends
                the typical shopping experience. International brands like Zara, H&amp;M,
                Galeries Lafayette, and Fnac sit alongside Moroccan designers and artisan
                boutiques.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="tag bg-[#EDE8E0] text-[#1A1814]/70 text-xs">600+ stores</span>
                <span className="tag bg-[#EDE8E0] text-[#1A1814]/70 text-xs">IMAX Cinema</span>
                <span className="tag bg-[#EDE8E0] text-[#1A1814]/70 text-xs">Aquarium</span>
                <span className="tag bg-[#EDE8E0] text-[#1A1814]/70 text-xs">Ice Rink</span>
              </div>
              <p className="text-xs text-[#1A1814]/60">
                Open daily 10:00-22:00. Located in Ain Diab on the Corniche.
                Free parking. Accessible by taxi (around 50-80 MAD from city center).
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3">
                Twin Center and Anfa Place
              </h3>
              <p className="text-[#1A1814]/70 leading-relaxed mb-4">
                The Twin Center towers are Casablanca&apos;s most iconic modern landmark,
                rising 115 meters above the Maarif district. The commercial levels house
                upscale shops, a cinema, and the Kenzi Tower Hotel. Nearby Anfa Place
                Living Resort is a newer open-air shopping and dining complex with a
                distinctly upscale feel, featuring concept stores, gourmet restaurants, and
                a curated selection of Moroccan and international fashion labels.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="tag bg-[#EDE8E0] text-[#1A1814]/70 text-xs">Landmark towers</span>
                <span className="tag bg-[#EDE8E0] text-[#1A1814]/70 text-xs">Upscale shopping</span>
                <span className="tag bg-[#EDE8E0] text-[#1A1814]/70 text-xs">Rooftop dining</span>
              </div>
              <p className="text-xs text-[#1A1814]/60">
                Twin Center: Maarif district, on Boulevard Zerktouni. Anfa Place: Boulevard
                de la Corniche. Both accessible by tram and taxi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          RICK'S CAFE
          ================================================================ */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Music className="w-6 h-6 text-[#A0522D]" />
                <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
                  Rick&apos;s Cafe
                </h2>
              </div>
              <p className="text-lg text-[#1A1814]/70 leading-relaxed mb-4">
                &quot;Of all the gin joints in all the towns in all the world, she walks
                into mine.&quot; The legendary line from the 1942 film &quot;Casablanca&quot;
                inspired American expatriate Kathy Kriger to open a real Rick&apos;s Cafe in
                2004. Set in a beautifully restored courtyard riad near the Old Medina, the
                restaurant recreates the atmospheric ambiance of the fictional nightclub with
                remarkable attention to detail.
              </p>
              <p className="text-[#1A1814]/70 leading-relaxed mb-4">
                The interior features sweeping arches, carved wooden screens, brass lamps, a
                central courtyard with a fountain, and a grand piano where a live pianist
                performs nightly. The menu blends Moroccan and international cuisine, with
                highlights including pastilla, lamb tagine, and a selection of Moroccan wines.
                Cocktails are named after characters from the film.
              </p>
              <div className="card-moroccan p-4 bg-[#EDE8E0]">
                <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2 text-sm">
                  Practical Details
                </h4>
                <ul className="space-y-1.5 text-sm text-[#1A1814]/70">
                  <li className="flex items-center gap-2">
                    <DollarSign className="w-3.5 h-3.5 text-[#A0522D] shrink-0" />
                    <span>Main courses: 180-350 MAD. Cocktails: 90-130 MAD.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#A0522D] shrink-0" />
                    <span>Open daily 12:00-15:00 and 18:30-01:00. Live piano from 20:30.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#A0522D] shrink-0" />
                    <span>Reservations essential, especially for dinner and weekends.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#A0522D] shrink-0" />
                    <span>248 Boulevard Sour Jdid, near Place du Jardin Public.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img
                src="/images/hero-morocco-hero.webp"
                alt="Interior of Rick's Cafe in Casablanca with Moroccan arches and vintage decor - citytoursmorocco.com"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          TOP ATTRACTIONS GRID
          ================================================================ */}
      <section className="py-12 md:py-16 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 text-[#C4960C]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              Top Attractions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <div
                key={attraction.name}
                className="card-moroccan overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={`${attraction.name} in Casablanca, Morocco - citytoursmorocco.com`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={index < 2 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="tag bg-white/90 text-[#A0522D] font-semibold">
                      {attraction.type}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                    <Star className="w-3.5 h-3.5 fill-[#C4960C] text-[#C4960C]" />
                    <span className="text-white text-xs font-semibold">
                      {attraction.rating}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#1A1814] mb-2">
                    {attraction.name}
                  </h3>
                  <p className="text-sm text-[#1A1814]/60 leading-relaxed line-clamp-3">
                    {attraction.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          8 THINGS TO DO
          ================================================================ */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              8 Unforgettable Things to Do
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {thingsToDo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6 text-center group">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[rgba(160,82,45,0.08)] text-[#A0522D] mx-auto mb-4 group-hover:bg-[#A0522D] group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          WHERE TO EAT
          ================================================================ */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <Utensils className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              Where to Eat in Casablanca
            </h2>
          </div>
          <p className="text-lg text-[#1A1814]/70 leading-relaxed max-w-3xl mb-8">
            Casablanca is Morocco&apos;s culinary capital, offering everything from
            Michelin-worthy fine dining to legendary street food stalls. The city&apos;s
            international character means you can enjoy world-class French, Japanese,
            Italian, and Lebanese cuisine alongside traditional Moroccan dishes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {restaurants.map((restaurant) => (
              <div key={restaurant.name} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(160,82,45,0.08)] text-[#A0522D]">
                    <Utensils className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
                        {restaurant.name}
                      </h3>
                      <span className="tag bg-[rgba(160,82,45,0.08)] text-[#A0522D] text-xs">
                        {restaurant.cuisine}
                      </span>
                      <span className="tag bg-[rgba(196,150,12,0.12)] text-[#C4960C] text-xs font-bold">
                        {restaurant.price}
                      </span>
                    </div>
                    <p className="text-xs text-[#A0522D] mb-2 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {restaurant.neighborhood}
                    </p>
                    <p className="text-sm text-[#1A1814]/60 leading-relaxed mb-2">
                      {restaurant.description}
                    </p>
                    <p className="text-xs text-[#1A1814]/50 font-semibold">
                      {restaurant.priceRange}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Street food tip */}
          <div className="card-moroccan p-6 bg-[#EDE8E0] mt-8">
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3 flex items-center gap-2">
              <Info className="w-4 h-4 text-[#C4960C]" />
              Street Food Guide
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-[#1A1814]/70">
              <div>
                <p className="font-semibold text-[#1A1814] mb-1">Central Market (Marche Central)</p>
                <p>
                  The best place for fresh seafood in Casablanca. Choose your fish from the
                  stalls and have it grilled on the spot. A full seafood plate costs 40-80 MAD.
                  Open mornings until early afternoon.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#1A1814] mb-1">Derb Ghalef Area</p>
                <p>
                  Famous for its late-night snack stalls serving bocadillos (Moroccan
                  sandwiches), brochettes (grilled meat skewers), and fresh juices. A filling
                  meal costs just 20-40 MAD.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#1A1814] mb-1">Habous Bakeries</p>
                <p>
                  The pastry shops of the Habous Quarter sell the finest traditional sweets in
                  Casablanca. Try cornes de gazelle (15 MAD each), chebakia (10 MAD), and
                  mlawi flatbreads (5 MAD) fresh from the oven.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          WHERE TO STAY
          ================================================================ */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <Hotel className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              Where to Stay
            </h2>
          </div>
          <p className="text-lg text-[#1A1814]/70 leading-relaxed max-w-3xl mb-8">
            Casablanca offers a broad range of accommodation, from world-class luxury
            hotels to budget-friendly apart-hotels. The best neighborhoods for tourists
            are the city center (close to historic sites), the Corniche (beachfront), and
            Maarif (trendy dining and shopping district).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <div key={hotel.name} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <Hotel className="w-4 h-4 text-[#A0522D]" />
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
                    {hotel.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="tag bg-[rgba(160,82,45,0.08)] text-[#A0522D] text-xs">
                    {hotel.type}
                  </span>
                  <span className="tag bg-[rgba(196,150,12,0.12)] text-[#C4960C] text-xs font-bold">
                    {hotel.price}
                  </span>
                  <span className="text-xs text-[#1A1814]/50 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {hotel.neighborhood}
                  </span>
                </div>
                <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                  {hotel.description}
                </p>
              </div>
            ))}
          </div>

          {/* Neighborhood guide */}
          <div className="card-moroccan p-6 bg-[#EDE8E0] mt-8">
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C4960C]" />
              Neighborhood Guide for Accommodation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-[#1A1814]/70">
              <div>
                <p className="font-semibold text-[#1A1814] mb-1">City Center</p>
                <p>Best for sightseeing. Walking distance to Art Deco district, Old Medina, and Hassan II Mosque. Budget: 400-2,500 MAD/night.</p>
              </div>
              <div>
                <p className="font-semibold text-[#1A1814] mb-1">Corniche / Ain Diab</p>
                <p>Best for beach and nightlife. Oceanfront hotels and clubs. Requires taxi to city center. Budget: 800-4,000 MAD/night.</p>
              </div>
              <div>
                <p className="font-semibold text-[#1A1814] mb-1">Maarif / Gauthier</p>
                <p>Best for dining and local life. Trendy restaurants, boutiques, and cafes. Near tramway. Budget: 500-2,000 MAD/night.</p>
              </div>
              <div>
                <p className="font-semibold text-[#1A1814] mb-1">Anfa</p>
                <p>Best for luxury and quiet. Upscale residential area with fine-dining options and elegant hotels. Budget: 1,000-3,500 MAD/night.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          GETTING AROUND
          ================================================================ */}
      <section className="py-12 md:py-16 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <Train className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              Getting Around Casablanca
            </h2>
          </div>
          <p className="text-lg text-[#1A1814]/70 leading-relaxed max-w-3xl mb-8">
            Casablanca has the most developed public transport system in Morocco, including
            a modern tramway, abundant taxis, and ride-hailing apps. Here is how to navigate
            the city efficiently.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tram */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(160,82,45,0.08)] text-[#A0522D]">
                  <Train className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                  Tramway
                </h3>
              </div>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-2">
                Casablanca&apos;s modern tram system has two lines covering 47 km across the
                city. Line T1 connects Sidi Moumen to Ain Diab, passing through the city
                center. Clean, air-conditioned, and reliable.
              </p>
              <p className="text-xs text-[#C4960C] font-semibold">
                Fare: 7 MAD per trip. Rechargeable card available for 5 MAD.
              </p>
            </div>

            {/* Petit Taxi */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(160,82,45,0.08)] text-[#A0522D]">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                  Petit Taxis (Red)
                </h3>
              </div>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-2">
                Small red taxis operate within the city limits and carry up to 3 passengers.
                Always insist on the meter. Minimum fare is about 7 MAD, with most rides
                within the center costing 15-40 MAD. After 8 PM, a 50% surcharge applies.
              </p>
              <p className="text-xs text-[#C4960C] font-semibold">
                Tip: Always confirm the meter is running before departure.
              </p>
            </div>

            {/* Grand Taxi */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(160,82,45,0.08)] text-[#A0522D]">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                  Grand Taxis (White)
                </h3>
              </div>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-2">
                Large white Mercedes taxis operate shared routes between neighborhoods and
                to neighboring cities. They depart when full (6 passengers). Fixed routes
                and fares. Great for reaching the airport or nearby cities like Rabat.
              </p>
              <p className="text-xs text-[#C4960C] font-semibold">
                Airport to center: approximately 250-350 MAD (private hire).
              </p>
            </div>

            {/* Train */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(160,82,45,0.08)] text-[#A0522D]">
                  <Plane className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                  Airport Train
                </h3>
              </div>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-2">
                ONCF trains connect Mohammed V Airport (CMN) to Casa Voyageurs station every
                hour, taking approximately 45 minutes. From Casa Voyageurs, the Al Boraq
                high-speed train reaches Rabat in 50 minutes and Tangier in 2 hours 10 minutes.
              </p>
              <p className="text-xs text-[#C4960C] font-semibold">
                Airport train: 70 MAD. Al Boraq to Rabat: 80 MAD first class.
              </p>
            </div>
          </div>

          {/* Transport tips */}
          <div className="card-moroccan p-6 bg-white mt-8">
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3 flex items-center gap-2">
              <Info className="w-4 h-4 text-[#C4960C]" />
              Transport Tips
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#1A1814]/70">
              <li className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-[#A0522D] mt-0.5 shrink-0" />
                <span>Ride-hailing apps (InDrive, Careem) are widely used and often more reliable than hailing taxis on the street.</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-[#A0522D] mt-0.5 shrink-0" />
                <span>Rush hour (7:30-9:30 AM and 5:30-7:30 PM) traffic is notoriously heavy. Plan accordingly or use the tram.</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-[#A0522D] mt-0.5 shrink-0" />
                <span>Walking is pleasant in the city center and along the Corniche, but distances between major sites can be significant.</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-[#A0522D] mt-0.5 shrink-0" />
                <span>Car rental is available at the airport and city center. Driving in Casablanca requires confidence due to aggressive traffic.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================================================================
          DAY TRIPS FROM CASABLANCA
          ================================================================ */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <Compass className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              Day Trips from Casablanca
            </h2>
          </div>
          <p className="text-lg text-[#1A1814]/70 leading-relaxed max-w-3xl mb-8">
            Casablanca&apos;s central location and excellent transport links make it an ideal
            base for exploring nearby attractions. These three destinations are easily
            accessible as day trips and offer a wonderful contrast to the big city.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dayTrips.map((trip) => (
              <div key={trip.destination} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-[#A0522D]" />
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
                    {trip.destination}
                  </h3>
                </div>
                <p className="text-xs text-[#A0522D] font-semibold mb-3">{trip.distance}</p>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-4">
                  {trip.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {trip.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="tag bg-[#EDE8E0] text-[#1A1814]/70 text-xs"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-[#C4960C] font-semibold flex items-center gap-1">
                  <DollarSign className="w-3 h-3" />
                  {trip.cost}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          NIGHTLIFE AND ENTERTAINMENT
          ================================================================ */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <Music className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              Nightlife and Entertainment
            </h2>
          </div>
          <p className="text-lg text-[#1A1814]/70 leading-relaxed max-w-3xl mb-8">
            Casablanca has the most vibrant nightlife in Morocco. From sophisticated rooftop
            bars and speakeasy cocktail lounges to energetic nightclubs and live music venues,
            the city comes alive after dark. The Corniche and Gauthier neighborhoods are the
            epicenters of after-hours entertainment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {nightlifeVenues.map((venue) => (
              <div key={venue.name} className="card-moroccan p-6 flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(160,82,45,0.08)] text-[#A0522D]">
                  <Music className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
                      {venue.name}
                    </h3>
                    <span className="tag bg-[rgba(160,82,45,0.08)] text-[#A0522D] text-xs">
                      {venue.type}
                    </span>
                  </div>
                  <p className="text-xs text-[#A0522D] mb-2 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {venue.neighborhood}
                  </p>
                  <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                    {venue.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Nightlife tips */}
          <div className="card-moroccan p-6 bg-[#EDE8E0]">
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3 flex items-center gap-2">
              <Info className="w-4 h-4 text-[#C4960C]" />
              Nightlife Tips for Casablanca
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-[#1A1814]/70">
              <div>
                <p className="font-semibold text-[#1A1814] mb-1">Timing</p>
                <p>Dinner starts late (21:00-22:00). Bars fill up around 23:00. Clubs do not get going until midnight or later. Many venues are busiest on Thursday and Friday nights.</p>
              </div>
              <div>
                <p className="font-semibold text-[#1A1814] mb-1">Dress Code</p>
                <p>Most upscale bars and all nightclubs enforce a smart-casual dress code. Avoid sportswear and open-toed sandals for men. Some venues require reservations for table service.</p>
              </div>
              <div>
                <p className="font-semibold text-[#1A1814] mb-1">Costs</p>
                <p>Cocktails: 80-150 MAD. Beer: 40-70 MAD. Club entry: 100-200 MAD (often includes a drink). Wine by the glass: 60-120 MAD. Budget 300-500 MAD for a night out.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          BUSINESS TRAVEL
          ================================================================ */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              Business Travel in Casablanca
            </h2>
          </div>
          <p className="text-lg text-[#1A1814]/70 leading-relaxed max-w-3xl mb-8">
            As Morocco&apos;s economic engine and home to the Casablanca Stock Exchange,
            the city is the primary destination for business travelers in North Africa.
            Modern infrastructure, international flight connections, and a growing conference
            scene make it an increasingly important hub for regional and international commerce.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card-moroccan p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(160,82,45,0.08)] mb-4">
                <Building2 className="w-6 h-6 text-[#A0522D]" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                Conference Venues
              </h3>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                The Office des Foires et Expositions de Casablanca (OFEC) is the main
                exhibition center. Major hotels like the Hyatt Regency, Sofitel, and Four
                Seasons offer state-of-the-art meeting rooms and ballrooms. Casablanca
                Finance City (CFC) in the Anfa district is the dedicated financial hub with
                modern office and conference facilities.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(160,82,45,0.08)] mb-4">
                <Hotel className="w-6 h-6 text-[#A0522D]" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                Business Hotels
              </h3>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                The Hyatt Regency (city center) and Kenzi Tower (Twin Center) are the top
                choices for business travelers, offering executive lounges, high-speed
                internet, and proximity to the business district. The Sofitel Tour Blanche
                and Movenpick are excellent alternatives. Corporate rates are widely
                available, typically offering 20-30% discounts on published rates.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(160,82,45,0.08)] mb-4">
                <Globe className="w-6 h-6 text-[#A0522D]" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                Business Culture Tips
              </h3>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                Meetings often start with extended greetings and mint tea. French is the
                primary business language, with Arabic and increasingly English used in
                international settings. Business cards are exchanged at the start of meetings.
                Punctuality is expected for scheduled meetings, though flexibility is
                appreciated. Business lunches are common and can extend to 2 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          PRACTICAL TIPS
          ================================================================ */}
      <section className="py-12 md:py-16 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              Practical Tips for Visiting Casablanca
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#A0522D]" />
                Best Time to Visit
              </h3>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                April through June and September through November offer the most pleasant
                weather, with temperatures between 20-27 degrees Celsius. Summer (July-August)
                can be hot and humid, reaching 35 degrees. Winter (December-February) is mild
                (12-18 degrees) but can be rainy. The Atlantic breeze keeps coastal areas
                comfortable year-round.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-[#A0522D]" />
                Budget Guide
              </h3>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                Budget traveler: 400-600 MAD/day (hostel, street food, public transport).
                Mid-range: 1,000-2,000 MAD/day (3-star hotel, restaurants, taxis).
                Luxury: 3,000+ MAD/day (5-star hotel, fine dining, private transport).
                Tipping: 10-15% in restaurants, 10-20 MAD for small services.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#A0522D]" />
                Safety
              </h3>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                Casablanca is generally safe for tourists. Exercise normal big-city caution:
                watch for pickpockets in crowded areas, avoid poorly lit streets late at night,
                and use official taxis or ride-hailing apps. The tourist police can be found
                near major attractions. Emergency number: 19 (police) or 15 (ambulance).
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2 flex items-center gap-2">
                <Coffee className="w-4 h-4 text-[#A0522D]" />
                Language
              </h3>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                Moroccan Arabic (Darija) and French are the primary languages. French is widely
                spoken in business, restaurants, and hotels. English is increasingly common
                among younger people and in tourist-oriented establishments. Learning a few
                words of Darija or French will be greatly appreciated by locals.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#A0522D]" />
                What to Pack
              </h3>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                Light, breathable clothing for warm months; a jacket for cool evenings
                (especially near the coast). Modest clothing for visiting the mosque.
                Comfortable walking shoes for the medina. Sunscreen and sunglasses year-round.
                Smart-casual attire for upscale restaurants and nightlife venues.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2 flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#A0522D]" />
                Connectivity
              </h3>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                Wi-Fi is widely available in hotels, cafes, and restaurants. For mobile data,
                pick up a local SIM card at the airport from Maroc Telecom, Inwi, or Orange
                for around 30-50 MAD with 5-10 GB of data. Most international phones work
                on Moroccan networks. Morocco uses European-style Type C and E power plugs
                (220V).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          FAQ SECTION
          ================================================================ */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-6 h-6 text-[#A0522D]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-lg text-[#1A1814]/70 leading-relaxed max-w-3xl mb-8">
            Everything you need to know before visiting Casablanca, Morocco&apos;s
            largest and most dynamic city.
          </p>

          <div className="space-y-4 max-w-3xl">
            {faqJsonLd.mainEntity.map((faq, index) => (
              <div key={index} className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3 flex items-start gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[rgba(160,82,45,0.08)] text-[#A0522D] text-xs font-bold shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  {faq.name}
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed pl-8">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          CTA SECTION
          ================================================================ */}
      <section className="py-12 md:py-16 bg-[#EDE8E0]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
            Experience Morocco&apos;s Greatest City
          </h2>
          <p className="text-lg text-[#1A1814]/70 max-w-xl mx-auto mb-8">
            From the monumental Hassan II Mosque to the electric Corniche nightlife,
            Casablanca is a city that surprises, inspires, and rewards the curious
            traveler.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[#A0522D] text-white font-semibold hover:bg-[#8B4726] transition-colors"
            >
              Explore All Cities <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cities/casablanca/restaurants"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[#A0522D] font-semibold hover:bg-[#FAF8F5] border border-[#A0522D]/20 transition-colors"
            >
              Casablanca Restaurants <Utensils className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ================================================================
          EXPLORE MORE
          ================================================================ */}
      <ExploreMore
        currentCategory="cities"
        currentHref="/casablanca"
        title="Continue Exploring Morocco"
      />
    </>
  );
}
