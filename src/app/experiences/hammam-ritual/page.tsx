import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Droplets,
  Star,
  MapPin,
  Clock,
  Calendar,
  DollarSign,
  CheckCircle,
  Users,
  ArrowRight,
  Thermometer,
  ShieldCheck,
  AlertTriangle,
  Leaf,
  Crown,
  Heart,
  Hand,
  Sparkles,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Traditional Hammam Ritual Experience | Moroccan Bathhouse Guide',
  description:
    'Complete guide to the traditional Moroccan hammam experience. Step-by-step ritual guide, public vs luxury hammam comparison, etiquette rules, what to bring, recommended hammams in Marrakech, Fes, and Essaouira, and pricing from $10 public to $100+ luxury.',
  keywords: [
    'Moroccan hammam experience',
    'traditional hammam Morocco',
    'hammam ritual',
    'Moroccan bathhouse',
    'hammam etiquette Morocco',
    'black soap hammam',
    'ghassoul clay',
    'Marrakech hammam',
    'Fes hammam',
    'luxury hammam Morocco',
    'public hammam Morocco',
    'gommage scrub Morocco',
    'hammam spa Morocco',
    'Les Bains de Marrakech',
    'Hammam de la Rose',
  ],
  openGraph: {
    title: 'Traditional Hammam Ritual Experience - CityGuide',
    description:
      'Everything you need to know about the Moroccan hammam. Step-by-step guide, etiquette, public vs luxury, recommended hammams, and pricing.',
    url: 'https://cityguide.ma/experiences/hammam-ritual',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan hammam interior with steam and zellige tiles',
      },
    ],
  },
  alternates: { canonical: 'https://cityguide.ma/experiences/hammam-ritual' },
};

/* =====================================================================
   JSON-LD
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TouristAttraction',
      name: 'Traditional Moroccan Hammam Ritual Experience',
      description: 'The centuries-old Moroccan bathing ritual featuring steam rooms, black soap scrubbing, rhassoul clay masks, and argan oil massage.',
      url: 'https://cityguide.ma/experiences/hammam-ritual',
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: 10,
        highPrice: 150,
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What should I wear in a Moroccan hammam?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In public hammams, Moroccans typically wear underwear. In private/luxury hammams, disposable underwear is usually provided. Full nudity is uncommon and generally not expected in mixed or tourist-facing environments.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a hammam cost in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Public hammams cost $1-3. Mid-range hotel hammams cost $30-60. Luxury spa hammams cost $80-150+ for a full package with massage and treatments.',
          },
        },
      ],
    },
  ],
};

/* =====================================================================
   DATA
   ===================================================================== */

