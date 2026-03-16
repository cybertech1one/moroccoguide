'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  FileText,
  Coins,
  Shield,
  Backpack,
  Bus,
  Heart,
  Sun,
  Stethoscope,
  ArrowRight,
  ArrowRightLeft,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface TravelTip {
  icon: typeof FileText;
  title: string;
  summary: string;
  link: string;
  color: string;
}

const TIPS: TravelTip[] = [
  {
    icon: FileText,
    title: 'Visa & Entry',
    summary:
      'Citizens of 69 countries can enter Morocco visa-free for up to 90 days, including the US, UK, EU, Canada, and Australia. Your passport must be valid for at least 6 months.',
    link: '/tips/visa-entry',
    color: 'var(--color-secondary)',
  },
  {
    icon: Coins,
    title: 'Money & Currency',
    summary:
      'The Moroccan Dirham (MAD) is the official currency. ATMs are widely available in cities. Credit cards accepted at major hotels and restaurants. Always carry cash for souks.',
    link: '/tips/money-currency',
    color: 'var(--color-accent)',
  },
  {
    icon: Shield,
    title: 'Safety Tips',
    summary:
      'Morocco is generally safe for tourists. Stay alert in crowded medinas, use licensed guides, and keep valuables secure. Avoid unmarked taxis and always agree on fares beforehand.',
    link: '/tips/safety',
    color: 'var(--color-green)',
  },
  {
    icon: Backpack,
    title: 'What to Pack',
    summary:
      'Pack modest clothing that covers shoulders and knees (especially for women visiting rural areas). Bring comfortable walking shoes for cobbled medinas and sunscreen for the desert.',
    link: '/tips/packing',
    color: 'var(--color-primary)',
  },
  {
    icon: Bus,
    title: 'Getting Around',
    summary:
      'Morocco has excellent train connections (ONCF) between major cities. The Al Boraq high-speed train links Tangier to Casablanca in 2 hours. CTM buses serve smaller towns.',
    link: '/tips/transport',
    color: 'var(--color-secondary)',
  },
  {
    icon: Heart,
    title: 'Culture & Etiquette',
    summary:
      'Greet with "As-salaam alaikum." Remove shoes when entering homes. Use your right hand for eating. Haggling is expected in souks. Ask permission before photographing people.',
    link: '/tips/culture-etiquette',
    color: 'var(--color-primary)',
  },
  {
    icon: Sun,
    title: 'Best Time to Visit',
    summary:
      'Spring (March-May) and Autumn (September-November) offer ideal weather. Summers are scorching in Marrakech and the desert. Winter is mild on the coast but cold in the mountains.',
    link: '/tips/best-time',
    color: 'var(--color-accent)',
  },
  {
    icon: Stethoscope,
    title: 'Health & Clinics',
    summary:
      'No mandatory vaccinations for Morocco. Drink bottled water. Private clinics in major cities offer quality healthcare. Travel insurance is highly recommended for all visitors.',
    link: '/tips/health',
    color: 'var(--color-green)',
  },
];

export default function TravelTipsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [madAmount, setMadAmount] = useState(100);

  const usdAmount = (madAmount / 10).toFixed(2);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24"
      aria-label="Essential travel tips for Morocco"
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
            Essential Travel Tips
          </h2>
          <div className="arabesque-divider mx-auto max-w-md">
            <span className="text-lg">&#9670;</span>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
            Everything you need to know before visiting Morocco -- from visa
            requirements to cultural etiquette.
          </p>
        </motion.div>

        {/* Tips Grid */}
        <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TIPS.map((tip, i) => {
            const Icon = tip.icon;
            return (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.07, duration: 0.5 }}
              >
                <Link
                  href={tip.link}
                  className="card-moroccan group flex h-full flex-col p-5"
                >
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `color-mix(in srgb, ${tip.color} 12%, transparent)` }}
                  >
                    <Icon
                      className="h-6 w-6"
                      style={{ color: tip.color }}
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">
                    {tip.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {tip.summary}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] transition-colors group-hover:underline">
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Currency Converter Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mx-auto max-w-lg rounded-2xl border border-[var(--color-accent-200)] bg-[var(--color-accent-50)] p-6"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-white">
              <ArrowRightLeft className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-[var(--text-primary)]">
                Quick Currency Converter
              </h4>
              <p className="text-sm text-[var(--text-muted)]">
                1 USD &#8776; 10 MAD (Moroccan Dirham)
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <label
                htmlFor="madInput"
                className="mb-1 block text-xs font-medium text-[var(--text-muted)]"
              >
                MAD
              </label>
              <input
                id="madInput"
                type="number"
                value={madAmount}
                onChange={(e) => setMadAmount(Number(e.target.value) || 0)}
                className="w-full rounded-lg border border-[var(--border)] bg-white px-3 py-2 text-lg font-semibold text-[var(--text-primary)] outline-none focus:border-[var(--color-accent)]"
              />
            </div>
            <ArrowRightLeft className="mt-5 h-5 w-5 shrink-0 text-[var(--text-muted)]" />
            <div className="flex-1">
              <label className="mb-1 block text-xs font-medium text-[var(--text-muted)]">
                USD
              </label>
              <div className="flex w-full items-center rounded-lg border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-2 text-lg font-semibold text-[var(--text-primary)]">
                ${usdAmount}
              </div>
            </div>
          </div>
          <Link
            href="/tools/currency-converter"
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent-dark)] hover:underline"
          >
            Full converter with more currencies
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
