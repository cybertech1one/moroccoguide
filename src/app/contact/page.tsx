import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  HelpCircle,
  Globe,
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | CityGuide Morocco - Get in Touch',
  description:
    'Have a question about traveling in Morocco? Contact the CityGuide team for travel advice, partnership inquiries, or general support. Based in Marrakech, Morocco.',
  openGraph: {
    title: 'Contact CityGuide Morocco',
    description:
      'Get in touch with the CityGuide team for travel advice, partnerships, or support.',
    url: 'https://citytoursmorocco.com/contact',
  },
};

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'hello@citytoursmorocco.com',
    description: 'We typically respond within 24 hours on business days.',
    href: 'mailto:hello@citytoursmorocco.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+212 5XX-XXXXXX',
    description: 'Available during office hours, Monday through Friday.',
    href: 'tel:+2125XXXXXXXX',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Marrakech, Morocco',
    description: 'Our office is located in the heart of the Gueliz district.',
    href: '#map',
  },
];

const officeHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM (GMT+1)' },
  { day: 'Saturday', hours: '10:00 AM - 2:00 PM (GMT+1)' },
  { day: 'Sunday', hours: 'Closed' },
];

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/citytoursmorocco.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/citytoursmorocco.com' },
  { icon: Twitter, label: 'Twitter / X', href: 'https://x.com/cityguidema' },
  { icon: Globe, label: 'Blog', href: 'https://citytoursmorocco.com/blog' },
];

const faqs = [
  {
    question: 'I need help planning my Morocco trip. Can you help?',
    answer:
      'Absolutely! Check out our Trip Planner tool for a guided experience. For personalized recommendations, send us an email with your travel dates and interests, and our team will get back to you with suggestions.',
  },
  {
    question: 'How can I list my business on CityGuide?',
    answer:
      'We welcome Moroccan tourism businesses to join our directory. Send us an email at hello@citytoursmorocco.com with your business name, location, category, and a brief description. Our partnerships team will review your submission within 5 business days.',
  },
  {
    question: 'I found incorrect information on a listing. How do I report it?',
    answer:
      'We appreciate your help in keeping CityGuide accurate! Please email us with the listing URL and a description of the error. Our content team will investigate and update the information promptly.',
  },
  {
    question: 'Do you offer sponsored content or advertising?',
    answer:
      'We offer several partnership opportunities including featured listings, sponsored content, and display advertising. Contact our partnerships team at hello@citytoursmorocco.com for our media kit and rate card.',
  },
  {
    question: 'Can I contribute content or become a local guide?',
    answer:
      'We love working with passionate travelers and locals! If you are interested in contributing articles, photography, or becoming a verified local guide, reach out to us with your background and area of expertise.',
  },
];

const subjectOptions = [
  'General Inquiry',
  'Trip Planning Help',
  'Business Listing Request',
  'Report an Error',
  'Partnership / Advertising',
  'Press / Media',
  'Technical Support',
  'Other',
];

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact CityGuide Morocco',
    description:
      'Get in touch with the CityGuide team for travel advice, partnerships, or support.',
    url: 'https://citytoursmorocco.com/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'CityGuide',
      url: 'https://citytoursmorocco.com',
      email: 'hello@citytoursmorocco.com',
      telephone: '+212 5XX-XXXXXX',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Marrakech',
        addressCountry: 'MA',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(/images/hero-souk-lamps.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Have a question about Morocco? Need help planning your trip? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Contact Info Cards */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info) => (
              <a key={info.title} href={info.href} className="card-moroccan p-8 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <info.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{info.title}</h3>
                <p className="text-[var(--color-primary)] font-semibold mb-2">{info.value}</p>
                <p className="text-sm text-[var(--text-secondary)]">{info.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Hours */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card-moroccan p-8 md:p-10">
                <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                  Send Us a Message
                </h2>
                <p className="text-[var(--text-secondary)] mb-8">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border-primary)] bg-[var(--surface-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border-primary)] bg-[var(--surface-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border-primary)] bg-[var(--surface-primary)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-colors"
                    >
                      <option value="">Select a subject...</option>
                      {subjectOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell us how we can help..."
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border-primary)] bg-[var(--surface-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-colors resize-vertical"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Office Hours */}
              <div className="card-moroccan p-8">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <Clock className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Office Hours</h3>
                <div className="space-y-3">
                  {officeHours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center">
                      <span className="text-sm font-medium text-[var(--text-primary)]">{schedule.day}</span>
                      <span className="text-sm text-[var(--text-secondary)]">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="card-moroccan p-8">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <MessageCircle className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Follow Us</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Stay connected for travel tips, destination highlights, and community updates.
                </p>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section id="map" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="card-moroccan overflow-hidden">
            <div className="bg-[var(--surface-muted)] p-12 md:p-16 text-center">
              <div className="inline-flex p-4 rounded-full bg-[var(--color-primary)]/10 mb-6">
                <MapPin className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                Visit Us in Marrakech
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-2">
                CityGuide Headquarters
              </p>
              <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
                Gueliz District, Avenue Mohammed V<br />
                Marrakech 40000, Morocco
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <HelpCircle className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              Find quick answers to common questions before reaching out to our team.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6 md:p-8">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">{faq.question}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Explore Morocco?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Start planning your dream trip with our comprehensive city guides and travel tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Cities
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
