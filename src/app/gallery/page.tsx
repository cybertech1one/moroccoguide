import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Camera,
  Sun,
  Aperture,
  Focus,
  Clock,
  Mountain,
  Building2,
  Waves,
  UtensilsCrossed,
  Users,
  Store,
  TreePalm,
  Sunrise,
} from 'lucide-react';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Photo Gallery | Stunning Morocco Photography - CityGuide',
  description:
    'Explore Morocco through breathtaking photography. Browse over 40 photos of Marrakech, Chefchaouen, the Sahara Desert, Atlas Mountains, coastal towns, architecture, street food, and vibrant markets.',
  keywords: [
    'Morocco photography',
    'Morocco photo gallery',
    'Marrakech photos',
    'Sahara desert photography',
    'Chefchaouen blue city photos',
    'Morocco travel photography',
    'Atlas Mountains photos',
    'Morocco architecture',
    'Moroccan food photos',
    'Morocco markets souks',
  ],
  openGraph: {
    title: 'Photo Gallery - CityGuide Morocco',
    description:
      'Discover Morocco through stunning photography. Cities, deserts, mountains, coast, architecture, food, and more.',
    url: 'https://citytoursmorocco.com/gallery',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Sahara Desert sand dunes at golden hour',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/gallery' },
};

/* ═══════════════════════════════════════════════════════════════
   PHOTO DATA (40+ items across 8 categories)
   ═══════════════════════════════════════════════════════════════ */

export interface Photo {
  id: number;
  src: string;
  alt: string;
  category:
    | 'Cities'
    | 'Desert'
    | 'Mountains'
    | 'Coast'
    | 'Architecture'
    | 'Food'
    | 'People'
    | 'Markets';
  city: string;
  photographer: string;
  featured: boolean;
}

