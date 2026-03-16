'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Clock, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Experience {
  title: string;
  image: string;
  price: string;
  duration: string;
  rating: number;
  reviews: number;
  href: string;
  badge?: string;
  Icon: LucideIcon;
}

export default function FeaturedExperiencesScroll({ experiences }: { experiences: Experience[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 340;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative">
      {/* Scroll buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-200 hover:scale-105 cursor-pointer"
        style={{
          backgroundColor: '#FFFFFF',
          borderColor: 'rgba(160,82,45,0.15)',
          boxShadow: '0 4px 16px rgba(26,24,20,0.08)',
        }}
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5" style={{ color: '#A0522D' }} />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-200 hover:scale-105 cursor-pointer"
        style={{
          backgroundColor: '#FFFFFF',
          borderColor: 'rgba(160,82,45,0.15)',
          boxShadow: '0 4px 16px rgba(26,24,20,0.08)',
        }}
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5" style={{ color: '#A0522D' }} />
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x-mandatory"
        style={{ scrollPaddingLeft: '1rem' }}
      >
        {experiences.map((exp) => {
          const IconComp = exp.Icon;
          return (
            <a
              key={exp.title}
              href={exp.href}
              className="group flex-shrink-0 w-[300px] sm:w-[320px] rounded-2xl border overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-1 snap-start"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: 'rgba(160,82,45,0.1)',
              }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Warm gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(26,24,20,0.4) 0%, rgba(26,24,20,0.05) 50%, transparent 100%)',
                  }}
                />
                {/* Icon badge */}
                <div className="absolute top-4 left-4 flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-md"
                  style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}
                >
                  <IconComp className="w-5 h-5 text-white" />
                </div>
                {/* Badge */}
                {exp.badge && (
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: '#C4960C', color: '#1A1814' }}
                  >
                    {exp.badge}
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="p-5">
                <h3
                  className="font-heading text-lg font-bold mb-2 transition-colors duration-300 group-hover:text-[#A0522D]"
                  style={{ color: '#1A1814' }}
                >
                  {exp.title}
                </h3>
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5"
                        style={{
                          color: i < Math.floor(exp.rating) ? '#C4960C' : '#D6C9B0',
                          fill: i < Math.floor(exp.rating) ? '#C4960C' : 'transparent',
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium" style={{ color: '#1A1814', opacity: 0.6 }}>
                    {exp.rating}
                  </span>
                  <span className="text-xs" style={{ color: '#1A1814', opacity: 0.4 }}>
                    ({exp.reviews} reviews)
                  </span>
                </div>
                {/* Meta */}
                <div
                  className="flex items-center justify-between pt-4 border-t"
                  style={{ borderColor: 'rgba(160,82,45,0.08)' }}
                >
                  <div className="flex items-center gap-1.5 text-sm" style={{ color: '#1A1814', opacity: 0.5 }}>
                    <Clock className="w-4 h-4" />
                    {exp.duration}
                  </div>
                  <span className="text-sm font-bold" style={{ color: '#A0522D' }}>
                    {exp.price}
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Scroll hint gradient - left */}
      <div
        className="absolute top-0 left-0 bottom-4 w-8 pointer-events-none lg:hidden"
        style={{ background: 'linear-gradient(to right, var(--background), transparent)' }}
      />
      {/* Scroll hint gradient - right */}
      <div
        className="absolute top-0 right-0 bottom-4 w-8 pointer-events-none lg:hidden"
        style={{ background: 'linear-gradient(to left, var(--background), transparent)' }}
      />
    </div>
  );
}
