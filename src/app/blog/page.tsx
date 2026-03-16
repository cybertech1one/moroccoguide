import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Home, PenLine } from 'lucide-react';
import BlogFilter from './BlogFilter';
import type { BlogPost } from './BlogFilter';

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Travel Blog | Tips, Guides & Cultural Stories',
  description:
    'Read expert travel tips, destination guides, cultural insights, and inspiring stories from Morocco. From Marrakech medinas to Sahara sunsets, plan your perfect Moroccan adventure with local expertise.',
  keywords: [
    'Morocco travel blog',
    'Morocco travel tips',
    'Marrakech guide',
    'Moroccan food blog',
    'Sahara desert guide',
    'Fes medina guide',
    'Chefchaouen travel',
    'Atlas Mountains trekking',
    'Morocco culture blog',
    'Morocco itinerary planning',
    'Moroccan mint tea',
    'Morocco shopping guide',
    'Morocco adventure travel',
    'Morocco practical tips',
  ],
  openGraph: {
    title: 'Morocco Travel Blog - CityGuide',
    description:
      'Expert travel tips, destination guides, and cultural insights from Morocco. Your go-to resource for planning the perfect Moroccan adventure.',
    url: 'https://citytoursmorocco.com/blog',
    images: [
      {
        url: '/images/hero-desert.webp',
        width: 1200,
        height: 630,
        alt: 'Morocco travel landscape with golden sand dunes at sunset',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/blog' },
};

/* ================================================================
   BLOG POST DATA
   ================================================================ */

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'moroccan-tea-culture',
    title: 'Moroccan Tea Culture: The Art of Mint Tea',
    excerpt:
      'The ritual of Moroccan mint tea is a cornerstone of daily life and hospitality. Discover the deep history, preparation methods, regional variations, and the unwritten social codes that surround every glass poured from a height.',
    author: {
      name: 'Amina El-Ouafi',
      avatar: '/images/hero-morocco.webp',
    },
    date: 'March 12, 2026',
    readTime: '15 min read',
    category: 'Culture',
    tags: ['Tea', 'Culture', 'Traditions', 'Hospitality'],
    image: '/images/photo-mint-tea-pouring.webp',
    featured: true,
  },
  {
    id: 2,
    slug: 'atlas-mountains-trekking',
    title: 'Atlas Mountains Trekking: The Complete Guide',
    excerpt:
      'From choosing the right season to packing essentials and hiring local guides, everything you need for an unforgettable trek through the High Atlas, including the ascent of Jebel Toubkal.',
    author: {
      name: 'Driss Tazi',
      avatar: '/images/hero-morocco.webp',
    },
    date: 'March 8, 2026',
    readTime: '18 min read',
    category: 'Adventure',
    tags: ['Atlas Mountains', 'Trekking', 'Jebel Toubkal', 'Hiking'],
    image: '/images/hero-desert.webp',
    featured: false,
  },
  {
    id: 3,
    slug: 'medina-shopping-guide',
    title: 'How to Shop in Moroccan Medinas Like a Local',
    excerpt:
      'Master the art of haggling, know what to buy where, learn fair price ranges, and discover the hidden artisan workshops that produce the finest Moroccan craftsmanship.',
    author: {
      name: 'Youssef Amrani',
      avatar: '/images/hero-morocco.webp',
    },
    date: 'March 4, 2026',
    readTime: '16 min read',
    category: 'Practical',
    tags: ['Shopping', 'Souks', 'Haggling', 'Crafts'],
    image: '/images/hero-souk-lamps.webp',
    featured: false,
  },
  {
    id: 4,
    slug: 'ultimate-first-timers-guide-to-marrakech',
    title: "The Ultimate First-Timer's Guide to Marrakech",
    excerpt:
      'Everything you need to know before stepping into the Red City for the first time, from navigating the medina to finding the best riads and avoiding common tourist traps.',
    author: {
      name: 'Leila Benani',
      avatar: '/images/hero-morocco.webp',
    },
    date: 'February 28, 2026',
    readTime: '12 min read',
    category: 'Cities',
    tags: ['Marrakech', 'First-Time Visitors', 'City Guide'],
    image: '/images/hero-marrakech.webp',
    featured: false,
  },
  {
    id: 5,
    slug: '10-hidden-gems-in-fes-medina',
    title: '10 Hidden Gems in Fes Medina That Tourists Miss',
    excerpt:
      'Beyond the tanneries and main thoroughfares lies a secret Fes that most visitors never see. Discover artisan workshops, hidden gardens, and ancient fondouks off the beaten path.',
    author: {
      name: 'Youssef Amrani',
      avatar: '/images/hero-morocco.webp',
    },
    date: 'February 22, 2026',
    readTime: '9 min read',
    category: 'Cities',
    tags: ['Fes', 'Hidden Gems', 'Medina'],
    image: '/images/hero-fes.webp',
    featured: false,
  },
  {
    id: 6,
    slug: 'complete-guide-to-moroccan-street-food',
    title: 'A Complete Guide to Moroccan Street Food',
    excerpt:
      'From sizzling msemen at dawn to steaming bowls of harira at dusk, Moroccan street food is a culinary adventure unlike any other in the world.',
    author: {
      name: 'Amina El-Ouafi',
      avatar: '/images/hero-morocco.webp',
    },
    date: 'February 16, 2026',
    readTime: '10 min read',
    category: 'Food',
    tags: ['Street Food', 'Moroccan Cuisine', 'Food Guide'],
    image: '/images/hero-food.webp',
    featured: false,
  },
  {
    id: 7,
    slug: 'chefchaouen-beyond-the-blue',
    title: 'Why Chefchaouen is More Than Just a Blue City',
    excerpt:
      'Yes, the blue walls are stunning, but Chefchaouen offers so much more: Rif Mountain hikes, local goat cheese, traditional weavers, and a laid-back vibe that keeps travelers coming back.',
    author: {
      name: 'Leila Benani',
      avatar: '/images/hero-morocco.webp',
    },
    date: 'February 10, 2026',
    readTime: '8 min read',
    category: 'Cities',
    tags: ['Chefchaouen', 'Blue City', 'Rif Mountains'],
    image: '/images/hero-chefchaouen.webp',
    featured: false,
  },
  {
    id: 8,
    slug: 'sahara-desert-experiences',
    title: 'The Best Sahara Desert Experiences Beyond Camel Rides',
    excerpt:
      'The Sahara offers far more than the classic camel trek. Discover sandboarding, stargazing camps, nomad encounters, fossil hunting, and luxury bivouacs deep in the dunes.',
    author: {
      name: 'Driss Tazi',
      avatar: '/images/hero-morocco.webp',
    },
    date: 'February 3, 2026',
    readTime: '10 min read',
    category: 'Adventure',
    tags: ['Sahara', 'Desert', 'Adventure', 'Merzouga'],
    image: '/images/hero-sahara-sunrise.webp',
    featured: false,
  },
  {
    id: 9,
    slug: 'essaouira-coastal-secret',
    title: "Essaouira: Morocco's Best-Kept Coastal Secret",
    excerpt:
      'Wind-swept ramparts, fresh seafood, a thriving arts scene, and world-class windsurfing make Essaouira the perfect antidote to the intensity of Marrakech.',
    author: {
      name: 'Leila Benani',
      avatar: '/images/hero-morocco.webp',
    },
    date: 'January 28, 2026',
    readTime: '9 min read',
    category: 'Cities',
    tags: ['Essaouira', 'Beach', 'Coastal', 'Arts'],
    image: '/images/hero-essaouira.webp',
    featured: false,
  },
  {
    id: 10,
    slug: 'moroccan-architecture-riads-kasbahs',
    title: 'Understanding Moroccan Architecture: From Riads to Kasbahs',
    excerpt:
      'Zellige tilework, carved stucco, cedar wood ceilings, and hidden courtyards: a deep dive into the architectural traditions that make Moroccan buildings some of the most beautiful in the world.',
    author: {
      name: 'Youssef Amrani',
      avatar: '/images/hero-morocco.webp',
    },
    date: 'January 21, 2026',
    readTime: '13 min read',
    category: 'Culture',
    tags: ['Architecture', 'Riads', 'Kasbahs', 'Design'],
    image: '/images/hero-kasbahs.webp',
    featured: false,
  },
  {
    id: 11,
    slug: 'ramadan-travelers-guide',
    title: "Ramadan in Morocco: A Traveler's Guide",
    excerpt:
      'Traveling during Ramadan can be one of the most rewarding cultural experiences in Morocco. Learn what to expect, how to be respectful, and why Iftar is the meal of a lifetime.',
    author: {
      name: 'Amina El-Ouafi',
      avatar: '/images/hero-morocco.webp',
    },
    date: 'January 14, 2026',
    readTime: '8 min read',
    category: 'Practical',
    tags: ['Ramadan', 'Culture', 'Travel Tips'],
    image: '/images/hero-hassan-mosque.webp',
    featured: false,
  },
  {
    id: 12,
    slug: 'road-tripping-morocco',
    title: 'Road Tripping Morocco: The Ultimate Route Guide',
    excerpt:
      'From the Mediterranean coast to the Sahara and back, this 2-week road trip itinerary covers Morocco\'s greatest hits with detours to secret spots only locals know about.',
    author: {
      name: 'Driss Tazi',
      avatar: '/images/hero-morocco.webp',
    },
    date: 'January 7, 2026',
    readTime: '15 min read',
    category: 'Adventure',
    tags: ['Road Trip', 'Itinerary', 'Driving', 'Route'],
    image: '/images/hero-surfing.webp',
    featured: false,
  },
  {
    id: 13,
    slug: 'moroccan-tagine-recipes',
    title: 'Moroccan Tagine: History, Recipes & Where to Eat the Best',
    excerpt:
      'The tagine is more than a cooking vessel; it is a philosophy of slow cooking perfected over centuries. Learn the history, master home recipes, and find where locals eat the finest tagines.',
    author: {
      name: 'Amina El-Ouafi',
      avatar: '/images/hero-morocco.webp',
    },
    date: 'December 30, 2025',
    readTime: '11 min read',
    category: 'Food',
    tags: ['Tagine', 'Recipes', 'Moroccan Cuisine'],
    image: '/images/hero-food.webp',
    featured: false,
  },
  {
    id: 14,
    slug: 'budget-travel-morocco',
    title: 'Budget Travel in Morocco: How to See It All for Less',
    excerpt:
      'Morocco is one of the best-value destinations in the world. Learn how to travel the country on 30-50 USD per day without missing any of the highlights.',
    author: {
      name: 'Youssef Amrani',
      avatar: '/images/hero-morocco.webp',
    },
    date: 'December 22, 2025',
    readTime: '11 min read',
    category: 'Practical',
    tags: ['Budget', 'Money', 'Backpacking', 'Tips'],
    image: '/images/hero-marrakech.webp',
    featured: false,
  },
  {
    id: 15,
    slug: 'berber-culture-amazigh',
    title: 'Berber Culture: Meeting the Original Moroccans',
    excerpt:
      'The Amazigh people have inhabited North Africa for thousands of years. Learn about their language, customs, hospitality traditions, and how to visit Berber villages respectfully.',
    author: {
      name: 'Leila Benani',
      avatar: '/images/hero-morocco.webp',
    },
    date: 'December 15, 2025',
    readTime: '11 min read',
    category: 'Culture',
    tags: ['Berber', 'Amazigh', 'Culture', 'Villages'],
    image: '/images/hero-sahara-sunrise.webp',
    featured: false,
  },
  {
    id: 16,
    slug: 'moroccan-hammam-guide',
    title: 'Moroccan Hammam Etiquette: Everything You Should Know',
    excerpt:
      'The hammam is central to Moroccan life, but stepping into one for the first time can be daunting. Here is your complete guide to what to bring, what to expect, and how to relax.',
    author: {
      name: 'Leila Benani',
      avatar: '/images/hero-morocco.webp',
    },
    date: 'December 8, 2025',
    readTime: '7 min read',
    category: 'Culture',
    tags: ['Hammam', 'Wellness', 'Etiquette', 'Spa'],
    image: '/images/hero-hammam.webp',
    featured: false,
  },
  {
    id: 17,
    slug: 'surfing-morocco-coast',
    title: 'Surfing Morocco: From Taghazout to Dakhla',
    excerpt:
      'With consistent Atlantic swells, warm water, and affordable surf camps, Morocco has become one of the world\'s top surfing destinations. Here are the best breaks for every level.',
    author: {
      name: 'Driss Tazi',
      avatar: '/images/hero-morocco.webp',
    },
    date: 'November 30, 2025',
    readTime: '10 min read',
    category: 'Adventure',
    tags: ['Surfing', 'Taghazout', 'Dakhla', 'Beach'],
    image: '/images/hero-surfing.webp',
    featured: false,
  },
  {
    id: 18,
    slug: 'photographers-guide-morocco',
    title: "A Photographer's Guide to Morocco's Most Photogenic Spots",
    excerpt:
      'Golden hour in the Sahara, blue alleyways in Chefchaouen, and the chaos of Jemaa el-Fnaa at night: the best locations, timing, and tips for capturing Morocco at its most beautiful.',
    author: {
      name: 'Leila Benani',
      avatar: '/images/hero-morocco.webp',
    },
    date: 'November 22, 2025',
    readTime: '12 min read',
    category: 'Practical',
    tags: ['Photography', 'Tips', 'Visual Guide'],
    image: '/images/hero-chefchaouen.webp',
    featured: false,
  },
];

