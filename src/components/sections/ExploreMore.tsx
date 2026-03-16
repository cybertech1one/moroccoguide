import Link from 'next/link';
import {
  ArrowRight,
  MapPin,
  Mountain,
  UtensilsCrossed,
  Compass,
  Camera,
  ShoppingBag,
  Plane,
  Heart,
  Sparkles,
  Calendar,
  Train,
  Home,
  Sun,
  Waves,
  Shield,
} from 'lucide-react';

/* ─── Smart Contextual Linking Component ───
   Displays relevant related pages based on the current page category.
   Server component — used at the bottom of content pages.
*/

type PageLink = {
  label: string;
  href: string;
  icon: React.ElementType;
  description: string;
  tag?: string;
};

const allPages: Record<string, PageLink[]> = {
  cities: [
    { label: 'Marrakech Guide', href: '/marrakech', icon: MapPin, description: 'The Red City', tag: 'Popular' },
    { label: 'Fes Guide', href: '/fes-guide', icon: MapPin, description: 'Spiritual Capital' },
    { label: 'Chefchaouen', href: '/chefchaouen', icon: Camera, description: 'Blue Pearl' },
    { label: 'Essaouira', href: '/essaouira', icon: Waves, description: 'Wind City' },
    { label: 'Tangier', href: '/tangier', icon: Plane, description: 'Gateway to Europe' },
    { label: 'Agadir', href: '/agadir', icon: Sun, description: 'Beach Resort' },
    { label: 'Casablanca', href: '/casablanca', icon: MapPin, description: 'Modern Metropolis' },
    { label: 'Dakhla', href: '/dakhla', icon: Waves, description: 'Kite Paradise' },
  ],
  activities: [
    { label: 'Desert Adventures', href: '/desert-adventures', icon: Compass, description: 'Quad, camel, sandboarding', tag: 'Top Pick' },
    { label: 'Hot Air Balloon', href: '/hot-air-balloon', icon: Sparkles, description: 'Soar over Morocco' },
    { label: 'Skiing', href: '/skiing', icon: Mountain, description: 'Atlas snow sports' },
    { label: 'Water Fun', href: '/water-fun', icon: Waves, description: 'Parks & beaches' },
    { label: 'Atlas Trekking', href: '/atlas-mountains', icon: Mountain, description: 'Peaks & villages' },
    { label: 'Surfing', href: '/water-sports', icon: Waves, description: 'Atlantic waves' },
  ],
  food: [
    { label: 'Cuisine Guide', href: '/cuisine', icon: UtensilsCrossed, description: 'Complete food encyclopedia', tag: 'Essential' },
    { label: 'Souks & Markets', href: '/souks', icon: ShoppingBag, description: 'Haggling & treasures' },
    { label: 'Street Food', href: '/street-food', icon: UtensilsCrossed, description: 'Eat like a local' },
    { label: 'Cooking Classes', href: '/cooking-classes', icon: UtensilsCrossed, description: 'Learn to cook' },
    { label: 'Spa & Hammam', href: '/spa', icon: Heart, description: 'Wellness rituals' },
  ],
  planning: [
    { label: 'First Time Guide', href: '/first-time', icon: Sparkles, description: 'Everything you need', tag: 'Start Here' },
    { label: 'Budget Travel', href: '/budget-travel', icon: Shield, description: 'Save smart' },
    { label: 'Packing List', href: '/packing', icon: ShoppingBag, description: 'What to bring' },
    { label: 'Money Guide', href: '/money', icon: Shield, description: 'MAD currency tips' },
    { label: 'Trains & Transport', href: '/trains', icon: Train, description: 'Getting around' },
    { label: 'Weather Guide', href: '/weather', icon: Sun, description: 'When to visit' },
    { label: 'Scams to Avoid', href: '/scams', icon: Shield, description: 'Stay safe' },
    { label: 'Riad Guide', href: '/riad-guide', icon: Home, description: 'Where to stay' },
  ],
  culture: [
    { label: 'Berber Culture', href: '/berber-culture', icon: Heart, description: 'Amazigh heritage' },
    { label: 'Ramadan Guide', href: '/ramadan', icon: Calendar, description: 'Visiting during Ramadan' },
    { label: 'World Cup 2030', href: '/worldcup-2030', icon: Sparkles, description: 'FIFA comes to Morocco', tag: 'New' },
    { label: 'Sahara Desert', href: '/sahara', icon: Sun, description: 'Desert guide' },
  ],
};

type ExploreMoreProps = {
  /** Current page category to exclude from suggestions */
  currentCategory?: string;
  /** Current page href to exclude from links */
  currentHref?: string;
  /** Max links per category */
  maxPerCategory?: number;
  /** Title override */
  title?: string;
};

export default function ExploreMore({
  currentCategory,
  currentHref,
  maxPerCategory = 3,
  title = 'Continue Exploring Morocco',
}: ExploreMoreProps) {
  // Build a curated selection across categories
  const categories = Object.entries(allPages)
    .filter(([cat]) => cat !== currentCategory)
    .slice(0, 4);

  return (
    <section className="py-16" style={{ backgroundColor: 'var(--surface-muted)' }}>
      <div className="container-morocco">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2
            className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)]"
            style={{ color: 'var(--text-primary)' }}
          >
            {title}
          </h2>
          <p className="mt-2 text-base" style={{ color: 'var(--text-secondary)' }}>
            Discover more of what Morocco has to offer
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(([category, pages]) => (
            <div key={category}>
              <h3
                className="text-xs font-bold uppercase tracking-wider mb-3 font-[family-name:var(--font-heading)]"
                style={{ color: 'var(--color-accent)' }}
              >
                {category === 'cities' && 'Destinations'}
                {category === 'activities' && 'Things to Do'}
                {category === 'food' && 'Food & Culture'}
                {category === 'planning' && 'Plan Your Trip'}
                {category === 'culture' && 'Culture & Events'}
              </h3>
              <ul className="space-y-2">
                {pages
                  .filter((p) => p.href !== currentHref)
                  .slice(0, maxPerCategory)
                  .map((page) => {
                    const Icon = page.icon;
                    return (
                      <li key={page.href}>
                        <Link
                          href={page.href}
                          className="group flex items-center gap-3 rounded-xl p-3 transition-all hover:bg-white hover:shadow-sm"
                          style={{ borderColor: 'var(--border-light)' }}
                        >
                          <span
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                            style={{ backgroundColor: 'rgba(160, 82, 45, 0.08)' }}
                          >
                            <Icon className="h-4 w-4" style={{ color: 'var(--color-accent)' }} />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="flex items-center gap-2">
                              <span
                                className="text-sm font-semibold group-hover:text-[var(--color-accent)] transition-colors"
                                style={{ color: 'var(--text-primary)' }}
                              >
                                {page.label}
                              </span>
                              {page.tag && (
                                <span
                                  className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded-full"
                                  style={{
                                    backgroundColor: 'rgba(196, 150, 12, 0.12)',
                                    color: '#C4960C',
                                  }}
                                >
                                  {page.tag}
                                </span>
                              )}
                            </span>
                            <span className="text-xs block" style={{ color: 'var(--text-muted)' }}>
                              {page.description}
                            </span>
                          </span>
                          <ArrowRight
                            className="h-3.5 w-3.5 shrink-0 opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all"
                            style={{ color: 'var(--text-muted)' }}
                          />
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-8">
          <Link
            href="/cities"
            className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all hover:shadow-md"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: '#fff',
            }}
          >
            Explore All Destinations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
