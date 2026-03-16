'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  variant?: 'default' | 'gradient' | 'outlined';
  className?: string;
}

function useCountUp(
  target: number,
  duration: number,
  decimals: number,
): number {
  const [current, setCurrent] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            /* Ease-out cubic */
            const eased = 1 - Math.pow(1 - progress, 3);
            setCurrent(eased * target);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );

    observerRef.current.observe(element);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [target, duration]);

  return parseFloat(current.toFixed(decimals));
}

function StatCard({
  icon,
  label,
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 2000,
  variant = 'default',
  className,
}: StatCardProps) {
  const displayValue = useCountUp(value, duration, decimals);
  const containerRef = useRef<HTMLDivElement>(null);

  /* Attach ref for intersection observer */
  useEffect(() => {
    /* The useCountUp hook manages its own ref internally;
       we expose a div for layout purposes */
  }, []);

  const variantStyles = {
    default: 'bg-surface border border-border-light',
    gradient: [
      'bg-gradient-to-br from-surface to-sand-50',
      'border border-accent/20',
    ].join(' '),
    outlined: 'bg-transparent border-2 border-primary/20',
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'rounded-xl p-5 sm:p-6 transition-all duration-300',
        'hover:shadow-lg hover:-translate-y-0.5',
        variantStyles[variant],
        className,
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          'inline-flex items-center justify-center rounded-lg p-2.5 mb-3',
          'bg-gradient-to-br from-primary/10 to-accent/10',
          'text-primary',
        )}
      >
        <span className="[&>svg]:h-5 [&>svg]:w-5" aria-hidden="true">
          {icon}
        </span>
      </div>

      {/* Value */}
      <div className="stat-number text-3xl sm:text-4xl" aria-live="polite">
        {prefix}
        {displayValue.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })}
        {suffix}
      </div>

      {/* Label */}
      <p className="mt-1.5 text-sm text-text-muted font-heading font-medium">
        {label}
      </p>
    </div>
  );
}

StatCard.displayName = 'StatCard';

export { StatCard };
export type { StatCardProps };
