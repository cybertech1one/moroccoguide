'use client';

import { Mail, Send } from 'lucide-react';

export default function NewsletterForm() {
  return (
    <div className="rounded-2xl border border-[var(--border-light)] bg-[var(--surface)] p-6 sm:p-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="max-w-md">
          <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-2">
            Get Morocco in Your Inbox
          </h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Weekly travel tips, hidden gems, exclusive deals, and inspiration
            for your next Moroccan adventure. Join 50,000+ travelers.
          </p>
        </div>
        <form
          className="flex w-full max-w-md gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] py-3 pl-10 pr-4 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-200)] transition-all"
              aria-label="Email address for newsletter"
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98]"
            style={{
              background:
                'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)',
            }}
          >
            <Send className="h-4 w-4" />
            <span className="hidden sm:inline">Subscribe</span>
          </button>
        </form>
      </div>
    </div>
  );
}