/* ================================================================
   JSON-LD STRUCTURED DATA
   ================================================================ */

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'CityGuide Morocco Travel Blog',
    description:
      'Expert travel tips, destination guides, and cultural insights for exploring Morocco.',
    url: 'https://citytoursmorocco.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'CityGuide',
      url: 'https://citytoursmorocco.com',
    },
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `https://citytoursmorocco.com/blog/${post.slug}`,
      image: post.image,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: post.author.name,
      },
      articleSection: post.category,
      keywords: post.tags.join(', '),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ================================================================
   PAGE COMPONENT (Server)
   ================================================================ */

export default function BlogPage() {
  return (
    <>
      <JsonLd />

      {/* ---- Hero Section ---- */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-desert.webp"
            alt="Moroccan landscape with golden sand dunes stretching to the horizon"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute inset-0 moroccan-pattern opacity-30" />
        </div>

        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Blog</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <PenLine className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span className="text-[var(--color-accent)] font-semibold text-xs uppercase tracking-widest">
                Stories &amp; Insights
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
              Morocco Travel Blog
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Expert travel tips, destination guides, cultural insights, and
              inspiring stories from across the Kingdom of Morocco. Written by
              locals who know every corner of this extraordinary country.
            </p>

            <div className="flex flex-wrap gap-8 mt-10">
              <div>
                <p className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">
                  {blogPosts.length}
                </p>
                <p className="text-sm text-white/60 mt-1">Articles</p>
              </div>
              <div className="w-px bg-white/20" />
              <div>
                <p className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">
                  6
                </p>
                <p className="text-sm text-white/60 mt-1">Categories</p>
              </div>
              <div className="w-px bg-white/20" />
              <div>
                <p className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">
                  4
                </p>
                <p className="text-sm text-white/60 mt-1">Expert Writers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="zellige-border" />
      </section>

      {/* ---- Main Content ---- */}
      <section className="section-gradient">
        <div className="container-morocco py-14 md:py-20">
          <BlogFilter posts={blogPosts} />
        </div>
      </section>
    </>
  );
}