const ritualSteps = [
  {
    step: 1,
    title: 'Preparation & Undressing',
    description:
      'You enter the changing area (maslakh), where you undress and store your belongings. In public hammams, Moroccans typically wear underwear; in spa hammams, disposable underwear or a wrap is provided. Take a few minutes to mentally prepare. The hammam is not just about physical cleansing -- it is a ritual of renewal that Moroccans have practiced for over a thousand years. The warm, humid air begins to relax you the moment you step inside.',
    duration: '5 minutes',
    icon: Users,
  },
  {
    step: 2,
    title: 'The Warm Room (Bayt al-Wastani)',
    description:
      'You move into the first heated room, where the temperature is moderate and the humidity high. This acclimatization phase is essential: the heat opens your pores, loosens tension in your muscles, and begins to soften the outermost layer of dead skin that the gommage will later remove. Sit on the warm marble or tile floor and let the steam envelop you. Breathe deeply. The eucalyptus-scented air is therapeutic for the respiratory system. Most people spend 10-15 minutes here.',
    duration: '10-15 minutes',
    icon: Thermometer,
  },
  {
    step: 3,
    title: 'Black Soap Application (Savon Beldi)',
    description:
      'The signature product of the Moroccan hammam is savon beldi -- a thick, dark olive-oil-based paste enriched with eucalyptus. Your attendant (tayeba) applies this generously over your entire body, or you apply it yourself in a public hammam. The soap is left on your skin for 5-10 minutes to deeply penetrate and soften dead skin cells. The aroma of eucalyptus and olive oil fills the steam room. This is the moment the hammam becomes distinctly Moroccan -- no other bathing culture uses this particular product.',
    duration: '10 minutes',
    icon: Leaf,
  },
  {
    step: 4,
    title: 'The Hot Room (Bayt al-Sakhun)',
    description:
      'You advance to the hottest room, the inner sanctum of the hammam. Here the temperature is significantly higher and the steam is dense. This is where the real deep cleansing begins. The intense heat causes you to sweat profusely, flushing toxins and impurities from deep within your skin. The combination of heat, humidity, and the black soap creates the ideal conditions for the gommage that follows. Experienced hammam-goers spend 10-15 minutes here; first-timers should listen to their body and step back to the warm room if needed.',
    duration: '10-15 minutes',
    icon: Thermometer,
  },
  {
    step: 5,
    title: 'The Gommage (Exfoliating Scrub)',
    description:
      'This is the defining moment of the hammam experience. Using a rough exfoliating mitt called a kessa, your attendant scrubs your entire body in long, firm strokes. Rolls of dead skin visibly peel away -- an oddly satisfying and surprisingly dramatic process. The sensation is intense but not painful when performed by a skilled tayeba. The gommage reveals fresh, incredibly smooth skin beneath. Many visitors describe this as the most thorough and effective exfoliation they have ever experienced. The process covers every part of your body, from shoulders to feet.',
    duration: '15-20 minutes',
    icon: Hand,
  },
  {
    step: 6,
    title: 'Rhassoul Clay Mask',
    description:
      'After the gommage, a mineral-rich clay called rhassoul (or ghassoul), mined exclusively from the Atlas Mountains, is applied to your body and sometimes your face. This natural clay has extraordinary absorptive properties, drawing out remaining impurities while infusing the skin with magnesium, silica, and other minerals. The clay is left on for 5-10 minutes, then rinsed away with warm water, leaving your skin feeling nourished and renewed. Rhassoul has been used in Moroccan beauty rituals for over 1,400 years.',
    duration: '10 minutes',
    icon: Sparkles,
  },
  {
    step: 7,
    title: 'Rinse & Cool Down',
    description:
      'Warm water is poured over you to rinse away the clay and remaining soap. You then gradually cool down, moving back through the rooms from hot to warm to cool. Some hammams offer a final rinse with cool or cold water, which closes the pores and invigorates the circulation. The contrast between the deep heat and the cool rinse leaves you feeling extraordinarily alert and refreshed.',
    duration: '5-10 minutes',
    icon: Droplets,
  },
  {
    step: 8,
    title: 'Argan Oil & Relaxation',
    description:
      'In luxury hammams, the experience concludes with a full-body application of pure argan oil, Morocco\'s "liquid gold." The oil is massaged into your freshly exfoliated skin, which absorbs it beautifully. You are then given time to rest in the relaxation room with mint tea, dried fruits, and pastries. This post-hammam tea ceremony is itself a cherished Moroccan tradition. Your skin will glow for days afterward.',
    duration: '15-20 minutes',
    icon: Heart,
  },
];

