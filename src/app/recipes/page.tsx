import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  UtensilsCrossed,
  Clock,
  ChefHat,
  Leaf,
  Wheat,
  Search,
  Star,
  Flame,
  ArrowRight,
} from 'lucide-react';
import { recipes } from '@/data/recipes';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Moroccan Recipes | 130+ Authentic Dishes You Can Cook at Home',
  description:
    'Discover over 130 authentic Moroccan recipes with real ingredients and step-by-step instructions. From tagines and couscous to pastilla and mint tea. Traditional dishes from every region of Morocco — all cookable at home.',
  keywords: [
    'Moroccan recipes',
    'authentic Moroccan food',
    'tagine recipe',
    'couscous recipe',
    'Moroccan cooking',
    'harira recipe',
    'pastilla recipe',
    'Moroccan bread recipe',
    'Moroccan desserts',
    'mint tea recipe',
    'chermoula recipe',
    'Moroccan salad recipes',
    'Moroccan chicken recipe',
    'lamb tagine recipe',
    'Moroccan soup recipes',
    'kefta recipe',
    'msemen recipe',
    'baghrir recipe',
    'Moroccan vegetarian recipes',
    'Moroccan vegan recipes',
  ],
  openGraph: {
    title: 'Moroccan Recipes - 130+ Authentic Dishes | CityGuide Morocco',
    description:
      'The most comprehensive collection of authentic Moroccan recipes online. Tagines, couscous, pastries, salads, breads, and more — all with real ingredients and step-by-step instructions.',
    url: 'https://citytoursmorocco.com/recipes',
    images: [
      {
        url: 'https://citytoursmorocco.com/images/photo-food-flatlay.webp',
        width: 1200,
        height: 630,
        alt: 'Collection of authentic Moroccan dishes including tagine, couscous, and pastries',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/recipes' },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Moroccan Recipes Collection',
  description: 'Over 130 authentic Moroccan recipes with real ingredients and step-by-step instructions.',
  url: 'https://citytoursmorocco.com/recipes',
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: 'https://citytoursmorocco.com' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://citytoursmorocco.com' },
      { '@type': 'ListItem', position: 2, name: 'Recipes', item: 'https://citytoursmorocco.com/recipes' },
    ],
  },
  numberOfItems: recipes.length,
  about: { '@type': 'Thing', name: 'Moroccan Cuisine' },
};

/* ═══════════════════════════════════════════════════════════════
   CATEGORY CONFIG
   ═══════════════════════════════════════════════════════════════ */

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Main Course', value: 'Main Course' },
  { label: 'Soup', value: 'Soup' },
  { label: 'Salad', value: 'Salad' },
  { label: 'Bread', value: 'Bread' },
  { label: 'Dessert', value: 'Dessert' },
  { label: 'Beverage', value: 'Beverage' },
  { label: 'Snack', value: 'Snack' },
  { label: 'Preserve', value: 'Preserve' },
] as const;

