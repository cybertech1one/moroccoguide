import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Globe,
  Heart,
  Shield,
  Users,
  MapPin,
  Award,
  BookOpen,
  Mail,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About CityGuide | Our Mission to Share Morocco with the World',
  description:
    'Learn about CityGuide, the most comprehensive Morocco tourism directory. Our mission, team, and commitment to authentic travel experiences.',
  openGraph: {
    title: 'About CityGuide',
    description: 'The story behind Morocco\'s most comprehensive travel guide.',
    url: 'https://citytoursmorocco.com/about',
  },
};

const values = [
  {
    icon: Heart,
    title: 'Authenticity First',
    description:
      'Every listing, tip, and recommendation comes from genuine local knowledge. We partner with Moroccan experts who live and breathe their cities.',
  },
  {
    icon: Shield,
    title: 'Verified & Trusted',
    description:
      'Our team verifies listings, checks reviews, and ensures the information you find is accurate and up-to-date. No pay-to-play rankings.',
  },
  {
    icon: Users,
    title: 'Community-Driven',
    description:
      'CityGuide is built by travelers for travelers. Contributions from our community of 50,000+ members keep our content fresh and relevant.',
  },
  {
    icon: Globe,
    title: 'Responsible Tourism',
    description:
      'We promote sustainable travel practices, support local businesses, and encourage respectful cultural exchange between visitors and hosts.',
  },
];

const stats = [
  { value: '50+', label: 'Cities Covered' },
  { value: '1,000+', label: 'Attractions Listed' },
  { value: '500+', label: 'Verified Businesses' },
  { value: '50,000+', label: 'Monthly Visitors' },
];

const teamMembers = [
  {
    name: 'Youssef Amrani',
    role: 'Founder & Editor-in-Chief',
    bio: 'Born in Fes, educated in Paris. 15 years in travel journalism covering North Africa and the Mediterranean.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400',
  },
  {
    name: 'Leila Benani',
    role: 'Head of Content',
    bio: 'Marrakech native and former Lonely Planet contributor. Speaks Arabic, French, English, and Amazigh.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400',
  },
  {
    name: 'Driss Tazi',
    role: 'Lead Developer',
    bio: 'Full-stack engineer from Casablanca. Built tourism platforms for 3 African countries before joining CityGuide.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400',
  },
  {
    name: 'Amina El-Ouafi',
    role: 'Partnerships Manager',
    bio: 'Former hotel manager turned tourism advocate. Connects CityGuide with Morocco\'s best local businesses.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=2800)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">About</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            About CityGuide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            We are building the most comprehensive, authentic, and beautiful guide to the Kingdom of Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Mission */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Our Mission
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is one of the world&apos;s most captivating destinations &mdash; a place where ancient medinas meet modern
                cosmopolitan cities, where the Sahara desert gives way to snow-capped mountains, and where the warmth of
                Moroccan hospitality turns first-time visitors into lifelong devotees.
              </p>
              <p>
                Yet finding reliable, comprehensive, and up-to-date information about Morocco has always been a challenge.
                Guidebooks go out of date. Travel blogs cover only the highlights. Review sites lack local context. CityGuide
                was created to solve this problem.
              </p>
              <p>
                We are building a living encyclopedia of Moroccan tourism &mdash; covering every city, every attraction, every
                riad, every restaurant, every hidden gem. Our goal is to be the single resource that any traveler needs to
                plan, book, and enjoy the perfect Moroccan experience. From the first-time visitor wondering where to start,
                to the seasoned Morocco lover seeking the road less traveled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 gradient-moroccan">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card-moroccan p-8">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <value.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{value.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            The Team
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A passionate team of Moroccan locals, travel experts, and technologists dedicated to sharing Morocco with the world.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="card-moroccan overflow-hidden text-center">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[var(--text-primary)]">{member.name}</h3>
                  <p className="text-sm text-[var(--color-primary)] font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-[var(--text-secondary)]">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            What We Cover
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: MapPin, label: '50+ Cities', desc: 'From Tangier to Dakhla' },
              { icon: Award, label: 'Top Attractions', desc: 'Monuments, medinas, nature' },
              { icon: BookOpen, label: 'Travel Tips', desc: 'Visa, money, safety, culture' },
              { icon: Users, label: 'Local Guides', desc: 'Certified professionals' },
              { icon: Heart, label: 'Activities', desc: 'Adventure, wellness, food' },
              { icon: Globe, label: 'Events', desc: 'Festivals, moussems, music' },
              { icon: Shield, label: 'Verified Hotels', desc: 'Riads, hotels, hostels' },
              { icon: Mail, label: 'Planning Tools', desc: 'Planner, budget, maps' },
            ].map((item) => (
              <div key={item.label} className="card-moroccan p-5 text-center">
                <item.icon className="w-6 h-6 text-[var(--color-primary)] mx-auto mb-2" />
                <h3 className="font-bold text-sm text-[var(--text-primary)]">{item.label}</h3>
                <p className="text-xs text-[var(--text-muted)] mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Start Exploring Morocco
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Whether you are planning your first visit or your tenth, CityGuide has everything you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Cities
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
