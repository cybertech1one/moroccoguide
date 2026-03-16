'use client';

import {
  useState,
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
} from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, type PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CarouselSlide {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  aspectRatio?: 'video' | 'square' | 'landscape' | 'hero';
  className?: string;
  overlay?: boolean;
  children?: (slide: CarouselSlide, index: number) => ReactNode;
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

const aspectMap = {
  video: 'aspect-video',
  square: 'aspect-square',
  landscape: 'aspect-[4/3]',
  hero: 'aspect-[21/9]',
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

function Carousel({
  slides,
  autoPlay = false,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  aspectRatio = 'video',
  className,
  overlay = false,
  children,
}: CarouselProps) {
  const [[currentIndex, direction], setSlide] = useState([0, 0]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const slideCount = slides.length;

  const paginate = useCallback(
    (newDirection: number) => {
      setSlide(([prev]) => {
        let next = prev + newDirection;
        if (next >= slideCount) next = 0;
        if (next < 0) next = slideCount - 1;
        return [next, newDirection];
      });
    },
    [slideCount],
  );

  const goToSlide = useCallback(
    (index: number) => {
      setSlide(([prev]) => [index, index > prev ? 1 : -1]);
    },
    [],
  );

  /* Auto-play */
  useEffect(() => {
    if (!autoPlay || slideCount <= 1) return;

    timerRef.current = setInterval(() => {
      paginate(1);
    }, autoPlayInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlay, autoPlayInterval, paginate, slideCount]);

  /* Pause on hover */
  const handleMouseEnter = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (autoPlay && slideCount > 1) {
      timerRef.current = setInterval(() => paginate(1), autoPlayInterval);
    }
  }, [autoPlay, autoPlayInterval, paginate, slideCount]);

  /* Swipe handler */
  const handleDragEnd = useCallback(
    (_: unknown, info: PanInfo) => {
      const swipe = swipePower(info.offset.x, info.velocity.x);
      if (swipe < -swipeConfidenceThreshold) {
        paginate(1);
      } else if (swipe > swipeConfidenceThreshold) {
        paginate(-1);
      }
    },
    [paginate],
  );

  /* Keyboard */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'ArrowRight') paginate(1);
    },
    [paginate],
  );

  if (slideCount === 0) return null;

  const currentSlide = slides[currentIndex];

  return (
    <div
      className={cn('relative group overflow-hidden rounded-xl', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="carousel"
      aria-label="Image carousel"
      tabIndex={0}
    >
      <div className={cn('relative overflow-hidden', aspectMap[aspectRatio])}>
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${currentIndex + 1} of ${slideCount}`}
          >
            <Image
              src={currentSlide.src}
              alt={currentSlide.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
              className="object-cover pointer-events-none select-none"
              priority={currentIndex === 0}
            />

            {overlay && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            )}

            {/* Custom content overlay */}
            {children && (
              <div className="absolute inset-0 flex items-end p-6">
                {children(currentSlide, currentIndex)}
              </div>
            )}

            {/* Caption */}
            {currentSlide.caption && !children && (
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm font-medium">{currentSlide.caption}</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrow Navigation */}
      {showArrows && slideCount > 1 && (
        <>
          <button
            type="button"
            onClick={() => paginate(-1)}
            className={cn(
              'absolute left-3 top-1/2 -translate-y-1/2 z-10',
              'p-2 rounded-full bg-white/80 backdrop-blur-sm',
              'text-text-primary shadow-md',
              'opacity-0 group-hover:opacity-100 transition-opacity duration-200',
              'hover:bg-white hover:scale-105',
              'focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-primary',
            )}
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => paginate(1)}
            className={cn(
              'absolute right-3 top-1/2 -translate-y-1/2 z-10',
              'p-2 rounded-full bg-white/80 backdrop-blur-sm',
              'text-text-primary shadow-md',
              'opacity-0 group-hover:opacity-100 transition-opacity duration-200',
              'hover:bg-white hover:scale-105',
              'focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-primary',
            )}
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Dot Navigation */}
      {showDots && slideCount > 1 && (
        <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-1.5 z-10">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(index)}
              className={cn(
                'rounded-full transition-all duration-300',
                'focus-visible:outline-2 focus-visible:outline-white',
                index === currentIndex
                  ? 'w-6 h-2 bg-white'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/80',
              )}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}

Carousel.displayName = 'Carousel';

export { Carousel };
export type { CarouselProps, CarouselSlide };
