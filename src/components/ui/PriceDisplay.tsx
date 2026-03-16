import { cn } from '@/lib/utils';

type PriceSize = 'sm' | 'md' | 'lg';

interface PriceDisplayProps {
  amountMAD?: number;
  showUSD?: boolean;
  prefix?: string;
  priceLevel?: 1 | 2 | 3 | 4;
  size?: PriceSize;
  className?: string;
}

const sizeStyles: Record<PriceSize, { amount: string; currency: string; level: string }> = {
  sm: { amount: 'text-sm font-bold', currency: 'text-[0.65rem]', level: 'text-xs' },
  md: { amount: 'text-lg font-bold', currency: 'text-xs', level: 'text-sm' },
  lg: { amount: 'text-2xl font-bold', currency: 'text-sm', level: 'text-base' },
};

const MAD_TO_USD = 0.1;

function formatMAD(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatUSD(mad: number): string {
  const usd = mad * MAD_TO_USD;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(usd);
}

function PriceLevelIndicator({
  level,
  sizeClass,
}: {
  level: 1 | 2 | 3 | 4;
  sizeClass: string;
}) {
  return (
    <span className={cn('font-heading font-bold', sizeClass)} aria-label={`Price level ${level} of 4`}>
      {Array.from({ length: 4 }).map((_, i) => (
        <span
          key={i}
          className={cn(
            i < level ? 'text-green' : 'text-sand-300',
          )}
        >
          $
        </span>
      ))}
    </span>
  );
}

function PriceDisplay({
  amountMAD,
  showUSD = true,
  prefix,
  priceLevel,
  size = 'md',
  className,
}: PriceDisplayProps) {
  const config = sizeStyles[size];

  /* Price level only */
  if (priceLevel !== undefined && amountMAD === undefined) {
    return (
      <div className={cn('inline-flex items-center', className)}>
        <PriceLevelIndicator level={priceLevel} sizeClass={config.level} />
      </div>
    );
  }

  if (amountMAD === undefined) return null;

  return (
    <div className={cn('inline-flex flex-col', className)}>
      <div className="flex items-baseline gap-1">
        {prefix && (
          <span className={cn('text-text-muted', config.currency)}>{prefix}</span>
        )}
        <span className={cn('text-text-primary font-heading', config.amount)}>
          {formatMAD(amountMAD)}
        </span>
        <span className={cn('text-text-muted font-medium', config.currency)}>MAD</span>
      </div>

      {showUSD && (
        <span className={cn('text-text-muted', config.currency)}>
          {formatUSD(amountMAD)}
        </span>
      )}

      {priceLevel !== undefined && (
        <div className="mt-0.5">
          <PriceLevelIndicator level={priceLevel} sizeClass={config.level} />
        </div>
      )}
    </div>
  );
}

PriceDisplay.displayName = 'PriceDisplay';

export { PriceDisplay };
export type { PriceDisplayProps, PriceSize };