const photos: Photo[] = [
  /* ─── CITIES ─── */
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1597212618440-806a846b4208?w=800',
    alt: 'Jemaa el-Fnaa square in Marrakech at sunset with crowds and food stalls',
    category: 'Cities',
    city: 'Marrakech',
    photographer: 'Annie Spratt',
    featured: true,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1548018560-c7196e91a0d5?w=800',
    alt: 'Blue-washed streets of Chefchaouen medina with potted plants',
    category: 'Cities',
    city: 'Chefchaouen',
    photographer: 'Adventures Abroad',
    featured: true,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1560095633-6858b0185572?w=800',
    alt: 'Fes tanneries with colorful dye vats viewed from above',
    category: 'Cities',
    city: 'Fes',
    photographer: 'Alev Takil',
    featured: true,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1553522991-71439aa4e0c0?w=800',
    alt: 'Essaouira harbor with traditional blue fishing boats at dock',
    category: 'Cities',
    city: 'Essaouira',
    photographer: 'Calin Stan',
    featured: false,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1572204097183-e1ab140342ed?w=800',
    alt: 'Rabat Kasbah of the Udayas blue and white painted streets',
    category: 'Cities',
    city: 'Rabat',
    photographer: 'Yassine Khalfalli',
    featured: false,
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=800',
    alt: 'Tangier medina overlooking the Strait of Gibraltar at golden hour',
    category: 'Cities',
    city: 'Tangier',
    photographer: 'Davide Cantelli',
    featured: false,
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=800',
    alt: 'Chefchaouen blue alleyway with overhanging lanterns and potted flowers',
    category: 'Cities',
    city: 'Chefchaouen',
    photographer: 'Milad Alizadeh',
    featured: false,
  },

  /* ─── DESERT ─── */
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800',
    alt: 'Sahara Desert Erg Chebbi sand dunes glowing at golden hour',
    category: 'Desert',
    city: 'Merzouga',
    photographer: 'Sven Scheuermeier',
    featured: true,
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800',
    alt: 'Camel caravan crossing vast Sahara dunes at sunset',
    category: 'Desert',
    city: 'Merzouga',
    photographer: 'Ruben Hanssen',
    featured: true,
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1548025148-7d9e6e1b7e2d?w=800',
    alt: 'Erg Chebbi dunes under brilliant starry night sky with Milky Way',
    category: 'Desert',
    city: 'Merzouga',
    photographer: 'Youssef Naddam',
    featured: true,
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1509638524746-b2ba9be42342?w=800',
    alt: 'Sunset over a palm grove oasis with golden light in the Draa Valley',
    category: 'Desert',
    city: 'Zagora',
    photographer: 'Dan Gold',
    featured: false,
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=800',
    alt: 'Lone figure walking across rippled sand patterns in the Sahara',
    category: 'Desert',
    city: 'M\'Hamid',
    photographer: 'Keith Hardy',
    featured: false,
  },

  /* ─── MOUNTAINS ─── */
  {
    id: 13,
    src: 'https://images.unsplash.com/photo-1545041117-7c08d7389082?w=800',
    alt: 'High Atlas Mountains panoramic view with terraced Berber villages',
    category: 'Mountains',
    city: 'Imlil',
    photographer: 'Sergey Pesterev',
    featured: true,
  },
  {
    id: 14,
    src: 'https://images.unsplash.com/photo-1517137800032-a5e7e68ef345?w=800',
    alt: 'Traditional Berber village nestled in the High Atlas mountain valley',
    category: 'Mountains',
    city: 'Imlil',
    photographer: 'Davide Cantelli',
    featured: false,
  },
  {
    id: 15,
    src: 'https://images.unsplash.com/photo-1502786129293-79981df4e689?w=800',
    alt: 'Dades Valley with dramatic winding mountain road through red gorge',
    category: 'Mountains',
    city: 'Dades',
    photographer: 'Sven Scheuermeier',
    featured: false,
  },
  {
    id: 16,
    src: 'https://images.unsplash.com/photo-1548690812-e7b5e0f1a5f8?w=800',
    alt: 'Snow-capped Mount Toubkal peak rising above cloud layer',
    category: 'Mountains',
    city: 'Imlil',
    photographer: 'Sergey Pesterev',
    featured: false,
  },

  /* ─── COAST ─── */
  {
    id: 17,
    src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800',
    alt: 'Atlantic Ocean waves crashing against rocky Moroccan coastline',
    category: 'Coast',
    city: 'Essaouira',
    photographer: 'Shifaaz Shamoon',
    featured: true,
  },
  {
    id: 18,
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    alt: 'Golden sand beach with turquoise water at Legzira near Sidi Ifni',
    category: 'Coast',
    city: 'Sidi Ifni',
    photographer: 'Sean Oulashin',
    featured: false,
  },
  {
    id: 19,
    src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800',
    alt: 'Surfers riding Atlantic waves at Taghazout beach at sunset',
    category: 'Coast',
    city: 'Taghazout',
    photographer: 'Emiliano Arano',
    featured: false,
  },
  {
    id: 20,
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
    alt: 'Dramatic natural stone arch on the Moroccan Atlantic coast',
    category: 'Coast',
    city: 'Legzira',
    photographer: 'Silas Baisch',
    featured: true,
  },

  /* ─── ARCHITECTURE ─── */
  {
    id: 21,
    src: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800',
    alt: 'Hassan II Mosque rising above the Atlantic Ocean in Casablanca at dusk',
    category: 'Architecture',
    city: 'Casablanca',
    photographer: 'Yassine Khalfalli',
    featured: true,
  },
  {
    id: 22,
    src: 'https://images.unsplash.com/photo-1531501410720-c8d437636169?w=800',
    alt: 'Ait Ben Haddou fortified kasbah glowing in warm sunrise light',
    category: 'Architecture',
    city: 'Ouarzazate',
    photographer: 'Juan Alberto Garcia',
    featured: true,
  },
  {
    id: 23,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800',
    alt: 'Ornate Moroccan door with intricate zellige tilework and carved cedar',
    category: 'Architecture',
    city: 'Fes',
    photographer: 'Murat Onder',
    featured: false,
  },
  {
    id: 24,
    src: 'https://images.unsplash.com/photo-1541589384534-51e2fc5e0a4f?w=800',
    alt: 'Traditional Moroccan riad courtyard with mosaic fountain and orange trees',
    category: 'Architecture',
    city: 'Marrakech',
    photographer: 'Thomas Serer',
    featured: false,
  },
  {
    id: 25,
    src: 'https://images.unsplash.com/photo-1567599672391-17b31f4e6fe1?w=800',
    alt: 'Bahia Palace ornate painted ceiling with geometric patterns',
    category: 'Architecture',
    city: 'Marrakech',
    photographer: 'Milad Alizadeh',
    featured: false,
  },
  {
    id: 26,
    src: 'https://images.unsplash.com/photo-1543321269-9d86d3680e1c?w=800',
    alt: 'Intricate zellige mosaic tilework pattern in vivid geometric colors',
    category: 'Architecture',
    city: 'Meknes',
    photographer: 'Jared Rice',
    featured: false,
  },

  /* ─── PEOPLE ─── */
  {
    id: 27,
    src: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800',
    alt: 'Moroccan artisan weaving a traditional Berber carpet on a wooden loom',
    category: 'People',
    city: 'Marrakech',
    photographer: 'Krzysztof Kowalik',
    featured: true,
  },
  {
    id: 28,
    src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
    alt: 'Moroccan woman with intricate henna designs in traditional attire',
    category: 'People',
    city: 'Marrakech',
    photographer: 'Rafael Garcin',
    featured: false,
  },
  {
    id: 29,
    src: 'https://images.unsplash.com/photo-1555545124-89d18c1be024?w=800',
    alt: 'Gnawa musician playing traditional sintir instrument in Essaouira',
    category: 'People',
    city: 'Essaouira',
    photographer: 'Rachid Oucharia',
    featured: false,
  },
  {
    id: 30,
    src: 'https://images.unsplash.com/photo-1557927212-0d2bc1e24e45?w=800',
    alt: 'Berber traders at a weekly rural market in the High Atlas foothills',
    category: 'People',
    city: 'Ouarzazate',
    photographer: 'Rachel Claire',
    featured: false,
  },

  /* ─── FOOD ─── */
  {
    id: 31,
    src: 'https://images.unsplash.com/photo-1528657249085-393b5afc498c?w=800',
    alt: 'Colorful Moroccan tagine dishes served with fresh bread and olives',
    category: 'Food',
    city: 'Marrakech',
    photographer: 'Louis Hansel',
    featured: true,
  },
  {
    id: 32,
    src: 'https://images.unsplash.com/photo-1517821362941-f7f753200fef?w=800',
    alt: 'Traditional Moroccan mint tea ceremony with ornate silver teapot',
    category: 'Food',
    city: 'Fes',
    photographer: 'Anastasiia Rozumna',
    featured: false,
  },
  {
    id: 33,
    src: 'https://images.unsplash.com/photo-1596627116790-af6f46dddbaf?w=800',
    alt: 'Traditional Friday couscous with seven vegetables and tender lamb',
    category: 'Food',
    city: 'Rabat',
    photographer: 'Louis Hansel',
    featured: false,
  },
  {
    id: 34,
    src: 'https://images.unsplash.com/photo-1562512048-e68b36c5e0cc?w=800',
    alt: 'Moroccan pastries and honey-soaked sweets in bakery display',
    category: 'Food',
    city: 'Casablanca',
    photographer: 'Sara Dubler',
    featured: false,
  },
  {
    id: 35,
    src: 'https://images.unsplash.com/photo-1590166337645-ef06a69d9f2d?w=800',
    alt: 'Steaming bowl of harira soup with dates and bread for iftar',
    category: 'Food',
    city: 'Fes',
    photographer: 'Louis Hansel',
    featured: false,
  },

  /* ─── MARKETS ─── */
  {
    id: 36,
    src: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800',
    alt: 'Marrakech souk with hanging brass lanterns and colorful spice displays',
    category: 'Markets',
    city: 'Marrakech',
    photographer: 'Roselyn Tirado',
    featured: true,
  },
  {
    id: 37,
    src: 'https://images.unsplash.com/photo-1580502298820-2049e4de1ece?w=800',
    alt: 'Colorful spice market stall with pyramids of cumin, turmeric, and saffron',
    category: 'Markets',
    city: 'Marrakech',
    photographer: 'Annie Spratt',
    featured: false,
  },
  {
    id: 38,
    src: 'https://images.unsplash.com/photo-1548994483-2a8be8e5b98c?w=800',
    alt: 'Hand-dyed leather bags and babouche slippers in Fes medina souk',
    category: 'Markets',
    city: 'Fes',
    photographer: 'Alex Block',
    featured: false,
  },
  {
    id: 39,
    src: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800',
    alt: 'Colorful handwoven Moroccan Berber rugs hanging on display wall',
    category: 'Markets',
    city: 'Marrakech',
    photographer: 'Annie Spratt',
    featured: false,
  },
  {
    id: 40,
    src: 'https://images.unsplash.com/photo-1577246750671-219c62bff268?w=800',
    alt: 'Handcrafted Moroccan lanterns and intricate metalwork in lamp souk',
    category: 'Markets',
    city: 'Marrakech',
    photographer: 'Calin Stan',
    featured: false,
  },

  /* ─── EXTRA NATURE / CITIES / ARCHITECTURE ─── */
  {
    id: 41,
    src: 'https://images.unsplash.com/photo-1570197571499-166b36435e9f?w=800',
    alt: 'Todra Gorge towering canyon walls with river flowing through base',
    category: 'Mountains',
    city: 'Tinghir',
    photographer: 'Kace Rodriguez',
    featured: true,
  },
  {
    id: 42,
    src: 'https://images.unsplash.com/photo-1565108959315-92ea023703bb?w=800',
    alt: 'Jardin Majorelle vibrant cobalt blue garden with cacti in Marrakech',
    category: 'Cities',
    city: 'Marrakech',
    photographer: 'Sergey Pesterev',
    featured: false,
  },
  {
    id: 43,
    src: 'https://images.unsplash.com/photo-1535530992057-1533fabb2b65?w=800',
    alt: 'Ancient cedar forest in the Middle Atlas Mountains near Azrou',
    category: 'Mountains',
    city: 'Azrou',
    photographer: 'Alberto Ferraro',
    featured: false,
  },
  {
    id: 44,
    src: 'https://images.unsplash.com/photo-1538991383142-36c4edeaffde?w=800',
    alt: 'Paradise Valley waterfall cascading into turquoise natural pools',
    category: 'Coast',
    city: 'Agadir',
    photographer: 'Yassine Khalfalli',
    featured: false,
  },
];

