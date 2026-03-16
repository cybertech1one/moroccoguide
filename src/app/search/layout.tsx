import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search | Morocco Travel Guide - Find Cities, Tours, Hotels & More',
  description:
    'Search across 50+ Moroccan cities, attractions, tours, restaurants, and hotels. Find everything you need for your Morocco adventure.',
  openGraph: {
    title: 'Search Morocco Travel Guide',
    description:
      'Find cities, attractions, tours, restaurants, and hotels across Morocco.',
  },
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