const hammamTypes = [
  {
    type: 'Public Neighborhood Hammam',
    price: '$1-3 (10-30 MAD)',
    icon: Users,
    description:
      'The authentic, everyday Moroccan experience. Every neighborhood has one, and this is where ordinary Moroccans go weekly. The facilities are basic: tiled rooms, plastic buckets for water, and no frills whatsoever. You bring your own supplies or buy them at the entrance. The atmosphere is social and communal -- Moroccans chat, laugh, and catch up on neighborhood news. Men and women have separate sessions or separate days. This is the real Morocco, unvarnished and unforgettable. It requires confidence and cultural awareness, but the reward is a deeply authentic experience that few tourists ever have.',
    pros: ['Authentic cultural immersion', 'Incredibly affordable', 'Social atmosphere', 'Neighborhood experience'],
    cons: ['Basic facilities', 'Bring your own supplies', 'Language barrier likely', 'Can be intimidating for first-timers'],
    bestFor: 'Adventurous travelers, cultural immersion seekers, budget travelers',
  },
  {
    type: 'Hotel/Riad Hammam',
    price: '$30-60 (300-600 MAD)',
    icon: ShieldCheck,
    description:
      'Many riads and hotels have their own private hammam facilities, offering a comfortable middle ground between the raw authenticity of a public hammam and the high-end luxury of a spa. The experience follows the traditional ritual but in a clean, well-maintained, and private setting. Staff speak English (or French), products are provided, and the pace is tailored to you. This is an excellent choice for first-timers who want to experience the hammam tradition without the cultural navigation challenges of a public one.',
    pros: ['English-speaking staff', 'All products provided', 'Private and comfortable', 'Traditional ritual maintained'],
    cons: ['Less culturally immersive', 'Mid-range pricing', 'Varies by property', 'May need to be a guest'],
    bestFor: 'First-timers, couples, those wanting comfort with authenticity',
  },
  {
    type: 'Luxury Spa Hammam',
    price: '$80-150+ (800-1500+ MAD)',
    icon: Crown,
    description:
      'The premium hammam experience in a purpose-built luxury setting. These establishments feature stunning architecture (often restored historical hammams), the finest natural products, highly trained therapists, and a full menu of treatments beyond the basic hammam -- including aromatherapy massage, body wraps, facials, and reflexology. The ambiance is carefully curated with candlelight, rose petals, and soothing music. A full luxury hammam package typically takes 2-3 hours and includes the traditional ritual plus additional spa treatments and a relaxation period with refreshments.',
    pros: ['World-class facilities', 'Premium products (pure argan, rose water)', 'Full spa menu', 'Stunning architectural settings'],
    cons: ['Significantly more expensive', 'Less culturally authentic', 'Tourist-oriented', 'Advance booking required'],
    bestFor: 'Luxury travelers, honeymooners, special occasions, spa enthusiasts',
  },
];

const recommendedHammams = [
  {
    name: 'Les Bains de Marrakech',
    city: 'Marrakech',
    type: 'Luxury Spa',
    price: '800-2,000 MAD',
    description: 'One of Marrakech\'s most celebrated spa hammams, set in a beautifully restored riad near the Kasbah. The architecture alone is worth the visit -- vaulted ceilings, zellige tilework, and candlelit treatment rooms. Their signature hammam package includes the traditional ritual, rhassoul clay mask, and a 60-minute argan oil massage.',
    rating: 5,
  },
  {
    name: 'Hammam de la Rose',
    city: 'Marrakech',
    type: 'Luxury Spa',
    price: '600-1,500 MAD',
    description: 'A rose-themed luxury hammam near Jemaa el-Fnaa. Every product incorporates Moroccan rose from the Dades Valley. The rose-petal bath and rose-scented steam room are sensory highlights. The setting in a converted 19th-century riad is intimate and exquisite.',
    rating: 5,
  },
  {
    name: 'Le Bain Bleu',
    city: 'Fes',
    type: 'Luxury Spa',
    price: '500-1,200 MAD',
    description: 'Fes\'s premiere luxury hammam, housed in a stunning blue-tiled riad in the heart of the medina. The traditional ritual here is performed with particular attention to Fassi traditions, including a special orange blossom water rinse and rhassoul clay sourced directly from the Atlas Mountains.',
    rating: 5,
  },
  {
    name: 'Hammam Mouassine',
    city: 'Marrakech',
    type: 'Traditional/Tourist-Friendly',
    price: '200-500 MAD',
    description: 'A beautifully restored 16th-century hammam that bridges the gap between public and luxury. The historical architecture is magnificent, and the experience follows the traditional ritual closely. English-speaking staff and all products provided, but the atmosphere feels more authentic than a modern spa.',
    rating: 4,
  },
  {
    name: 'Hammam Sidi Azzouz',
    city: 'Marrakech',
    type: 'Public',
    price: '15-30 MAD',
    description: 'A genuine neighborhood hammam where tourists are welcome but rare. The facilities are basic but clean, and the experience is as authentic as it gets. Bring your own supplies or buy them at the entrance. An unforgettable cultural immersion for the adventurous.',
    rating: 4,
  },
  {
    name: 'Hammam Bab Ftoh',
    city: 'Fes',
    type: 'Public',
    price: '10-20 MAD',
    description: 'One of the oldest functioning hammams in the Fes medina, dating back several centuries. The vaulted ceilings and star-shaped light openings are architectural treasures. A deeply authentic experience that connects you to centuries of Moroccan bathing tradition.',
    rating: 4,
  },
];

