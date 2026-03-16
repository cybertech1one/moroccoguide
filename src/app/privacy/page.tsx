import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Shield,
  Eye,
  Cookie,
  Server,
  Lock,
  UserCheck,
  Baby,
  FileText,
  Mail,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | CityGuide Morocco',
  description:
    'Learn how CityGuide collects, uses, and protects your personal information. Our commitment to your privacy and data security.',
  openGraph: {
    title: 'Privacy Policy - CityGuide Morocco',
    description:
      'How CityGuide collects, uses, and protects your personal information.',
    url: 'https://cityguide.ma/privacy',
  },
};

const sections = [
  {
    id: 'information-collection',
    icon: Eye,
    title: '1. Information We Collect',
    content: [
      {
        subtitle: 'Information You Provide',
        text: 'When you create an account, submit a contact form, or interact with our services, we may collect personal information including your name, email address, phone number, and any other information you choose to provide. If you make a booking through our platform, we may also collect payment-related information as needed to process the transaction.',
      },
      {
        subtitle: 'Automatically Collected Information',
        text: 'When you visit CityGuide, we automatically collect certain technical information including your IP address, browser type and version, operating system, referring URLs, pages visited, time spent on pages, and other diagnostic data. This information helps us understand how our visitors use the site and improve the user experience.',
      },
      {
        subtitle: 'Location Information',
        text: 'With your consent, we may collect and process information about your approximate or precise location. This helps us provide location-relevant content such as nearby attractions, restaurants, and accommodations in Morocco.',
      },
    ],
  },
  {
    id: 'how-we-use',
    icon: FileText,
    title: '2. How We Use Your Information',
    content: [
      {
        subtitle: null,
        text: 'We use the information we collect for the following purposes:',
      },
      {
        subtitle: null,
        text: '\u2022 To provide, maintain, and improve our services, including personalized travel recommendations and city guides.\n\u2022 To process and respond to your inquiries, feedback, and support requests.\n\u2022 To send you updates, newsletters, and marketing communications (with your consent), including travel tips and destination highlights.\n\u2022 To analyze usage patterns and trends to enhance the CityGuide platform and user experience.\n\u2022 To detect, prevent, and address technical issues, fraud, and security concerns.\n\u2022 To comply with legal obligations and enforce our Terms of Service.',
      },
    ],
  },
  {
    id: 'cookies',
    icon: Cookie,
    title: '3. Cookies & Tracking Technologies',
    content: [
      {
        subtitle: 'What Are Cookies',
        text: 'Cookies are small text files stored on your device when you visit a website. We use cookies and similar tracking technologies (such as web beacons and pixels) to collect and store information about your interactions with CityGuide.',
      },
      {
        subtitle: 'Types of Cookies We Use',
        text: '\u2022 Essential Cookies: Required for the basic functionality of our site, such as maintaining your session and remembering your preferences.\n\u2022 Analytics Cookies: Help us understand how visitors interact with our site by collecting and reporting information anonymously.\n\u2022 Functional Cookies: Enable enhanced functionality and personalization, such as remembering your preferred language or recently viewed cities.\n\u2022 Marketing Cookies: Used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.',
      },
      {
        subtitle: 'Managing Cookies',
        text: 'You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of CityGuide. Most browsers allow you to block or delete cookies, and you can usually find these settings in the "Options" or "Preferences" menu of your browser.',
      },
    ],
  },
  {
    id: 'third-party',
    icon: Server,
    title: '4. Third-Party Services',
    content: [
      {
        subtitle: null,
        text: 'CityGuide may use third-party services that collect, monitor, and analyze user data to improve our service. These third-party providers have their own privacy policies governing how they use such information. Key third-party services we use include:',
      },
      {
        subtitle: null,
        text: '\u2022 Analytics Providers: We use analytics services to understand site traffic and usage patterns.\n\u2022 Hosting and Infrastructure: Our platform is hosted on cloud infrastructure providers that may process data on our behalf.\n\u2022 Payment Processors: If you make bookings or purchases, payment information is handled by PCI-compliant payment processors. We do not store your full credit card details.\n\u2022 Mapping Services: We use map providers to display location information for attractions, accommodations, and other points of interest.\n\u2022 Social Media Platforms: If you interact with our social media integrations, those platforms may collect data according to their own policies.',
      },
    ],
  },
  {
    id: 'data-security',
    icon: Lock,
    title: '5. Data Security',
    content: [
      {
        subtitle: null,
        text: 'We take the security of your personal information seriously. CityGuide implements industry-standard security measures to protect your data against unauthorized access, alteration, disclosure, or destruction. These measures include:',
      },
      {
        subtitle: null,
        text: '\u2022 SSL/TLS encryption for all data transmitted between your browser and our servers.\n\u2022 Encrypted storage of sensitive personal information.\n\u2022 Regular security audits and vulnerability assessments.\n\u2022 Access controls that limit employee access to personal data on a need-to-know basis.\n\u2022 Secure data backup and disaster recovery procedures.',
      },
      {
        subtitle: null,
        text: 'While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to promptly addressing any breaches should they occur.',
      },
    ],
  },
  {
    id: 'your-rights',
    icon: UserCheck,
    title: '6. Your Rights',
    content: [
      {
        subtitle: null,
        text: 'Depending on your location and applicable data protection laws, you may have the following rights regarding your personal information:',
      },
      {
        subtitle: null,
        text: '\u2022 Right of Access: You can request a copy of the personal data we hold about you.\n\u2022 Right to Rectification: You can ask us to correct any inaccurate or incomplete personal data.\n\u2022 Right to Erasure: You can request that we delete your personal data, subject to certain legal exceptions.\n\u2022 Right to Restrict Processing: You can ask us to limit how we use your data in certain circumstances.\n\u2022 Right to Data Portability: You can request a copy of your data in a structured, machine-readable format.\n\u2022 Right to Object: You can object to our processing of your personal data for direct marketing purposes.\n\u2022 Right to Withdraw Consent: Where we rely on your consent, you can withdraw it at any time.',
      },
      {
        subtitle: null,
        text: 'To exercise any of these rights, please contact us at hello@cityguide.ma. We will respond to your request within 30 days. You may also have the right to lodge a complaint with a data protection authority in your jurisdiction.',
      },
    ],
  },
  {
    id: 'childrens-privacy',
    icon: Baby,
    title: '7. Children\u2019s Privacy',
    content: [
      {
        subtitle: null,
        text: 'CityGuide is not directed at children under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately at hello@cityguide.ma. If we discover that a child under 16 has provided us with personal data, we will take steps to delete that information from our servers promptly.',
      },
    ],
  },
  {
    id: 'changes',
    icon: FileText,
    title: '8. Changes to This Policy',
    content: [
      {
        subtitle: null,
        text: 'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will notify you by updating the "Last Updated" date at the top of this page and, where appropriate, provide additional notice (such as an email notification or a prominent notice on our website). We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.',
      },
    ],
  },
  {
    id: 'contact',
    icon: Mail,
    title: '9. Contact Us',
    content: [
      {
        subtitle: null,
        text: 'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:',
      },
      {
        subtitle: null,
        text: '\u2022 Email: hello@cityguide.ma\n\u2022 Phone: +212 5XX-XXXXXX\n\u2022 Address: Gueliz District, Avenue Mohammed V, Marrakech 40000, Morocco',
      },
      {
        subtitle: null,
        text: 'We are committed to working with you to resolve any privacy concerns and will respond to your inquiry within 30 business days.',
      },
    ],
  },
];

