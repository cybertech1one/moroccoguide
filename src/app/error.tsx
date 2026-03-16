'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Home,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Compass,
  ArrowLeft,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   Error Boundary Page
   Moroccan-themed error display with retry, navigation,
   and expandable developer details.
   ═══════════════════════════════════════════════════════════════ */

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);
  const isDev = process.env.NODE_ENV === 'development';

  useEffect(() => {
    console.error('[CityGuide Error]', error);
  }, [error]);

  const handleRetry = () => {
    setIsRetrying(true);
    // Brief visual feedback before reset
    setTimeout(() => {
      reset();
      setIsRetrying(false);
    }, 600);
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-16 md:py-24">
      <div className="max-w-xl mx-auto text-center">
        {/* ── Geometric Moroccan Error Icon ── */}
        <div className="mx-auto mb-8 w-24 h-24 relative" aria-hidden="true">
          {/* Outer rotating octagonal frame */}
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <defs>
              <linearGradient id="err-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--color-primary-100)" />
                <stop offset="100%" stopColor="var(--color-sand-200)" />
              </linearGradient>
            </defs>
            {/* Octagon background */}
            <polygon
              points="50,5 80,15 95,45 90,78 65,95 35,95 10,78 5,45 20,15"
              fill="url(#err-grad)"
              stroke="var(--color-primary-200)"
              strokeWidth="1"
            />
            {/* Inner diamond accent */}
            <rect
              x="36"
              y="36"
              width="28"
              height="28"
              rx="2"
              transform="rotate(45, 50, 50)"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="1"
              opacity="0.4"
            />
          </svg>
          {/* Icon centered on top of SVG */}
          <div className="absolute inset-0 flex items-center justify-center">
            <AlertTriangle
              size={32}
              className="text-[var(--color-primary)]"
            />
          </div>
        </div>

        {/* ── Error Label ── */}
        <p className="text-xs font-heading font-semibold tracking-[0.25em] uppercase text-[var(--color-accent)] mb-3">
          Unexpected Error
        </p>

        {/* ── Heading ── */}
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
          Something Went Wrong
        </h1>

        {/* ── Description ── */}
        <p className="text-base text-[var(--text-secondary)] mb-2 max-w-md mx-auto">
          We encountered an unexpected issue while loading this page.
        </p>
        <p className="text-sm text-[var(--text-muted)] mb-8 max-w-sm mx-auto leading-relaxed">
          This could be a temporary problem. Please try again, or navigate back
          to the homepage.
        </p>

        {/* ── Decorative Divider ── */}
        <div className="arabesque-divider mb-8 max-w-xs mx-auto">
          <Compass
            size={14}
            className="text-[var(--color-accent)] shrink-0"
            aria-hidden="true"
          />
        </div>

        {/* ── Action Buttons ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <button
            onClick={handleRetry}
            disabled={isRetrying}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-[var(--color-primary)] text-white font-heading font-semibold text-sm transition-all hover:bg-[var(--color-primary-dark)] hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <RefreshCw
              size={18}
              className={isRetrying ? 'animate-spin' : ''}
              aria-hidden="true"
            />
            {isRetrying ? 'Retrying...' : 'Try Again'}
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] font-heading font-semibold text-sm transition-all hover:border-[var(--color-primary-200)] hover:shadow-md focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
          >
            <Home size={18} aria-hidden="true" />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[var(--text-secondary)] font-heading font-medium text-sm transition-all hover:text-[var(--color-primary)] hover:bg-[var(--surface-muted)] cursor-pointer"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Go Back
          </button>
        </div>

        {/* ── Error Details (development only) ── */}
        {isDev && (
          <div className="text-left max-w-lg mx-auto">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="inline-flex items-center gap-1.5 text-xs font-heading font-medium text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors cursor-pointer mb-2"
            >
              {showDetails ? (
                <ChevronUp size={14} aria-hidden="true" />
              ) : (
                <ChevronDown size={14} aria-hidden="true" />
              )}
              {showDetails ? 'Hide' : 'Show'} Error Details
            </button>

            {showDetails && (
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] p-5 overflow-x-auto shadow-sm">
                <p className="text-xs font-mono text-[var(--color-secondary)] font-semibold mb-1">
                  {error.name}: {error.message}
                </p>
                {error.digest && (
                  <p className="text-xs font-mono text-[var(--text-muted)] mb-2">
                    Digest: {error.digest}
                  </p>
                )}
                {error.stack && (
                  <pre className="text-xs font-mono text-[var(--text-muted)] whitespace-pre-wrap break-words leading-relaxed mt-3 pt-3 border-t border-[var(--border-light)]">
                    {error.stack}
                  </pre>
                )}
              </div>
            )}
          </div>
        )}

        {/* ── Error ID for production reporting ── */}
        {!isDev && error.digest && (
          <p className="text-xs text-[var(--text-muted)] mt-6">
            Error reference:{' '}
            <code className="font-mono text-[var(--color-primary-400)] bg-[var(--surface-muted)] px-1.5 py-0.5 rounded">
              {error.digest}
            </code>
          </p>
        )}
      </div>
    </section>
  );
}
