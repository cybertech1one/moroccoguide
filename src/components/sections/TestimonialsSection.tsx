'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  quote: string;
  author: string;
  country: string;
  flag: string;
  rating: number;
  tripType: string;
  date: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Morocco completely exceeded every expectation. The riads in Fes were like stepping into a fairy tale, the food was extraordinary, and the people were the warmest I have ever met. We hired a local guide through the medina and it was the best decision of the trip.',
    author: 'Sarah Mitchell',
    country: 'United States',
    flag: '\u{1F1FA}\u{1F1F8}',
    rating: 5,
    tripType: 'Cultural Tour',
    date: 'October 2025',
  },
  {
    quote:
      'Sleeping under the stars in the Sahara Desert was a life-changing experience. The silence, the vastness, the camels at sunset -- nothing prepares you for it. Our desert camp was incredibly luxurious and the Berber guides shared stories around the fire all night.',
    author: 'James Thornton',
    country: 'United Kingdom',
    flag: '\u{1F1EC}\u{1F1E7}',
    rating: 5,
    tripType: 'Desert Adventure',
    date: 'November 2025',
  },
  {
    quote:
      'Chefchaouen is the most photogenic town I have ever visited. Every single corner, every stairway, every doorway is a masterpiece in blue. We spent three days there and it was not enough. The mountains around it are perfect for hiking as well.',
    author: 'Elena Rossi',
    country: 'Italy',
    flag: '\u{1F1EE}\u{1F1F9}',
    rating: 5,
    tripType: 'Photography Trip',
    date: 'September 2025',
  },
  {
    quote:
      'The food in Marrakech alone is worth the flight from Sydney. We did a cooking class where we learned to make a proper lamb tagine and pastilla. The spice markets are an assault on the senses in the best possible way. Already planning our return trip.',
    author: 'David Chen',
    country: 'Australia',
    flag: '\u{1F1E6}\u{1F1FA}',
    rating: 5,
    tripType: 'Food & Culture',
    date: 'December 2025',
  },
  {
    quote:
      'We did the 14-day grand tour covering everything from Tangier to the Sahara. Morocco is unbelievably diverse -- Mediterranean coast, ancient medinas, snow-capped mountains, and golden dunes all in one country. It felt like visiting five different worlds.',
    author: 'Marie Dupont',
    country: 'France',
    flag: '\u{1F1EB}\u{1F1F7}',
    rating: 5,
    tripType: 'Grand Tour',
    date: 'January 2026',
  },
  {
    quote:
      'As a solo female traveler, I was slightly nervous, but Morocco surprised me with its hospitality. The local women I met in Essaouira invited me to tea and shared their stories. The surf there is amazing too. I felt safe and welcome the entire time.',
    author: 'Anna Bergstrom',
    country: 'Sweden',
    flag: '\u{1F1F8}\u{1F1EA}',
    rating: 5,
    tripType: 'Solo Adventure',
    date: 'February 2026',
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goTo = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const goPrev = () => {
    goTo((activeIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const goNext = () => {
    goTo((activeIndex + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24"
      aria-label="Traveler testimonials"
    >
      <div className="container-morocco">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-[var(--font-display)] text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">
            What Travelers Say About Morocco
          </h2>
          <div className="arabesque-divider mx-auto max-w-md">
            <span className="text-lg">&#9670;</span>
          </div>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mx-auto max-w-3xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative rounded-2xl border border-[var(--border-light)] bg-[var(--surface)] p-8 shadow-lg md:p-12">
            {/* Quote Icon */}
            <Quote className="absolute top-6 left-6 h-10 w-10 text-[var(--color-primary-100)] md:h-12 md:w-12" />

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                {/* Rating */}
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[var(--color-accent)] text-[var(--color-accent)]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mb-6 text-lg leading-relaxed text-[var(--text-primary)] italic md:text-xl">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface-muted)] text-2xl">
                    {current.flag}
                  </div>
                  <div>
                    <p className="font-bold text-[var(--text-primary)]">
                      {current.author}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                      <span>{current.country}</span>
                      <span>&middot;</span>
                      <span>{current.tripType}</span>
                      <span>&middot;</span>
                      <span>{current.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={goPrev}
              className="absolute top-1/2 -left-4 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-[var(--color-primary-50)] md:block"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-[var(--text-primary)]" />
            </button>
            <button
              onClick={goNext}
              className="absolute top-1/2 -right-4 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-[var(--color-primary-50)] md:block"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-[var(--text-primary)]" />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={cn(
                  'h-2.5 rounded-full transition-all',
                  i === activeIndex
                    ? 'w-8 bg-[var(--color-primary)]'
                    : 'w-2.5 bg-[var(--color-sand-300)] hover:bg-[var(--color-primary-200)]'
                )}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
