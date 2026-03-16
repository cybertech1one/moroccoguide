'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

/* ═══════════════════════════════════════════════════════════════
   BLUR PLACEHOLDER
   A tiny inline SVG encoded as base64 for use as a blur
   placeholder while the real image loads. Prevents layout
   shift (CLS) by reserving the correct aspect ratio.
   ═══════════════════════════════════════════════════════════════ */

const BLUR_SVG = `data:image/svg+xml;base64,${btoa(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><rect width="1" height="1" fill="#e8e0d4"/></svg>'
)}`;

/* ═══════════════════════════════════════════════════════════════
   FALLBACK IMAGE
   A simple inline SVG shown when the image source fails to load.
   ═══════════════════════════════════════════════════════════════ */

const FALLBACK_SVG = `data:image/svg+xml;base64,${btoa(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" fill="none">
    <rect width="400" height="300" fill="#f3ece4"/>
    <path d="M160 120h80v60h-80z" fill="#d4c5b0"/>
    <circle cx="200" cy="130" r="15" fill="#c4a882"/>
    <path d="M150 180l30-25 20 15 40-35 30 45H150z" fill="#b8a68e"/>
    <text x="200" y="220" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#8a7a66">Image unavailable</text>
  </svg>`
)}`;

/* ═══════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════ */

export interface OptimizedImageProps {
  /** The image URL */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Width in pixels - required for CLS prevention */
  width: number;
  /** Height in pixels - required for CLS prevention */
  height: number;
  /** Additional CSS classes */
  className?: string;
  /** Optional custom placeholder (base64 data URI or URL) */
  placeholder?: string;
  /** Optional custom fallback image for broken sources */
  fallback?: string;
  /** Whether to eagerly load the image (for above-the-fold content) */
  priority?: boolean;
  /** Object-fit CSS property */
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  /** Optional sizes attribute for responsive images */
  sizes?: string;
  /** Optional srcSet for responsive images */
  srcSet?: string;
  /** Callback when image loads successfully */
  onLoad?: () => void;
  /** Callback when image fails to load */
  onError?: () => void;
}

/* ═══════════════════════════════════════════════════════════════
   OPTIMIZED IMAGE COMPONENT
   ═══════════════════════════════════════════════════════════════
   A client component that wraps <img> with:
   - Intersection Observer for lazy loading only when visible
   - Blur placeholder using a tiny base64 SVG
   - Proper width/height attributes for CLS prevention
   - Fallback for broken images
   - Native loading="lazy" and decoding="async"
   - Smooth fade-in transition on load
   ═══════════════════════════════════════════════════════════════ */

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder = BLUR_SVG,
  fallback = FALLBACK_SVG,
  priority = false,
  objectFit = 'cover',
  sizes,
  srcSet,
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isVisible, setIsVisible] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  /* ── Intersection Observer ── */
  useEffect(() => {
    if (priority || isVisible) return;

    const element = imgRef.current;
    if (!element) return;

    // Fallback if IntersectionObserver is not supported
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px 0px', // Start loading 200px before entering viewport
        threshold: 0,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [priority, isVisible]);

  /* ── Event Handlers ── */
  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);

  /* ── Determine image source ── */
  const imageSrc = hasError ? fallback : isVisible ? src : placeholder;

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: `${width} / ${height}`,
      }}
    >
      {/* Blur placeholder background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${placeholder})`,
          filter: 'blur(20px)',
          transform: 'scale(1.1)',
          opacity: isLoaded ? 0 : 1,
          transition: 'opacity 0.4s ease-out',
        }}
        aria-hidden="true"
      />

      {/* Actual image */}
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        sizes={sizes}
        srcSet={srcSet}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          objectFit,
          opacity: isLoaded || hasError ? 1 : 0,
          transition: 'opacity 0.4s ease-out',
          width: '100%',
          height: '100%',
        }}
        className="absolute inset-0"
      />
    </div>
  );
}

export default OptimizedImage;
