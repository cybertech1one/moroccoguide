'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  Calendar,
  Clock,
  BookOpen,
  ArrowRight,
  ChevronRight,
  Mail,
  TrendingUp,
} from 'lucide-react';

/* ================================================================
   TYPES
   ================================================================ */

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

/* ================================================================
   CONSTANTS
   ================================================================ */

const CATEGORIES = [
  'All',
  'Culture',
  'Food',
  'Adventure',
  'Practical',
  'Cities',
] as const;

const POSTS_PER_PAGE = 9;

/* ================================================================
   CATEGORY STYLE HELPER
   ================================================================ */

function getCategoryStyle(category: string): string {
  switch (category) {
    case 'Culture':
      return 'bg-[var(--color-accent-50)] text-[var(--color-accent-700)] border border-[var(--color-accent-200)]';
    case 'Food':
      return 'bg-[var(--color-secondary-50)] text-[var(--color-secondary-700)] border border-[var(--color-secondary-200)]';
    case 'Adventure':
      return 'bg-emerald-50 text-emerald-700 border border-emerald-200';
    case 'Practical':
      return 'bg-[var(--color-primary-50)] text-[var(--color-primary-700)] border border-[var(--color-primary-200)]';
    case 'Cities':
      return 'bg-sky-50 text-sky-700 border border-sky-200';
    default:
      return 'tag tag-primary';
  }
}

/* ================================================================
   POPULAR ARTICLES DATA
   ================================================================ */

const popularArticles = [
  {
    slug: 'moroccan-tea-culture',
    title: 'Moroccan Tea Culture: The Art of Mint Tea',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=200&q=80',
  },
  {
    slug: 'atlas-mountains-trekking',
    title: 'Atlas Mountains Trekking: Complete Guide',
    readTime: '18 min read',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=200&q=80',
  },
  {
    slug: 'medina-shopping-guide',
    title: 'How to Shop in Moroccan Medinas',
    readTime: '16 min read',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=200&q=80',
  },
  {
    slug: 'ultimate-first-timers-guide-to-marrakech',
    title: "The Ultimate First-Timer's Guide to Marrakech",
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=200&q=80',
  },
  {
    slug: 'complete-guide-to-moroccan-street-food',
    title: 'A Complete Guide to Moroccan Street Food',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=200&q=80',
  },
];

/* ================================================================
   MAIN BLOG FILTER + LAYOUT COMPONENT
   ================================================================ */

