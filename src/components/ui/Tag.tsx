'use client';

import { type ReactNode } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TagProps {
  label: string;
  count?: number;
  icon?: ReactNode;
  active?: boolean;
  removable?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
  size?: 'sm' | 'md';
  className?: string;
}

function Tag({
  label,
  count,
  icon,
  active = false,
  removable = false,
  onClick,
  onRemove,
  size = 'md',
  className,
}: TagProps) {
  const isClickable = !!onClick;

  const Component = isClickable ? 'button' : 'span';

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove?.();
  };

  return (
    <Component
      type={isClickable ? 'button' : undefined}
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-medium',
        'transition-all duration-200',
        size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm',
        isClickable && 'cursor-pointer select-none',
        isClickable &&
          'focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary',

        active
          ? [
              'bg-primary text-white',
              'shadow-sm',
              isClickable && 'hover:bg-primary-dark',
            ]
          : [
              'bg-sand-100 text-text-secondary border border-border-light',
              isClickable && 'hover:bg-sand-200 hover:border-sand-300 hover:text-text-primary',
            ],
        className,
      )}
    >
      {icon && (
        <span className="shrink-0 [&>svg]:h-3.5 [&>svg]:w-3.5" aria-hidden="true">
          {icon}
        </span>
      )}

      <span>{label}</span>

      {count !== undefined && (
        <span
          className={cn(
            'inline-flex items-center justify-center rounded-full min-w-[1.25rem] h-5 px-1.5',
            'text-[0.65rem] font-bold leading-none',
            active
              ? 'bg-white/20 text-white'
              : 'bg-sand-200 text-text-muted',
          )}
        >
          {count}
        </span>
      )}

      {removable && (
        <button
          type="button"
          onClick={handleRemove}
          className={cn(
            'shrink-0 -mr-0.5 p-0.5 rounded-full',
            'transition-colors duration-150',
            active
              ? 'text-white/70 hover:text-white hover:bg-white/20'
              : 'text-text-muted hover:text-text-primary hover:bg-sand-200',
          )}
          aria-label={`Remove ${label}`}
        >
          <X size={12} />
        </button>
      )}
    </Component>
  );
}

Tag.displayName = 'Tag';

export { Tag };
export type { TagProps };
