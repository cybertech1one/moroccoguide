/* ═══════════════════════════════════════════════════════════════
   Global Loading State
   Moroccan geometric-inspired spinner with branded skeleton
   placeholders for content areas.
   ═══════════════════════════════════════════════════════════════ */

export default function Loading() {
  return (
    <div
      className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16 md:py-24"
      role="status"
      aria-label="Loading page content"
    >
      {/* ── Moroccan Geometric Spinner ── */}
      <div className="relative w-24 h-24 mb-10" aria-hidden="true">
        {/* Outer ring -- slow rotation */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full animate-spin"
          style={{ animationDuration: '3s' }}
          fill="none"
        >
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke="var(--border-light)"
            strokeWidth="2"
          />
          <path
            d="M50 4 A46 46 0 0 1 96 50"
            stroke="var(--color-primary)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Small diamond markers at cardinal points */}
          <rect x="48" y="2" width="4" height="4" rx="0.5" fill="var(--color-primary)" transform="rotate(45, 50, 4)" />
        </svg>

        {/* Middle ring -- counter-rotation */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
          style={{ animation: 'spin 2s linear infinite reverse' }}
          fill="none"
        >
          <circle
            cx="50"
            cy="50"
            r="34"
            stroke="var(--border-light)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
          />
          <path
            d="M50 16 A34 34 0 0 1 84 50"
            stroke="var(--color-accent)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* Inner zellige star -- pulsing */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 40 40"
            className="w-10 h-10 animate-pulse-glow"
            fill="none"
          >
            {/* Eight-pointed star (khatam) */}
            <path
              d="M20 4 L23 15 L34 12 L25 20 L34 28 L23 25 L20 36 L17 25 L6 28 L15 20 L6 12 L17 15 Z"
              fill="var(--color-primary)"
              opacity="0.9"
            />
            {/* Inner diamond */}
            <rect
              x="15"
              y="15"
              width="10"
              height="10"
              rx="1"
              transform="rotate(45, 20, 20)"
              fill="var(--color-accent)"
              opacity="0.7"
            />
          </svg>
        </div>
      </div>

      {/* ── Loading Text ── */}
      <p className="font-heading text-sm font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-10">
        Discovering...
      </p>

      {/* ── Skeleton Loading Pattern ── */}
      <div className="w-full max-w-4xl space-y-8">
        {/* Hero skeleton */}
        <div className="w-full h-52 rounded-2xl animate-shimmer" />

        {/* Title + subtitle skeleton */}
        <div className="space-y-3 max-w-2xl">
          <div className="h-7 w-2/3 rounded-lg animate-shimmer" />
          <div className="h-4 w-full rounded-lg animate-shimmer" />
          <div className="h-4 w-4/5 rounded-lg animate-shimmer" />
        </div>

        {/* Decorative zellige divider skeleton */}
        <div className="zellige-border max-w-xs opacity-30" />

        {/* Card grid skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-[var(--border-light)] bg-[var(--surface)] overflow-hidden"
            >
              <div className="aspect-video w-full animate-shimmer" />
              <div className="p-4 space-y-3">
                <div className="h-4 w-3/4 rounded animate-shimmer" />
                <div className="h-3 w-full rounded animate-shimmer" />
                <div className="h-3 w-5/6 rounded animate-shimmer" />
                <div className="flex items-center justify-between pt-1">
                  <div className="h-4 w-20 rounded animate-shimmer" />
                  <div className="h-4 w-14 rounded animate-shimmer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Screen reader text */}
      <span className="sr-only">Loading page content, please wait...</span>
    </div>
  );
}