export default function BlogFilter({ posts }: { posts: BlogPost[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  /* Featured post */
  const featuredPost = posts.find((p) => p.featured) ?? posts[0];

  /* Filtered posts (excluding featured) */
  const filtered = useMemo(() => {
    return posts
      .filter((p) => p.id !== featuredPost.id)
      .filter((p) => {
        if (searchQuery) {
          const q = searchQuery.toLowerCase();
          if (
            !p.title.toLowerCase().includes(q) &&
            !p.excerpt.toLowerCase().includes(q) &&
            !p.tags.some((t) => t.toLowerCase().includes(q)) &&
            !p.author.name.toLowerCase().includes(q) &&
            !p.category.toLowerCase().includes(q)
          )
            return false;
        }
        if (selectedCategory !== 'All' && p.category !== selectedCategory)
          return false;
        return true;
      });
  }, [posts, searchQuery, selectedCategory, featuredPost.id]);

  const visiblePosts = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div>
      {/* ---- Featured Post Hero Card ---- */}
      <Link
        href={`/blog/${featuredPost.slug}`}
        className="card-featured group overflow-hidden flex flex-col lg:flex-row mb-14"
      >
        <div className="relative lg:w-3/5 h-72 sm:h-80 lg:h-[420px] overflow-hidden">
          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-accent)] text-[var(--color-primary-900)] text-xs font-bold shadow-lg uppercase tracking-wider">
              <BookOpen className="w-3 h-3" />
              Featured
            </span>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getCategoryStyle(featuredPost.category)}`}>
              {featuredPost.category}
            </span>
          </div>
        </div>

        <div className="lg:w-2/5 p-6 md:p-10 flex flex-col justify-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] group-hover:text-[var(--color-secondary)] transition-colors mb-4 leading-tight">
            {featuredPost.title}
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-6 line-clamp-3 text-base">
            {featuredPost.excerpt}
          </p>

          <div className="flex items-center gap-3 mb-6">
            <img
              src={featuredPost.author.avatar}
              alt={featuredPost.author.name}
              className="w-11 h-11 rounded-full object-cover ring-2 ring-[var(--color-accent-200)]"
            />
            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                {featuredPost.author.name}
              </p>
              <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {featuredPost.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {featuredPost.readTime}
                </span>
              </div>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-secondary)] group-hover:gap-3 transition-all uppercase tracking-wider">
            Read Full Article <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>

      {/* ---- Category Tabs + Search ---- */}
      <div className="flex flex-col lg:flex-row gap-4 mb-10">
        <div className="flex flex-wrap gap-2 flex-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(POSTS_PER_PAGE);
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[var(--color-primary)] text-white shadow-md'
                  : 'bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
              }`}
              aria-pressed={selectedCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(POSTS_PER_PAGE);
            }}
            className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition-colors text-sm"
            aria-label="Search blog posts"
          />
        </div>
      </div>

      <p className="text-sm text-[var(--text-muted)] mb-6">
        Showing {visiblePosts.length} of {filtered.length} articles
        {selectedCategory !== 'All' && ` in ${selectedCategory}`}
      </p>

      {/* ---- Main Content + Sidebar Layout ---- */}
      <div className="flex flex-col xl:flex-row gap-10">
        {/* Left: Article Grid */}
        <div className="flex-1 min-w-0">
          {filtered.length === 0 ? (
            <div className="text-center py-20 card-moroccan">
              <Search className="w-12 h-12 text-[var(--text-muted)] mx-auto mb-4" />
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--text-primary)] mb-2">
                No articles found
              </h3>
              <p className="text-[var(--text-secondary)]">
                Try adjusting your search or selecting a different category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {visiblePosts.map((post) => (
                <ArticleCard key={post.id} post={post} />
              ))}
            </div>
          )}

          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleCount((prev) => prev + POSTS_PER_PAGE)}
                className="btn-secondary btn-lg"
              >
                Load More Articles
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Right: Sidebar */}
        <aside className="w-full xl:w-80 shrink-0 space-y-8">
          {/* Popular Articles */}
          <div className="card-moroccan p-6">
            <div className="flex items-center gap-2 mb-5">
              <TrendingUp className="w-5 h-5 text-[var(--color-accent)]" />
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-lg text-[var(--text-primary)]">
                Popular Articles
              </h3>
            </div>
            <div className="space-y-4">
              {popularArticles.map((article, i) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="flex items-start gap-3 group"
                >
                  <span className="shrink-0 w-7 h-7 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-secondary)] transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </p>
                    <span className="text-xs text-[var(--text-muted)] inline-flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <img
                    src={article.image}
                    alt=""
                    className="w-14 h-14 rounded-lg object-cover shrink-0"
                    loading="lazy"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="card-featured p-6">
            <div className="flex items-center gap-2 mb-3">
              <Mail className="w-5 h-5 text-[var(--color-accent)]" />
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-lg text-[var(--text-primary)]">
                Newsletter
              </h3>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
              Get the latest Morocco travel tips, hidden gem recommendations, and cultural insights delivered to your inbox every week.
            </p>
            {subscribed ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-sm text-emerald-700 font-medium">
                Thank you for subscribing! Check your inbox for confirmation.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)] transition-colors text-sm"
                  aria-label="Email for newsletter"
                />
                <button type="submit" className="btn-accent w-full btn-sm">
                  <Mail className="w-4 h-4" />
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Tags Cloud */}
          <div className="card-moroccan p-6">
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-lg text-[var(--text-primary)] mb-4">
              Popular Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Marrakech', 'Fes', 'Sahara', 'Atlas Mountains', 'Tea Culture',
                'Street Food', 'Souks', 'Chefchaouen', 'Riads', 'Essaouira',
                'Trekking', 'Photography', 'Budget Travel', 'Hammam',
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full bg-[var(--surface-muted)] text-[var(--text-secondary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* ================================================================
   ARTICLE CARD COMPONENT
   ================================================================ */

function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card-moroccan group overflow-hidden flex flex-col"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${getCategoryStyle(post.category)}`}>
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--text-primary)] group-hover:text-[var(--color-secondary)] transition-colors leading-snug mb-2">
          {post.title}
        </h3>

        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 border-t border-[var(--border-light)] pt-4 mt-auto">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-8 h-8 rounded-full object-cover"
            loading="lazy"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-[var(--text-primary)] truncate">
              {post.author.name}
            </p>
            <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
