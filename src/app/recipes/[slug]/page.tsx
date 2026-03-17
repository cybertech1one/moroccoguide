import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ChevronRight,
  Home,
  Clock,
  Flame,
  ChefHat,
  Users,
  Leaf,
  Wheat,
  Heart,
  UtensilsCrossed,
  Lightbulb,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  MapPin,
  Check,
  Sparkles,
} from 'lucide-react';
import { recipes } from '@/data/recipes';
import ExploreMore from '@/components/sections/ExploreMore';

/* ═══════════════════════════════════════════════════════════════
   STATIC PARAMS & METADATA
   ═══════════════════════════════════════════════════════════════ */

export function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) return { title: 'Recipe Not Found' };

  return {
    title: `${recipe.name} Recipe | Authentic Moroccan ${recipe.category}`,
    description: recipe.description.slice(0, 160),
    keywords: [
      recipe.name,
      'Moroccan recipe',
      recipe.category,
      recipe.region,
      ...recipe.tags,
      'authentic',
      'traditional',
    ],
    openGraph: {
      title: `${recipe.name} - Authentic Moroccan Recipe | CityGuide`,
      description: recipe.description.slice(0, 200),
      url: `https://citytoursmorocco.com/recipes/${recipe.slug}`,
      images: [
        {
          url: `https://citytoursmorocco.com${recipe.image}`,
          width: 1200,
          height: 630,
          alt: recipe.name,
        },
      ],
    },
    alternates: { canonical: `https://citytoursmorocco.com/recipes/${recipe.slug}` },
  };
}

/* ═══════════════════════════════════════════════════════════════
   DIFFICULTY CONFIG
   ═══════════════════════════════════════════════════════════════ */

