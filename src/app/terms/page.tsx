import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  FileText,
  CheckCircle,
  Globe,
  UserCog,
  Copyright,
  ShieldAlert,
  AlertTriangle,
  Scale,
  Gavel,
  RefreshCw,
  Mail,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | CityGuide Morocco',
  description:
    'Read the Terms of Service for CityGuide Morocco. Understand your rights and responsibilities when using our tourism platform and services.',
  openGraph: {
    title: 'Terms of Service - CityGuide Morocco',
    description:
      'Terms and conditions governing the use of CityGuide, Morocco\'s comprehensive tourism platform.',
    url: 'https://citytoursmorocco.com/terms',
  },
};

const sections = [
  {
    id: 'acceptance',
    icon: CheckCircle,
    title: '1. Acceptance of Terms',
    content: [
      {
        subtitle: null,
        text: 'By accessing or using the CityGuide website (citytoursmorocco.com), mobile applications, or any related services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not access or use our Services.',
      },
      {
        subtitle: null,
        text: 'These Terms constitute a legally binding agreement between you ("User," "you," or "your") and CityGuide ("we," "us," or "our"). By using our Services, you represent that you are at least 16 years of age and have the legal capacity to enter into these Terms. If you are using the Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.',
      },
    ],
  },
  {
    id: 'description',
    icon: Globe,
    title: '2. Description of Service',
    content: [
      {
        subtitle: null,
        text: 'CityGuide is a comprehensive tourism platform dedicated to providing travel information, city guides, accommodation listings, restaurant recommendations, activity suggestions, and other tourism-related content for Morocco. Our Services include but are not limited to:',
      },
      {
        subtitle: null,
        text: '\u2022 City and destination guides with curated travel content.\n\u2022 Listings and reviews of accommodations, restaurants, attractions, and activities.\n\u2022 Trip planning tools, itinerary builders, and budget calculators.\n\u2022 User-generated content including reviews, ratings, and travel tips.\n\u2022 Booking facilitation through third-party partners.\n\u2022 Newsletters, travel alerts, and personalized recommendations.',
      },
      {
        subtitle: null,
        text: 'We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time without prior notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the Services.',
      },
    ],
  },
  {
    id: 'user-accounts',
    icon: UserCog,
    title: '3. User Accounts',
    content: [
      {
        subtitle: 'Account Creation',
        text: 'Some features of our Services may require you to create an account. When creating an account, you agree to provide accurate, current, and complete information and to update such information as necessary to keep it accurate and complete.',
      },
      {
        subtitle: 'Account Security',
        text: 'You are responsible for maintaining the confidentiality of your account credentials, including your password. You agree to notify us immediately of any unauthorized use of your account or any other breach of security. CityGuide will not be liable for any loss or damage arising from your failure to protect your account credentials.',
      },
      {
        subtitle: 'Account Termination',
        text: 'We reserve the right to suspend or terminate your account at our sole discretion, without notice, for conduct that we determine violates these Terms, is harmful to other users or the Services, or for any other reason we deem appropriate. You may also delete your account at any time by contacting us at hello@citytoursmorocco.com.',
      },
    ],
  },
  {
    id: 'content-ip',
    icon: Copyright,
    title: '4. Content & Intellectual Property',
    content: [
      {
        subtitle: 'Our Content',
        text: 'All content on CityGuide, including text, graphics, logos, images, photographs, audio, video, data compilations, software, and the overall design and layout of the Services (collectively, "CityGuide Content"), is the property of CityGuide or its licensors and is protected by Moroccan and international copyright, trademark, and other intellectual property laws.',
      },
      {
        subtitle: 'User-Generated Content',
        text: 'By submitting content to CityGuide (including reviews, comments, photographs, and other materials), you grant us a non-exclusive, worldwide, royalty-free, perpetual, irrevocable license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content in connection with the Services. You represent that you own or have the necessary rights to submit such content and that it does not violate any third-party rights.',
      },
      {
        subtitle: 'Prohibited Use',
        text: 'You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any CityGuide Content without our prior written consent, except for personal, non-commercial use. Systematic retrieval of data or content from CityGuide to create a collection, compilation, database, or directory is strictly prohibited.',
      },
    ],
  },
  {
    id: 'user-conduct',
    icon: ShieldAlert,
    title: '5. User Conduct',
    content: [
      {
        subtitle: null,
        text: 'When using our Services, you agree not to:',
      },
      {
        subtitle: null,
        text: '\u2022 Violate any applicable local, national, or international law or regulation.\n\u2022 Post false, misleading, defamatory, or fraudulent content.\n\u2022 Impersonate any person or entity, or falsely state or misrepresent your affiliation with any person or entity.\n\u2022 Harass, abuse, threaten, or intimidate other users.\n\u2022 Upload or transmit viruses, malware, or any other malicious code.\n\u2022 Attempt to gain unauthorized access to our systems, servers, or other users\u2019 accounts.\n\u2022 Use automated scripts, bots, or scrapers to access the Services or collect content without our express written permission.\n\u2022 Interfere with or disrupt the integrity or performance of the Services.\n\u2022 Post spam, unsolicited advertisements, or promotional materials.\n\u2022 Collect or harvest personal information of other users without their consent.',
      },
      {
        subtitle: null,
        text: 'We reserve the right to investigate and take appropriate legal action against anyone who, in our sole discretion, violates these provisions, including removing offending content, suspending or terminating accounts, and reporting violations to law enforcement authorities.',
      },
    ],
  },
  {
    id: 'disclaimers',
    icon: AlertTriangle,
    title: '6. Disclaimers',
    content: [
      {
        subtitle: null,
        text: 'THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, CITYGUIDE DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
      },
      {
        subtitle: null,
        text: 'CityGuide does not warrant that the Services will be uninterrupted, timely, secure, or error-free. We do not guarantee the accuracy, completeness, or reliability of any content, listings, reviews, or recommendations available through the Services. Travel information, prices, availability, and other details may change without notice.',
      },
      {
        subtitle: null,
        text: 'CityGuide is a platform that provides tourism information and facilitates connections between travelers and service providers. We are not a travel agency, tour operator, or booking agent. Any transactions or interactions between you and third-party service providers listed on our platform are solely between you and those providers. We are not responsible for the quality, safety, or legality of any services provided by third parties.',
      },
    ],
  },
  {
    id: 'liability',
    icon: Scale,
    title: '7. Limitation of Liability',
    content: [
      {
        subtitle: null,
        text: 'TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, CITYGUIDE AND ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, PARTNERS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:',
      },
      {
        subtitle: null,
        text: '\u2022 Your access to, use of, or inability to access or use the Services.\n\u2022 Any conduct or content of any third party on the Services.\n\u2022 Any content obtained from the Services.\n\u2022 Unauthorized access, use, or alteration of your transmissions or content.\n\u2022 Any travel decisions made based on information found on CityGuide.',
      },
      {
        subtitle: null,
        text: 'In no event shall CityGuide\u2019s total aggregate liability to you for all claims relating to the Services exceed the amount you paid to CityGuide, if any, during the twelve (12) months preceding the event giving rise to the liability, or one hundred Moroccan dirhams (100 MAD), whichever is greater.',
      },
    ],
  },
  {
    id: 'governing-law',
    icon: Gavel,
    title: '8. Governing Law',
    content: [
      {
        subtitle: null,
        text: 'These Terms shall be governed by and construed in accordance with the laws of the Kingdom of Morocco, without regard to its conflict of law provisions. Any disputes arising from or relating to these Terms or your use of the Services shall be subject to the exclusive jurisdiction of the courts of Marrakech, Morocco.',
      },
      {
        subtitle: null,
        text: 'If any provision of these Terms is found to be unenforceable or invalid by a court of competent jurisdiction, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect. Our failure to enforce any right or provision of these Terms shall not be deemed a waiver of such right or provision.',
      },
    ],
  },
  {
    id: 'changes',
    icon: RefreshCw,
    title: '9. Changes to Terms',
    content: [
      {
        subtitle: null,
        text: 'CityGuide reserves the right to modify or replace these Terms at any time at our sole discretion. When we make material changes, we will update the "Last Updated" date at the top of this page and take reasonable steps to notify you, such as posting a prominent notice on our website or sending an email to the address associated with your account.',
      },
      {
        subtitle: null,
        text: 'Your continued use of the Services after any changes to these Terms constitutes your acceptance of the revised Terms. If you do not agree to the new Terms, you must stop using the Services. We encourage you to periodically review these Terms to stay informed of updates.',
      },
    ],
  },
  {
    id: 'contact',
    icon: Mail,
    title: '10. Contact',
    content: [
      {
        subtitle: null,
        text: 'If you have any questions about these Terms of Service, please contact us:',
      },
      {
        subtitle: null,
        text: '\u2022 Email: hello@citytoursmorocco.com\n\u2022 Phone: +212 5XX-XXXXXX\n\u2022 Address: Gueliz District, Avenue Mohammed V, Marrakech 40000, Morocco',
      },
      {
        subtitle: null,
        text: 'For legal notices, please send correspondence to our physical address with "Legal Department" in the address line.',
      },
    ],
  },
];

export default function TermsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms of Service - CityGuide Morocco',
    description:
      'Terms and conditions governing the use of CityGuide, Morocco\'s comprehensive tourism platform.',
    url: 'https://citytoursmorocco.com/terms',
    publisher: {
      '@type': 'Organization',
      name: 'CityGuide',
      url: 'https://citytoursmorocco.com',
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
              'url(/images/hero-surfing.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Terms of Service</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Please read these terms carefully before using CityGuide. By accessing our platform, you agree to be bound by these terms.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Last Updated & Intro */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="card-moroccan p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-[var(--color-primary)]" />
              <span className="text-sm font-semibold text-[var(--color-primary)]">Last Updated: January 15, 2026</span>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the CityGuide website, applications,
              and services. CityGuide is operated from Marrakech, Morocco, and provides tourism information, city guides,
              travel planning tools, and related services for visitors to the Kingdom of Morocco. Please read these Terms
              carefully, as they contain important information about your legal rights, remedies, and obligations.
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

      {/* Terms Sections */}
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
            Questions About Our Terms?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            If you have any questions about these Terms of Service, our team is here to help clarify anything you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Mail className="w-4 h-4" /> Contact Us
            </Link>
            <Link
              href="/privacy"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