export default function PrivacyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy - CityGuide Morocco',
    description:
      'Learn how CityGuide collects, uses, and protects your personal information.',
    url: 'https://cityguide.ma/privacy',
    publisher: {
      '@type': 'Organization',
      name: 'CityGuide',
      url: 'https://cityguide.ma',
    },
    dateModified: '2026-01-15',
    inLanguage: 'en',
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
              'url(https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=2800)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Your privacy matters to us. Learn how CityGuide collects, uses, and protects your personal information.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Last Updated & Intro */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="card-moroccan p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-[var(--color-primary)]" />
              <span className="text-sm font-semibold text-[var(--color-primary)]">Last Updated: January 15, 2026</span>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              This Privacy Policy describes how CityGuide (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), operated through the website
              cityguide.ma, collects, uses, and shares information about you when you use our website, mobile applications,
              and other online products and services (collectively, the &ldquo;Services&rdquo;). By using our Services, you agree to the
              collection and use of information in accordance with this policy.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="card-moroccan p-8 md:p-10 mb-12">
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">Table of Contents</h2>
            <nav className="space-y-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                  <span className="text-sm">{section.title}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="pb-16 md:pb-20">
        <div className="container-morocco max-w-4xl space-y-8">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="card-moroccan p-8 md:p-10 scroll-mt-24">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 shrink-0">
                  <section.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] pt-1">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-4 pl-0 md:pl-16">
                {section.content.map((block, index) => (
                  <div key={index}>
                    {block.subtitle && (
                      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                        {block.subtitle}
                      </h3>
                    )}
                    <p className="text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                      {block.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Questions About Your Privacy?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            We are committed to transparency. If you have any questions about how we handle your data, do not hesitate to reach out.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
          >
            <Mail className="w-4 h-4" /> Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