const difficultyConfig: Record<string, { bg: string; text: string; label: string }> = {
  Easy: { bg: 'rgba(34, 197, 94, 0.1)', text: '#16a34a', label: 'Easy' },
  Medium: { bg: 'rgba(234, 179, 8, 0.1)', text: '#ca8a04', label: 'Medium' },
  Hard: { bg: 'rgba(239, 68, 68, 0.1)', text: '#dc2626', label: 'Advanced' },
};

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default async function RecipePage({ params }: PageProps) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) notFound();

  /* Related recipes: same category, different slug */
  const related = recipes
    .filter((r) => r.category === recipe.category && r.slug !== recipe.slug)
    .slice(0, 4);

  /* JSON-LD Recipe Schema for Google Rich Results */
  const recipeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.name,
    description: recipe.description,
    image: `https://citytoursmorocco.com${recipe.image}`,
    author: { '@type': 'Organization', name: 'CityGuide Morocco', url: 'https://citytoursmorocco.com' },
    datePublished: '2026-03-17',
    prepTime: `PT${recipe.prepTime.replace(/[^0-9]/g, '') || '30'}M`,
    cookTime: `PT${recipe.cookTime.replace(/[^0-9hH]/g, '').replace(/h/i, 'H') || '60'}M`,
    totalTime: `PT${(parseInt(recipe.prepTime) || 30) + (parseInt(recipe.cookTime) || 60)}M`,
    recipeYield: `${recipe.servings} servings`,
    recipeCategory: recipe.category,
    recipeCuisine: 'Moroccan',
    keywords: recipe.tags.join(', '),
    recipeIngredient: recipe.ingredients.map((i) => `${i.amount} ${i.item}`),
    recipeInstructions: recipe.instructions.map((step, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      text: step,
    })),
    nutrition: { '@type': 'NutritionInformation', description: recipe.nutritionNote },
    suitableForDiet: [
      ...(recipe.vegetarian ? ['https://schema.org/VegetarianDiet'] : []),
      ...(recipe.vegan ? ['https://schema.org/VeganDiet'] : []),
      ...(recipe.glutenFree ? ['https://schema.org/GlutenFreeDiet'] : []),
    ],
    url: `https://citytoursmorocco.com/recipes/${recipe.slug}`,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://citytoursmorocco.com' },
      { '@type': 'ListItem', position: 2, name: 'Recipes', item: 'https://citytoursmorocco.com/recipes' },
      { '@type': 'ListItem', position: 3, name: recipe.name, item: `https://citytoursmorocco.com/recipes/${recipe.slug}` },
    ],
  };

  const diff = difficultyConfig[recipe.difficulty] || difficultyConfig.Medium;

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* ── Hero ── */}
      <section className="relative hero-overlay" style={{ minHeight: '300px' }}>
        <img
          src={recipe.image}
          alt={recipe.name}
          width={1200}
          height={600}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,21,32,0.5), rgba(10,21,32,0.85))' }} />
        <div className="container-morocco relative z-10 flex flex-col justify-end" style={{ minHeight: '300px', paddingBottom: '2rem' }}>
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase mb-3" style={{ backgroundColor: 'rgba(196,150,12,0.2)', color: '#C4960C', width: 'fit-content' }}>
            <UtensilsCrossed className="h-3 w-3" />
            {recipe.category}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-display)] leading-tight max-w-3xl">
            {recipe.name}
          </h1>
          <p className="mt-1 text-base md:text-lg text-white/70 font-[family-name:var(--font-arabic)]" dir="rtl">
            {recipe.arabicName}
          </p>
          <div className="mt-2 flex items-center gap-2 text-sm text-white/70">
            <MapPin className="h-3.5 w-3.5" />
            {recipe.region}
          </div>
        </div>
      </section>

      {/* ── Breadcrumbs ── */}
      <nav aria-label="Breadcrumb" className="border-b" style={{ borderColor: 'var(--border-light)', backgroundColor: 'var(--surface-white)' }}>
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-1.5 text-sm flex-wrap" style={{ color: 'var(--text-muted)' }}>
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-[var(--color-accent)] transition-colors">
                <Home className="h-3.5 w-3.5" />
                Home
              </Link>
            </li>
            <li><ChevronRight className="h-3.5 w-3.5" /></li>
            <li>
              <Link href="/recipes" className="hover:text-[var(--color-accent)] transition-colors">
                Recipes
              </Link>
            </li>
            <li><ChevronRight className="h-3.5 w-3.5" /></li>
            <li className="font-medium truncate max-w-[200px]" style={{ color: 'var(--color-accent)' }}>{recipe.name}</li>
          </ol>
        </div>
      </nav>

      {/* ── Main Content ── */}
      <article className="py-10" style={{ backgroundColor: 'var(--surface-muted)' }}>
        <div className="container-morocco">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* ── Left Column (Main Content) ── */}
            <div className="lg:col-span-2 space-y-8">

              {/* Recipe Info Card */}
              <div className="rounded-xl p-5 border" style={{ backgroundColor: 'var(--surface-white)', borderColor: 'var(--border-light)' }}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="flex flex-col items-center gap-1">
                    <Clock className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Prep Time</span>
                    <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{recipe.prepTime}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Flame className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Cook Time</span>
                    <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{recipe.cookTime}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Users className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Servings</span>
                    <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{recipe.servings}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <ChefHat className="h-5 w-5" style={{ color: diff.text }} />
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Difficulty</span>
                    <span className="rounded-full px-2.5 py-0.5 text-xs font-bold" style={{ backgroundColor: diff.bg, color: diff.text }}>
                      {diff.label}
                    </span>
                  </div>
                </div>

                {/* Dietary Badges */}
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  {recipe.vegetarian && (
                    <span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium" style={{ backgroundColor: 'rgba(34,197,94,0.1)', color: '#16a34a' }}>
                      <Leaf className="h-3 w-3" /> Vegetarian
                    </span>
                  )}
                  {recipe.vegan && (
                    <span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium" style={{ backgroundColor: 'rgba(16,185,129,0.1)', color: '#059669' }}>
                      <Leaf className="h-3 w-3" /> Vegan
                    </span>
                  )}
                  {recipe.glutenFree && (
                    <span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium" style={{ backgroundColor: 'rgba(234,179,8,0.1)', color: '#ca8a04' }}>
                      <Wheat className="h-3 w-3" /> Gluten-Free
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="rounded-xl p-6 border" style={{ backgroundColor: 'var(--surface-white)', borderColor: 'var(--border-light)' }}>
                <h2 className="text-lg font-bold font-[family-name:var(--font-display)] mb-3" style={{ color: 'var(--text-primary)' }}>
                  About This Dish
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {recipe.description}
                </p>
              </div>

              {/* Ingredients */}
              <div className="rounded-xl p-6 border" style={{ backgroundColor: 'var(--surface-white)', borderColor: 'var(--border-light)' }}>
                <h2 className="text-lg font-bold font-[family-name:var(--font-display)] mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                  <BookOpen className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
                  Ingredients
                </h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ing, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 py-2 border-b last:border-0 text-sm"
                      style={{ borderColor: 'var(--border-light)' }}
                    >
                      <Check className="h-4 w-4 shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                      <span style={{ color: 'var(--text-primary)' }}>
                        <span className="font-semibold">{ing.amount}</span>
                        {' '}{ing.item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructions */}
              <div className="rounded-xl p-6 border" style={{ backgroundColor: 'var(--surface-white)', borderColor: 'var(--border-light)' }}>
                <h2 className="text-lg font-bold font-[family-name:var(--font-display)] mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                  <ChefHat className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
                  Instructions
                </h2>
                <ol className="space-y-4">
                  {recipe.instructions.map((step, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                        style={{ backgroundColor: 'var(--color-accent)' }}
                      >
                        {idx + 1}
                      </span>
                      <p className="text-sm leading-relaxed pt-0.5" style={{ color: 'var(--text-secondary)' }}>
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Tips */}
              {recipe.tips.length > 0 && (
                <div className="rounded-xl p-6 border" style={{ backgroundColor: 'rgba(196,150,12,0.04)', borderColor: 'rgba(196,150,12,0.2)' }}>
                  <h2 className="text-lg font-bold font-[family-name:var(--font-display)] mb-3 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                    <Lightbulb className="h-5 w-5" style={{ color: '#C4960C' }} />
                    Tips & Tricks
                  </h2>
                  <ul className="space-y-2">
                    {recipe.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <Sparkles className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color: '#C4960C' }} />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* ── Right Sidebar ── */}
            <aside className="space-y-6">

              {/* Nutrition Note */}
              <div className="rounded-xl p-5 border" style={{ backgroundColor: 'var(--surface-white)', borderColor: 'var(--border-light)' }}>
                <h3 className="text-sm font-bold font-[family-name:var(--font-heading)] mb-2 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                  <Heart className="h-4 w-4" style={{ color: 'var(--color-accent)' }} />
                  Nutrition Note
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {recipe.nutritionNote}
                </p>
              </div>

              {/* Pairings */}
              <div className="rounded-xl p-5 border" style={{ backgroundColor: 'var(--surface-white)', borderColor: 'var(--border-light)' }}>
                <h3 className="text-sm font-bold font-[family-name:var(--font-heading)] mb-2 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                  <UtensilsCrossed className="h-4 w-4" style={{ color: 'var(--color-accent)' }} />
                  Serve With
                </h3>
                <ul className="space-y-1.5">
                  {recipe.pairings.map((pairing, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                      <ArrowRight className="h-3 w-3" style={{ color: 'var(--color-accent)' }} />
                      {pairing}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="rounded-xl p-5 border" style={{ backgroundColor: 'var(--surface-white)', borderColor: 'var(--border-light)' }}>
                <h3 className="text-sm font-bold font-[family-name:var(--font-heading)] mb-2" style={{ color: 'var(--text-primary)' }}>
                  Tags
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {recipe.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-medium"
                      style={{ backgroundColor: 'rgba(160,82,45,0.06)', color: 'var(--text-muted)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Recipes */}
              {related.length > 0 && (
                <div className="rounded-xl p-5 border" style={{ backgroundColor: 'var(--surface-white)', borderColor: 'var(--border-light)' }}>
                  <h3 className="text-sm font-bold font-[family-name:var(--font-heading)] mb-3" style={{ color: 'var(--text-primary)' }}>
                    More {recipe.category} Recipes
                  </h3>
                  <div className="space-y-2">
                    {related.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/recipes/${rel.slug}`}
                        className="group flex items-center gap-3 rounded-lg p-2 transition-all hover:bg-[rgba(160,82,45,0.04)]"
                      >
                        <img
                          src={rel.image}
                          alt={rel.name}
                          width={48}
                          height={48}
                          className="h-12 w-12 rounded-lg object-cover shrink-0"
                          loading="lazy"
                        />
                        <div className="min-w-0">
                          <p className="text-xs font-semibold truncate group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                            {rel.name}
                          </p>
                          <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>
                            {rel.difficulty} | {rel.prepTime}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to Recipes */}
              <Link
                href="/recipes"
                className="flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all hover:shadow-md"
                style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}
              >
                <ArrowLeft className="h-4 w-4" />
                All Recipes
              </Link>
            </aside>
          </div>
        </div>
      </article>

      {/* ── Explore More ── */}
      <ExploreMore currentCategory="food" currentHref="/recipes" title="Explore More of Morocco" />
    </>
  );
}
