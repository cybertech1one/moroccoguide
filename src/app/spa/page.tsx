import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Droplets,
  Thermometer,
  Star,
  MapPin,
  Clock,
  Coins,
  Users,
  ShieldCheck,
  Sparkles,
  Heart,
  CheckCircle,
  AlertTriangle,
  Hand,
  Leaf,
  Crown,
  Building2,
  ArrowRight,
  Sun,
  Mountain,
  Waves,
  Flower2,
  Shield,
  Banknote,
  Eye,
  Palette,
  BookOpen,
  Gem,
  CircleDot,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title:
    'Morocco Spa & Wellness Guide | Hammam, Argan Oil, Thalassotherapy & Healing Retreats',
  description:
    'Complete guide to Moroccan spa and wellness experiences. Traditional hammam rituals, argan oil treatments, ghassoul clay beauty secrets, thalassotherapy, yoga retreats, desert wellness, Berber healing, and top spas in Marrakech, Fes, Essaouira, and Agadir.',
  keywords: [
    'Morocco spa',
    'Moroccan wellness',
    'hammam guide',
    'argan oil treatment',
    'ghassoul clay',
    'thalassotherapy Morocco',
    'Marrakech spa',
    'Fes hammam',
    'Essaouira spa',
    'Agadir thalassotherapy',
    'Moroccan beauty rituals',
    'desert wellness retreat',
    'Berber healing',
    'yoga retreat Morocco',
    'rose water Morocco',
    'black soap Morocco',
    'henna Morocco',
    'Morocco meditation retreat',
    'hammam etiquette',
    'traditional Moroccan spa',
  ],
  openGraph: {
    title: 'Morocco Spa & Wellness Guide - CityGuide',
    description:
      'Discover centuries-old Moroccan wellness traditions. From traditional hammam rituals and argan oil treatments to desert healing retreats and coastal thalassotherapy.',
    url: 'https://citytoursmorocco.com/spa',
    images: [
      {
        url: '/images/hero-wellness-spa.webp',
        width: 1200,
        height: 630,
        alt: 'Moroccan spa interior with traditional zellige tiles, steam, and argan oil treatments',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Spa & Wellness Guide | CityGuide',
    description:
      'Traditional hammam rituals, argan oil treatments, thalassotherapy, yoga retreats, desert wellness, and top spa experiences across Morocco.',
  },
  alternates: { canonical: 'https://citytoursmorocco.com/spa' },
};

/* =====================================================================
   JSON-LD STRUCTURED DATA
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://citytoursmorocco.com/spa#guide',
      headline: 'Complete Morocco Spa & Wellness Guide',
      description:
        'Comprehensive guide to Moroccan spa and wellness experiences including traditional hammam, argan oil treatments, thalassotherapy, beauty rituals, yoga retreats, desert wellness, and Berber healing traditions.',
      url: 'https://citytoursmorocco.com/spa',
      publisher: {
        '@type': 'Organization',
        name: 'CityGuide Morocco',
        url: 'https://citytoursmorocco.com',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a Moroccan hammam and what should I expect?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Moroccan hammam is a traditional steam bathhouse central to Moroccan culture for over a thousand years. The ritual involves steam rooms of increasing heat, application of black soap (savon beldi), vigorous exfoliation with a kessa glove (gommage), a ghassoul clay mask, and a cool-down with mint tea. Public hammams cost 15-30 MAD while luxury spa hammams range from 500-2000 MAD.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the benefits of argan oil spa treatments?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Argan oil, known as liquid gold, is rich in vitamin E, essential fatty acids, and antioxidants. Spa treatments using argan oil deeply moisturize skin and hair, reduce inflammation, fight signs of aging, and improve skin elasticity. Morocco is the only country where argan trees grow naturally, making it an authentic local treatment.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a spa experience cost in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Spa costs in Morocco range widely. A public hammam visit costs 15-30 MAD (approximately $1.50-$3). A mid-range hotel hammam with gommage costs 200-500 MAD ($20-$50). Luxury spa hammam packages with massage and treatments range from 500-2000 MAD ($50-$200). Full-day spa experiences at premium resorts can cost 2000-5000 MAD ($200-$500).',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I bring to a Moroccan hammam?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For a public hammam, bring a towel, flip-flops, a change of underwear, and a plastic bag for wet items. You can also bring or buy black soap (savon beldi), an exfoliating glove (kessa/kiis), and ghassoul clay at the entrance. For private or luxury hammams, everything is provided including robes, slippers, products, and disposable underwear.',
          },
        },
      ],
    },
  ],
};

/* =====================================================================
   HAMMAM RITUAL STEPS
   ===================================================================== */

const hammamRitualSteps = [
  {
    step: 1,
    title: 'Arrival & Preparation',
    description:
      'Enter the changing area (maslakh) and undress. In public hammams, Moroccans wear underwear. In private spa hammams, disposable underwear is provided. Store belongings in a locker, take a moment to relax, and prepare for the experience.',
    duration: '5-10 min',
    icon: <Users className="w-5 h-5" />,
  },
  {
    step: 2,
    title: 'The Warm Room (Bayt al-Wastani)',
    description:
      'Move into the first heated room where moderate temperature and humidity begin opening your pores. Sit on warm marble or tile, let the steam envelop you, and allow your body to acclimatize to the heat gradually over 10 to 15 minutes.',
    duration: '10-15 min',
    icon: <Thermometer className="w-5 h-5" />,
  },
  {
    step: 3,
    title: 'Black Soap Application (Savon Beldi)',
    description:
      'A thick olive-oil-based paste called savon beldi is generously applied to your entire body. This traditional black soap, often enriched with eucalyptus, is left on the skin for several minutes to soften dead skin cells and deeply nourish the skin.',
    duration: '10 min',
    icon: <Leaf className="w-5 h-5" />,
  },
  {
    step: 4,
    title: 'The Hot Room (Bayt al-Sakhun)',
    description:
      'Proceed to the hottest room where intense steam fully opens your pores. The black soap continues working on your skin while the heat relaxes deep muscle tension. Temperatures can reach 45 to 50 degrees Celsius. Breathe slowly and let the steam cleanse your respiratory system.',
    duration: '10-15 min',
    icon: <Droplets className="w-5 h-5" />,
  },
  {
    step: 5,
    title: 'Gommage Scrub (Kessa)',
    description:
      'The signature moment of the hammam. Using a rough exfoliating mitt called a kessa, the tayaba (hammam attendant) vigorously scrubs your entire body with firm, rhythmic strokes. Rolls of dead skin visibly peel away, revealing fresh, glowing skin beneath.',
    duration: '15-20 min',
    icon: <Hand className="w-5 h-5" />,
  },
  {
    step: 6,
    title: 'Ghassoul Clay Mask',
    description:
      'A mineral-rich clay called ghassoul (or rhassoul), sourced exclusively from the Atlas Mountains, is applied as a full-body mask. This natural clay draws out impurities, tightens pores, and leaves skin incredibly smooth. Some hammams also apply it to hair and scalp.',
    duration: '10-15 min',
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    step: 7,
    title: 'Rinse & Cool Down',
    description:
      'Buckets of alternating warm and cool water are poured over you to rinse away the clay and close your pores. Some luxury hammams use rose water in the final rinse for a fragrant, luxurious finish. You move gradually back through the rooms as your body temperature normalizes.',
    duration: '10 min',
    icon: <Waves className="w-5 h-5" />,
  },
  {
    step: 8,
    title: 'Relaxation & Mint Tea',
    description:
      'Return to the resting area, wrapped in warm towels, where you relax on cushions and are served traditional Moroccan mint tea. This final phase is essential: the combination of deep cleansing and total relaxation leaves you profoundly renewed. Many hammams offer argan oil massage at this stage.',
    duration: '15-30 min',
    icon: <Heart className="w-5 h-5" />,
  },
];

/* =====================================================================
   HAMMAM ETIQUETTE TIPS
   ===================================================================== */

const hammamEtiquetteTips = [
  'Men and women always have separate sessions or facilities. Never enter the wrong session.',
  'Bring flip-flops, a towel, and a change of underwear to public hammams.',
  'Complete nudity is not the norm in public hammams; wear underwear at all times.',
  'Tip the hammam attendant (tayaba) 20 to 50 MAD, or more for excellent service.',
  'Drink plenty of water before and after to stay hydrated in the heat.',
  'Apply argan oil post-hammam to lock in moisture while pores are open.',
  'Avoid eating a large meal right before your hammam visit.',
  'Leave the hot room immediately if you feel dizzy or unwell.',
  'In public hammams, it is polite to share soap and scrubbing supplies with neighbors.',
  'Remove all jewelry before entering the steam rooms.',
  'Speak quietly and respect the calm, meditative atmosphere.',
  'Pregnant women and those with heart conditions should consult a doctor first.',
];

/* =====================================================================
   ARGAN OIL TREATMENTS
   ===================================================================== */

const arganTreatments = [
  {
    name: 'Argan Oil Full-Body Massage',
    description:
      'A deeply moisturizing massage using pure cosmetic-grade argan oil. The massage therapist works the oil into the skin using long, flowing strokes combined with pressure-point techniques. Argan oil absorbs quickly and leaves the skin soft, nourished, and lightly fragrant without any greasy residue.',
    duration: '60-90 min',
    benefits: ['Deep hydration', 'Muscle tension relief', 'Anti-aging properties', 'Skin elasticity boost'],
    price: 'From 300 MAD',
  },
  {
    name: 'Argan Hair & Scalp Treatment',
    description:
      'A restorative treatment where warm argan oil is massaged into the scalp and worked through the hair from root to tip. The oil is left to penetrate under a warm towel or steam for 20 minutes, then rinsed. The result is deeply conditioned, shiny hair with a healthy scalp.',
    duration: '45 min',
    benefits: ['Hair strengthening', 'Split-end repair', 'Scalp nourishment', 'Natural shine'],
    price: 'From 200 MAD',
  },
  {
    name: 'Argan & Rose Body Wrap',
    description:
      'The body is coated in a blend of argan oil and Moroccan rose extracts, then wrapped in warm linens. As the body heats, the oils penetrate deeply while the rose soothes and tones the skin. After 30 minutes, the wrap is removed and the remaining oil is massaged into the skin.',
    duration: '75 min',
    benefits: ['Total body nourishment', 'Rose aromatherapy', 'Detoxification', 'Skin tone improvement'],
    price: 'From 400 MAD',
  },
  {
    name: 'Argan Anti-Aging Facial',
    description:
      'A targeted facial treatment using argan oil combined with prickly pear seed oil (another Moroccan specialty). The facial includes cleansing, gentle exfoliation, a ghassoul clay mask, and a final application of concentrated argan serum. Rich in vitamin E and ferulic acid, the treatment targets fine lines and age spots.',
    duration: '60 min',
    benefits: ['Wrinkle reduction', 'Skin brightening', 'Pore minimizing', 'Antioxidant protection'],
    price: 'From 350 MAD',
  },
];

/* =====================================================================
   MOROCCAN BEAUTY RITUALS
   ===================================================================== */

const beautyRituals = [
  {
    name: 'Ghassoul Clay',
    origin: 'Atlas Mountains',
    description:
      'Mined exclusively from a unique deposit in the Atlas Mountains near Fes, ghassoul (also spelled rhassoul) is a mineral-rich clay that has been used for over 1,400 years. It absorbs excess oil and impurities without stripping the skin of its natural moisture, making it a remarkably effective yet gentle cleanser. Used as a face mask, body treatment, and even shampoo.',
    uses: ['Face mask', 'Body wrap', 'Hair cleanser', 'Scalp treatment'],
    price: '15-40 MAD per 200g',
    icon: <Mountain className="w-6 h-6" />,
  },
  {
    name: 'Rose Water (Maward)',
    origin: 'Dades Valley (Valley of Roses)',
    description:
      'Each spring in the Dades Valley, millions of Damask rose petals are hand-picked at dawn and steam-distilled into pure rose water. This centuries-old tradition produces a fragrant hydrosol used as a skin toner, perfume, culinary ingredient, and refreshing facial mist. The annual Rose Festival in Kelaat M\'Gouna celebrates the May harvest.',
    uses: ['Facial toner', 'Hair mist', 'Cooking ingredient', 'Perfume base'],
    price: '30-80 MAD per 500ml',
    icon: <Flower2 className="w-6 h-6" />,
  },
  {
    name: 'Black Soap (Savon Beldi)',
    origin: 'Nationwide tradition',
    description:
      'The essential preparation for the hammam gommage, savon beldi is made from olive oil and macerated black olives, producing a dark, paste-like soap with a rich, earthy aroma. Applied to the skin and left for 10 minutes in the steam room, it softens dead skin cells for removal with the kessa exfoliating glove. Some varieties are enriched with eucalyptus, lavender, or argan oil.',
    uses: ['Pre-gommage preparation', 'Deep pore cleansing', 'Skin softening', 'Body exfoliation'],
    price: '20-60 MAD per 200g',
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    name: 'Henna (Henna)',
    origin: 'Southeastern Morocco',
    description:
      'Henna is deeply woven into Moroccan culture, used for both beauty and celebration. The leaves of the henna plant are dried, ground into a fine powder, and mixed with water and lemon juice to create a paste that stains the skin in reddish-brown patterns. Bridal henna ceremonies (known as the Laylat al-Henna) are elaborate rituals where professional artists (neqqashat) decorate the bride with intricate geometric and floral designs.',
    uses: ['Body art (mehndi)', 'Hair dye and conditioner', 'Bridal ceremonies', 'Nail tinting'],
    price: '50-500 MAD per session',
    icon: <Palette className="w-6 h-6" />,
  },
];

/* =====================================================================
   TOP SPA EXPERIENCES BY CITY
   ===================================================================== */

const marrakechSpas = [
  {
    name: 'Royal Mansour Spa',
    type: 'Ultra-Luxury Palace Spa',
    description:
      'One of the most luxurious spas in Africa, set within the Royal Mansour palace hotel. The 2,500 square meter spa features a traditional hammam, indoor pool, beauty salon, and treatment rooms offering both Moroccan and international wellness protocols. The signature Royal Hammam uses 24-carat gold leaf for the ultimate indulgence.',
    priceRange: 'From 1,500 MAD',
    rating: 4.9,
    highlights: ['Gold leaf hammam', 'Indoor pool', '2,500 sqm facility', 'Palace setting'],
    image: '/images/hero-spa.webp',
  },
  {
    name: 'La Mamounia Spa',
    type: 'Heritage Luxury Spa',
    description:
      'The legendary La Mamounia hotel\'s spa draws on centuries of Moroccan beauty traditions. Set in lush gardens, the spa includes a traditional hammam, vitality pool, and an extensive menu of treatments using locally sourced ingredients: argan oil, orange blossom, Atlas Mountain herbs, and Saharan minerals.',
    priceRange: 'From 1,200 MAD',
    rating: 4.9,
    highlights: ['Heritage hammam', 'Garden setting', 'Orange blossom ritual', 'Vitality pool'],
    image: '/images/hero-spa.webp',
  },
  {
    name: 'Heritage Spa',
    type: 'Boutique Medina Spa',
    description:
      'A beautifully designed spa in the medina that blends Moroccan architectural heritage with world-class services. Known for its exceptional gommage technique and premium locally sourced products, including argan oil from Essaouira and rose water from the Dades Valley. An intimate, authentic experience.',
    priceRange: 'From 500 MAD',
    rating: 4.8,
    highlights: ['Medina location', 'Local products', 'Expert gommage', 'Intimate setting'],
    image: '/images/hero-hammam.webp',
  },
  {
    name: 'Les Bains de Marrakech',
    type: 'Premium Day Spa',
    description:
      'A palatial spa near the Saadian Tombs offering the most comprehensive hammam and wellness experience in Marrakech. Spread across multiple levels of a grand riad, it features a traditional hammam circuit, private treatment suites, a swimming pool, and a rooftop terrace. Half-day and full-day packages available.',
    priceRange: 'From 600 MAD',
    rating: 4.9,
    highlights: ['Multi-level venue', 'Swimming pool', 'Full-day packages', 'Rooftop terrace'],
    image: '/images/hero-spa.webp',
  },
];

const fesSpas = [
  {
    name: 'Spa Laaroussa',
    type: 'Riad Palace Spa',
    description:
      'Located within the exquisite Riad Laaroussa in the heart of the Fes medina, this intimate spa offers a deeply authentic hammam experience in a 17th-century palace setting. The hammam chamber features original tadelakt walls and is heated by a traditional wood-fired boiler, preserving centuries-old methods.',
    priceRange: 'From 400 MAD',
    rating: 4.8,
    highlights: ['17th-century palace', 'Wood-fired heating', 'Original tadelakt', 'Private experience'],
    image: '/images/hero-riad-interior.webp',
  },
  {
    name: 'Riad Fes Spa',
    type: 'Luxury Hotel Spa',
    description:
      'The spa at the five-star Riad Fes is one of the most luxurious wellness experiences in the imperial city. Built into the ancient riad architecture, it features a marble hammam, a swimming pool, and treatment rooms overlooking the medina rooftops. The signature Ceremony of the Senses combines hammam with a full aromatherapy journey.',
    priceRange: 'From 500 MAD',
    rating: 4.7,
    highlights: ['Marble hammam', 'Rooftop views', 'Swimming pool', 'Aromatherapy packages'],
    image: '/images/hero-riad-interior.webp',
  },
  {
    name: 'Le Bain Bleu',
    type: 'Boutique Hammam',
    description:
      'A beautifully designed private hammam in the Fes medina offering a curated experience with local beauty products. The blue-tiled rooms reference the famous Fes blue pottery tradition. A relaxed, artist-designed space that perfectly bridges tradition and modern aesthetics. Couples treatments available.',
    priceRange: 'From 400 MAD',
    rating: 4.7,
    highlights: ['Blue-tiled rooms', 'Artisan design', 'Local products', 'Couples treatments'],
    image: '/images/hero-spa.webp',
  },
];

const essaouiraSpas = [
  {
    name: 'Sofitel Mogador Spa',
    type: 'Resort Thalassotherapy Spa',
    description:
      'A world-class thalassotherapy center on the Essaouira coast. The spa uses Atlantic seawater in hydrotherapy pools, jet showers, and body wraps. Combined with Moroccan hammam traditions and argan oil treatments sourced from the local cooperatives, it offers a uniquely Moroccan coastal wellness experience.',
    priceRange: 'From 600 MAD',
    rating: 4.8,
    highlights: ['Thalassotherapy', 'Ocean views', 'Seawater pools', 'Local argan treatments'],
    image: '/images/hero-spa.webp',
  },
  {
    name: 'Heure Bleue Palais Spa',
    type: 'Boutique Palace Spa',
    description:
      'Set within a beautifully restored French colonial palace overlooking the medina and Atlantic, this intimate spa combines European spa techniques with traditional Moroccan treatments. The rooftop pool with ocean views provides a serene setting for post-treatment relaxation.',
    priceRange: 'From 400 MAD',
    rating: 4.7,
    highlights: ['Rooftop pool', 'Ocean views', 'Palace setting', 'European-Moroccan fusion'],
    image: '/images/hero-essaouira.webp',
  },
];

const agadirSpas = [
  {
    name: 'Atlantic Palace Thalasso & Spa',
    type: 'Thalassotherapy Center',
    description:
      'One of Morocco\'s premier thalassotherapy centers, located on the Agadir beachfront. The center uses heated Atlantic seawater in a range of hydrotherapy treatments including jet baths, affusion showers, seaweed wraps, and underwater massage. A complete health-focused spa experience overseen by medical professionals.',
    priceRange: 'From 500 MAD',
    rating: 4.7,
    highlights: ['Medical thalassotherapy', 'Beachfront location', 'Seaweed treatments', 'Professional oversight'],
    image: '/images/hero-spa.webp',
  },
  {
    name: 'Sofitel Agadir Royal Bay Spa',
    type: 'Luxury Resort Spa',
    description:
      'A sprawling spa within the Sofitel resort featuring both thalassotherapy and traditional Moroccan treatments. The spa includes an indoor seawater pool, hammam, beauty center, and extensive treatment menu. The argan oil ritual, using locally pressed oil from the Souss Valley, is a signature experience.',
    priceRange: 'From 500 MAD',
    rating: 4.8,
    highlights: ['Seawater pool', 'Argan oil ritual', 'Resort setting', 'Comprehensive menu'],
    image: '/images/hero-spa.webp',
  },
  {
    name: 'Tikida Golf Palace Spa',
    type: 'Resort Wellness Center',
    description:
      'A large wellness center within the Tikida Golf Palace resort. The spa offers traditional hammam, thalassotherapy, and modern fitness facilities. Particularly well-suited for active wellness travelers who want to combine golf, swimming, and spa treatments in a single resort setting.',
    priceRange: 'From 400 MAD',
    rating: 4.6,
    highlights: ['Golf resort setting', 'Thalassotherapy', 'Fitness center', 'Multiple pools'],
    image: '/images/hero-spa.webp',
  },
];

/* =====================================================================
   YOGA & MEDITATION RETREATS
   ===================================================================== */

const yogaRetreats = [
  {
    name: 'Surf & Yoga Retreat Taghazout',
    location: 'Taghazout',
    description:
      'Combine daily yoga sessions with world-class surfing on the Atlantic coast. Rooftop yoga at sunrise, surf lessons during the day, and meditation at sunset. Healthy organic meals and a relaxed community atmosphere make this a favorite for solo travelers.',
    duration: '7 days',
    price: 'From 5,500 MAD',
    highlights: ['Daily yoga', 'Surf lessons', 'Organic meals', 'Ocean views'],
    image: '/images/hero-yoga.webp',
  },
  {
    name: 'Atlas Mountain Yoga Escape',
    location: 'Imlil',
    description:
      'A secluded retreat in the High Atlas Mountains with daily yoga practice, guided mountain walks, and traditional Berber hospitality. The crisp mountain air and panoramic views create a transformative setting for deepening your practice.',
    duration: '5 days',
    price: 'From 4,200 MAD',
    highlights: ['Mountain yoga', 'Guided hikes', 'Berber cuisine', 'Meditation'],
    image: '/images/hero-atlas.webp',
  },
  {
    name: 'Essaouira Mindfulness Retreat',
    location: 'Essaouira',
    description:
      'A holistic retreat combining mindfulness meditation, gentle yoga, and creative workshops in a restored riad overlooking the Atlantic. Perfect for those seeking inner peace and creative inspiration in the windswept coastal city.',
    duration: '4 days',
    price: 'From 3,800 MAD',
    highlights: ['Mindfulness', 'Gentle yoga', 'Art workshops', 'Sea views'],
    image: '/images/hero-essaouira.webp',
  },
  {
    name: 'Sahara Desert Yoga Retreat',
    location: 'Merzouga',
    description:
      'A unique retreat that combines yoga and meditation with the transformative power of the Sahara. Practice on the dunes at sunrise, meditate under the stars, and experience profound desert silence that resets the nervous system.',
    duration: '3 days',
    price: 'From 3,500 MAD',
    highlights: ['Desert yoga', 'Stargazing', 'Camel trek', 'Sound healing'],
    image: '/images/hero-desert.webp',
  },
  {
    name: 'Riad Retreat Marrakech',
    location: 'Marrakech',
    description:
      'An urban retreat in a luxurious medina riad. Daily yoga in the courtyard garden, hammam sessions, cooking classes, and guided medina walks create the perfect combination of wellness and cultural immersion in the Red City.',
    duration: '4 days',
    price: 'From 4,500 MAD',
    highlights: ['Riad yoga', 'Hammam included', 'Cooking class', 'Medina tour'],
    image: '/images/hero-marrakech.webp',
  },
  {
    name: 'Dades Valley Yoga & Hiking',
    location: 'Dades Gorge',
    description:
      'Set in the dramatic landscape of the Dades Gorge with morning yoga on the terrace overlooking the canyon, afternoon hikes through rose-filled valleys, and evening meditation sessions. The scenery alone is profoundly restorative.',
    duration: '5 days',
    price: 'From 3,900 MAD',
    highlights: ['Canyon views', 'Valley hikes', 'Rose valley', 'Stargazing'],
    image: '/images/hero-atlas.webp',
  },
];

/* =====================================================================
   THALASSOTHERAPY DATA
   ===================================================================== */

const thalassotherapyCenters = [
  {
    name: 'Sofitel Mogador Thalasso Center',
    city: 'Essaouira',
    description:
      'Morocco\'s premier thalassotherapy destination. The center pumps fresh Atlantic seawater directly into treatment rooms, maintaining it at therapeutic temperatures. Treatments include seawater jet baths, algae body wraps, underwater pressure massage, and affusion showers. A 3-day thalassotherapy cure is the most popular package, addressing fatigue, joint pain, and stress.',
    treatments: ['Seawater jet baths', 'Algae wraps', 'Underwater massage', 'Affusion showers', 'Aquagym'],
    price: 'From 600 MAD per session / 3,500 MAD for 3-day cure',
    image: '/images/hero-essaouira.webp',
  },
  {
    name: 'Atlantic Palace Thalasso',
    city: 'Agadir',
    description:
      'A medically supervised thalassotherapy center on the Agadir seafront. The facility uses heated Atlantic seawater in a full circuit of hydrotherapy treatments. Programs are designed in consultation with on-site physicians and can target specific health goals including post-surgical recovery, chronic pain management, and weight management.',
    treatments: ['Medical consultation', 'Seawater circuit', 'Seaweed therapy', 'Pressotherapy', 'Marine mud wraps'],
    price: 'From 500 MAD per session / 4,000 MAD for 4-day program',
    image: '/images/hero-spa.webp',
  },
  {
    name: 'Mazagan Beach Resort Thalasso',
    city: 'El Jadida',
    description:
      'A 2,000 square meter oceanfront thalassotherapy center combining seawater treatments with Moroccan hammam traditions. The Atlantic seawater is used in hydrotherapy pools, jet showers, and body wraps. One of the most comprehensive thalassotherapy facilities in North Africa, with both wellness and medical programs available.',
    treatments: ['Hydrotherapy circuit', 'Seawater jacuzzi', 'Ocean-view hammam', 'Marine body wraps', 'Reflexology'],
    price: 'From 600 MAD per session / 5,000 MAD for 5-day program',
    image: '/images/hero-spa.webp',
  },
];

/* =====================================================================
   DESERT WELLNESS RETREATS
   ===================================================================== */

const desertRetreats = [
  {
    title: 'Sand Bathing Therapy (Psammotherapy)',
    description:
      'In Merzouga, the ancient practice of burying oneself in hot sand has been used by locals for generations to treat rheumatism, joint pain, and skin conditions. During summer months (June to September), the desert sand reaches temperatures of 60 to 70 degrees Celsius. Patients are buried up to their neck for 10 to 20 minutes under supervision. Several guesthouses in Merzouga offer organized sand bath experiences.',
    price: '100-200 MAD per session',
    location: 'Merzouga',
  },
  {
    title: 'Digital Detox Desert Camps',
    description:
      'Several luxury desert camps now offer structured digital detox programs. Surrender your devices on arrival and spend 2 to 3 days immersed in the desert: journaling, sandboarding, stargazing, and sharing stories around the campfire. Participants consistently report improved sleep, reduced anxiety, and renewed perspective.',
    price: 'From 2,500 MAD (2-3 days)',
    location: 'Erg Chebbi / Erg Chigaga',
  },
  {
    title: 'Dune Meditation & Sound Healing',
    description:
      'Guided meditation sessions on the dunes at sunrise and sunset harness the desert\'s natural silence. Many retreats incorporate sound healing with Berber drums, Tibetan singing bowls, and the natural acoustics of the desert landscape. The complete absence of light pollution also makes the Sahara one of the best stargazing locations on Earth.',
    price: 'From 1,500 MAD (2 days)',
    location: 'Merzouga / M\'Hamid',
  },
  {
    title: 'Nomadic Wellness Caravans',
    description:
      'Multi-day camel treks with wellness elements woven throughout: morning stretching on the dunes, wild herb identification with Berber guides, cooking over open fire, sleeping under the stars, and practicing gratitude in the vast silence. These journeys mirror the ancient trade caravan routes and provide a deeply transformative experience.',
    price: 'From 3,000 MAD (3 days)',
    location: 'M\'Hamid to Erg Chigaga',
  },
];

/* =====================================================================
   BERBER HEALING TRADITIONS
   ===================================================================== */

const berberHealing = [
  {
    title: 'Herbal Medicine (Al-Attar)',
    description:
      'The Berber herbalist tradition is one of the oldest in North Africa. Every medina has its own attar (herbalist) whose shop is stacked floor-to-ceiling with dried herbs, roots, barks, and minerals. Common Berber remedies include thyme tea for colds and respiratory ailments, wormwood (chiba) for digestive issues, verbena (louiza) for relaxation and sleep, and fenugreek for general vitality. Many of these remedies have been validated by modern research.',
    icon: <Leaf className="w-6 h-6" />,
  },
  {
    title: 'Honey Therapy',
    description:
      'Moroccan mountain honey, particularly from the Atlas and Rif regions, is prized for its therapeutic properties. Thyme honey is used for wound healing and sore throats. Euphorbia honey (daghmous) is believed to boost immunity and treat respiratory conditions. Many Berber healers combine honey with black seed (nigella) oil, known locally as habbat al-barakah (the blessed seed), for a powerful immune-boosting tonic.',
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: 'Cupping (Hijama)',
    description:
      'The practice of wet and dry cupping has deep roots in Moroccan traditional medicine. Performed by experienced practitioners (hajjam), cupping involves placing heated glass cups on the skin to create suction, which is believed to improve blood flow, reduce pain, and remove toxins. In Morocco, cupping is traditionally performed on specific days and combined with herbal preparations.',
    icon: <CircleDot className="w-6 h-6" />,
  },
  {
    title: 'Aromatic Steam Treatments',
    description:
      'Berber women have long used aromatic steam treatments (tbukhira) for both beauty and health. A clay pot filled with water and herbs (rosemary, thyme, eucalyptus, lavender) is heated, and the patient sits draped in a blanket over the fragrant steam. This home remedy treats congestion, skin ailments, and general fatigue. It is essentially a personal, portable hammam experience.',
    icon: <Droplets className="w-6 h-6" />,
  },
  {
    title: 'Spiritual Healing & Music Therapy',
    description:
      'The Gnawa tradition combines spiritual healing with music. Gnawa ceremonies (lilas) involve hypnotic rhythms played on the guembri (bass lute) and metal castanets (qraqeb), combined with chanting, incense, and trance. While rooted in spiritual belief, the ceremonies have documented therapeutic effects, particularly for stress and psychological well-being. UNESCO recognized Gnawa culture as Intangible Cultural Heritage in 2019.',
    icon: <BookOpen className="w-6 h-6" />,
  },
];

/* =====================================================================
   PRICE GUIDE DATA
   ===================================================================== */

const priceGuide = [
  { experience: 'Public hammam entry', budget: '15-30 MAD', mid: 'N/A', luxury: 'N/A' },
  { experience: 'Public hammam + gommage', budget: '50-80 MAD', mid: 'N/A', luxury: 'N/A' },
  { experience: 'Hotel / riad hammam', budget: 'N/A', mid: '200-500 MAD', luxury: 'N/A' },
  { experience: 'Luxury spa hammam package', budget: 'N/A', mid: 'N/A', luxury: '500-2,000 MAD' },
  { experience: 'Full-body argan oil massage', budget: '100-200 MAD', mid: '300-500 MAD', luxury: '600-1,500 MAD' },
  { experience: 'Thalassotherapy session', budget: 'N/A', mid: '400-600 MAD', luxury: '800-1,500 MAD' },
  { experience: 'Yoga retreat (per day)', budget: '300-500 MAD', mid: '600-1,000 MAD', luxury: '1,500-3,000 MAD' },
  { experience: 'Desert wellness retreat (3 days)', budget: '1,500-2,500 MAD', mid: '3,000-5,000 MAD', luxury: '8,000-15,000 MAD' },
  { experience: 'Henna body art session', budget: '50-100 MAD', mid: '150-300 MAD', luxury: '300-500 MAD' },
  { experience: 'Argan oil (cosmetic, per liter)', budget: '150-250 MAD', mid: '250-400 MAD', luxury: '400-600 MAD' },
  { experience: 'Rose water (per 500ml)', budget: '30-50 MAD', mid: '50-80 MAD', luxury: '80-150 MAD' },
];

/* =====================================================================
   WHAT TO BRING TO HAMMAM
   ===================================================================== */

const hammamPackingList = {
  publicHammam: [
    { item: 'Towel (large)', note: 'For drying off afterward; not provided in public hammams' },
    { item: 'Flip-flops', note: 'Essential for hygiene on wet tile floors' },
    { item: 'Change of underwear', note: 'Your hammam pair will be soaked' },
    { item: 'Plastic bag', note: 'For wet items after the session' },
    { item: 'Black soap (savon beldi)', note: 'Can buy at entrance for 10-20 MAD' },
    { item: 'Exfoliating glove (kessa/kiis)', note: 'Can buy at entrance for 10-20 MAD' },
    { item: 'Ghassoul clay', note: 'Optional; can buy at entrance for 10-20 MAD' },
    { item: 'Small bottle of argan oil', note: 'For post-hammam skin moisture' },
    { item: 'Water bottle', note: 'Stay hydrated; the heat is intense' },
    { item: 'Small amount of cash', note: '20-50 MAD for tayaba tip + 15-30 MAD entry' },
  ],
  privateHammam: [
    { item: 'Nothing required', note: 'Everything is provided: towels, robes, slippers, products' },
    { item: 'Swimsuit (optional)', note: 'Disposable underwear is usually provided' },
    { item: 'Water bottle', note: 'Some spas provide water, but bring your own to be safe' },
    { item: 'Cash or card for tip', note: '50-100 MAD for your therapist is appreciated' },
  ],
};

/* =====================================================================
   RELATED PAGES
   ===================================================================== */

const relatedPages = [
  {
    title: 'Traditional Hammam Guide',
    description: 'Deep dive into the Moroccan hammam experience with the top 12 hammams across Morocco.',
    href: '/hammam',
    icon: <Droplets className="w-5 h-5" />,
  },
  {
    title: 'Wellness & Healing',
    description: 'Broader wellness guide covering hot springs, mountain retreats, and holistic healing.',
    href: '/wellness',
    icon: <Heart className="w-5 h-5" />,
  },
  {
    title: 'Yoga Retreats',
    description: 'Dedicated guide to yoga and meditation retreats across Morocco.',
    href: '/yoga-retreats',
    icon: <Sun className="w-5 h-5" />,
  },
  {
    title: 'Argan Oil Guide',
    description: 'Everything about Morocco\'s liquid gold: production, uses, and where to buy.',
    href: '/argan-oil',
    icon: <Leaf className="w-5 h-5" />,
  },
  {
    title: 'Moroccan Culture & Etiquette',
    description: 'Cultural customs, dress codes, and social norms for respectful travel in Morocco.',
    href: '/etiquette',
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    title: 'Activities & Experiences',
    description: 'Browse all activities and bookable experiences across Morocco.',
    href: '/activities',
    icon: <Star className="w-5 h-5" />,
  },
];

/* =====================================================================
   JSON-LD COMPONENT
   ===================================================================== */

function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* =====================================================================
   PAGE COMPONENT (Server)
   ===================================================================== */

export default function SpaPage() {
  return (
    <>
      <JsonLd />

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-wellness-spa.webp"
            alt="Moroccan spa wellness experience with traditional hammam tiles and argan oil treatments"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Spa &amp; Wellness</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Centuries of Healing Tradition
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Morocco Spa &amp; Wellness Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From the ancient steam rituals of the hammam to argan oil
              treatments, coastal thalassotherapy, and desert healing retreats,
              Morocco offers one of the richest wellness traditions on Earth.
              Discover how to experience it all.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* =====================================================================
         1. INTRODUCTION TO MOROCCAN WELLNESS TRADITIONS
         ===================================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Heart className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Moroccan Wellness Traditions
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              For over a thousand years, Morocco has cultivated a rich tapestry
              of wellness practices that blend Berber, Arab, Andalusian, and
              African healing traditions into a unique culture of self-care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="card-moroccan p-8">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                The Hammam Tradition
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                At the heart of Moroccan wellness lies the hammam, a communal
                steam bathhouse that has been the center of hygiene, beauty, and
                social life since the 7th century. Influenced by Roman bath
                culture and refined through Islamic traditions of ritual
                purification, the hammam is far more than a bath &mdash; it is a
                weekly ceremony of cleansing, connection, and renewal that every
                Moroccan household observes.
              </p>
            </div>

            <div className="card-moroccan p-8">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                Natural Ingredients
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                Morocco&apos;s diverse geography produces an extraordinary range
                of natural beauty ingredients. Argan oil from the southwestern
                forests, rose water from the Dades Valley, ghassoul clay from
                the Atlas Mountains, black soap from olive groves, and henna
                from the southeast. These ingredients have been used in Moroccan
                beauty rituals for centuries and are now sought after by the
                global beauty industry.
              </p>
            </div>

            <div className="card-moroccan p-8">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-green)]/10 flex items-center justify-center mb-4">
                <Mountain className="w-6 h-6 text-[var(--color-green)]" />
              </div>
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                Healing Landscapes
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                From the Atlas Mountains with their clean air and herbal
                traditions, to the Atlantic coast with its thalassotherapy
                centers, to the Sahara Desert with its sand bathing therapy and
                profound silence, Morocco&apos;s diverse landscapes each offer
                their own unique form of healing. The country is a natural
                wellness destination where the environment itself is the
                treatment.
              </p>
            </div>
          </div>

          <div className="card-moroccan p-8 bg-[var(--surface-muted)]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { label: 'Years of Tradition', value: '1,000+' },
                { label: 'Hammams Nationwide', value: '10,000+' },
                { label: 'Natural Ingredients', value: '50+' },
                { label: 'UNESCO Heritage (Gnawa)', value: '2019' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
         2. TRADITIONAL HAMMAM GUIDE
         ===================================================================== */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Droplets className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Traditional Hammam Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Everything you need to know about the Moroccan hammam experience
              &mdash; the ancient bathing ritual that has been the cornerstone
              of Moroccan wellness culture for over a millennium.
            </p>
          </div>

          {/* What Is a Hammam */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="card-moroccan p-8">
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                What Is a Hammam?
              </h3>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed text-sm">
                <p>
                  A hammam (also spelled hamam) is a traditional steam bathhouse
                  that has been central to North African and Middle Eastern
                  culture for centuries. The word comes from the Arabic root
                  &ldquo;hamma&rdquo; meaning &ldquo;to heat.&rdquo; In
                  Morocco, the hammam is far more than a place to wash &mdash;
                  it is a social institution, a beauty salon, a place of ritual
                  purification, and a community gathering space all in one.
                </p>
                <p>
                  Every Moroccan neighborhood has its own hammam, and the weekly
                  visit is as fundamental to Moroccan life as the Friday mosque
                  service. Families go together, friends catch up, brides
                  undergo elaborate pre-wedding ceremonies, and new mothers are
                  welcomed back with special hammam rituals. It is where
                  community bonds are strengthened and beauty secrets are passed
                  from grandmother to granddaughter.
                </p>
                <p>
                  The traditional Moroccan hammam consists of a series of
                  interconnected rooms of increasing heat: the cool room
                  (al-barid), the warm room (al-wastani), and the hot room
                  (al-sakhun). The ritual progresses through these rooms with
                  specific products applied at each stage &mdash; black soap,
                  eucalyptus steam, the vigorous kessa scrub, ghassoul clay, and
                  finally rose water and argan oil.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-8">
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                What to Expect
              </h3>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed text-sm">
                <p>
                  Your first hammam visit can feel overwhelming, but the
                  experience is deeply rewarding. In a public hammam, you will
                  enter through a modest doorway into a changing room. After
                  undressing (most Moroccans keep underwear on), you proceed
                  through the heated rooms carrying your bucket of supplies.
                </p>
                <p>
                  The tayaba (female attendant) or tayab (male attendant) will
                  guide you through the ritual if you visit a tourist-friendly
                  or private hammam. In public hammams, you can hire a scrubber
                  for 30 to 50 MAD or bring a friend to help. The gommage
                  (scrub) is the highlight &mdash; prepare to be amazed at the
                  amount of dead skin that rolls off your body.
                </p>
                <p>
                  After the scrub, a ghassoul clay mask is applied, left for 10
                  minutes, then rinsed off with buckets of warm and cool water.
                  The session concludes in the relaxation area with mint tea and,
                  in premium hammams, an argan oil massage. The entire
                  experience typically lasts 1 to 2 hours, and you will leave
                  feeling like you have been reborn.
                </p>
              </div>
            </div>
          </div>

          {/* Hammam Ritual Steps */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6 text-center">
            The Hammam Ritual: Step by Step
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {hammamRitualSteps.map((step) => (
              <div key={step.step} className="card-moroccan p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)] text-white text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                  <div className="inline-flex p-1.5 rounded-lg bg-[var(--color-primary)]/10">
                    {step.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-[var(--text-primary)] text-sm mb-1">
                  {step.title}
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">
                  {step.description}
                </p>
                <p className="text-xs font-medium text-[var(--color-accent)] flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {step.duration}
                </p>
              </div>
            ))}
          </div>

          {/* Public vs Private Hammam */}
          <div className="card-moroccan p-8 mb-12">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6 text-center">
              Public vs Private Hammam: Which Should You Choose?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10">
                    <Users className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--text-primary)]">
                    Public Hammam (Hammam Beldi)
                  </h4>
                </div>
                <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    <span className="font-semibold text-[var(--text-primary)]">Cost:</span> 15-30 MAD entry
                    + 30-50 MAD for tayaba tip
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--text-primary)]">Experience:</span> The authentic
                    local experience. You will be surrounded by Moroccan families going about their weekly
                    ritual. Facilities are basic (tiled rooms, buckets, communal spaces) but functional.
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--text-primary)]">What to bring:</span> Towel,
                    flip-flops, change of underwear, kessa glove, savon beldi. Available at entrance for
                    10-30 MAD.
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--text-primary)]">Best for:</span> Travelers
                    seeking genuine cultural immersion and comfortable with communal bathing.
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--text-primary)]">Note:</span> Strictly gender-separated.
                    Men and women have either separate facilities or alternating time slots.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['Authentic', 'Affordable', 'Cultural', 'Social'].map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="inline-flex p-2 rounded-lg bg-[var(--color-accent)]/10">
                    <Shield className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--text-primary)]">
                    Private / Spa Hammam
                  </h4>
                </div>
                <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    <span className="font-semibold text-[var(--text-primary)]">Cost:</span> 200-800 MAD
                    (mid-range) / 800-2,000+ MAD (luxury)
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--text-primary)]">Experience:</span> A curated,
                    comfortable experience with professional attendants. Beautiful tiled interiors, premium
                    products, private rooms, and a relaxation area with mint tea.
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--text-primary)]">What to bring:</span> Nothing.
                    Towels, robes, slippers, products, and disposable underwear are all provided.
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--text-primary)]">Best for:</span> First-timers,
                    those who prefer privacy, couples, and anyone wanting a premium relaxing experience.
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--text-primary)]">Note:</span> Many riad hotels
                    offer private hammam experiences for guests. Book directly with your accommodation.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['Comfortable', 'Private', 'Luxurious', 'Guided'].map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hammam Etiquette */}
          <div className="card-moroccan p-8 bg-[var(--surface-muted)]">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Hammam Etiquette
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hammamEtiquetteTips.map((tip, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                >
                  <CheckCircle className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
         3. ARGAN OIL TREATMENTS
         ===================================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Leaf className="w-7 h-7 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Argan Oil Treatments
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Known as &ldquo;liquid gold,&rdquo; argan oil is Morocco&apos;s
              most celebrated natural product. The argan tree (Argania spinosa)
              grows only in southwestern Morocco, making it one of the rarest
              and most precious oils in the world.
            </p>
          </div>

          {/* Origin & Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="card-moroccan p-8">
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                Origin &amp; Production
              </h3>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed text-sm">
                <p>
                  The argan tree is endemic to the Souss-Massa region of
                  southwestern Morocco, particularly the area between Essaouira
                  and Agadir. UNESCO designated the argan forest as a Biosphere
                  Reserve in 1998, recognizing both its ecological importance
                  and the cultural practices surrounding its harvest.
                </p>
                <p>
                  Argan oil production has traditionally been the work of Berber
                  women, who crack the extremely hard argan nut by hand, extract
                  the kernels, and grind them into oil using stone mills. Today,
                  women&apos;s cooperatives throughout the Souss-Massa region
                  produce both culinary and cosmetic grades of argan oil,
                  providing vital income for rural communities.
                </p>
                <p>
                  Cosmetic-grade argan oil (used in spa treatments) is
                  cold-pressed from unroasted kernels, preserving its full
                  concentration of vitamin E, essential fatty acids (omega-6 and
                  omega-9), and antioxidants. It takes approximately 30
                  kilograms of argan fruit to produce just one liter of oil.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-8">
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                Benefits for Skin &amp; Hair
              </h3>
              <div className="space-y-3">
                {[
                  {
                    benefit: 'Deep Moisturizing',
                    desc: 'Rich in oleic and linoleic acids, argan oil penetrates the skin barrier to deliver lasting hydration without clogging pores.',
                  },
                  {
                    benefit: 'Anti-Aging',
                    desc: 'High vitamin E and ferulic acid content neutralize free radicals, reducing fine lines and improving skin elasticity.',
                  },
                  {
                    benefit: 'Anti-Inflammatory',
                    desc: 'Natural anti-inflammatory properties help soothe conditions like eczema, psoriasis, and acne-prone skin.',
                  },
                  {
                    benefit: 'Hair Restoration',
                    desc: 'Repairs damaged hair, reduces frizz, adds natural shine, and protects against heat and UV damage.',
                  },
                  {
                    benefit: 'Nail Strengthening',
                    desc: 'Regular application strengthens brittle nails and softens cuticles through deep nourishment.',
                  },
                  {
                    benefit: 'Scar & Stretch Mark Reduction',
                    desc: 'Promotes skin cell regeneration and improves the appearance of scars, stretch marks, and hyperpigmentation.',
                  },
                ].map((item) => (
                  <div key={item.benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">
                        {item.benefit}
                      </p>
                      <p className="text-xs text-[var(--text-secondary)]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Spa Treatments */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Argan Oil Spa Treatments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {arganTreatments.map((treatment) => (
              <div key={treatment.name} className="card-moroccan p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="inline-flex p-2 rounded-lg bg-[var(--color-accent)]/10 shrink-0">
                    <Gem className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--text-primary)]">
                      {treatment.name}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {treatment.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Coins className="w-3 h-3" /> {treatment.price}
                      </span>
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {treatment.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {treatment.benefits.map((b) => (
                    <span
                      key={b}
                      className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
         4. MOROCCAN BEAUTY RITUALS
         ===================================================================== */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-pink-500/10 mb-4">
              <Flower2 className="w-7 h-7 text-pink-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Moroccan Beauty Rituals
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s beauty traditions draw on centuries of knowledge
              and a wealth of natural ingredients. These four pillars of
              Moroccan beauty are still used daily across the country and are
              increasingly sought after worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beautyRituals.map((ritual) => (
              <div key={ritual.name} className="card-moroccan p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    {ritual.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {ritual.name}
                    </h3>
                    <p className="text-xs text-[var(--color-primary)] font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {ritual.origin}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {ritual.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {ritual.uses.map((use) => (
                    <span
                      key={use}
                      className="text-xs px-2.5 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                    >
                      {use}
                    </span>
                  ))}
                </div>
                <p className="text-xs font-semibold text-[var(--text-primary)] pt-3 border-t border-[var(--border)]">
                  Typical price: {ritual.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
         5. TOP SPA EXPERIENCES BY CITY
         ===================================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Sparkles className="w-7 h-7 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Top Spa Experiences by City
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s best spa and wellness destinations, curated by
              city. Each location offers its own character, from the palatial
              spas of Marrakech to the oceanfront thalassotherapy of Agadir.
            </p>
          </div>

          {/* Marrakech */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex p-2 rounded-lg bg-[var(--color-accent)]/10">
                <Crown className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Marrakech
              </h3>
              <span className="text-sm text-[var(--text-muted)]">&mdash; The Spa Capital of Morocco</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marrakechSpas.map((spa) => (
                <div
                  key={spa.name}
                  className="card-moroccan group overflow-hidden flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={spa.image}
                      alt={spa.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-semibold backdrop-blur-sm">
                        <Star className="w-3 h-3 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                        {spa.rating}
                      </span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[var(--color-accent)]/80 text-white text-xs font-semibold backdrop-blur-sm">
                        {spa.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h4 className="font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--text-primary)] mb-1">
                      {spa.name}
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 line-clamp-3 mb-3">
                      {spa.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {spa.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-[var(--text-primary)] pt-3 border-t border-[var(--border)]">
                      {spa.priceRange}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fes */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10">
                <Building2 className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Fes
              </h3>
              <span className="text-sm text-[var(--text-muted)]">&mdash; Imperial Heritage &amp; Authentic Hammams</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fesSpas.map((spa) => (
                <div
                  key={spa.name}
                  className="card-moroccan group overflow-hidden flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={spa.image}
                      alt={spa.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-semibold backdrop-blur-sm">
                        <Star className="w-3 h-3 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                        {spa.rating}
                      </span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[var(--color-primary)]/80 text-white text-xs font-semibold backdrop-blur-sm">
                        {spa.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h4 className="font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--text-primary)] mb-1">
                      {spa.name}
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 line-clamp-3 mb-3">
                      {spa.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {spa.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-[var(--text-primary)] pt-3 border-t border-[var(--border)]">
                      {spa.priceRange}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Essaouira */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex p-2 rounded-lg bg-blue-500/10">
                <Waves className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Essaouira
              </h3>
              <span className="text-sm text-[var(--text-muted)]">&mdash; Coastal Wellness &amp; Thalassotherapy</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {essaouiraSpas.map((spa) => (
                <div
                  key={spa.name}
                  className="card-moroccan group overflow-hidden flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={spa.image}
                      alt={spa.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-semibold backdrop-blur-sm">
                        <Star className="w-3 h-3 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                        {spa.rating}
                      </span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-500/80 text-white text-xs font-semibold backdrop-blur-sm">
                        {spa.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h4 className="font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--text-primary)] mb-1">
                      {spa.name}
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 line-clamp-3 mb-3">
                      {spa.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {spa.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-[var(--text-primary)] pt-3 border-t border-[var(--border)]">
                      {spa.priceRange}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Agadir */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex p-2 rounded-lg bg-[var(--color-green)]/10">
                <Sun className="w-5 h-5 text-[var(--color-green)]" />
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Agadir
              </h3>
              <span className="text-sm text-[var(--text-muted)]">&mdash; Beach Resort &amp; Thalassotherapy Hub</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {agadirSpas.map((spa) => (
                <div
                  key={spa.name}
                  className="card-moroccan group overflow-hidden flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={spa.image}
                      alt={spa.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-semibold backdrop-blur-sm">
                        <Star className="w-3 h-3 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                        {spa.rating}
                      </span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[var(--color-green)]/80 text-white text-xs font-semibold backdrop-blur-sm">
                        {spa.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h4 className="font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--text-primary)] mb-1">
                      {spa.name}
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 line-clamp-3 mb-3">
                      {spa.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {spa.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-green)]/10 text-[var(--color-green)]"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-[var(--text-primary)] pt-3 border-t border-[var(--border)]">
                      {spa.priceRange}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
         6. YOGA & MEDITATION RETREATS
         ===================================================================== */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-green)]/10 mb-4">
              <Heart className="w-7 h-7 text-[var(--color-green)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Yoga &amp; Meditation Retreats
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s diverse landscapes &mdash; from Atlantic surf
              beaches to Atlas mountain peaks to Saharan dunes &mdash; provide
              extraordinary backdrops for yoga and meditation practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yogaRetreats.map((retreat) => (
              <div
                key={retreat.name}
                className="card-moroccan group overflow-hidden flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={retreat.image}
                    alt={retreat.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-green)]/90 text-white text-xs font-semibold">
                      <Heart className="w-3 h-3" /> Retreat
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--text-primary)] mb-1">
                    {retreat.name}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-3">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {retreat.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {retreat.duration}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 line-clamp-3">
                    {retreat.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {retreat.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-green)]/10 text-[var(--color-green)]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-[var(--text-primary)] mt-3 pt-3 border-t border-[var(--border)]">
                    {retreat.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
         7. THALASSOTHERAPY
         ===================================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-blue-500/10 mb-4">
              <Waves className="w-7 h-7 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Thalassotherapy
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s Atlantic coastline provides the foundation for
              world-class thalassotherapy centers &mdash; spa facilities that
              use heated seawater, seaweed, marine mud, and ocean climate for
              therapeutic treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="card-moroccan p-8">
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                What Is Thalassotherapy?
              </h3>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed text-sm">
                <p>
                  Thalassotherapy (from the Greek &ldquo;thalassa&rdquo;
                  meaning sea) uses the therapeutic properties of seawater,
                  marine products, and the maritime climate to promote health
                  and well-being. The Atlantic Ocean off Morocco&apos;s coast is
                  rich in minerals, trace elements, and marine organisms that
                  are absorbed through the skin during treatments.
                </p>
                <p>
                  Treatments typically include heated seawater baths and jet
                  showers, underwater massage, algae and seaweed body wraps,
                  marine mud applications, and aquagym sessions. Medical
                  thalassotherapy programs are designed in consultation with
                  physicians and can address chronic fatigue, joint pain,
                  respiratory conditions, and post-surgical recovery.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-8">
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                Benefits of Thalassotherapy
              </h3>
              <div className="space-y-3">
                {[
                  { benefit: 'Pain Relief', desc: 'Warm seawater and hydrotherapy jets relieve muscle tension, joint pain, and arthritis symptoms.' },
                  { benefit: 'Circulation', desc: 'Marine mineral absorption improves blood circulation and lymphatic drainage.' },
                  { benefit: 'Respiratory Health', desc: 'Iodine-rich sea air and steam treatments clear respiratory passages.' },
                  { benefit: 'Skin Renewal', desc: 'Seaweed wraps and marine mud detoxify the skin and promote cell regeneration.' },
                  { benefit: 'Stress Reduction', desc: 'The combination of warm water, massage, and ocean atmosphere profoundly reduces stress and anxiety.' },
                  { benefit: 'Post-Surgical Recovery', desc: 'Medical thalassotherapy programs accelerate healing and restore mobility after surgery.' },
                ].map((item) => (
                  <div key={item.benefit} className="flex items-start gap-3">
                    <Waves className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">
                        {item.benefit}
                      </p>
                      <p className="text-xs text-[var(--text-secondary)]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Thalassotherapy Centers */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Top Thalassotherapy Centers
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {thalassotherapyCenters.map((center) => (
              <div
                key={center.name}
                className="card-moroccan group overflow-hidden flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={center.image}
                    alt={center.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-500/90 text-white text-xs font-semibold backdrop-blur-sm">
                      <Waves className="w-3 h-3" /> {center.city}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--text-primary)] mb-2">
                    {center.name}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 mb-3">
                    {center.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {center.treatments.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-[var(--text-primary)] pt-3 border-t border-[var(--border)]">
                    {center.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
         8. DESERT WELLNESS RETREATS
         ===================================================================== */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                <Sun className="w-7 h-7 text-[var(--color-primary)]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                Desert Wellness Retreats
              </h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                The Sahara Desert offers a form of wellness that no spa can
                replicate. The vast silence, the infinite horizon, and the
                absence of modern distractions create a powerful environment for
                mindfulness, healing, and inner renewal.
              </p>
              <div className="space-y-4">
                {desertRetreats.map((retreat) => (
                  <div key={retreat.title} className="card-moroccan p-5">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                      {retreat.title}
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">
                      {retreat.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {retreat.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Coins className="w-3 h-3" /> {retreat.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src="/images/hero-desert.webp"
                alt="Sahara Desert at sunset with golden dunes stretching to the horizon"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
         9. TRADITIONAL BERBER HEALING
         ===================================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-green)]/10 mb-4">
              <ShieldCheck className="w-7 h-7 text-[var(--color-green)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Traditional Berber Healing
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The Amazigh (Berber) people of Morocco have preserved a rich
              tradition of natural healing that predates Arab influence by
              centuries. These practices are still alive in mountain villages,
              medina herbalist shops, and increasingly in wellness retreats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {berberHealing.map((practice) => (
              <div key={practice.title} className="card-moroccan p-8">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-green)]/10 flex items-center justify-center mb-4">
                  {practice.icon}
                </div>
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                  {practice.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {practice.description}
                </p>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-6 mt-8 bg-[var(--surface-muted)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
              <div className="text-sm text-[var(--text-secondary)] leading-relaxed">
                <p className="font-semibold text-[var(--text-primary)] mb-1">
                  A Note on Traditional Healing
                </p>
                <p>
                  Traditional Berber healing practices are part of a living
                  cultural heritage and should be approached with respect and an
                  open mind. While many herbal remedies have been validated by
                  modern research, traditional healing is not a substitute for
                  professional medical care. Always consult a qualified medical
                  practitioner for serious health concerns. When visiting
                  herbalists (attarin) in the medina, be aware that some may
                  exaggerate the properties of their products for commercial
                  purposes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
         10. PRICE GUIDE
         ===================================================================== */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Banknote className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Spa &amp; Wellness Price Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              What to expect to pay for wellness experiences across Morocco,
              from budget-friendly public hammams to luxury resort spa retreats.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-primary)]/5">
                    <th className="text-left px-4 md:px-6 py-3 font-semibold text-[var(--text-primary)]">
                      Experience
                    </th>
                    <th className="text-left px-4 md:px-6 py-3 font-semibold text-[var(--text-primary)]">
                      Budget
                    </th>
                    <th className="text-left px-4 md:px-6 py-3 font-semibold text-[var(--text-primary)]">
                      Mid-Range
                    </th>
                    <th className="text-left px-4 md:px-6 py-3 font-semibold text-[var(--text-primary)]">
                      Luxury
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {priceGuide.map((row, i) => (
                    <tr key={row.experience} className={i % 2 === 0 ? '' : 'bg-[var(--surface-muted)]'}>
                      <td className="px-4 md:px-6 py-3 text-[var(--text-primary)] font-medium">
                        {row.experience}
                      </td>
                      <td className="px-4 md:px-6 py-3 text-[var(--color-green)]">
                        {row.budget}
                      </td>
                      <td className="px-4 md:px-6 py-3 text-[var(--color-primary)]">
                        {row.mid}
                      </td>
                      <td className="px-4 md:px-6 py-3 text-[var(--color-accent)]">
                        {row.luxury}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 md:px-6 py-4 bg-[var(--color-primary)]/5 text-xs text-[var(--text-secondary)]">
              All prices in Moroccan Dirham (MAD). 10 MAD is approximately 1
              USD / 0.90 EUR. Prices as of 2025 and may vary by season and
              establishment.
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
         11. WHAT TO BRING TO HAMMAM
         ===================================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Eye className="w-7 h-7 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              What to Bring to a Hammam
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Your packing list depends entirely on whether you are visiting a
              public or private hammam. Here is everything you need for each.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Public Hammam List */}
            <div className="card-moroccan p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10">
                  <Users className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                  Public Hammam Checklist
                </h3>
              </div>
              <div className="space-y-3">
                {hammamPackingList.publicHammam.map((item) => (
                  <div key={item.item} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">
                        {item.item}
                      </p>
                      <p className="text-xs text-[var(--text-secondary)]">
                        {item.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Private Hammam List */}
            <div className="card-moroccan p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex p-2 rounded-lg bg-[var(--color-accent)]/10">
                  <Crown className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                  Private / Luxury Hammam Checklist
                </h3>
              </div>
              <div className="space-y-3 mb-6">
                {hammamPackingList.privateHammam.map((item) => (
                  <div key={item.item} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">
                        {item.item}
                      </p>
                      <p className="text-xs text-[var(--text-secondary)]">
                        {item.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-[var(--text-secondary)]">
                    <p className="font-semibold text-[var(--text-primary)] mb-1">
                      Pro Tip
                    </p>
                    <p>
                      Even at luxury hammams, bring your own water bottle. The
                      heat is dehydrating, and while most spas provide water,
                      having your own ensures you stay hydrated throughout the
                      experience. Avoid caffeine and alcohol before and
                      immediately after your hammam session.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
         12. RELATED PAGES
         ===================================================================== */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Explore More Morocco Guides
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Continue planning your Moroccan wellness journey with these
              related guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="card-moroccan p-6 group hover:border-[var(--color-accent)]/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex p-2.5 rounded-lg bg-[var(--color-primary)]/10 shrink-0 group-hover:bg-[var(--color-accent)]/10 transition-colors">
                    {page.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-display)] font-semibold text-[var(--text-primary)] mb-1 group-hover:text-[var(--color-accent)] transition-colors flex items-center gap-2">
                      {page.title}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {page.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
         CTA SECTION
         ===================================================================== */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Experience Moroccan Wellness?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Whether you seek the ancient ritual of the hammam, the healing
            power of argan oil, or the profound silence of the Sahara, Morocco
            offers wellness experiences found nowhere else on Earth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hammam"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              Explore Hammams <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/activities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white/10 text-white font-semibold border border-white/30 hover:bg-white/20 transition-colors"
            >
              Browse Activities <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
