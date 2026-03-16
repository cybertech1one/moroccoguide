'use client';

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'bg-gradient-to-br from-primary to-primary-dark text-white',
    'shadow-md hover:shadow-lg hover:shadow-primary/20',
    'hover:from-primary-light hover:to-primary',
    'active:from-primary-dark active:to-primary-dark',
    'border border-primary-dark/20',
  ].join(' '),
  secondary: [
    'bg-gradient-to-br from-secondary to-secondary-dark text-white',
    'shadow-md hover:shadow-lg hover:shadow-secondary/20',
    'hover:from-secondary-light hover:to-secondary',
    'active:from-secondary-dark active:to-secondary-dark',
    'border border-secondary-dark/20',
  ].join(' '),
  outline: [
    'bg-transparent text-primary border-2 border-primary',
    'hover:bg-primary hover:text-white',
    'active:bg-primary-dark active:border-primary-dark',
  ].join(' '),
  ghost: [
    'bg-transparent text-text-secondary',
    'hover:bg-sand-100 hover:text-text-primary',
    'active:bg-sand-200',
  ].join(' '),
  accent: [
    'bg-gradient-to-br from-accent to-accent-dark text-white',
    'shadow-md hover:shadow-lg hover:shadow-accent/20',
    'hover:from-accent-light hover:to-accent',
    'active:from-accent-dark active:to-accent-dark',
    'border border-accent-dark/20',
  ].join(' '),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs gap-1.5 rounded-md',
  md: 'h-10 px-4 text-sm gap-2 rounded-lg',
  lg: 'h-12 px-6 text-base gap-2.5 rounded-lg',
  xl: 'h-14 px-8 text-lg gap-3 rounded-xl',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      iconLeft,
      iconRight,
      loading = false,
      fullWidth = false,
      disabled,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          'inline-flex items-center justify-center font-heading font-semibold',
          'transition-all duration-200 ease-out',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
          'select-none whitespace-nowrap',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          isDisabled && 'opacity-50 cursor-not-allowed pointer-events-none',
          className,
        )}
        {...props}
      >
        {loading ? (
          <Loader2 className="animate-spin shrink-0" size={size === 'sm' ? 14 : size === 'xl' ? 22 : 18} />
        ) : iconLeft ? (
          <span className="shrink-0">{iconLeft}</span>
        ) : null}
        {children}
        {!loading && iconRight && <span className="shrink-0">{iconRight}</span>}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps, ButtonVariant, ButtonSize };
