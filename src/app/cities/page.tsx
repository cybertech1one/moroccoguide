import type { Metadata } from 'next'
import Link from 'next/link'
import { cities, regions } from '@/lib/data'
import { generateStructuredData } from '@/lib/utils'
import { ChevronRight, Home } from 'lucide-react'
import CitiesFilter from './CitiesFilter'

/* ─── SEO Metadata ─── */

export const metadata: Metadata = {
  title: "Explore Morocco's Cities - Complete Directory",
  description:
    'Discover 50+ Moroccan cities from imperial Fes and Marrakech to coastal Essaouira and Saharan Merzouga. Filter by region, type, and rating to plan your perfect Morocco trip.',
  openGraph: {
    title: "Explore Morocco's Cities | CityGuide",
    description:
      'The most comprehensive directory of Moroccan cities. Browse imperial cities, coastal towns, mountain retreats, and desert gateways.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=2800',
        width: 2800,
        height: 1600,
        alt: "Morocco's diverse cities and landscapes",
      },
    ],
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/cities',
  },
}

/* ─── Structured Data ─── */

const itemListSchema = generateStructuredData('ItemList', {
  name: "Morocco's Cities Directory",
  description: 'Complete directory of Moroccan cities for tourists and travelers.',
  numberOfItems: cities.length,
  itemListElement: cities.map((city, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'City',
      name: city.name,
      url: `https://citytoursmorocco.com/cities/${city.slug}`,
      description: city.description,
    },
  })),
})

const breadcrumbSchema = generateStructuredData('BreadcrumbList', {
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://citytoursmorocco.com' },
    { '@type': 'ListItem', position: 2, name: 'Cities', item: 'https://citytoursmorocco.com/cities' },
  ],
})

/* ─── Page Component ─── */

export default function CitiesPage() {
  const uniqueRegions = regions.map((r) => ({ id: r.id, name: r.name }))

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Banner */}
      <section className="relative h-[420px] md:h-[480px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=2800)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        {/* Decorative Pattern */}
        <div className="absolute inset-0 moroccan-pattern opacity-30" />

        <div className="relative h-full container-morocco flex flex-col justify-end pb-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/70">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li className="text-white font-medium">Cities</li>
            </ol>
          </nav>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl">
            Explore Morocco&apos;s Cities
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            From ancient imperial capitals to sun-kissed coastal towns and Saharan desert
            gateways &mdash; discover {cities.length}+ destinations across the Kingdom of Morocco.
          </p>
        </div>
      </section>

      {/* Zellige Border */}
      <div className="zellige-border" />

      {/* Cities Filter + Grid */}
      <section className="py-10 md:py-14 moroccan-pattern">
        <div className="container-morocco">
          <CitiesFilter cities={cities} regions={uniqueRegions} />
        </div>
      </section>
    </>
  )
}
