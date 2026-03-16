'use client';

import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Badge } from './Badge';
import { Rating } from './Rating';
import { PriceDisplay } from './PriceDisplay';
import {
  MapPin,
  Clock,
  Star,
  Utensils,
  Calendar,
  ArrowRight,
  Quote,
  Users,
  type LucideIcon,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   Card System - Reusable card components for Morocco tourism
   ═══════════════════════════════════════════════════════════════ */

type CardVariant = 'default' | 'featured' | 'glass' | 'elevated';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  href?: string;
}

const cardVariants: Record<CardVariant, string> = {
  default: [
    'bg-surface border border-border-light rounded-xl',
    'shadow-sm hover:shadow-lg',
    'hover:border-primary/20 hover:-translate-y-1',
  ].join(' '),
  featured: [
    'bg-surface border-2 border-accent/30 rounded-xl',
    'shadow-md hover:shadow-xl',
    'hover:border-accent/50 hover:-translate-y-1.5',
    'ring-1 ring-accent/10',
  ].join(' '),
  glass: [
    'glass rounded-xl',
    'hover:shadow-lg hover:-translate-y-1',
  ].join(' '),
  elevated: [
    'bg-surface rounded-xl',
    'shadow-lg hover:shadow-xl',
    'hover:-translate-y-1.5',
  ].join(' '),
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'transition-all duration-300 ease-out overflow-hidden',
          cardVariants[variant],
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';

/* ---- Card Image ---- */

interface CardImageProps {
  src: string;
  alt: string;
  aspectRatio?: 'video' | 'square' | 'landscape';
  badge?: string;
  badgeVariant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info';
  overlay?: boolean;
  children?: ReactNode;
}

function CardImage({
  src,
  alt,
  aspectRatio = 'video',
  badge,
  badgeVariant = 'primary',
  overlay = false,
  children,
}: CardImageProps) {
  const aspectMap = {
    video: 'aspect-video',
    square: 'aspect-square',
    landscape: 'aspect-[4/3]',
  };

  return (
    <div className={cn('relative overflow-hidden', aspectMap[aspectRatio])}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      )}
      {badge && (
        <div className="absolute top-3 left-3 z-10">
          <Badge variant={badgeVariant} size="sm">{badge}</Badge>
        </div>
      )}
      {children}
    </div>
  );
}

CardImage.displayName = 'CardImage';

/* ---- Card Body ---- */

interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function CardBody({ className, children, ...props }: CardBodyProps) {
  return (
    <div className={cn('p-4 sm:p-5', className)} {...props}>
      {children}
    </div>
  );
}

CardBody.displayName = 'CardBody';

/* ---- Card Title ---- */

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h2' | 'h3' | 'h4';
}