/* ═══════════════════════════════════════════════════════════════
   PHOTOGRAPHY TIPS DATA
   ═══════════════════════════════════════════════════════════════ */

interface PhotoTip {
  icon: React.ReactNode;
  title: string;
  body: string;
  settings: string;
}

const photographyTips: PhotoTip[] = [
  {
    icon: <Sunrise className="w-5 h-5" />,
    title: 'Golden Hour in the Desert',
    body: 'The Sahara dunes transform during the golden hours. Arrive at the dune crest 30 minutes before sunrise or sunset for the most dramatic light. The low-angle sun creates deep shadows in the sand ripples and turns the dunes from amber to deep crimson. Side-lighting reveals the most texture.',
    settings: 'f/8-11, ISO 100, polarizer recommended. Shoot wide (16-35mm) for scale, telephoto (70-200mm) for abstract dune patterns. Protect gear from sand with a rain cover.',
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: 'Medina Street Photography',
    body: 'The narrow alleys of Fes and Marrakech present challenging light with extreme contrasts between shaded lanes and sunlit openings. The blue streets of Chefchaouen photograph best on overcast days when the light is even and the blue hues are most saturated. Early morning offers empty streets and soft light.',
    settings: 'f/2.8-4, ISO 400-1600, fast prime lenses (35mm or 50mm) excel in tight spaces. Shoot in RAW for maximum shadow recovery. A wide-angle lens (24mm) captures the towering walls.',
  },
  {
    icon: <Mountain className="w-5 h-5" />,
    title: 'Atlas Mountain Landscapes',
    body: 'The High Atlas offers stunning vistas of terraced valleys, snow-capped peaks, and Berber villages. The Dades and Todra gorges are most dramatic in afternoon side-light. The winding road to Tizi n\'Tichka pass provides endless viewpoints. Include foreground elements like wildflowers or stone walls for depth.',
    settings: 'f/8-16, ISO 100, tripod essential for sharp landscapes. Use graduated ND filters for bright skies. Telephoto compression (100-200mm) isolates distant villages against mountain backdrops.',
  },
  {
    icon: <Aperture className="w-5 h-5" />,
    title: 'Architecture & Tilework Details',
    body: 'Morocco\'s zellige mosaics, carved stucco, and painted cedar ceilings are endlessly photogenic. The interiors of riads, madrasas, and palaces require patience with low light. Symmetry and patterns are everywhere. Look up at ceilings and doorways for overlooked compositions. The Bou Inania Madrasa in Fes and Bahia Palace in Marrakech are photographer\'s dreams.',
    settings: 'f/5.6-8, ISO 800-3200, wide-angle lens (16-24mm) for interiors. A mini-tripod or beanbag helps in low light. Shoot straight-on for symmetry. Watch for color casts from stained glass.',
  },
  {
    icon: <UtensilsCrossed className="w-5 h-5" />,
    title: 'Food & Market Photography',
    body: 'Moroccan cuisine is visually stunning. Tagines with their conical lids, pyramids of spices, fresh pastries, and mint tea ceremony all make compelling subjects. Market stalls with their colorful displays photograph best in the soft light filtering through fabric awnings. Ask stallholders before shooting and buy something small as a thank-you.',
    settings: 'f/2.8-4, ISO 400-800, a 50mm or 35mm prime gives beautiful shallow depth of field. Use natural window light in restaurants. Overhead flat-lay works well for tagine presentations.',
  },
  {
    icon: <Sun className="w-5 h-5" />,
    title: 'Coastal & Beach Photography',
    body: 'Essaouira\'s harbor, the dramatic arches of Legzira, and the surf breaks of Taghazout offer diverse coastal subjects. The Atlantic coast faces west, making sunsets the main event. Blue fishing boats against white-washed walls create classic Moroccan compositions. Wind is constant in Essaouira, so secure your tripod and protect lenses from salt spray.',
    settings: 'f/11-16, ISO 100, long exposures (1-30 seconds) with ND filter smooth ocean water beautifully. Polarizer deepens the blue sky and reduces reflections. Wipe lenses frequently for salt spray.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   CATEGORY STATS
   ═══════════════════════════════════════════════════════════════ */

const categoryIcons: Record<string, React.ReactNode> = {
  Cities: <Building2 className="w-4 h-4" />,
  Desert: <Sun className="w-4 h-4" />,
  Mountains: <Mountain className="w-4 h-4" />,
  Coast: <Waves className="w-4 h-4" />,
  Architecture: <Aperture className="w-4 h-4" />,
  Food: <UtensilsCrossed className="w-4 h-4" />,
  People: <Users className="w-4 h-4" />,
  Markets: <Store className="w-4 h-4" />,
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Morocco Photo Gallery - CityGuide',
  description:
    'A curated collection of over 40 stunning photographs showcasing the beauty, culture, landscapes, and culinary traditions of Morocco.',
  url: 'https://citytoursmorocco.com/gallery',
  image: photos
    .filter((p) => p.featured)
    .map((p) => ({
      '@type': 'ImageObject',
      contentUrl: p.src,
      name: p.alt,
      description: p.alt,
      creator: {
        '@type': 'Person',
        name: p.photographer,
      },
    })),
  numberOfItems: photos.length,
  provider: {
    '@type': 'Organization',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
};

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT (Server)
   ═══════════════════════════════════════════════════════════════ */

export default function GalleryPage() {
  /* Compute category counts for the overview strip */
  const categoryCounts = photos.reduce<Record<string, number>>((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});

  /* Pick a featured photo for the hero */
  const heroPhoto = photos.find((p) => p.id === 8); /* Sahara dunes */

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══ HERO ═══ */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=2800"
            alt="Sahara Desert sand dunes at golden hour, Morocco"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="container-morocco relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Photo Gallery</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Visual Journey
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Morocco Through the Lens
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Over {photos.length} curated photographs showcasing the Kingdom&apos;s ancient medinas,
              vast deserts, dramatic mountains, sun-kissed coast, and vibrant culture. Each image tells
              a story of this extraordinary land.
            </p>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ═══ CATEGORY OVERVIEW STRIP ═══ */}
      <section className="container-morocco -mt-6 relative z-10 mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {Object.entries(categoryCounts).map(([cat, count]) => (
            <div key={cat} className="card-moroccan p-3 text-center">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-[var(--color-secondary)] mb-1.5">
                {categoryIcons[cat]}
              </div>
              <p className="font-heading font-semibold text-sm text-text-primary">{cat}</p>
              <p className="text-xs text-text-muted">{count} photos</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ FEATURED HIGHLIGHT ═══ */}
      <section className="container-morocco mb-12">
        <div className="relative rounded-2xl overflow-hidden aspect-[21/9]">
          <img
            src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=1600&q=80"
            alt="Camel caravan crossing vast Sahara dunes at sunset, Morocco"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-accent)] text-white mb-3">
              <Camera className="w-3.5 h-3.5" /> Featured Photo
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
              Camel Caravan at Sunset
            </h2>
            <p className="text-white/80 text-sm md:text-base max-w-xl">
              A timeless scene in the Erg Chebbi dunes near Merzouga. The Sahara offers some of the most
              spectacular light on Earth, transforming the landscape minute by minute during golden hour.
            </p>
            <p className="text-white/50 text-xs mt-2">
              Photo by Ruben Hanssen -- Merzouga, Sahara Desert
            </p>
          </div>
        </div>
      </section>

      {/* ═══ GALLERY GRID (Client Component) ═══ */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-2">
              Browse the Collection
            </h2>
            <p className="text-text-secondary">
              Filter by category and click any photo to view it in full resolution with details.
            </p>
          </div>
          <GalleryClient photos={photos} />
        </div>
      </section>

      {/* ═══ PHOTOGRAPHY TIPS SECTION ═══ */}
      <section className="bg-[var(--color-primary-900)] text-white py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-accent)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              For Photographers
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Photography Tips for Morocco
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Camera settings, best times, and practical advice for capturing Morocco&apos;s most
              photogenic subjects. Whether you shoot with a phone or a professional DSLR, these tips
              will elevate your travel photography.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {photographyTips.map((tip) => (
              <div
                key={tip.title}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                    {tip.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-lg">{tip.title}</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4 flex-1">
                  {tip.body}
                </p>
                <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Focus className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
                      Recommended Settings
                    </p>
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed">
                    {tip.settings}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GENERAL PHOTO ETIQUETTE ═══ */}
      <section className="container-morocco py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-3">
              Photography Etiquette in Morocco
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Respectful photography creates better images and better travel experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Always Ask Before Photographing People',
                body: 'Moroccans value their privacy. Always ask permission before taking someone\'s portrait. A simple "Photo?" with a gesture toward your camera is often enough. Many people will happily pose, especially if you show genuine interest in their craft. Some may request a small tip of 5-10 MAD.',
              },
              {
                title: 'Avoid Photographing Sensitive Locations',
                body: 'Military installations, police stations, government buildings, and checkpoints should never be photographed. Interior photography is prohibited in most mosques (Hassan II Mosque being the notable exception). Royal palaces and their guards are also off-limits. When in doubt, put the camera away.',
              },
              {
                title: 'Be Discreet in Religious Areas',
                body: 'Around mosques and during religious ceremonies, keep your camera low-key. Do not photograph people praying. During Ramadan, be extra respectful about photographing the iftar meal or people fasting. Cemetery photography should be done from a respectful distance.',
              },
              {
                title: 'Share Your Photos',
                body: 'If you photograph a shopkeeper, artisan, or local family, offer to show them the photo on your screen. Many appreciate seeing themselves. If you promise to send a photo by email or WhatsApp, follow through. This small act of generosity builds bridges between travelers and communities.',
              },
            ].map((tip) => (
              <div key={tip.title} className="card-moroccan p-5 md:p-6 border-l-4 border-l-[var(--color-secondary)]">
                <h3 className="font-heading font-semibold text-text-primary mb-2">{tip.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="bg-[var(--surface-muted)] py-12">
        <div className="container-morocco text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Ready to Capture Your Own Morocco Moments?
          </h2>
          <p className="text-text-secondary mb-6 max-w-xl mx-auto">
            Explore our city guides for the best photography locations and plan your route through Morocco&apos;s most photogenic destinations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/cities"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-heading font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
            >
              Explore Cities <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/photography"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-heading font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              Photography Guide <Camera className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
