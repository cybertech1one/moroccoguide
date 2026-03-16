'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Heart, Users, Star, Plane, Compass, ChefHat, Mountain, Camera } from 'lucide-react';

/* ─── Smart Notification System ───
   Instead of annoying popups every 5 seconds, this uses:
   1. Long initial delay (25s) - let users browse first
   2. Scroll-triggered - only show after meaningful engagement
   3. Context-aware - shows relevant content based on current page
   4. Max 3 notifications per session - respects user attention
   5. Smooth, gentle animations - slide in slowly, fade out
   6. Remembers dismissal for 24 hours
*/

interface Notification {
  id: number;
  avatar: string;
  name: string;
  location: string;
  action: string;
  detail: string;
  icon: React.ReactNode;
  timeAgo: string;
  category: string; // matches page categories for contextual relevance
}

const notifications: Notification[] = [
  {
    id: 1, avatar: 'A', name: 'Ahmed', location: 'Casablanca',
    action: 'just booked', detail: 'a Desert Safari tour',
    icon: <Compass className="h-3.5 w-3.5" />, timeAgo: '2 min ago',
    category: 'desert',
  },
  {
    id: 2, avatar: 'S', name: 'Sarah', location: 'London',
    action: 'saved', detail: 'Marrakech to her wishlist',
    icon: <Heart className="h-3.5 w-3.5" />, timeAgo: '5 min ago',
    category: 'cities',
  },
  {
    id: 3, avatar: 'M', name: 'Marie', location: 'Paris',
    action: 'just reviewed', detail: 'a Riad in Fes with 5 stars',
    icon: <Star className="h-3.5 w-3.5" />, timeAgo: '8 min ago',
    category: 'accommodations',
  },
  {
    id: 4, avatar: 'J', name: 'James', location: 'New York',
    action: 'just booked', detail: 'an Atlas Mountains trek',
    icon: <Mountain className="h-3.5 w-3.5" />, timeAgo: '12 min ago',
    category: 'trekking',
  },
  {
    id: 5, avatar: 'L', name: 'Leila', location: 'Dubai',
    action: 'downloaded', detail: 'the Morocco Travel Guide',
    icon: <MapPin className="h-3.5 w-3.5" />, timeAgo: '15 min ago',
    category: 'general',
  },
  {
    id: 6, avatar: 'T', name: 'Tom', location: 'Berlin',
    action: 'just signed up for', detail: 'a Cooking Class in Marrakech',
    icon: <ChefHat className="h-3.5 w-3.5" />, timeAgo: '18 min ago',
    category: 'food',
  },
  {
    id: 7, avatar: 'K', name: 'Keiko', location: 'Tokyo',
    action: 'just booked', detail: 'a Photography Tour in Chefchaouen',
    icon: <Camera className="h-3.5 w-3.5" />, timeAgo: '22 min ago',
    category: 'photography',
  },
  {
    id: 8, avatar: 'R', name: 'Rosa', location: 'Madrid',
    action: 'just booked', detail: 'a Sahara Glamping experience',
    icon: <Plane className="h-3.5 w-3.5" />, timeAgo: '25 min ago',
    category: 'desert',
  },
];

const avatarColors = [
  '#A0522D', '#C4960C', '#2D6A4F', '#1A1814',
  '#8B4513', '#B8860B', '#3D5A80', '#6B4226',
];

// Map page paths to notification categories for context-aware suggestions
function getPageCategory(pathname: string): string {
  if (pathname.includes('desert') || pathname.includes('sahara') || pathname.includes('merzouga')) return 'desert';
  if (pathname.includes('food') || pathname.includes('cuisine') || pathname.includes('cooking') || pathname.includes('restaurant')) return 'food';
  if (pathname.includes('trek') || pathname.includes('atlas') || pathname.includes('mountain') || pathname.includes('climbing')) return 'trekking';
  if (pathname.includes('cities') || pathname.includes('marrakech') || pathname.includes('fes') || pathname.includes('chefchaouen')) return 'cities';
  if (pathname.includes('accommod') || pathname.includes('riad') || pathname.includes('hotel')) return 'accommodations';
  if (pathname.includes('photo') || pathname.includes('gallery')) return 'photography';
  return 'general';
}

