'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Shield, ChevronDown, ChevronUp, X } from 'lucide-react';

type ConsentPreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
};

const defaultPreferences: ConsentPreferences = {
  necessary: true, // Always on
  analytics: false,
  marketing: false,
  personalization: false,
};

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] =
    useState<ConsentPreferences>(defaultPreferences);

  useEffect(() => {
    const stored = localStorage.getItem('cookieConsent');
    if (!stored) {
      // Show banner after a brief delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (prefs: ConsentPreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    const allAccepted: ConsentPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true,
    };
    setPreferences(allAccepted);
    saveConsent(allAccepted);
  };

  const handleReject = () => {
    saveConsent(defaultPreferences);
  };

  const handleSaveCustom = () => {
    saveConsent(preferences);
  };

  const togglePreference = (key: keyof ConsentPreferences) => {
    if (key === 'necessary') return; // Cannot disable necessary cookies
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const cookieCategories = [
    {
      key: 'necessary' as const,
      label: 'Strictly Necessary',
      description:
        'Required for the site to function. Cannot be disabled.',
      locked: true,
    },
    {
      key: 'analytics' as const,
      label: 'Analytics',
      description:
        'Help us understand how visitors use our site to improve your experience.',
      locked: false,
    },
    {
      key: 'marketing' as const,
      label: 'Marketing',
      description:
        'Used to show relevant ads and measure campaign effectiveness.',
      locked: false,
    },
    {
      key: 'personalization' as const,
      label: 'Personalization',
      description:
        'Remember your preferences and provide personalized recommendations.',
      locked: false,
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="fixed right-0 bottom-0 left-0 z-[var(--z-toast)] p-4 md:p-6"
        >
          <div
            className="mx-auto max-w-4xl overflow-hidden rounded-2xl border shadow-2xl"
            style={{
              background: 'var(--surface)',
              borderColor: 'var(--border-light)',
            }}
          >
            {/* Moroccan accent border */}
            <div
              className="h-1"
              style={{
                background:
                  'repeating-linear-gradient(90deg, var(--color-primary) 0px, var(--color-primary) 8px, transparent 8px, transparent 12px, var(--color-accent) 12px, var(--color-accent) 20px, transparent 20px, transparent 24px, var(--color-secondary) 24px, var(--color-secondary) 32px, transparent 32px, transparent 36px)',
              }}
            />

            <div className="p-5 md:p-6">
              {/* Main content */}
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                {/* Icon and text */}
                <div className="flex flex-1 gap-4">
                  <div
                    className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl md:flex"
                    style={{
                      background:
                        'linear-gradient(135deg, var(--color-primary-50), var(--color-accent-50))',
                    }}
                  >
                    <Cookie
                      className="h-6 w-6"
                      style={{ color: 'var(--color-primary)' }}
                    />
                  </div>
                  <div>
                    <h3
                      className="mb-1.5 flex items-center gap-2 text-base font-semibold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      <Cookie
                        className="h-4 w-4 md:hidden"
                        style={{ color: 'var(--color-primary)' }}
                      />
                      We Value Your Privacy
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      We use cookies to enhance your browsing experience, serve
                      personalized travel recommendations, and analyze site
                      traffic. Your journey through Morocco starts with your
                      preferences.
                    </p>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex shrink-0 flex-col gap-2 sm:flex-row md:flex-col">
                  <button
                    onClick={handleAcceptAll}
                    className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90"
                    style={{
                      background:
                        'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
                    }}
                  >
                    Accept All
                  </button>
                  <button
                    onClick={handleReject}
                    className="rounded-xl border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--surface-muted)]"
                    style={{
                      borderColor: 'var(--border)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    Reject All
                  </button>
                  <button
                    onClick={() => setShowCustomize(!showCustomize)}
                    className="flex items-center justify-center gap-1.5 rounded-xl border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--surface-muted)]"
                    style={{
                      borderColor: 'var(--border)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    Customize
                    {showCustomize ? (
                      <ChevronUp className="h-3.5 w-3.5" />
                    ) : (
                      <ChevronDown className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Customization panel */}
              <AnimatePresence>
                {showCustomize && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="mt-5 rounded-xl border p-4"
                      style={{
                        borderColor: 'var(--border-light)',
                        background: 'var(--surface-muted)',
                      }}
                    >
                      <div className="mb-3 flex items-center gap-2">
                        <Shield
                          className="h-4 w-4"
                          style={{ color: 'var(--color-secondary)' }}
                        />
                        <h4
                          className="text-sm font-semibold"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          Cookie Preferences
                        </h4>
                      </div>

                      <div className="space-y-3">
                        {cookieCategories.map((category) => (
                          <div
                            key={category.key}
                            className="flex items-start justify-between gap-3 rounded-lg p-3"
                            style={{ background: 'var(--surface)' }}
                          >
                            <div className="min-w-0">
                              <p
                                className="text-sm font-medium"
                                style={{ color: 'var(--text-primary)' }}
                              >
                                {category.label}
                              </p>
                              <p
                                className="mt-0.5 text-xs"
                                style={{ color: 'var(--text-muted)' }}
                              >
                                {category.description}
                              </p>
                            </div>
                            {/* Toggle switch */}
                            <button
                              onClick={() => togglePreference(category.key)}
                              disabled={category.locked}
                              className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                                category.locked
                                  ? 'cursor-not-allowed opacity-60'
                                  : 'cursor-pointer'
                              }`}
                              style={{
                                background: preferences[category.key]
                                  ? 'var(--color-primary)'
                                  : 'var(--border)',
                              }}
                              role="switch"
                              aria-checked={preferences[category.key]}
                              aria-label={`Toggle ${category.label} cookies`}
                            >
                              <motion.div
                                layout
                                className="absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm"
                                style={{
                                  left: preferences[category.key]
                                    ? 'calc(100% - 1.375rem)'
                                    : '0.125rem',
                                }}
                                transition={{
                                  type: 'spring',
                                  stiffness: 500,
                                  damping: 30,
                                }}
                              />
                            </button>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 flex justify-end">
                        <button
                          onClick={handleSaveCustom}
                          className="rounded-xl px-5 py-2 text-sm font-semibold text-white transition-all hover:opacity-90"
                          style={{
                            background:
                              'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
                          }}
                        >
                          Save Preferences
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
