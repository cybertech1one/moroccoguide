'use client';

import { useEffect } from 'react';

/* ═══════════════════════════════════════════════════════════════
   Global Error Boundary
   Root-level error handler that replaces the entire document.
   Must include <html> and <body> tags since the root layout
   is not rendered when this component catches an error.
   ═══════════════════════════════════════════════════════════════ */

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[CityGuide Global Error]', error);
  }, [error]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Something Went Wrong | CityGuide</title>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --charcoal: #1A1814;
                --cinnamon: #A0522D;
                --gold: #C4960C;
                --sand-bg: #FAF7F2;
                --sand-100: #F5F1E8;
                --sand-200: #EAE3D4;
                --text-primary: #1A1814;
                --text-secondary: #4A4740;
                --text-muted: #8A847A;
              }
              @media (prefers-color-scheme: dark) {
                :root {
                  --sand-bg: #12110E;
                  --sand-100: #1A1814;
                  --sand-200: #2C2A26;
                  --text-primary: #E8E4DC;
                  --text-secondary: #A8A49C;
                  --text-muted: #7A756C;
                }
              }
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body {
                font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                background: var(--sand-bg);
                color: var(--text-primary);
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
              .container {
                max-width: 32rem;
                padding: 2rem 1.5rem;
                text-align: center;
              }
              .icon-wrap {
                margin: 0 auto 2rem;
                width: 5rem;
                height: 5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: var(--sand-100);
                border: 1px solid var(--sand-200);
              }
              .icon-wrap svg {
                width: 2rem;
                height: 2rem;
                color: var(--cinnamon);
              }
              .label {
                font-size: 0.6875rem;
                font-weight: 600;
                letter-spacing: 0.25em;
                text-transform: uppercase;
                color: var(--gold);
                margin-bottom: 0.75rem;
              }
              h1 {
                font-family: 'Playfair Display', Georgia, serif;
                font-size: 2rem;
                font-weight: 700;
                color: var(--text-primary);
                margin-bottom: 0.75rem;
                line-height: 1.2;
              }
              .desc {
                font-size: 0.9375rem;
                color: var(--text-secondary);
                line-height: 1.6;
                margin-bottom: 0.5rem;
              }
              .sub-desc {
                font-size: 0.8125rem;
                color: var(--text-muted);
                line-height: 1.6;
                margin-bottom: 2rem;
              }
              .divider {
                height: 3px;
                max-width: 10rem;
                margin: 0 auto 2rem;
                background: repeating-linear-gradient(
                  90deg,
                  var(--charcoal) 0px, var(--charcoal) 6px,
                  transparent 6px, transparent 9px,
                  var(--gold) 9px, var(--gold) 15px,
                  transparent 15px, transparent 18px,
                  var(--cinnamon) 18px, var(--cinnamon) 24px,
                  transparent 24px, transparent 27px
                );
              }
              .actions {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.75rem;
                flex-wrap: wrap;
              }
              .btn {
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                padding: 0.75rem 1.75rem;
                border-radius: 0.5rem;
                font-size: 0.875rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s ease;
                text-decoration: none;
                border: none;
              }
              .btn-primary {
                background: var(--charcoal);
                color: #fff;
              }
              .btn-primary:hover {
                background: #0F0E0C;
                box-shadow: 0 4px 16px rgba(26, 24, 20, 0.25);
                transform: translateY(-1px);
              }
              .btn-secondary {
                background: transparent;
                color: var(--text-primary);
                border: 1px solid var(--sand-200);
              }
              .btn-secondary:hover {
                border-color: var(--charcoal);
                box-shadow: 0 2px 8px rgba(26, 24, 20, 0.1);
                transform: translateY(-1px);
              }
              .digest {
                margin-top: 1.5rem;
                font-size: 0.6875rem;
                color: var(--text-muted);
              }
              .digest code {
                font-family: 'JetBrains Mono', 'Fira Code', monospace;
                background: var(--sand-100);
                padding: 0.125rem 0.375rem;
                border-radius: 0.25rem;
                font-size: 0.625rem;
              }
              .btn svg {
                width: 1.125rem;
                height: 1.125rem;
              }
            `,
          }}
        />
      </head>
      <body>
        <div className="container">
          {/* Icon */}
          <div className="icon-wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>
          </div>

          {/* Label */}
          <p className="label">Critical Error</p>

          {/* Heading */}
          <h1>Something Went Wrong</h1>

          {/* Description */}
          <p className="desc">
            An unexpected error prevented this page from loading.
          </p>
          <p className="sub-desc">
            This is likely a temporary issue. Please try refreshing, or return to
            the homepage to continue exploring Morocco.
          </p>

          {/* Zellige divider */}
          <div className="divider" />

          {/* Actions */}
          <div className="actions">
            <button onClick={reset} className="btn btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
                <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                <path d="M16 16h5v5" />
              </svg>
              Try Again
            </button>

            <a href="/" className="btn btn-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              Go Home
            </a>
          </div>

          {/* Error digest */}
          {error.digest && (
            <p className="digest">
              Error reference: <code>{error.digest}</code>
            </p>
          )}
        </div>
      </body>
    </html>
  );
}
