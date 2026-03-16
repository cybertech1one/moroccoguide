import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import {
  Check,
  X as XIcon,
  Circle,
  type LucideIcon,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   Data Display Components - Presenting structured information
   ═══════════════════════════════════════════════════════════════ */

/* ---- InfoGrid ---- */

interface InfoGridItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface InfoGridProps {
  items: InfoGridItem[];
  columns?: 2 | 3 | 4;
  variant?: 'card' | 'inline' | 'compact';
  className?: string;
}

function InfoGrid({ items, columns = 3, variant = 'card', className }: InfoGridProps) {
  const colMap = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  if (variant === 'compact') {
    return (
      <div className={cn('grid gap-3 sm:gap-4', colMap[columns], className)}>
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="shrink-0 text-primary [&>svg]:h-5 [&>svg]:w-5 mt-0.5" aria-hidden="true">
              {item.icon}
            </span>
            <div>
              <p className="font-heading font-semibold text-sm text-text-primary">{item.title}</p>
              <p className="text-xs text-text-muted mt-0.5">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={cn('grid gap-4 sm:gap-6', colMap[columns], className)}>
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-sand-50 border border-border-light">
            <div className="shrink-0 p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
              <span className="[&>svg]:h-5 [&>svg]:w-5" aria-hidden="true">{item.icon}</span>
            </div>
            <div>
              <p className="font-heading font-semibold text-sm text-text-primary">{item.title}</p>
              <p className="text-xs text-text-muted">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  /* Default: card variant */
  return (
    <div className={cn('grid gap-4 sm:gap-6', colMap[columns], className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            'rounded-xl p-5 transition-all duration-300',
            'bg-surface border border-border-light',
            'hover:shadow-md hover:-translate-y-0.5',
          )}
        >
          <div className="inline-flex items-center justify-center rounded-xl p-3 mb-3 bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
            <span className="[&>svg]:h-5 [&>svg]:w-5" aria-hidden="true">{item.icon}</span>
          </div>
          <h3 className="font-heading font-bold text-text-primary text-base mb-1">{item.title}</h3>
          <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

InfoGrid.displayName = 'InfoGrid';

/* ---- Timeline ---- */

interface TimelineEvent {
  id: string;
  time?: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  status?: 'completed' | 'current' | 'upcoming';
}

interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

function Timeline({ events, className }: TimelineProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Vertical line */}
      <div
        className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-border-light"
        aria-hidden="true"
      />

      <div className="space-y-6">
        {events.map((event, index) => {
          const isCompleted = event.status === 'completed';
          const isCurrent = event.status === 'current';

          return (
            <div key={event.id} className="relative pl-14">
              {/* Dot */}
              <div
                className={cn(
                  'absolute left-3 top-1 h-5 w-5 rounded-full border-2 flex items-center justify-center',
                  isCompleted && 'bg-green border-green',
                  isCurrent && 'bg-primary border-primary animate-pulse-glow',
                  !isCompleted && !isCurrent && 'bg-surface border-border',
                )}
              >
                {isCompleted && <Check size={10} className="text-white" strokeWidth={3} />}
                {isCurrent && <Circle size={8} className="fill-white text-white" />}
                {event.icon && !isCompleted && !isCurrent && (
                  <span className="[&>svg]:h-2.5 [&>svg]:w-2.5 text-text-muted">{event.icon}</span>
                )}
              </div>

              <div
                className={cn(
                  'rounded-lg p-4 transition-all duration-200',
                  isCurrent
                    ? 'bg-primary/5 border border-primary/20'
                    : 'bg-surface border border-border-light hover:shadow-sm',
                )}
              >
                {event.time && (
                  <span className="text-xs font-semibold text-accent font-heading uppercase tracking-wide">
                    {event.time}
                  </span>
                )}
                <h4 className={cn(
                  'font-heading font-bold text-sm text-text-primary',
                  event.time && 'mt-1',
                )}>
                  {event.title}
                </h4>
                {event.description && (
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">
                    {event.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Timeline.displayName = 'Timeline';

/* ---- ComparisonTable ---- */

interface ComparisonColumn {
  id: string;
  header: string;
  highlighted?: boolean;
  badge?: string;
}

interface ComparisonRow {
  label: string;
  values: Record<string, string | boolean | ReactNode>;
}

interface ComparisonTableProps {
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  className?: string;
}

function ComparisonTable({ columns, rows, className }: ComparisonTableProps) {
  const renderValue = (value: string | boolean | ReactNode) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check size={18} className="text-green mx-auto" />
      ) : (
        <XIcon size={18} className="text-sand-400 mx-auto" />
      );
    }
    return value;
  };

  return (
    <div className={cn('overflow-x-auto rounded-xl border border-border-light', className)}>
      <table className="w-full min-w-[500px]">
        <thead>
          <tr>
            <th className="text-left p-4 bg-sand-50 font-heading font-semibold text-sm text-text-secondary border-b border-border-light">
              Feature
            </th>
            {columns.map((col) => (
              <th
                key={col.id}
                className={cn(
                  'text-center p-4 border-b border-border-light font-heading font-bold text-sm',
                  col.highlighted
                    ? 'bg-primary/5 text-primary'
                    : 'bg-sand-50 text-text-secondary',
                )}
              >
                {col.badge && (
                  <span className="block text-[0.6rem] font-bold uppercase tracking-wider text-accent mb-1">
                    {col.badge}
                  </span>
                )}
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className={cn(
                'transition-colors duration-150',
                index % 2 === 0 ? 'bg-surface' : 'bg-sand-50/50',
                'hover:bg-primary/[0.02]',
              )}
            >
              <td className="p-4 text-sm text-text-primary font-medium border-b border-border-light">
                {row.label}
              </td>
              {columns.map((col) => (
                <td
                  key={col.id}
                  className={cn(
                    'p-4 text-center text-sm border-b border-border-light',
                    col.highlighted && 'bg-primary/[0.02]',
                  )}
                >
                  {renderValue(row.values[col.id])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

ComparisonTable.displayName = 'ComparisonTable';

/* ---- StatBar ---- */

interface StatBarItem {
  label: string;
  value: number;
  max?: number;
  color?: 'primary' | 'accent' | 'secondary' | 'green';
  suffix?: string;
}

interface StatBarProps {
  items: StatBarItem[];
  className?: string;
}

function StatBar({ items, className }: StatBarProps) {
  const colorMap = {
    primary: 'from-primary to-primary-light',
    accent: 'from-accent to-accent-light',
    secondary: 'from-secondary to-secondary-light',
    green: 'from-green to-green-light',
  };

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item, index) => {
        const percentage = Math.min((item.value / (item.max || 100)) * 100, 100);

        return (
          <div key={index}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-heading font-medium text-text-primary">
                {item.label}
              </span>
              <span className="text-sm font-bold text-text-primary font-heading">
                {item.value}{item.suffix || ''}
                {item.max && <span className="text-text-muted font-normal">/{item.max}{item.suffix || ''}</span>}
              </span>
            </div>
            <div className="rating-bar h-2 rounded-full">
              <div
                className={cn(
                  'h-full rounded-full bg-gradient-to-r transition-all duration-1000 ease-out',
                  colorMap[item.color || 'primary'],
                )}
                style={{ width: `${percentage}%` }}
                role="progressbar"
                aria-valuenow={item.value}
                aria-valuemin={0}
                aria-valuemax={item.max || 100}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

StatBar.displayName = 'StatBar';

/* ---- PriceTable ---- */

interface PriceTier {
  id: string;
  name: string;
  price: number;
  currency?: string;
  period?: string;
  description?: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

interface PriceTableProps {
  tiers: PriceTier[];
  className?: string;
}

function PriceTable({ tiers, className }: PriceTableProps) {
  return (
    <div
      className={cn(
        'grid gap-4 sm:gap-6',
        tiers.length === 2 && 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto',
        tiers.length === 3 && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        tiers.length >= 4 && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
        className,
      )}
    >
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className={cn(
            'rounded-xl p-6 transition-all duration-300 relative',
            'flex flex-col',
            tier.highlighted
              ? 'bg-surface border-2 border-primary shadow-lg scale-[1.02] hover:shadow-xl'
              : 'bg-surface border border-border-light hover:shadow-md hover:-translate-y-1',
          )}
        >
          {tier.badge && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-wide bg-gradient-to-r from-primary to-accent text-white shadow-sm">
              {tier.badge}
            </span>
          )}

          <h3 className="font-heading font-bold text-lg text-text-primary">
            {tier.name}
          </h3>
          {tier.description && (
            <p className="text-xs text-text-muted mt-1">{tier.description}</p>
          )}

          <div className="mt-4 mb-5">
            <span className="font-display text-3xl font-bold text-text-primary">
              {new Intl.NumberFormat('en-US').format(tier.price)}
            </span>
            <span className="text-sm text-text-muted ml-1">
              {tier.currency || 'MAD'}
              {tier.period && ` / ${tier.period}`}
            </span>
          </div>

          <ul className="space-y-2.5 mb-6 flex-1">
            {tier.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                <Check size={16} className="shrink-0 text-green mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {tier.ctaHref && (
            <a
              href={tier.ctaHref}
              className={cn(
                'block text-center py-2.5 px-4 rounded-lg font-heading font-semibold text-sm',
                'transition-all duration-200',
                tier.highlighted
                  ? 'bg-gradient-to-br from-primary to-primary-dark text-white shadow-md hover:shadow-lg'
                  : 'bg-sand-100 text-text-primary border border-border-light hover:bg-sand-200',
              )}
            >
              {tier.ctaLabel || 'Select'}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

PriceTable.displayName = 'PriceTable';

/* ---- FeatureList ---- */

interface FeatureListItem {
  text: string;
  included?: boolean;
  highlight?: boolean;
}

interface FeatureListProps {
  items: FeatureListItem[];
  columns?: 1 | 2;
  className?: string;
}

function FeatureList({ items, columns = 1, className }: FeatureListProps) {
  return (
    <ul
      className={cn(
        'space-y-2.5',
        columns === 2 && 'sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2.5 sm:space-y-0',
        className,
      )}
    >
      {items.map((item, index) => (
        <li
          key={index}
          className={cn(
            'flex items-start gap-2.5 text-sm',
            item.included === false ? 'text-text-muted' : 'text-text-secondary',
            item.highlight && 'font-medium text-text-primary',
          )}
        >
          {item.included === false ? (
            <XIcon size={16} className="shrink-0 text-sand-400 mt-0.5" />
          ) : (
            <Check size={16} className="shrink-0 text-green mt-0.5" />
          )}
          <span className={cn(item.included === false && 'line-through')}>
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

FeatureList.displayName = 'FeatureList';

export {
  InfoGrid,
  Timeline,
  ComparisonTable,
  StatBar,
  PriceTable,
  FeatureList,
};

export type {
  InfoGridItem,
  InfoGridProps,
  TimelineEvent,
  TimelineProps,
  ComparisonColumn,
  ComparisonRow,
  ComparisonTableProps,
  StatBarItem,
  StatBarProps,
  PriceTier,
  PriceTableProps,
  FeatureListItem,
  FeatureListProps,
};
