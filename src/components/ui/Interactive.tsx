'use client';

import {
  useState,
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
} from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronRight as ChevronRightIcon,
  Star,
  StarHalf,
  Share2,
  Link2,
  Check,
  Mail,
  MessageCircle,
  Facebook,
  Twitter,
  Home,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   Interactive Components - Client-side UI elements
   ═══════════════════════════════════════════════════════════════ */

/* ---- ImageGallery ---- */

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  className?: string;
}

function ImageGallery({ images, columns = 3, className }: ImageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : null,
    );
  }, [images.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null,
    );
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  const colMap = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
  };

  return (
    <>
      <div className={cn('grid gap-2 sm:gap-3', colMap[columns], className)}>
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg focus-visible:outline-2 focus-visible:outline-primary"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[var(--z-modal)] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className="w-full h-full object-contain rounded-lg"
            />
            {images[lightboxIndex].caption && (
              <p className="text-center text-white/80 text-sm mt-3">
                {images[lightboxIndex].caption}
              </p>
            )}
            <p className="text-center text-white/50 text-xs mt-2">
              {lightboxIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

ImageGallery.displayName = 'ImageGallery';

/* ---- Accordion ---- */

interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
  className?: string;
}

function Accordion({
  items,
  allowMultiple = false,
  defaultOpen = [],
  className,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(defaultOpen));

  const toggle = useCallback(
    (id: string) => {
      setOpenIds((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          if (!allowMultiple) next.clear();
          next.add(id);
        }
        return next;
      });
    },
    [allowMultiple],
  );

  return (
    <div className={cn('divide-y divide-border-light rounded-xl border border-border-light overflow-hidden', className)}>
      {items.map((item) => {
        const isOpen = openIds.has(item.id);

        return (
          <div key={item.id} className="bg-surface">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              className={cn(
                'w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left',
                'font-heading font-semibold text-sm sm:text-base text-text-primary',
                'hover:bg-sand-50 transition-colors duration-200',
                'focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-[-2px]',
              )}
            >
              <span>{item.title}</span>
              <ChevronDown
                size={18}
                className={cn(
                  'shrink-0 text-text-muted transition-transform duration-300',
                  isOpen && 'rotate-180',
                )}
                aria-hidden="true"
              />
            </button>
            <div
              id={`accordion-content-${item.id}`}
              role="region"
              aria-labelledby={`accordion-trigger-${item.id}`}
              className={cn(
                'overflow-hidden transition-all duration-300 ease-out',
                isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0',
              )}
            >
              <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-sm text-text-secondary leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Accordion.displayName = 'Accordion';

/* ---- InteractiveRating (clickable) ---- */

interface InteractiveRatingProps {
  value: number;
  onChange?: (value: number) => void;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  readOnly?: boolean;
  className?: string;
}

function InteractiveRating({
  value,
  onChange,
  max = 5,
  size = 'md',
  readOnly = false,
  className,
}: InteractiveRatingProps) {
  const [hoverValue, setHoverValue] = useState(0);

  const sizeMap = {
    sm: 16,
    md: 20,
    lg: 28,
  };

  const starSize = sizeMap[size];

  return (
    <div
      className={cn('inline-flex items-center gap-0.5', className)}
      role="group"
      aria-label={`Rating: ${value} out of ${max}`}
    >
      {Array.from({ length: max }).map((_, index) => {
        const starValue = index + 1;
        const isFilled = readOnly
          ? starValue <= value
          : starValue <= (hoverValue || value);

        return (
          <button
            key={index}
            type="button"
            disabled={readOnly}
            onClick={() => onChange?.(starValue)}
            onMouseEnter={() => !readOnly && setHoverValue(starValue)}
            onMouseLeave={() => !readOnly && setHoverValue(0)}
            className={cn(
              'transition-transform duration-150',
              !readOnly && 'hover:scale-110 cursor-pointer',
              readOnly && 'cursor-default',
            )}
            aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
          >
            <Star
              size={starSize}
              className={cn(
                'transition-colors duration-150',
                isFilled
                  ? 'fill-accent text-accent'
                  : 'fill-sand-200 text-sand-300',
              )}
            />
          </button>
        );
      })}
    </div>
  );
}

InteractiveRating.displayName = 'InteractiveRating';

/* ---- PriceRange ---- */

interface PriceRangeProps {
  min: number;
  max: number;
  currency?: string;
  period?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

function PriceRange({
  min,
  max,
  currency = 'MAD',
  period,
  size = 'md',
  className,
}: PriceRangeProps) {
  const sizeStyles = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  const formatPrice = (amount: number) =>
    new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <div className={cn('inline-flex items-baseline gap-1', className)}>
      <span className={cn('font-heading font-bold text-text-primary', sizeStyles[size])}>
        {formatPrice(min)}{min !== max && ` - ${formatPrice(max)}`}
      </span>
      <span className="text-text-muted text-xs font-medium">{currency}</span>
      {period && (
        <span className="text-text-muted text-xs">/ {period}</span>
      )}
    </div>
  );
}

PriceRange.displayName = 'PriceRange';

/* ---- InlineBadge ---- */

type InlineBadgeVariant = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'outline';

interface InlineBadgeProps {
  variant?: InlineBadgeVariant;
  children: ReactNode;
  dot?: boolean;
  className?: string;
}

function InlineBadge({
  variant = 'primary',
  children,
  dot = false,
  className,
}: InlineBadgeProps) {
  const variantStyles: Record<InlineBadgeVariant, string> = {
    primary: 'bg-[var(--color-primary-50)] text-[var(--color-primary-700)] border-[var(--color-primary-200)]',
    secondary: 'bg-[var(--color-secondary-50)] text-[var(--color-secondary-700)] border-[var(--color-secondary-200)]',
    accent: 'bg-[var(--color-accent-50)] text-[var(--color-accent-700)] border-[var(--color-accent-200)]',
    success: 'bg-emerald-50 text-green border-emerald-200',
    warning: 'bg-amber-50 text-amber-700 border-amber-200',
    info: 'bg-sky-50 text-secondary border-sky-200',
    outline: 'bg-transparent text-text-secondary border-border',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full',
        'text-xs font-medium leading-none border whitespace-nowrap',
        variantStyles[variant],
        className,
      )}
    >
      {dot && (
        <span
          className={cn(
            'h-1.5 w-1.5 rounded-full shrink-0',
            variant === 'success' && 'bg-green',
            variant === 'warning' && 'bg-amber-500',
            variant === 'primary' && 'bg-primary',
            variant === 'secondary' && 'bg-secondary',
            variant === 'accent' && 'bg-accent',
            variant === 'info' && 'bg-secondary',
            variant === 'outline' && 'bg-text-muted',
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}

InlineBadge.displayName = 'InlineBadge';

/* ---- InteractiveBreadcrumb ---- */

interface InteractiveBreadcrumbItem {
  label: string;
  href?: string;
}

interface InteractiveBreadcrumbProps {
  items: InteractiveBreadcrumbItem[];
  showHome?: boolean;
  className?: string;
}

function InteractiveBreadcrumb({ items, showHome = true, className }: InteractiveBreadcrumbProps) {
  const allItems: InteractiveBreadcrumbItem[] = showHome
    ? [{ label: 'Home', href: '/' }, ...items]
    : items;

  return (
    <nav aria-label="Breadcrumb" className={cn('py-3', className)}>
      <ol className="flex items-center flex-wrap gap-1 text-sm">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          const isHome = index === 0 && showHome;

          return (
            <li key={index} className="inline-flex items-center gap-1">
              {index > 0 && (
                <ChevronRightIcon
                  size={14}
                  className="text-sand-400 shrink-0 mx-0.5"
                  aria-hidden="true"
                />
              )}
              {isLast ? (
                <span
                  className="text-text-primary font-medium truncate max-w-[200px]"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : item.href ? (
                <Link
                  href={item.href}
                  className={cn(
                    'inline-flex items-center gap-1 text-text-muted',
                    'hover:text-primary transition-colors duration-200',
                    'truncate max-w-[200px]',
                  )}
                >
                  {isHome && <Home size={14} className="shrink-0" aria-hidden="true" />}
                  <span>{item.label}</span>
                </Link>
              ) : (
                <span className="text-text-muted truncate max-w-[200px]">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

InteractiveBreadcrumb.displayName = 'InteractiveBreadcrumb';

/* ---- ShareButtons (lightweight) ---- */

interface ShareButtonsProps {
  title?: string;
  url?: string;
  className?: string;
}

function ShareButtons({ title, url, className }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [pageUrl, setPageUrl] = useState('');
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    setPageUrl(url || window.location.href);
    setPageTitle(title || document.title);
  }, [url, title]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback silently */
    }
  }, [pageUrl]);

  const share = useCallback(
    (platform: 'whatsapp' | 'facebook' | 'twitter' | 'email') => {
      const encodedUrl = encodeURIComponent(pageUrl);
      const encodedTitle = encodeURIComponent(pageTitle);
      const urls: Record<string, string> = {
        whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
        email: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      };
      if (platform === 'email') {
        window.location.href = urls[platform];
      } else {
        window.open(urls[platform], '_blank', 'noopener,noreferrer,width=600,height=400');
      }
    },
    [pageUrl, pageTitle],
  );

  const buttonClass = cn(
    'p-2.5 rounded-lg transition-all duration-200',
    'text-text-secondary hover:text-primary',
    'hover:bg-sand-100',
  );

  return (
    <div className={cn('inline-flex items-center gap-1', className)}>
      <button
        type="button"
        onClick={() => share('whatsapp')}
        className={buttonClass}
        aria-label="Share on WhatsApp"
      >
        <MessageCircle size={18} />
      </button>
      <button
        type="button"
        onClick={() => share('facebook')}
        className={buttonClass}
        aria-label="Share on Facebook"
      >
        <Facebook size={18} />
      </button>
      <button
        type="button"
        onClick={() => share('twitter')}
        className={buttonClass}
        aria-label="Share on X"
      >
        <Twitter size={18} />
      </button>
      <button
        type="button"
        onClick={() => share('email')}
        className={buttonClass}
        aria-label="Share via email"
      >
        <Mail size={18} />
      </button>
      <button
        type="button"
        onClick={handleCopy}
        className={cn(buttonClass, copied && 'text-green')}
        aria-label="Copy link"
      >
        {copied ? <Check size={18} /> : <Link2 size={18} />}
      </button>
    </div>
  );
}

ShareButtons.displayName = 'ShareButtons';

export {
  ImageGallery,
  Accordion,
  InteractiveRating,
  PriceRange,
  InlineBadge,
  InteractiveBreadcrumb,
  ShareButtons,
};

export type {
  GalleryImage,
  ImageGalleryProps,
  AccordionItem,
  AccordionProps,
  InteractiveRatingProps,
  PriceRangeProps,
  InlineBadgeVariant,
  InlineBadgeProps,
  InteractiveBreadcrumbItem,
  InteractiveBreadcrumbProps,
  ShareButtonsProps,
};