const difficultyColors: Record<string, { bg: string; text: string }> = {
  Easy: { bg: 'rgba(34, 197, 94, 0.1)', text: '#16a34a' },
  Medium: { bg: 'rgba(234, 179, 8, 0.1)', text: '#ca8a04' },
  Hard: { bg: 'rgba(239, 68, 68, 0.1)', text: '#dc2626' },
};

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function RecipesPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero Section ── */}
      <section className="relative hero-overlay" style={{ minHeight: '340px' }}>
        <img
          src="/images/photo-food-flatlay.webp"
          alt="Authentic Moroccan dishes spread on a traditional table"
          width={1200}
          height={600}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,21,32,0.65), rgba(10,21,32,0.8))' }} />
        <div className="container-morocco relative z-10 flex flex-col items-center justify-center text-center" style={{ minHeight: '340px', paddingTop: '2rem', paddingBottom: '2rem' }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-display)] leading-tight">
            Moroccan Recipes
          </h1>
          <p className="mt-3 max-w-2xl text-base md:text-lg text-white/85 font-[family-name:var(--font-heading)]">
            Over {recipes.length} authentic, cookable recipes from every region of Morocco.
            Tagines, couscous, pastries, salads, breads, and more.
          </p>
        </div>
      </section>

      {/* ── Breadcrumbs ── */}
      <nav aria-label="Breadcrumb" className="border-b" style={{ borderColor: 'var(--border-light)', backgroundColor: 'var(--surface-white)' }}>
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--text-muted)' }}>
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-[var(--color-accent)] transition-colors">
                <Home className="h-3.5 w-3.5" />
                Home
              </Link>
            </li>
            <li><ChevronRight className="h-3.5 w-3.5" /></li>
            <li className="font-medium" style={{ color: 'var(--color-accent)' }}>Recipes</li>
          </ol>
        </div>
      </nav>

      {/* ── Stats Bar ── */}
      <section className="border-b py-6" style={{ borderColor: 'var(--border-light)', backgroundColor: 'var(--surface-muted)' }}>
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: UtensilsCrossed, label: 'Total Recipes', value: recipes.length.toString() },
              { icon: Leaf, label: 'Vegetarian', value: recipes.filter(r => r.vegetarian).length.toString() },
              { icon: Wheat, label: 'Gluten-Free', value: recipes.filter(r => r.glutenFree).length.toString() },
              { icon: Star, label: 'Categories', value: '10' },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex flex-col items-center gap-1">
                  <Icon className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-2xl font-bold font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>
                    {stat.value}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Category Navigation ── */}
      <section className="sticky top-[var(--header-height,5rem)] z-30 border-b py-3" style={{ borderColor: 'var(--border-light)', backgroundColor: 'var(--surface-white)' }}>
        <div className="container-morocco">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => {
              const count = cat.value === 'all' ? recipes.length : recipes.filter(r => r.category === cat.value).length;
              return (
                <a
                  key={cat.value}
                  href={cat.value === 'all' ? '#all-recipes' : `#cat-${cat.value.toLowerCase().replace(/\s/g, '-')}`}
                  className="shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-all hover:shadow-sm"
                  style={{
                    backgroundColor: cat.value === 'all' ? 'var(--color-accent)' : 'rgba(160,82,45,0.08)',
                    color: cat.value === 'all' ? '#fff' : 'var(--text-primary)',
                  }}
                >
                  {cat.label} ({count})
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Recipe Grid ── */}
      <section id="all-recipes" className="py-12" style={{ backgroundColor: 'var(--surface-muted)' }}>
        <div className="container-morocco">
          {categories.filter(c => c.value !== 'all').map((cat) => {
            const catRecipes = recipes.filter(r => r.category === cat.value);
            if (catRecipes.length === 0) return null;
            return (
              <div key={cat.value} id={`cat-${cat.value.toLowerCase().replace(/\s/g, '-')}`} className="mb-16 scroll-mt-36">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: 'rgba(160,82,45,0.1)' }}>
                    <UtensilsCrossed className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>
                      {cat.label}
                    </h2>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                      {catRecipes.length} recipe{catRecipes.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>

                {/* Recipe Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {catRecipes.map((recipe) => (
                    <Link
                      key={recipe.slug}
                      href={`/recipes/${recipe.slug}`}
                      className="group card-moroccan rounded-xl overflow-hidden transition-all hover:shadow-lg"
                      style={{ backgroundColor: 'var(--surface-white)' }}
                    >
                      {/* Card Image */}
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={recipe.image}
                          alt={recipe.name}
                          width={400}
                          height={176}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Difficulty Badge */}
                        <span
                          className="absolute top-2 right-2 rounded-full px-2.5 py-0.5 text-xs font-bold"
                          style={{
                            backgroundColor: difficultyColors[recipe.difficulty]?.bg,
                            color: difficultyColors[recipe.difficulty]?.text,
                          }}
                        >
                          {recipe.difficulty}
                        </span>
                        {/* Dietary Badges */}
                        <div className="absolute bottom-2 left-2 flex gap-1.5">
                          {recipe.vegetarian && (
                            <span className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase" style={{ backgroundColor: 'rgba(34,197,94,0.9)', color: '#fff' }}>
                              Vegetarian
                            </span>
                          )}
                          {recipe.vegan && (
                            <span className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase" style={{ backgroundColor: 'rgba(16,185,129,0.9)', color: '#fff' }}>
                              Vegan
                            </span>
                          )}
                          {recipe.glutenFree && (
                            <span className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase" style={{ backgroundColor: 'rgba(234,179,8,0.9)', color: '#fff' }}>
                              GF
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-4">
                        <h3 className="text-sm font-bold font-[family-name:var(--font-heading)] leading-tight group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                          {recipe.name}
                        </h3>
                        <p className="mt-0.5 text-xs font-[family-name:var(--font-arabic)]" style={{ color: 'var(--color-accent)' }} dir="rtl">
                          {recipe.arabicName}
                        </p>
                        <p className="mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                          {recipe.region}
                        </p>

                        {/* Meta Row */}
                        <div className="mt-3 flex items-center gap-3 text-xs" style={{ color: 'var(--text-secondary)' }}>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {recipe.prepTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Flame className="h-3 w-3" />
                            {recipe.cookTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <ChefHat className="h-3 w-3" />
                            {recipe.servings} srv
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16" style={{ backgroundColor: 'var(--surface-white)' }}>
        <div className="container-morocco text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>
            Explore More of Morocco
          </h2>
          <p className="mt-2 max-w-xl mx-auto text-sm" style={{ color: 'var(--text-secondary)' }}>
            Discover Moroccan cuisine in depth, from street food guides to cooking classes and regional specialties.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              { label: 'Cuisine Guide', href: '/cuisine' },
              { label: 'Cooking Classes', href: '/cooking-classes' },
              { label: 'Street Food', href: '/street-food' },
              { label: 'Food Tours', href: '/food-tours' },
              { label: 'Spices Guide', href: '/spices' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-medium transition-all hover:shadow-md"
                style={{ backgroundColor: 'rgba(160,82,45,0.08)', color: 'var(--color-accent)' }}
              >
                {link.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
