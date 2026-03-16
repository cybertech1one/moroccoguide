'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  MapPin,
  Home,
  ChevronRight as ChevronRightIcon,
} from 'lucide-react';
import type { Photo } from './page';

const CATEGORIES = [
  'All',
  'Cities',
  'Desert',
  'Mountains',
  'Coast',
  'Architecture',
  'Food',
  'People',
  'Markets',
] as const;

type Category = (typeof CATEGORIES)[number];

export default function GalleryClient({ photos }: { photos: Photo[] }) {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return photos;
    return photos.filter((p) => p.category === activeCategory);
  }, [photos, activeCategory]);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? filtered.length - 1 : prev - 1;
    });
  }, [filtered.length]);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === filtered.length - 1 ? 0 : prev + 1;
    });
  }, [filtered.length]);

  /* Keyboard navigation for lightbox */
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, goToPrev, goToNext]);

  const currentPhoto = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-[var(--color-primary)] text-white shadow-md'
                : 'bg-[var(--surface-muted)] text-[var(--text-secondary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Photo Count */}
      <div className="flex items-center gap-2 mb-6">
        <Camera className="w-4 h-4 text-[var(--text-secondary)]" />
        <p className="text-sm text-[var(--text-secondary)]">
          Showing {filtered.length} of {photos.length} photos
        </p>
      </div>

      {/* Masonry Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <Camera className="w-12 h-12 text-[var(--text-secondary)] mx-auto mb-4 opacity-40" />
          <h3 className="text-xl font-[family-name:var(--font-display)] font-semibold text-[var(--text-primary)] mb-2">
            No photos found
          </h3>
          <p className="text-[var(--text-secondary)]">
            Try selecting a different category.
          </p>
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {filtered.map((photo, index) => (
            <div
              key={photo.id}
              className="break-inside-avoid mb-4 group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-xl card-moroccan">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-center gap-1.5 text-white/90 text-sm mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="font-medium">{photo.city}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/70 text-xs mb-2">
                    <Camera className="w-3 h-3" />
                    <span>{photo.photographer}</span>
                  </div>
                  <span className="inline-block self-start px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm">
                    {photo.category}
                  </span>
                </div>
                {/* Featured badge */}
                {photo.featured && (
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-semibold bg-[var(--color-primary)] text-white">
                    Featured
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {currentPhoto && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image + Info */}
          <div
            className="flex flex-col items-center max-w-5xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentPhoto.src.replace('w=800', 'w=1600')}
              alt={currentPhoto.alt}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-white font-medium text-lg mb-1">
                {currentPhoto.alt}
              </p>
              <div className="flex items-center justify-center gap-4 text-white/70 text-sm">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {currentPhoto.city}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5" />
                  {currentPhoto.photographer}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/15 text-white/80">
                  {currentPhoto.category}
                </span>
              </div>
              <p className="text-white/40 text-xs mt-2">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
