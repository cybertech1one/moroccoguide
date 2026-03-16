'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Globe, Compass } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  location: string;
  rating: number;
  tripType: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Morocco rewrote everything I thought I knew about travel. The colors, the kindness of strangers, the silence of the desert at dawn -- it stays with you forever.',
    name: 'Amelia Chen',
    location: 'Vancouver, Canada',
    rating: 5,
    tripType: 'Solo Adventure',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    quote:
      'From the labyrinthine medina of Fes to the surf breaks of Taghazout, every single day felt like a completely different country. Absolutely extraordinary.',
    name: 'Lucas Moretti',
    location: 'Milan, Italy',
    rating: 5,
    tripType: 'Adventure',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    quote:
      'The riads, the food, the warmth of the people. We came for a week and immediately extended to three. CityGuide made planning effortless.',
    name: 'Sarah Okonkwo',
    location: 'London, UK',
    rating: 5,
    tripType: 'Family Vacation',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
  {
    quote:
      'Our honeymoon in Morocco was pure magic. From a private dinner on the dunes to rose-petal baths in our riad, every detail was more romantic than we imagined.',
    name: 'Elena & Thomas Richter',
    location: 'Munich, Germany',
    rating: 5,
    tripType: 'Honeymoon',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop&crop=face',
  },
  {
    quote:
      'I have traveled to 40+ countries and Morocco remains unmatched. The Atlas trekking, the Berber hospitality, the night sky over the Sahara -- this is what travel is about.',
    name: 'James Whitfield',
    location: 'Sydney, Australia',
    rating: 5,
    tripType: 'Trekking',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
  },
  {
    quote:
      'My daughters still talk about feeding camels at sunrise and learning to make couscous with our host family. Morocco gave us memories we will treasure for a lifetime.',
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    tripType: 'Family',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, goNext]);

  // Show 3 cards on desktop, 1 on mobile
  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      indices.push((current + i) % testimonials.length);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {visibleIndices.map((idx, position) => {
          const t = testimonials[idx];
          return (
            <div
              key={`${idx}-${position}`}
              className="rounded-2xl border p-7 md:p-8 flex flex-col justify-between transition-all duration-500"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: 'rgba(160,82,45,0.1)',
                opacity: 1,
                animation: 'fadeInUp 0.5s ease-out forwards',
                animationDelay: `${position * 0.1}s`,
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #C4960C, transparent)', opacity: 0.3 }}
              />

              <div>
                {/* Trip type badge + quote icon */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
                    style={{ backgroundColor: 'rgba(196,150,12,0.08)', color: '#A0522D' }}
                  >
                    <Compass className="w-3 h-3" />
                    {t.tripType}
                  </span>
                  <Quote className="w-6 h-6 opacity-15" style={{ color: '#C4960C' }} />
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current"
                      style={{ color: '#C4960C' }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="text-[15px] leading-relaxed italic"
                  style={{ color: '#1A1814', opacity: 0.75 }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Traveler info */}
              <div className="mt-6 pt-5 border-t flex items-center gap-3" style={{ borderColor: 'rgba(160,82,45,0.1)' }}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                  style={{ border: '2px solid rgba(196,150,12,0.2)' }}
                />
                <div>
                  <p className="font-heading text-sm font-bold" style={{ color: '#1A1814' }}>
                    {t.name}
                  </p>
                  <div className="flex items-center gap-1">
                    <Globe className="w-3 h-3" style={{ color: '#A0522D', opacity: 0.5 }} />
                    <p className="text-xs" style={{ color: '#1A1814', opacity: 0.5 }}>
                      {t.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={goPrev}
          className="flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-200 hover:scale-105 cursor-pointer"
          style={{
            backgroundColor: '#FFFFFF',
            borderColor: 'rgba(160,82,45,0.15)',
          }}
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="w-5 h-5" style={{ color: '#A0522D' }} />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className="transition-all duration-300 cursor-pointer rounded-full"
              style={{
                width: idx === current ? '24px' : '8px',
                height: '8px',
                backgroundColor: idx === current ? '#A0522D' : 'rgba(160,82,45,0.2)',
              }}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-200 hover:scale-105 cursor-pointer"
          style={{
            backgroundColor: '#FFFFFF',
            borderColor: 'rgba(160,82,45,0.15)',
          }}
          aria-label="Next testimonials"
        >
          <ChevronRight className="w-5 h-5" style={{ color: '#A0522D' }} />
        </button>
      </div>
    </div>
  );
}
