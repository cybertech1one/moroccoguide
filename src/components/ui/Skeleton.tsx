import { cn } from '@/lib/utils';

/* ═══════════════════════════════════════════════════════════════
   Skeleton Component Library
   Reusable loading placeholders for content areas.
   Uses the project's animate-shimmer utility from globals.css.
   ═══════════════════════════════════════════════════════════════ */

/* ──── Base Skeleton ──── */

interface SkeletonProps {
  className?: string;
}

function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn('animate-shimmer rounded-md', className)}
      aria-hidden="true"
    />
  );
}

Skeleton.displayName = 'Skeleton';

/* ──── Card Skeleton ──── */

interface CardSkeletonProps {
  hasImage?: boolean;
  /** Show a tag/badge placeholder in the image area */
  hasTag?: boolean;
  className?: string;
}

function CardSkeleton({ hasImage = true, hasTag = false, className }: CardSkeletonProps) {
  return (
    <div
      className={cn(
        'bg-surface border border-border-light rounded-xl overflow-hidden',
        className,
      )}
      aria-hidden="true"
    >
      {hasImage && (
        <div className="relative">
          <Skeleton className="aspect-video w-full" />
          {hasTag && (
            <div className="absolute top-3 left-3">
              <Skeleton className="h-5 w-16 rounded-full" />
            </div>
          )}
        </div>
      )}
      <div className="p-4 sm:p-5 space-y-3">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-5/6" />
        <div className="flex items-center justify-between pt-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
    </div>
  );
}

CardSkeleton.displayName = 'CardSkeleton';

/* ──── Text Skeleton ──── */

interface TextSkeletonProps {
  /** Number of text lines to display */
  lines?: number;
  /** Include a heading-style line above the body lines */
  hasHeading?: boolean;
  /** Width pattern for lines: 'varied' alternates widths, 'full' uses 100% */
  widthPattern?: 'varied' | 'full';
  className?: string;
}

const variedWidths = ['w-full', 'w-5/6', 'w-4/5', 'w-full', 'w-3/4', 'w-5/6', 'w-2/3'];

function TextSkeleton({
  lines = 4,
  hasHeading = true,
  widthPattern = 'varied',
  className,
}: TextSkeletonProps) {
  return (
    <div className={cn('space-y-3', className)} aria-hidden="true">
      {hasHeading && (
        <div className="space-y-2 mb-4">
          <Skeleton className="h-7 w-2/3 rounded-lg" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      )}
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            'h-3.5',
            widthPattern === 'varied'
              ? variedWidths[i % variedWidths.length]
              : 'w-full',
          )}
        />
      ))}
    </div>
  );
}

TextSkeleton.displayName = 'TextSkeleton';

/* ──── List Skeleton ──── */

interface ListSkeletonProps {
  rows?: number;
  className?: string;
}

function ListSkeleton({ rows = 5, className }: ListSkeletonProps) {
  return (
    <div className={cn('space-y-3', className)} aria-hidden="true">
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-3 p-3 bg-surface border border-border-light rounded-lg"
        >
          <Skeleton className="h-12 w-12 rounded-lg shrink-0" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/5" />
            <Skeleton className="h-3 w-2/5" />
          </div>
          <Skeleton className="h-4 w-16 shrink-0" />
        </div>
      ))}
    </div>
  );
}

ListSkeleton.displayName = 'ListSkeleton';

/* ──── Hero Skeleton ──── */

interface HeroSkeletonProps {
  /** Aspect ratio variant */
  variant?: 'banner' | 'tall' | 'compact';
  className?: string;
}

function HeroSkeleton({ variant = 'banner', className }: HeroSkeletonProps) {
  const aspectClass = {
    banner: 'aspect-[21/9]',
    tall: 'aspect-[16/9]',
    compact: 'aspect-[3/1]',
  };

  return (
    <div
      className={cn(
        'relative w-full rounded-2xl overflow-hidden bg-surface-muted',
        className,
      )}
      aria-hidden="true"
    >
      <Skeleton className={cn(aspectClass[variant], 'w-full')} />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
        <Skeleton className="h-10 w-80 max-w-full rounded-lg" />
        <Skeleton className="h-5 w-96 max-w-full" />
        <Skeleton className="h-14 w-[32rem] max-w-full rounded-xl mt-4" />
      </div>
    </div>
  );
}

HeroSkeleton.displayName = 'HeroSkeleton';

/* ──── Grid Skeleton ──── */

interface GridSkeletonProps {
  count?: number;
  columns?: 2 | 3 | 4;
  /** Show tag placeholders on cards */
  hasTags?: boolean;
  className?: string;
}

function GridSkeleton({ count = 6, columns = 3, hasTags = false, className }: GridSkeletonProps) {
  const colClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  return (
    <div className={cn('grid gap-4 sm:gap-6', colClass[columns], className)} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} hasTag={hasTags} />
      ))}
    </div>
  );
}

GridSkeleton.displayName = 'GridSkeleton';

/* ──── Page Skeleton ──── */

interface PageSkeletonProps {
  /** Show a hero section at the top */
  hasHero?: boolean;
  className?: string;
}

function PageSkeleton({ hasHero = true, className }: PageSkeletonProps) {
  return (
    <div className={cn('w-full max-w-7xl mx-auto px-4 py-8 space-y-10', className)} aria-hidden="true">
      {hasHero && <HeroSkeleton variant="compact" />}
      <TextSkeleton lines={3} hasHeading />
      <div className="zellige-border max-w-xs opacity-30" />
      <GridSkeleton count={6} columns={3} />
    </div>
  );
}

PageSkeleton.displayName = 'PageSkeleton';

/* ──── Exports ──── */

export {
  Skeleton,
  CardSkeleton,
  TextSkeleton,
  ListSkeleton,
  HeroSkeleton,
  GridSkeleton,
  PageSkeleton,
};
export type { SkeletonProps, CardSkeletonProps, TextSkeletonProps, ListSkeletonProps, HeroSkeletonProps, GridSkeletonProps, PageSkeletonProps };
