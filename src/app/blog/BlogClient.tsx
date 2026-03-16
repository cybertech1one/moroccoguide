'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  Calendar,
  Clock,
  User,
  ChevronRight,
  BookOpen,
  ArrowRight,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════ */

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  category: 'Destinations' | 'Food & Culture' | 'Tips & Advice' | 'Activities' | 'History' | 'Local Life';
  tags: string[];
  image: string;
  featured: boolean;
}

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const CATEGORIES = [
  'All',
  'Destinations',
  'Food & Culture',
  'Tips & Advice',
  'Activities',
  'History',
  'Local Life',
] as const;

const POSTS_PER_PAGE = 9;

/* ═══════════════════════════════════════════════════════════════
   CATEGORY TAG STYLE HELPER
   ═══════════════════════════════════════════════════════════════ */

function getCategoryTagClass(category: string): string {
  switch (category) {
    case 'Destinations':
      return 'tag tag-primary';
    case 'Food & Culture':
      return 'tag tag-accent';
    case 'Tips & Advice':
      return 'tag tag-secondary';
    case 'Activities':
      return 'tag tag-primary';
    case 'History':
      return 'tag tag-secondary';
    case 'Local Life':
      return 'tag tag-accent';
    default:
      return 'tag tag-primary';
  }
}

/* ═══════════════════════════════════════════════════════════════
   BLOG CLIENT COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function BlogClient({ posts }: { posts: BlogPost[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  /* ── Featured post ── */
  const featuredPost = posts.find((p) => p.featured) ?? posts[0];

  /* ── Filtered posts (excluding featured) ── */
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

  return (
    <div>
      {/* ── Featured Post ── */}
      <Link
        href={`/blog/${featuredPost.slug}`}
        className="card-moroccan group overflow-hidden flex flex-col lg:flex-row mb-12"
      >
        {/* Image */}
        <div className="relative lg:w-3/5 h-64 sm:h-80 lg:h-auto overflow-hidden">
          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-primary)] text-white text-xs font-semibold shadow-lg">
              <BookOpen className="w-3 h-3" />
              Featured
            </span>
            <span className={getCategoryTagClass(featuredPost.category)}>
              {featuredPost.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-2/5 p-6 md:p-8 flex flex-col justify-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] group-hover:text-[var(--color-primary)] transition-colors mb-4 leading-tight">
            {featuredPost.title}
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-6 line-clamp-3">
            {featuredPost.excerpt}
          </p>

          {/* Author + Meta */}
          <div className="flex items-center gap-3 mb-4">
            <img
              src={featuredPost.author.avatar}
              alt={featuredPost.author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                {featuredPost.author.name}
              </p>
              <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
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

          <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] group-hover:gap-2 transition-all">
            Read Article <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>

      {/* ── Filter Bar ── */}
      <div className="card-moroccan p-4 md:p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(POSTS_PER_PAGE);
              }}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition-colors"
              aria-label="Search blog posts"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mt-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(POSTS_PER_PAGE);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-[var(--surface-muted)] text-[var(--text-secondary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]'
              }`}
              aria-pressed={selectedCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="text-sm text-[var(--text-secondary)] mt-3">
          Showing {visiblePosts.length} of {filtered.length} articles
        </p>
      </div>

      {/* ── Posts Grid ── */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <Search className="w-12 h-12 text-[var(--text-secondary)] mx-auto mb-4" />
          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--text-primary)] mb-2">
            No articles found
          </h3>
          <p className="text-[var(--text-secondary)]">
            Try adjusting your search or selecting a different category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      )}

      {/* ── Load More Button ── */}
      {hasMore && (
        <div className="text-center mt-12">
          <button
            onClick={() => setVisibleCount((prev) => prev + POSTS_PER_PAGE)}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            Load More Articles
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SINGLE BLOG POST CARD
   ═══════════════════════════════════════════════════════════════ */

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card-moroccan group overflow-hidden flex flex-col"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className={getCategoryTagClass(post.category)}>
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--text-primary)] group-hover:text-[var(--color-primary)] transition-colors leading-snug mb-2">
          {post.title}
        </h3>

        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-[var(--surface-muted)] text-[var(--text-secondary)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Author + Meta row */}
        <div className="flex items-center gap-3 border-t border-[var(--border)] pt-4 mt-auto">
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
            <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
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
