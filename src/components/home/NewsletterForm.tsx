'use client';

import { useState } from 'react';
import { Mail, ArrowRight, Check, Loader2 } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
      <label htmlFor="newsletter-email-home" className="sr-only">
        Email address
      </label>
      <div className="flex-1 relative">
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'rgba(255,255,255,0.4)' }} />
        <input
          id="newsletter-email-home"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          disabled={status === 'loading'}
          className="w-full pl-12 pr-5 py-4 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all backdrop-blur-sm placeholder:text-white/40"
          style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderColor: 'rgba(255,255,255,0.15)',
            color: '#FFFFFF',
          }}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:brightness-110 flex-shrink-0 cursor-pointer disabled:opacity-70"
        style={{
          background: status === 'success'
            ? 'linear-gradient(135deg, #1E6B4E 0%, #2D8B66 100%)'
            : 'linear-gradient(135deg, #C4960C 0%, #D4A843 100%)',
          color: status === 'success' ? '#FFFFFF' : '#1A1814',
        }}
      >
        {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
        {status === 'success' && <Check className="w-4 h-4" />}
        {status === 'idle' && <ArrowRight className="w-4 h-4" />}
        <span>
          {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Welcome aboard!' : 'Subscribe'}
        </span>
      </button>
    </form>
  );
}