export default function SocialProof() {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const shownCount = useRef(0);
  const hasScrolled = useRef(false);
  const pathname = usePathname();

  // Check if user dismissed notifications in last 24 hours
  useEffect(() => {
    try {
      const dismissedAt = localStorage.getItem('socialproof_dismissed');
      if (dismissedAt) {
        const elapsed = Date.now() - parseInt(dismissedAt, 10);
        if (elapsed < 24 * 60 * 60 * 1000) {
          setIsDismissed(true);
        }
      }
    } catch {
      // localStorage not available
    }
  }, []);

  // Track meaningful scroll engagement (scrolled past 30% of page)
  useEffect(() => {
    if (isDismissed) return;

    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPercent > 0.3) {
        hasScrolled.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  // Pick a contextually relevant notification
  const pickNotification = useCallback(() => {
    const category = getPageCategory(pathname);
    // Prefer notifications matching current page context
    const relevant = notifications.filter((n) => n.category === category);
    const pool = relevant.length > 0 ? relevant : notifications;
    return pool[Math.floor(Math.random() * pool.length)];
  }, [pathname]);

  // Smart notification scheduling
  useEffect(() => {
    if (isDismissed) return;

    // Max 3 notifications per session
    const MAX_NOTIFICATIONS = 3;
    // Long initial delay - let users engage first
    const INITIAL_DELAY = 25000; // 25 seconds
    // Between notifications - very generous spacing
    const BETWEEN_DELAY = 45000; // 45 seconds
    // How long each notification stays visible
    const DISPLAY_DURATION = 6000; // 6 seconds

    const scheduleNext = () => {
      if (shownCount.current >= MAX_NOTIFICATIONS) return;

      const delay = shownCount.current === 0 ? INITIAL_DELAY : BETWEEN_DELAY;

      const timer = setTimeout(() => {
        // Only show if user has scrolled (engaged with content)
        if (!hasScrolled.current && shownCount.current === 0) {
          // User hasn't scrolled yet, wait and retry
          const retryTimer = setTimeout(scheduleNext, 10000);
          return () => clearTimeout(retryTimer);
        }

        const notification = pickNotification();
        setCurrentNotification(notification);
        setIsVisible(true);
        shownCount.current += 1;

        // Auto-hide after display duration
        const hideTimer = setTimeout(() => {
          setIsVisible(false);
          // Schedule next after hiding
          setTimeout(scheduleNext, 2000);
        }, DISPLAY_DURATION);

        return () => clearTimeout(hideTimer);
      }, delay);

      return () => clearTimeout(timer);
    };

    const cleanup = scheduleNext();
    return () => {
      if (cleanup) cleanup();
    };
  }, [isDismissed, pickNotification]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    try {
      localStorage.setItem('socialproof_dismissed', Date.now().toString());
    } catch {
      // localStorage not available
    }
  };

  if (!currentNotification) return null;

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          initial={{ opacity: 0, x: -40, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -30, y: 10 }}
          transition={{
            type: 'spring',
            damping: 30,
            stiffness: 200,
            duration: 0.6,
          }}
          className="fixed bottom-6 left-6 z-[var(--z-toast)] max-w-[340px]"
          role="status"
          aria-live="polite"
        >
          <div
            className="relative overflow-hidden rounded-xl border shadow-lg backdrop-blur-sm"
            style={{
              background: 'rgba(255, 255, 255, 0.97)',
              borderColor: 'rgba(160, 82, 45, 0.12)',
              boxShadow: '0 8px 32px rgba(26, 24, 20, 0.1), 0 2px 8px rgba(26, 24, 20, 0.06)',
            }}
          >
            {/* Subtle Moroccan accent top border */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{
                background:
                  'linear-gradient(90deg, #A0522D, #C4960C, #A0522D)',
              }}
            />

            <div className="flex items-start gap-3 p-4 pr-9">
              {/* Avatar */}
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
                style={{ backgroundColor: avatarColors[currentNotification.id % avatarColors.length] }}
              >
                {currentNotification.avatar}
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <p className="text-sm leading-snug" style={{ color: '#1A1814' }}>
                  <span className="font-semibold">{currentNotification.name}</span>
                  <span className="mx-1" style={{ color: '#1A1814', opacity: 0.5 }}>from</span>
                  <span className="font-medium">{currentNotification.location}</span>
                  <span className="mx-1" style={{ color: '#1A1814', opacity: 0.5 }}>{currentNotification.action}</span>
                  <span className="font-medium" style={{ color: '#A0522D' }}>
                    {currentNotification.detail}
                  </span>
                </p>

                <div className="mt-1.5 flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 text-xs" style={{ color: '#A0522D' }}>
                    {currentNotification.icon}
                  </span>
                  <span className="text-xs" style={{ color: '#1A1814', opacity: 0.4 }}>
                    {currentNotification.timeAgo}
                  </span>
                </div>
              </div>
            </div>

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="absolute top-2.5 right-2.5 flex h-6 w-6 items-center justify-center rounded-full transition-colors cursor-pointer"
              style={{ color: '#1A1814', opacity: 0.3 }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.3'; }}
              aria-label="Dismiss notification"
            >
              <X className="h-3.5 w-3.5" />
            </button>

            {/* Gentle progress bar */}
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 6, ease: 'linear' }}
              className="h-[1.5px] origin-left"
              style={{
                background: 'linear-gradient(90deg, #A0522D, #C4960C)',
                opacity: 0.4,
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