const etiquetteRules = [
  { rule: 'Wear underwear or swimwear', detail: 'Full nudity is uncommon in Moroccan hammams, especially public ones. Wear underwear or a swimsuit bottom. In luxury hammams, disposable underwear is typically provided.' },
  { rule: 'Bring your own supplies to public hammams', detail: 'Public hammams do not provide products. Bring savon beldi (black soap), a kessa scrub mitt, rhassoul clay, a towel, and flip-flops. You can buy these at the entrance or in any medina shop.' },
  { rule: 'Respect gendered spaces', detail: 'Public hammams are strictly gender-segregated, either with separate facilities or alternating time slots (typically mornings for women, afternoons for men, or vice versa). Ask locally for the schedule.' },
  { rule: 'Start slowly in the hot room', detail: 'If you are not accustomed to steam rooms, spend less time in the hottest room initially. Dehydration and lightheadedness can occur. Drink water before and after your hammam session.' },
  { rule: 'Tip your tayeba', detail: 'In public hammams, tipping the tayeba (attendant) 20-50 MAD is customary and appreciated. In luxury hammams, tips of 50-100 MAD are appropriate for excellent service.' },
  { rule: 'Speak quietly', detail: 'While public hammams can be social, the atmosphere in the hot rooms tends toward quiet contemplation. In luxury hammams, silence is generally maintained in the treatment areas.' },
  { rule: 'Remove all jewelry', detail: 'Heat, steam, and the scrubbing process can damage jewelry. Leave all rings, necklaces, watches, and bracelets in the changing room locker.' },
  { rule: 'Do not rush', detail: 'A hammam is not a quick shower. Allow at least 1.5 hours for a public hammam and 2-3 hours for a luxury experience. The relaxation afterward is as important as the ritual itself.' },
];

