import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info';
type BadgeSize = 'sm' | 'md';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: ReactNode;
  dot?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: 'bg-[var(--color-primary-50)] text-[var(--color-primary-700)] border border-[var(--color-primary-200)]',
  secondary: 'bg-[var(--color-secondary-50)] text-[var(--color-secondary-700)] border border-[var(--color-secondary-200)]',
  accent: 'bg-[var(--color-accent-50)] text-[var(--color-accent-700)] border border-[var(--color-accent-200)]',
  success: 'bg-emerald-50 text-green border border-emerald-200',
  warning: 'bg-amber-50 text-amber-700 border border-amber-200',
  info: 'bg-sky-50 text-secondary border border-sky-200',
};

const dotColors: Record<BadgeVariant, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  accent: 'bg-accent',
  success: 'bg-green',
  warning: 'bg-warning',
  info: 'bg-info',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-[0.65rem]',
  md: 'px-2.5 py-1 text-xs',
};

function Badge({
  variant = 'primary',
  size = 'md',
  icon,
  dot = false,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-medium leading-none whitespace-nowrap',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            'shrink-0 rounded-full',
            size === 'sm' ? 'h-1.5 w-1.5' : 'h-2 w-2',
            dotColors[variant],
          )}
          aria-hidden="true"
        />
      )}
      {icon && <span className="shrink-0 [&>svg]:h-3 [&>svg]:w-3" aria-hidden="true">{icon}</span>}
      {children}
    </span>
  );
}

Badge.displayName = 'Badge';

export { Badge };
export type { BadgeProps, BadgeVariant, BadgeSize };
