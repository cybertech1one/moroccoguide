import { cn } from '@/lib/utils';
import { Star, StarHalf } from 'lucide-react';

type RatingSize = 'sm' | 'md' | 'lg';

interface RatingProps {
  value: number;
  max?: number;
  reviewCount?: number;
  showNumber?: boolean;
  size?: RatingSize;
  className?: string;
}

const sizeConfig: Record<RatingSize, { star: number; text: string; gap: string }> = {
  sm: { star: 12, text: 'text-xs', gap: 'gap-0.5' },
  md: { star: 16, text: 'text-sm', gap: 'gap-0.5' },
  lg: { star: 20, text: 'text-base', gap: 'gap-1' },
};

function Rating({
  value,
  max = 5,
  reviewCount,
  showNumber = true,
  size = 'md',
  className,
}: RatingProps) {
  const config = sizeConfig[size];
  const clampedValue = Math.min(Math.max(value, 0), max);
  const fullStars = Math.floor(clampedValue);
  const hasHalf = clampedValue - fullStars >= 0.25 && clampedValue - fullStars < 0.75;
  const emptyStars = max - fullStars - (hasHalf ? 1 : 0);

  const label = `${clampedValue.toFixed(1)} out of ${max} stars${
    reviewCount !== undefined ? `, ${reviewCount} reviews` : ''
  }`;

  return (
    <div
      className={cn('inline-flex items-center', config.gap, className)}
      role="img"
      aria-label={label}
    >
      <div className={cn('flex items-center', config.gap)}>
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star
            key={`full-${i}`}
            size={config.star}
            className="fill-accent text-accent"
            aria-hidden="true"
          />
        ))}
        {hasHalf && (
          <StarHalf
            key="half"
            size={config.star}
            className="fill-accent text-accent"
            aria-hidden="true"
          />
        )}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star
            key={`empty-${i}`}
            size={config.star}
            className="fill-sand-200 text-sand-300"
            aria-hidden="true"
          />
        ))}
      </div>

      {showNumber && (
        <span className={cn('font-semibold text-text-primary font-heading ml-1', config.text)}>
          {clampedValue.toFixed(1)}
        </span>
      )}

      {reviewCount !== undefined && (
        <span className={cn('text-text-muted', config.text)}>
          ({reviewCount.toLocaleString()})
        </span>
      )}
    </div>
  );
}

Rating.displayName = 'Rating';

export { Rating };
export type { RatingProps, RatingSize };
