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
  Moon,
  Car,
  Gem,
  Wifi,
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
    { label: 'Paragliding', href: '/paragliding', icon: Compass, description: 'Fly over the Atlas', tag: 'New' },
    { label: 'Quad Biking', href: '/quad-biking', icon: Compass, description: 'Desert & palm grove rides' },
    { label: 'Surfing Taghazout', href: '/taghazout-surf', icon: Waves, description: 'World-class surf' },
    { label: 'Atlas Trekking', href: '/atlas-mountains', icon: Mountain, description: 'Peaks & villages' },
    { label: 'Sandboarding', href: '/sandboarding', icon: Sun, description: 'Ride the Sahara dunes' },
    { label: 'Kayaking', href: '/kayaking', icon: Waves, description: 'Rivers & coast' },
  ],
  food: [
    { label: 'Cuisine Guide', href: '/cuisine', icon: UtensilsCrossed, description: 'Complete food encyclopedia', tag: 'Essential' },
    { label: 'Moroccan Food Guide', href: '/moroccan-food-guide', icon: UtensilsCrossed, description: 'Dishes you must try' },
    { label: 'Souks & Markets', href: '/souks', icon: ShoppingBag, description: 'Haggling & treasures' },
    { label: 'Street Food', href: '/street-food', icon: UtensilsCrossed, description: 'Eat like a local' },
    { label: 'Cooking Classes', href: '/cooking-classes', icon: UtensilsCrossed, description: 'Learn to cook' },
    { label: 'Moroccan Markets', href: '/moroccan-markets', icon: ShoppingBag, description: 'Best souks & markets' },
    { label: 'Hammam Guide', href: '/moroccan-hammam', icon: Heart, description: 'Traditional bath ritual' },
  ],
  planning: [
    { label: 'First Time Guide', href: '/first-time', icon: Sparkles, description: 'Everything you need', tag: 'Start Here' },
    { label: 'Travel Tools', href: '/tools', icon: Compass, description: 'Calculators & checklists', tag: 'New' },
    { label: 'Budget Calculator', href: '/tools/budget', icon: Shield, description: 'Plan your spending' },
    { label: 'Currency Converter', href: '/tools/currency', icon: Shield, description: 'MAD exchange rates' },
    { label: 'Packing Checklist', href: '/tools/checklist', icon: ShoppingBag, description: 'Interactive packing list' },
    { label: 'Darija Phrases', href: '/tools/phrases', icon: Heart, description: 'Essential Arabic words' },
    { label: 'Train Routes', href: '/morocco-train-routes', icon: Train, description: 'ONCF rail network' },
    { label: 'Public Transport', href: '/public-transport', icon: Train, description: 'Buses, trams, taxis' },
    { label: 'Airports Guide', href: '/morocco-airports-guide', icon: Plane, description: 'All Morocco airports' },
    { label: 'Safety Tips', href: '/morocco-safety-tips', icon: Shield, description: 'Stay safe in Morocco' },
    { label: 'Weather Monthly', href: '/morocco-weather-monthly', icon: Sun, description: 'Month-by-month climate' },
    { label: 'Emergency Contacts', href: '/emergency', icon: Shield, description: 'Police, hospitals, embassies' },
  ],
  culture: [
    { label: 'Berber Culture', href: '/berber-culture', icon: Heart, description: 'Amazigh heritage' },
    { label: 'Moroccan Festivals', href: '/moroccan-festivals', icon: Calendar, description: 'Celebrations year-round', tag: 'New' },
    { label: 'Learn Darija', href: '/darija', icon: Heart, description: 'Moroccan Arabic basics' },
    { label: 'Ramadan Guide', href: '/ramadan', icon: Calendar, description: 'Visiting during Ramadan' },
    { label: 'World Cup 2030', href: '/worldcup-2030', icon: Sparkles, description: 'FIFA comes to Morocco', tag: 'New' },
    { label: 'Morocco for Locals', href: '/morocco-for-locals', icon: MapPin, description: 'Guide for Moroccans' },
    { label: 'Photography Guide', href: '/photography-guide', icon: Camera, description: 'Best shots & techniques' },
  ],
  destinations: [
    { label: 'Paradise Valley', href: '/paradise-valley', icon: Mountain, description: 'Hidden oasis near Agadir', tag: 'Hidden Gem' },
    { label: 'Todra Gorge', href: '/todra-gorge', icon: Mountain, description: 'Dramatic canyon walls' },
    { label: 'Draa Valley', href: '/draa-valley', icon: Sun, description: 'Oasis & palm groves' },
    { label: 'Bin El Ouidane', href: '/bin-el-ouidane', icon: Waves, description: 'Mountain lake escape' },
    { label: 'Tetouan', href: '/tetouan', icon: MapPin, description: 'White Dove of the Rif' },
    { label: 'Ouarzazate', href: '/ouarzazate', icon: Camera, description: 'Hollywood of Africa' },
    { label: 'Meknes', href: '/meknes', icon: MapPin, description: 'Imperial city' },
  ],
  lifestyle: [
    { label: 'Digital Nomad Guide', href: '/morocco-digital-nomad-guide', icon: Wifi, description: 'Remote work in Morocco', tag: 'New' },
    { label: 'Road Trip Routes', href: '/morocco-road-trip-routes', icon: Car, description: '6 epic driving routes', tag: 'New' },
    { label: 'Shopping Guide', href: '/morocco-shopping-guide', icon: ShoppingBag, description: 'Bargaining & best buys' },
    { label: 'Nightlife Guide', href: '/morocco-nightlife-guide', icon: Moon, description: 'Bars, clubs & shows' },
    { label: 'Spa & Hammam', href: '/morocco-spa-guide', icon: Gem, description: 'Treatments & wellness' },
    { label: 'Wedding Venues', href: '/morocco-wedding-venues', icon: Heart, description: 'Destination weddings', tag: 'New' },
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
                {category === 'cities' && 'Major Cities'}
                {category === 'activities' && 'Things to Do'}
                {category === 'food' && 'Food & Culture'}
                {category === 'planning' && 'Plan Your Trip'}
                {category === 'culture' && 'Culture & Events'}
                {category === 'destinations' && 'Hidden Gems'}
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
