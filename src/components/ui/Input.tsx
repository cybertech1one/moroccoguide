'use client';

import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
  useId,
} from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      hint,
      iconLeft,
      iconRight,
      fullWidth = true,
      className,
      id: externalId,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const id = externalId ?? generatedId;
    const errorId = `${id}-error`;
    const hintId = `${id}-hint`;

    return (
      <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-text-primary font-heading"
          >
            {label}
          </label>
        )}

        <div className="relative">
          {iconLeft && (
            <span
              className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted [&>svg]:h-4 [&>svg]:w-4"
              aria-hidden="true"
            >
              {iconLeft}
            </span>
          )}

          <input
            ref={ref}
            id={id}
            aria-invalid={!!error}
            aria-describedby={
              [error && errorId, hint && hintId].filter(Boolean).join(' ') || undefined
            }
            className={cn(
              'w-full rounded-lg border bg-surface px-3.5 py-2.5 text-sm text-text-primary',
              'font-body placeholder:text-text-muted/60',
              'transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-offset-1',
              error
                ? 'border-error focus:ring-error/30 focus:border-error'
                : 'border-border hover:border-sand-400 focus:ring-primary/30 focus:border-primary',
              iconLeft && 'pl-10',
              iconRight && 'pr-10',
              className,
            )}
            {...props}
          />

          {iconRight && (
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted [&>svg]:h-4 [&>svg]:w-4"
              aria-hidden="true"
            >
              {iconRight}
            </span>
          )}
        </div>

        {error && (
          <p id={errorId} className="text-xs text-error font-medium" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={hintId} className="text-xs text-text-muted">
            {hint}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
export type { InputProps };