const relatedExperiences = [
  {
    title: 'Sahara Desert Glamping',
    slug: '/experiences/sahara-glamping',
    image: 'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=400&q=80',
    duration: '1-3 nights',
    price: 'From $150',
  },
  {
    title: 'Moroccan Cooking Class',
    slug: '/experiences/moroccan-cooking-class',
    image: 'https://images.unsplash.com/photo-1541518763-42d16cdaafd6?w=400&q=80',
    duration: '4-5 hours',
    price: 'From $30',
  },
  {
    title: 'Atlas Mountains Day Hike',
    slug: '/experiences/atlas-day-hike',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&q=80',
    duration: 'Full day',
    price: 'From $40',
  },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function HammamRitualPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1800&q=80"
            alt="Traditional Moroccan hammam with steam and warm zellige tiles"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/experiences" className="hover:text-white transition-colors">Experiences</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Hammam Ritual</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
              <Droplets className="w-4 h-4 text-[var(--color-accent)]" />
              Wellness Experience
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Traditional Hammam Ritual
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Surrender to the centuries-old Moroccan bathing ritual. Steam, black soap,
              the vigorous kessa scrub, rhassoul clay, and argan oil -- a sensory
              journey of purification and renewal.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">$10-150</p>
                <p className="text-sm text-white/70">Price Range</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">1.5-3</p>
                <p className="text-sm text-white/70">Hours</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">4.8</p>
                <p className="text-sm text-white/70">Rating</p>
              </div>
            </div>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose-moroccan">
                <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
                  A Thousand Years of Purification
                </h2>
                <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    The hammam is not merely a place to wash. It is an institution that has been at the
                    center of Moroccan social, spiritual, and physical life for over a millennium. When
                    the first hammams appeared in Morocco in the early Islamic period, they served a
                    dual purpose: the ritual ablutions required before prayer, and the communal bathing
                    that strengthened neighborhood bonds. Today, the hammam remains one of the last
                    great shared spaces in Moroccan culture -- a place where social barriers dissolve
                    in the steam, where bodies are scrubbed clean and spirits are renewed.
                  </p>
                  <p>
                    For the visitor, a hammam is a profound sensory experience. The heat builds gradually
                    as you move through three progressively warmer rooms. The scent of eucalyptus-infused
                    black soap fills the air. The kessa exfoliation is vigorous and thorough, removing
                    layers of dead skin you never knew existed. The rhassoul clay mask, made from minerals
                    unique to the Atlas Mountains, leaves your skin feeling unlike anything a modern spa
                    product can achieve. And the post-hammam mint tea, sipped in a state of deep relaxation,
                    is one of the most perfect moments Morocco offers.
                  </p>
                  <p>
                    Whether you choose a neighborhood public hammam for raw authenticity or a luxury
                    spa for pampered indulgence, the fundamental ritual remains the same. This guide
                    walks you through every step of the experience, from what to expect to what to bring,
                    so you can enter the hammam with confidence and leave feeling reborn.
                  </p>
                  <p>
                    The hammam is also an act of self-care that Moroccans practice weekly, not as an
                    occasional luxury but as an essential part of personal maintenance and social
                    connection. Women gather with friends and family, sharing gossip and advice in the
                    steamy warmth. Men bond over shared rituals and conversation. To visit a hammam is
                    to participate in one of the most intimate aspects of Moroccan daily life.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="card-moroccan p-6 sticky top-28">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)] mb-5">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">Price Range</p>
                      <p className="text-sm text-[var(--text-secondary)]">Public: $1-3. Hotel: $30-60. Luxury: $80-150+.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">Duration</p>
                      <p className="text-sm text-[var(--text-secondary)]">1.5-3 hours depending on type.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">Availability</p>
                      <p className="text-sm text-[var(--text-secondary)]">Year-round. Public: check gendered hours. Luxury: book ahead.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">Locations</p>
                      <p className="text-sm text-[var(--text-secondary)]">Every city and town in Morocco has hammams.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">Who It Is For</p>
                      <p className="text-sm text-[var(--text-secondary)]">Everyone. Gender-segregated at public hammams.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-[var(--border)]">
                  <a href="#types" className="block w-full text-center px-6 py-3 bg-[var(--color-secondary)] text-white font-semibold rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors">
                    Compare Hammam Types
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Step-by-Step Ritual ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              The Complete Ritual
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              8 Steps of the Hammam Experience
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              The traditional hammam ritual follows a precise sequence, perfected over centuries to maximize cleansing, relaxation, and renewal.
            </p>
          </div>
          <div className="space-y-0">
            {ritualSteps.map((step, index) => (
              <div key={step.title} className="relative flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center shrink-0">
                    <step.icon className="w-5 h-5 text-[var(--color-secondary)]" />
                  </div>
                  {index < ritualSteps.length - 1 && (
                    <div className="w-px flex-1 bg-[var(--border)] my-2" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold text-white bg-[var(--color-secondary)] px-2 py-0.5 rounded">
                      Step {step.step}
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">{step.duration}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Types Comparison ── */}
      <section id="types" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Public vs Hotel vs Luxury Hammam
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Three distinct experiences at three distinct price points. Each has its own merits depending on what you seek.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {hammamTypes.map((h) => (
              <div key={h.type} className="card-moroccan p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center">
                    <h.icon className="w-5 h-5 text-[var(--color-secondary)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)]">{h.type}</h3>
                    <p className="text-sm font-semibold text-[var(--color-secondary)]">{h.price}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                  {h.description}
                </p>
                <div className="space-y-3 pt-4 border-t border-[var(--border)]">
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-green)] mb-1">Advantages</p>
                    {h.pros.map((p) => (
                      <p key={p} className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5 mb-0.5">
                        <CheckCircle className="w-3 h-3 text-[var(--color-green)] shrink-0" /> {p}
                      </p>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-muted)] mb-1">Considerations</p>
                    {h.cons.map((c) => (
                      <p key={c} className="text-xs text-[var(--text-muted)] flex items-center gap-1.5 mb-0.5">
                        <AlertTriangle className="w-3 h-3 shrink-0" /> {c}
                      </p>
                    ))}
                  </div>
                  <p className="text-xs text-[var(--text-muted)]">
                    <span className="font-semibold">Best for:</span> {h.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recommended Hammams ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-4">
            Recommended Hammams
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Personally vetted recommendations across Marrakech and Fes, from authentic public hammams to world-class luxury spas.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {recommendedHammams.map((h) => (
              <div key={h.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">{h.name}</h3>
                    <div className="flex items-center gap-3 text-sm text-[var(--text-muted)] mt-1">
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{h.city}</span>
                      <span className="px-2 py-0.5 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs font-medium">{h.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < h.rating ? 'text-[var(--color-accent)] fill-[var(--color-accent)]' : 'text-[var(--border)]'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{h.description}</p>
                <p className="text-sm font-semibold text-[var(--color-secondary)] flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5" /> {h.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Etiquette ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-4">
            Hammam Etiquette
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Follow these guidelines to ensure a respectful and enjoyable experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {etiquetteRules.map((r) => (
              <div key={r.rule} className="card-moroccan p-4 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-[var(--text-primary)]">{r.rule}</p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What to Bring ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-12">
            What to Bring
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-[var(--color-secondary)]" />
                For Public Hammams
              </h3>
              <div className="space-y-2">
                {['Savon beldi (black soap)', 'Kessa scrub mitt', 'Rhassoul clay (optional)', 'Towel', 'Flip-flops or sandals', 'Change of underwear', 'Plastic bag for wet items', 'Shampoo & conditioner', 'Cash for entry and tip (50-80 MAD)'].map((item) => (
                  <p key={item} className="text-sm text-[var(--text-secondary)] flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0" /> {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Crown className="w-4 h-4 text-[var(--color-secondary)]" />
                For Luxury Hammams
              </h3>
              <div className="space-y-2">
                {['Just yourself (everything is provided)', 'A credit card or cash for the bill', 'A willingness to relax for 2-3 hours', 'Remove all jewelry before arriving', 'Arrive 15 minutes before your appointment', 'Drink water beforehand (hydration is key)'].map((item) => (
                  <p key={item} className="text-sm text-[var(--text-secondary)] flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0" /> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Experiences ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)] mb-4">
              Related Experiences
            </h2>
            <p className="text-[var(--text-secondary)]">
              Complete your Moroccan wellness journey with these complementary experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedExperiences.map((exp) => (
              <Link key={exp.slug} href={exp.slug} className="card-moroccan group overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={exp.image} alt={exp.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{exp.duration}</span>
                    <span className="font-semibold text-[var(--color-secondary)]">{exp.price}</span>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-secondary)] group-hover:text-[var(--color-secondary-dark)] transition-colors">
                    Read Guide <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/experiences" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-light)] transition-colors">
              View All Experiences <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
