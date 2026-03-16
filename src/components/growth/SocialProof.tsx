'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Heart, Users, Star, Plane } from 'lucide-react';

interface Notification {
  id: number;
  avatar: string;
  name: string;
  location: string;
  action: string;
  detail: string;
  icon: React.ReactNode;
  timeAgo: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    avatar: 'A',
    name: 'Ahmed',
    location: 'Casablanca',
    action: 'just booked',
    detail: 'a Desert Safari tour',
    icon: <Plane className="h-3.5 w-3.5" />,
    timeAgo: '2 min ago',
  },
  {
    id: 2,
    avatar: 'S',
    name: 'Sarah',
    location: 'London',
    action: 'saved',
    detail: 'Marrakech to her wishlist',
    icon: <Heart className="h-3.5 w-3.5" />,
    timeAgo: '5 min ago',
  },
  {
    id: 3,
    avatar: '',
    name: '',
    location: '',
    action: '',
    detail: '1,247 travelers are planning Morocco trips right now',
    icon: <Users className="h-3.5 w-3.5" />,
    timeAgo: 'Live',
  },
  {
    id: 4,
    avatar: 'M',
    name: 'Marie',
    location: 'Paris',
    action: 'just reviewed',
    detail: 'Riad Fes with 5 stars',
    icon: <Star className="h-3.5 w-3.5" />,
    timeAgo: '8 min ago',
  },
  {
    id: 5,
    avatar: 'J',
    name: 'James',
    location: 'New York',
    action: 'just booked',
    detail: 'Atlas Mountains trek',
    icon: <MapPin className="h-3.5 w-3.5" />,
    timeAgo: '12 min ago',
  },
  {
    id: 6,
    avatar: 'L',
    name: 'Leila',
    location: 'Dubai',
    action: 'saved',
    detail: 'Chefchaouen Blue City guide',
    icon: <Heart className="h-3.5 w-3.5" />,
    timeAgo: '15 min ago',
  },
  {
    id: 7,
    avatar: 'T',
    name: 'Tom',
    location: 'Sydney',
    action: 'just booked',
    detail: 'Fes Medina walking tour',
    icon: <Plane className="h-3.5 w-3.5" />,
    timeAgo: '18 min ago',
  },
  {
    id: 8,
    avatar: '',
    name: '',
    location: '',
    action: '',
    detail: '3,892 guides downloaded this week',
    icon: <Users className="h-3.5 w-3.5" />,
    timeAgo: 'This week',
  },
];

const avatarColors = [
  'bg-[var(--color-primary)]',
  'bg-[var(--color-secondary)]',
  'bg-[var(--color-accent-dark)]',
  'bg-[var(--color-green)]',
];

export default function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const showNext = useCallback(() => {
    setIsVisible(true);
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);
    return hideTimer;
  }, []);

  useEffect(() => {
    if (isDismissed) return;

    // Initial delay before first notification
    const initialDelay = setTimeout(() => {
      showNext();
    }, 3000);

    return () => clearTimeout(initialDelay);
  }, [isDismissed, showNext]);

  useEffect(() => {
    if (isDismissed) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notifications.length);
      showNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isDismissed, showNext]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  const notification = notifications[currentIndex];
  const isStatNotification = !notification.name;

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          initial={{ opacity: 0, x: -80, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -80, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-6 left-6 z-[var(--z-toast)] max-w-[340px]"
          role="status"
          aria-live="polite"
        >
          <div
            className="relative overflow-hidden rounded-xl border border-[var(--border-light)] shadow-xl"
            style={{ background: 'var(--surface)' }}
          >
            {/* Moroccan accent top border */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{
                background:
                  'linear-gradient(90deg, var(--color-primary), var(--color-accent), var(--color-secondary))',
              }}
            />

            <div className="flex items-start gap-3 p-3.5 pr-9">
              {/* Avatar or icon */}
              {isStatNotification ? (
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                  style={{
                    background:
                      'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                  }}
                >
                  <Users className="h-4.5 w-4.5 text-white" />
                </div>
              ) : (
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${avatarColors[currentIndex % avatarColors.length]}`}
                >
                  {notification.avatar}
                </div>
              )}

              {/* Content */}
              <div className="min-w-0 flex-1">
                {isStatNotification ? (
                  <p className="text-sm font-medium leading-snug" style={{ color: 'var(--text-primary)' }}>
                    {notification.detail}
                  </p>
                ) : (
                  <p className="text-sm leading-snug" style={{ color: 'var(--text-primary)' }}>
                    <span className="font-semibold">{notification.name}</span>
                    <span className="mx-1" style={{ color: 'var(--text-muted)' }}>from</span>
                    <span className="font-medium">{notification.location}</span>
                    <span className="mx-1" style={{ color: 'var(--text-muted)' }}>{notification.action}</span>
                    <span className="font-medium" style={{ color: 'var(--color-primary)' }}>
                      {notification.detail}
                    </span>
                  </p>
                )}

                <div className="mt-1.5 flex items-center gap-1.5">
                  <span
                    className="inline-flex items-center gap-1 text-xs"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {notification.icon}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {notification.timeAgo}
                  </span>
                  {notification.timeAgo === 'Live' && (
                    <span className="relative flex h-2 w-2">
                      <span
                        className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                        style={{ background: 'var(--color-green)' }}
                      />
                      <span
                        className="relative inline-flex h-2 w-2 rounded-full"
                        style={{ background: 'var(--color-green)' }}
                      />
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="absolute top-2.5 right-2.5 flex h-6 w-6 items-center justify-center rounded-full transition-colors hover:bg-[var(--surface-muted)]"
              style={{ color: 'var(--text-muted)' }}
              aria-label="Dismiss notification"
            >
              <X className="h-3.5 w-3.5" />
            </button>

            {/* Progress bar */}
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 4, ease: 'linear' }}
              className="h-[2px] origin-left"
              style={{
                background:
                  'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
