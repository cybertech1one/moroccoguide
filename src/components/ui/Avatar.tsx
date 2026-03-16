'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Check, User } from 'lucide-react';
import { cn } from '@/lib/utils';

type AvatarSize = 'sm' | 'md' | 'lg';

interface AvatarProps {
  src?: string | null;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  online?: boolean;
  verified?: boolean;
  className?: string;
}

const sizeConfig: Record<AvatarSize, { container: string; text: string; icon: number; badge: string; badgeIcon: number }> = {
  sm: {
    container: 'h-8 w-8',
    text: 'text-xs',
    icon: 14,
    badge: 'h-3 w-3 -bottom-0.5 -right-0.5 border',
    badgeIcon: 8,
  },
  md: {
    container: 'h-10 w-10',
    text: 'text-sm',
    icon: 18,
    badge: 'h-3.5 w-3.5 -bottom-0.5 -right-0.5 border-2',
    badgeIcon: 10,
  },
  lg: {
    container: 'h-14 w-14',
    text: 'text-base',
    icon: 24,
    badge: 'h-4 w-4 bottom-0 right-0 border-2',
    badgeIcon: 12,
  },
};

function getInitials(name?: string): string {
  if (!name) return '';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

function Avatar({
  src,
  alt,
  name,
  size = 'md',
  online,
  verified,
  className,
}: AvatarProps) {
  const [imgError, setImgError] = useState(false);
  const config = sizeConfig[size];
  const initials = getInitials(name);
  const showImage = src && !imgError;
  const label = alt || name || 'User avatar';

  return (
    <div className={cn('relative inline-flex shrink-0', className)}>
      <div
        className={cn(
          'relative overflow-hidden rounded-full',
          'bg-gradient-to-br from-sand-200 to-sand-300',
          'flex items-center justify-center',
          config.container,
        )}
        aria-label={label}
        role="img"
      >
        {showImage ? (
          <Image
            src={src}
            alt={label}
            fill
            sizes={size === 'lg' ? '56px' : size === 'md' ? '40px' : '32px'}
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : initials ? (
          <span
            className={cn(
              'font-heading font-bold text-text-secondary select-none',
              config.text,
            )}
            aria-hidden="true"
          >
            {initials}
          </span>
        ) : (
          <User
            size={config.icon}
            className="text-text-muted"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Online indicator */}
      {online !== undefined && (
        <span
          className={cn(
            'absolute rounded-full border-surface',
            config.badge,
            online ? 'bg-green' : 'bg-sand-400',
          )}
          aria-label={online ? 'Online' : 'Offline'}
        />
      )}

      {/* Verified badge */}
      {verified && (
        <span
          className={cn(
            'absolute rounded-full border-surface bg-secondary flex items-center justify-center',
            config.badge,
          )}
          aria-label="Verified"
        >
          <Check size={config.badgeIcon} className="text-white" strokeWidth={3} />
        </span>
      )}
    </div>
  );
}

Avatar.displayName = 'Avatar';

export { Avatar };
export type { AvatarProps, AvatarSize };
