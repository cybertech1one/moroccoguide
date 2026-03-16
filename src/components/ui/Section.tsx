import { type ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Breadcrumb, type BreadcrumbItem } from './Breadcrumb';
import { ArrowRight, Sparkles } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   Section Components - Layout building blocks
   ═══════════════════════════════════════════════════════════════ */

/* ---- SectionHeader ---- */

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  align?: 'left' | 'center';
  className?: string;
}

function SectionHeader({
  title,
  subtitle,
  badge,
  viewAllHref,
  viewAllLabel = 'View All',
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6 sm:mb-8',
        align === 'center' && 'sm:flex-col sm:items-center text-center',
        className,
      )}
    >
      <div className={cn(align === 'center' && 'max-w-2xl')}>
        {badge && (
          <span
            className={cn(
              'inline-flex items-center gap-1.5 mb-3',
              'px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase',
              'bg-gradient-to-r from-primary/10 to-accent/10',
              'text-primary border border-primary/15',
            )}
          >
            <Sparkles size={12} className="text-accent" />
            {badge}
          </span>
        )}
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-text-muted text-sm sm:text-base leading-relaxed max-w-xl">
            {subtitle}
          </p>
        )}
      </div>

      {viewAllHref && (
        <Link
          href={viewAllHref}
          className={cn(
            'inline-flex items-center gap-1.5 shrink-0',
            'text-sm font-semibold font-heading text-primary',
            'hover:text-primary-dark hover:gap-2.5',
            'transition-all duration-200',
          )}
        >
          {viewAllLabel}
          <ArrowRight size={16} />
        </Link>
      )}
    </div>
  );
}

SectionHeader.displayName = 'SectionHeader';

/* ---- SectionDivider ---- */

interface SectionDividerProps {
  variant?: 'moroccan' | 'arabesque' | 'simple' | 'wave';
  className?: string;
}

function SectionDivider({ variant = 'arabesque', className }: SectionDividerProps) {
  if (variant === 'moroccan') {
    return (
      <div
        className={cn('section-divider-moroccan w-full my-8 sm:my-12', className)}
        role="separator"
        aria-hidden="true"
      />
    );
  }

  if (variant === 'simple') {
    return (
      <hr
        className={cn(
          'border-none h-px bg-gradient-to-r from-transparent via-border to-transparent my-8 sm:my-12',
          className,
        )}
        role="separator"
        aria-hidden="true"
      />
    );
  }

  if (variant === 'wave') {
    return (
      <div
        className={cn('w-full my-8 sm:my-12 flex justify-center', className)}
        role="separator"
        aria-hidden="true"
      >
        <svg width="120" height="12" viewBox="0 0 120 12" className="text-accent/40">
          <path
            d="M0 6C10 6 10 2 20 2S30 6 40 6S50 2 60 2S70 6 80 6S90 2 100 2S110 6 120 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    );
  }

  /* Default: arabesque */
  return (
    <div
      className={cn('arabesque-divider my-8 sm:my-12 text-xs', className)}
      role="separator"
      aria-hidden="true"
    >
      &#10022;
    </div>
  );
}

SectionDivider.displayName = 'SectionDivider';

/* ---- HeroSection ---- */

interface HeroSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  overlay?: 'light' | 'dark' | 'gradient';
  height?: 'sm' | 'md' | 'lg';
  children?: ReactNode;
  className?: string;
}

function HeroSection({
  image,
  title,
  subtitle,
  breadcrumbs,
  overlay = 'gradient',
  height = 'md',
  children,
  className,
}: HeroSectionProps) {
  const heightMap = {
    sm: 'min-h-[280px] sm:min-h-[320px]',
    md: 'min-h-[360px] sm:min-h-[420px]',
    lg: 'min-h-[480px] sm:min-h-[560px]',
  };

  const overlayMap = {
    light: 'bg-black/30',
    dark: 'bg-black/60',
    gradient: 'hero-overlay',
  };

  return (
    <section
      className={cn(
        'relative overflow-hidden flex flex-col justify-end',
        heightMap[height],
        className,
      )}
    >
      <img
        src={image}
        alt=""
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className={cn('absolute inset-0', overlayMap[overlay])} />

      <div className="relative z-10 container-morocco pb-8 sm:pb-12">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-4">
            <Breadcrumb
              items={breadcrumbs}
              className="[&_a]:text-white/70 [&_a:hover]:text-white [&_span]:text-white [&_svg]:text-white/50"
            />
          </div>
        )}

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg max-w-3xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-3 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}

        {children && (
          <div className="mt-6">{children}</div>
        )}
      </div>
    </section>
  );
}

HeroSection.displayName = 'HeroSection';

/* ---- ContentGrid ---- */

interface ContentGridProps {
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
}

function ContentGrid({
  columns = 3,
  gap = 'md',
  children,
  className,
}: ContentGridProps) {
  const colMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  const gapMap = {
    sm: 'gap-3 sm:gap-4',
    md: 'gap-4 sm:gap-6',
    lg: 'gap-6 sm:gap-8',
  };

  return (
    <div className={cn('grid', colMap[columns], gapMap[gap], className)}>
      {children}
    </div>
  );
}

ContentGrid.displayName = 'ContentGrid';

/* ---- FilterBar ---- */

interface FilterOption {
  id: string;
  label: string;
  count?: number;
  icon?: ReactNode;
}

interface FilterBarProps {
  options: FilterOption[];
  activeId: string;
  onFilterChange: (id: string) => void;
  variant?: 'pill' | 'underline';
  className?: string;
}

function FilterBar({
  options,
  activeId,
  onFilterChange,
  variant = 'pill',
  className,
}: FilterBarProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1',
        variant === 'underline' && 'border-b border-border-light gap-0',
        className,
      )}
      role="tablist"
    >
      {options.map((option) => {
        const isActive = option.id === activeId;

        return (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onFilterChange(option.id)}
            className={cn(
              'inline-flex items-center gap-1.5 whitespace-nowrap font-heading font-medium',
              'transition-all duration-200 shrink-0',

              variant === 'pill' && [
                'px-4 py-2 text-sm rounded-full',
                isActive
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-sand-100 text-text-muted border border-border-light hover:bg-sand-200 hover:text-text-primary',
              ],

              variant === 'underline' && [
                'px-4 py-3 text-sm border-b-2',
                isActive
                  ? 'border-primary text-primary'
                  : 'border-transparent text-text-muted hover:text-text-primary hover:border-sand-300',
              ],
            )}
          >
            {option.icon && (
              <span className="shrink-0 [&>svg]:h-4 [&>svg]:w-4" aria-hidden="true">
                {option.icon}
              </span>
            )}
            {option.label}
            {option.count !== undefined && (
              <span
                className={cn(
                  'inline-flex items-center justify-center rounded-full min-w-[1.25rem] h-5 px-1.5',
                  'text-[0.65rem] font-bold leading-none',
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-sand-200 text-text-muted',
                )}
              >
                {option.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

FilterBar.displayName = 'FilterBar';

export {
  SectionHeader,
  SectionDivider,
  HeroSection,
  ContentGrid,
  FilterBar,
};

export type {
  SectionHeaderProps,
  SectionDividerProps,
  HeroSectionProps,
  ContentGridProps,
  FilterBarProps,
  FilterOption,
};