function CardTitle({ as: Tag = 'h3', className, children, ...props }: CardTitleProps) {
  return (
    <Tag
      className={cn(
        'font-heading font-bold text-text-primary leading-snug',
        'line-clamp-2',
        Tag === 'h2' ? 'text-xl' : 'text-lg',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

CardTitle.displayName = 'CardTitle';

/* ---- Card Description ---- */

interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

function CardDescription({ className, children, ...props }: CardDescriptionProps) {
  return (
    <p
      className={cn(
        'text-sm text-text-muted leading-relaxed line-clamp-2 mt-1.5',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}

CardDescription.displayName = 'CardDescription';

/* ---- Card Footer ---- */

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  rating?: number;
  reviewCount?: number;
  priceMAD?: number;
  priceLevel?: 1 | 2 | 3 | 4;
}

function CardFooter({
  rating,
  reviewCount,
  priceMAD,
  priceLevel,
  className,
  children,
  ...props
}: CardFooterProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-3 px-4 pb-4 sm:px-5 sm:pb-5 pt-0',
        className,
      )}
      {...props}
    >
      {rating !== undefined && (
        <Rating value={rating} reviewCount={reviewCount} size="sm" />
      )}
      {priceMAD !== undefined && (
        <PriceDisplay amountMAD={priceMAD} size="sm" />
      )}
      {priceLevel !== undefined && !priceMAD && (
        <PriceDisplay priceLevel={priceLevel} size="sm" />
      )}
      {children}
    </div>
  );
}

CardFooter.displayName = 'CardFooter';

/* ═══════════════════════════════════════════════════════════════
   CityCard - Displays a city with image, name, and attraction count
   ═══════════════════════════════════════════════════════════════ */

interface CityCardProps {
  name: string;
  slug: string;
  image: string;
  description: string;
  attractionCount?: number;
  className?: string;
}

function CityCard({ name, slug, image, description, attractionCount, className }: CityCardProps) {
  return (
    <Link href={`/cities/${slug}`} className={cn('group block', className)}>
      <Card variant="default" className="h-full">
        <CardImage src={image} alt={name} overlay>
          <div className="absolute bottom-0 inset-x-0 p-4 z-10">
            <h3 className="font-display text-xl font-bold text-white drop-shadow-lg">
              {name}
            </h3>
            {attractionCount !== undefined && (
              <div className="flex items-center gap-1.5 mt-1">
                <MapPin size={14} className="text-accent-light" />
                <span className="text-sm text-white/90 font-medium">
                  {attractionCount} attractions
                </span>
              </div>
            )}
          </div>
        </CardImage>
        <CardBody>
          <CardDescription className="mt-0">{description}</CardDescription>
          <span className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-primary font-heading group-hover:gap-2 transition-all duration-200">
            Explore city <ArrowRight size={14} />
          </span>
        </CardBody>
      </Card>
    </Link>
  );
}

CityCard.displayName = 'CityCard';

/* ═══════════════════════════════════════════════════════════════
   AttractionCard - Attraction with rating and location
   ═══════════════════════════════════════════════════════════════ */

interface AttractionCardProps {
  name: string;
  slug: string;
  image: string;
  city: string;
  rating: number;
  reviewCount?: number;
  category?: string;
  description?: string;
  className?: string;
}

function AttractionCard({
  name,
  slug,
  image,
  city,
  rating,
  reviewCount,
  category,
  description,
  className,
}: AttractionCardProps) {
  return (
    <Link href={`/attractions/${slug}`} className={cn('group block', className)}>
      <Card variant="default" className="h-full">
        <CardImage src={image} alt={name} badge={category} badgeVariant="accent" />
        <CardBody>
          <div className="flex items-center gap-1.5 text-xs text-text-muted mb-1.5">
            <MapPin size={12} className="text-primary" />
            <span>{city}</span>
          </div>
          <CardTitle>{name}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardBody>
        <CardFooter rating={rating} reviewCount={reviewCount} />
      </Card>
    </Link>
  );
}

AttractionCard.displayName = 'AttractionCard';

/* ═══════════════════════════════════════════════════════════════
   TourCard - Tour with price and duration
   ═══════════════════════════════════════════════════════════════ */

interface TourCardProps {
  name: string;
  slug: string;
  image: string;
  priceMAD: number;
  duration: string;
  rating?: number;
  reviewCount?: number;
  groupSize?: string;
  description?: string;
  featured?: boolean;
  className?: string;
}

function TourCard({
  name,
  slug,
  image,
  priceMAD,
  duration,
  rating,
  reviewCount,
  groupSize,
  description,
  featured = false,
  className,
}: TourCardProps) {
  return (
    <Link href={`/tours/${slug}`} className={cn('group block', className)}>
      <Card variant={featured ? 'featured' : 'default'} className="h-full">
        <CardImage src={image} alt={name} badge={featured ? 'Popular' : undefined} badgeVariant="accent">
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-text-primary shadow-sm">
              <Clock size={12} className="text-primary" />
              {duration}
            </span>
          </div>
        </CardImage>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
          <div className="flex items-center gap-3 mt-3 text-xs text-text-muted">
            {groupSize && (
              <span className="inline-flex items-center gap-1">
                <Users size={12} />
                {groupSize}
              </span>
            )}
          </div>
        </CardBody>
        <CardFooter rating={rating} reviewCount={reviewCount} priceMAD={priceMAD} />
      </Card>
    </Link>
  );
}

TourCard.displayName = 'TourCard';

/* ═══════════════════════════════════════════════════════════════
   RestaurantCard - Restaurant with cuisine type
   ═══════════════════════════════════════════════════════════════ */

interface RestaurantCardProps {
  name: string;
  slug?: string;
  image: string;
  cuisine: string;
  city: string;
  rating: number;
  reviewCount?: number;
  priceLevel: 1 | 2 | 3 | 4;
  description?: string;
  className?: string;
}

function RestaurantCard({
  name,
  slug,
  image,
  cuisine,
  city,
  rating,
  reviewCount,
  priceLevel,
  description,
  className,
}: RestaurantCardProps) {
  const cardContent = (
    <Card variant="default" className="h-full">
      <CardImage src={image} alt={name}>
        <div className="absolute top-3 left-3 z-10">
          <Badge variant="secondary" size="sm" icon={<Utensils size={10} />}>
            {cuisine}
          </Badge>
        </div>
      </CardImage>
      <CardBody>
        <div className="flex items-center gap-1.5 text-xs text-text-muted mb-1.5">
          <MapPin size={12} className="text-primary" />
          <span>{city}</span>
        </div>
        <CardTitle>{name}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardBody>
      <CardFooter rating={rating} reviewCount={reviewCount} priceLevel={priceLevel} />
    </Card>
  );

  if (slug) {
    return (
      <Link href={`/restaurants/${slug}`} className={cn('group block', className)}>
        {cardContent}
      </Link>
    );
  }

  return <div className={cn('group block', className)}>{cardContent}</div>;
}

RestaurantCard.displayName = 'RestaurantCard';

/* ═══════════════════════════════════════════════════════════════
   HotelCard - Accommodation with price range
   ═══════════════════════════════════════════════════════════════ */

interface HotelCardProps {
  name: string;
  slug?: string;
  image: string;
  city: string;
  rating: number;
  reviewCount?: number;
  priceMAD: number;
  priceLevel?: 1 | 2 | 3 | 4;
  type?: string;
  amenities?: string[];
  description?: string;
  className?: string;
}

function HotelCard({
  name,
  slug,
  image,
  city,
  rating,
  reviewCount,
  priceMAD,
  priceLevel,
  type,
  amenities,
  description,
  className,
}: HotelCardProps) {
  const cardContent = (
    <Card variant="default" className="h-full">
      <CardImage src={image} alt={name} badge={type} badgeVariant="primary" />
      <CardBody>
        <div className="flex items-center gap-1.5 text-xs text-text-muted mb-1.5">
          <MapPin size={12} className="text-primary" />
          <span>{city}</span>
        </div>
        <CardTitle>{name}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
        {amenities && amenities.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            {amenities.slice(0, 3).map((amenity) => (
              <span
                key={amenity}
                className="px-2 py-0.5 text-[0.65rem] font-medium rounded-md bg-sand-100 text-text-muted border border-border-light"
              >
                {amenity}
              </span>
            ))}
          </div>
        )}
      </CardBody>
      <CardFooter rating={rating} reviewCount={reviewCount} priceMAD={priceMAD}>
        {priceLevel && <PriceDisplay priceLevel={priceLevel} size="sm" />}
      </CardFooter>
    </Card>
  );

  if (slug) {
    return (
      <Link href={`/accommodations/${slug}`} className={cn('group block', className)}>
        {cardContent}
      </Link>
    );
  }

  return <div className={cn('group block', className)}>{cardContent}</div>;
}

HotelCard.displayName = 'HotelCard';

/* ═══════════════════════════════════════════════════════════════
   ArticleCard - Blog post / article card
   ═══════════════════════════════════════════════════════════════ */

interface ArticleCardProps {
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  author?: string;
  date: string;
  readTime?: string;
  category?: string;
  className?: string;
}

function ArticleCard({
  title,
  slug,
  image,
  excerpt,
  author,
  date,
  readTime,
  category,
  className,
}: ArticleCardProps) {
  return (
    <Link href={`/blog/${slug}`} className={cn('group block', className)}>
      <Card variant="default" className="h-full">
        <CardImage src={image} alt={title} badge={category} badgeVariant="primary" />
        <CardBody>
          <div className="flex items-center gap-2 text-xs text-text-muted mb-2">
            <time dateTime={date} className="flex items-center gap-1">
              <Calendar size={12} />
              {date}
            </time>
            {readTime && (
              <>
                <span aria-hidden="true" className="text-border">|</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {readTime}
                </span>
              </>
            )}
          </div>
          <CardTitle as="h3">{title}</CardTitle>
          <CardDescription>{excerpt}</CardDescription>
          {author && (
            <p className="mt-3 text-xs font-medium text-text-secondary font-heading">
              By {author}
            </p>
          )}
        </CardBody>
      </Card>
    </Link>
  );
}

ArticleCard.displayName = 'ArticleCard';

/* ═══════════════════════════════════════════════════════════════
   FeatureCard - Feature/benefit card with icon
   ═══════════════════════════════════════════════════════════════ */

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  variant?: 'default' | 'gradient' | 'outlined';
  className?: string;
}

function FeatureCard({
  icon,
  title,
  description,
  variant = 'default',
  className,
}: FeatureCardProps) {
  const variantStyles = {
    default: 'bg-surface border border-border-light',
    gradient: 'bg-gradient-to-br from-surface to-sand-50 border border-accent/15',
    outlined: 'bg-transparent border-2 border-primary/15',
  };

  return (
    <div
      className={cn(
        'rounded-xl p-5 sm:p-6 transition-all duration-300',
        'hover:shadow-lg hover:-translate-y-1',
        variantStyles[variant],
        className,
      )}
    >
      <div
        className={cn(
          'inline-flex items-center justify-center rounded-xl p-3 mb-4',
          'bg-gradient-to-br from-primary/10 to-accent/10',
          'text-primary',
        )}
      >
        <span className="[&>svg]:h-6 [&>svg]:w-6" aria-hidden="true">
          {icon}
        </span>
      </div>
      <h3 className="font-heading font-bold text-text-primary text-lg mb-1.5">
        {title}
      </h3>
      <p className="text-sm text-text-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}

FeatureCard.displayName = 'FeatureCard';

/* ═══════════════════════════════════════════════════════════════
   TestimonialCard - Review/testimonial card
   ═══════════════════════════════════════════════════════════════ */

interface TestimonialCardProps {
  quote: string;
  author: string;
  location?: string;
  avatar?: string;
  rating?: number;
  className?: string;
}

function TestimonialCard({
  quote,
  author,
  location,
  avatar,
  rating,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'rounded-xl p-5 sm:p-6 transition-all duration-300',
        'bg-surface border border-border-light',
        'hover:shadow-lg hover:-translate-y-1',
        'relative',
        className,
      )}
    >
      <Quote
        size={32}
        className="absolute top-4 right-4 text-accent/15"
        aria-hidden="true"
      />
      {rating !== undefined && (
        <div className="mb-3">
          <Rating value={rating} size="sm" showNumber={false} />
        </div>
      )}
      <blockquote className="text-sm text-text-secondary leading-relaxed mb-4 italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3">
        {avatar ? (
          <img
            src={avatar}
            alt={author}
            loading="lazy"
            className="h-10 w-10 rounded-full object-cover border-2 border-accent/20"
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <span className="font-heading font-bold text-sm text-primary">
              {author.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        <div>
          <p className="font-heading font-semibold text-sm text-text-primary">
            {author}
          </p>
          {location && (
            <p className="text-xs text-text-muted">{location}</p>
          )}
        </div>
      </div>
    </div>
  );
}

TestimonialCard.displayName = 'TestimonialCard';

/* ═══════════════════════════════════════════════════════════════
   ImageCard - Full-bleed image with overlay text
   ═══════════════════════════════════════════════════════════════ */

interface ImageCardProps {
  image: string;
  title: string;
  subtitle?: string;
  href?: string;
  aspectRatio?: 'video' | 'square' | 'landscape' | 'portrait';
  className?: string;
}

function ImageCard({
  image,
  title,
  subtitle,
  href,
  aspectRatio = 'landscape',
  className,
}: ImageCardProps) {
  const aspectMap = {
    video: 'aspect-video',
    square: 'aspect-square',
    landscape: 'aspect-[4/3]',
    portrait: 'aspect-[3/4]',
  };

  const content = (
    <div
      className={cn(
        'group relative overflow-hidden rounded-xl',
        aspectMap[aspectRatio],
        'transition-all duration-300 hover:shadow-xl',
        className,
      )}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
        <h3 className="font-display text-lg sm:text-xl font-bold text-white drop-shadow-lg">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-white/80 mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

ImageCard.displayName = 'ImageCard';

/* ═══════════════════════════════════════════════════════════════
   StatsCard - Statistics display card with icon
   ═══════════════════════════════════════════════════════════════ */

interface StatsCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  trend?: string;
  trendPositive?: boolean;
  className?: string;
}

function StatsCard({
  icon,
  value,
  label,
  trend,
  trendPositive,
  className,
}: StatsCardProps) {
  return (
    <div
      className={cn(
        'rounded-xl p-5 transition-all duration-300',
        'bg-surface border border-border-light',
        'hover:shadow-md hover:-translate-y-0.5',
        className,
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <div
          className={cn(
            'inline-flex items-center justify-center rounded-lg p-2.5',
            'bg-gradient-to-br from-primary/10 to-accent/10 text-primary',
          )}
        >
          <span className="[&>svg]:h-5 [&>svg]:w-5" aria-hidden="true">
            {icon}
          </span>
        </div>
        {trend && (
          <span
            className={cn(
              'text-xs font-semibold px-2 py-0.5 rounded-full',
              trendPositive
                ? 'bg-emerald-50 text-green border border-emerald-200'
                : 'bg-amber-50 text-amber-700 border border-amber-200',
            )}
          >
            {trend}
          </span>
        )}
      </div>
      <p className="stat-number text-3xl">{value}</p>
      <p className="mt-1 text-sm text-text-muted font-heading font-medium">
        {label}
      </p>
    </div>
  );
}

StatsCard.displayName = 'StatsCard';

export {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardDescription,
  CardFooter,
  CityCard,
  AttractionCard,
  TourCard,
  RestaurantCard,
  HotelCard,
  ArticleCard,
  FeatureCard,
  TestimonialCard,
  ImageCard,
  StatsCard,
};

export type {
  CardProps,
  CardVariant,
  CardImageProps,
  CardBodyProps,
  CardTitleProps,
  CardDescriptionProps,
  CardFooterProps,
  CityCardProps,
  AttractionCardProps,
  TourCardProps,
  RestaurantCardProps,
  HotelCardProps,
  ArticleCardProps,
  FeatureCardProps,
  TestimonialCardProps,
  ImageCardProps,
  StatsCardProps,
};
