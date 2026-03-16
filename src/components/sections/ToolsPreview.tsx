'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  Calendar,
  Calculator,
  Plane,
  Map,
  DollarSign,
  Package,
  ArrowRight,
} from 'lucide-react';

interface ToolCard {
  icon: typeof Calendar;
  name: string;
  description: string;
  link: string;
  color: string;
  bgColor: string;
}

const TOOLS: ToolCard[] = [
  {
    icon: Calendar,
    name: 'Trip Planner',
    description: 'Build your custom Morocco itinerary day by day with local recommendations.',
    link: '/tools/trip-planner',
    color: 'var(--color-primary)',
    bgColor: 'var(--color-primary-50)',
  },
  {
    icon: Calculator,
    name: 'Budget Calculator',
    description: 'Estimate your travel costs based on your style -- backpacker to luxury.',
    link: '/tools/budget-calculator',
    color: 'var(--color-green)',
    bgColor: '#f0fdf4',
  },
  {
    icon: Plane,
    name: 'Flight Finder',
    description: 'Find the best flights to Morocco from your city with fare comparisons.',
    link: '/tools/flight-finder',
    color: 'var(--color-secondary)',
    bgColor: 'var(--color-secondary-50)',
  },
  {
    icon: Map,
    name: 'Interactive Map',
    description: 'Explore all destinations, attractions, and routes on a detailed map.',
    link: '/tools/map',
    color: 'var(--color-accent-dark)',
    bgColor: 'var(--color-accent-50)',
  },
  {
    icon: DollarSign,
    name: 'Currency Converter',
    description: 'Convert MAD to your currency with real-time exchange rates.',
    link: '/tools/currency-converter',
    color: 'var(--color-green)',
    bgColor: '#f0fdf4',
  },
  {
    icon: Package,
    name: 'Packing List',
    description: 'Get a personalized packing list based on your dates and destinations.',
    link: '/tools/packing-list',
    color: 'var(--color-primary)',
    bgColor: 'var(--color-primary-50)',
  },
];

export default function ToolsPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className="moroccan-pattern relative py-16 md:py-24"
      aria-label="Trip planning tools"
    >
      <div className="container-morocco relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-[var(--font-display)] text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">
            Plan Your Perfect Trip
          </h2>
          <div className="arabesque-divider mx-auto max-w-md">
            <span className="text-lg">&#9670;</span>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
            Free tools to help you plan, budget, and organize your Morocco
            adventure from start to finish.
          </p>
        </motion.div>

        {/* Tool Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
              >
                <Link
                  href={tool.link}
                  className="card-moroccan group flex h-full flex-col p-6"
                >
                  <div
                    className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110"
                    style={{ backgroundColor: tool.bgColor }}
                  >
                    <Icon
                      className="h-7 w-7"
                      style={{ color: tool.color }}
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">
                    {tool.name}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {tool.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] transition-colors">
                    Try Now
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
