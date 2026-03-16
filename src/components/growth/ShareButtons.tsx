'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Share2,
  Link2,
  Mail,
  Check,
  MessageCircle,
  Facebook,
  Twitter,
} from 'lucide-react';

interface ShareButtonsProps {
  title?: string;
  description?: string;
  url?: string;
}

interface SharePlatform {
  name: string;
  icon: React.ReactNode;
  color: string;
  shareCount: string;
  getUrl: (pageUrl: string, pageTitle: string) => string;
}

const platforms: SharePlatform[] = [
  {
    name: 'WhatsApp',
    icon: <MessageCircle className="h-4.5 w-4.5" />,
    color: '#25D366',
    shareCount: '2.4K',
    getUrl: (url, title) =>
      `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
  },
  {
    name: 'Facebook',
    icon: <Facebook className="h-4.5 w-4.5" />,
    color: '#1877F2',
    shareCount: '1.8K',
    getUrl: (url) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    name: 'X',
    icon: <Twitter className="h-4.5 w-4.5" />,
    color: '#000000',
    shareCount: '952',
    getUrl: (url, title) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
  },
  {
    name: 'Pinterest',
    icon: (
      <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
    color: '#E60023',
    shareCount: '743',
    getUrl: (url, title) =>
      `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`,
  },
];

export default function ShareButtons({
  title: propTitle,
  description: propDescription,
  url: propUrl,
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [pageUrl, setPageUrl] = useState('');
  const [pageTitle, setPageTitle] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setPageUrl(propUrl || window.location.href);
    setPageTitle(propTitle || document.title);
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [propUrl, propTitle]);

  const handleCopyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const input = document.createElement('input');
      input.value = pageUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [pageUrl]);

  const handleShare = useCallback(
    (platform: SharePlatform) => {
      // Try native share on mobile first
      if (isMobile && navigator.share) {
        navigator
          .share({
            title: pageTitle,
            text: propDescription || pageTitle,
            url: pageUrl,
          })
          .catch(() => {
            // Fallback to platform-specific URL
            window.open(platform.getUrl(pageUrl, pageTitle), '_blank', 'noopener,noreferrer');
          });
        return;
      }

      window.open(
        platform.getUrl(pageUrl, pageTitle),
        '_blank',
        'noopener,noreferrer,width=600,height=400'
      );
    },
    [pageUrl, pageTitle, propDescription, isMobile]
  );

  const handleEmailShare = useCallback(() => {
    const subject = encodeURIComponent(pageTitle);
    const body = encodeURIComponent(
      `Check out this Morocco travel guide: ${pageUrl}`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }, [pageUrl, pageTitle]);

  // Desktop: sticky sidebar
  if (!isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed top-1/2 left-4 z-[var(--z-sticky)] -translate-y-1/2"
      >
        <div
          className="flex flex-col items-center gap-1 rounded-2xl border p-2 shadow-lg"
          style={{
            background: 'var(--surface)',
            borderColor: 'var(--border-light)',
          }}
        >
          <span
            className="mb-1 text-[10px] font-semibold uppercase tracking-wider"
            style={{ color: 'var(--text-muted)' }}
          >
            Share
          </span>

          {platforms.map((platform) => (
            <motion.button
              key={platform.name}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleShare(platform)}
              className="group relative flex h-10 w-10 items-center justify-center rounded-xl transition-colors"
              style={{ color: 'var(--text-secondary)' }}
              aria-label={`Share on ${platform.name}`}
              title={`Share on ${platform.name}`}
            >
              <div
                className="absolute inset-0 rounded-xl opacity-0 transition-opacity group-hover:opacity-100"
                style={{ background: platform.color + '15' }}
              />
              <span
                className="relative transition-colors"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = platform.color)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--text-secondary)')
                }
              >
                {platform.icon}
              </span>
              {/* Share count tooltip */}
              <span
                className="pointer-events-none absolute left-full ml-2 whitespace-nowrap rounded-lg px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100"
                style={{ background: platform.color }}
              >
                {platform.shareCount}
              </span>
            </motion.button>
          ))}

          {/* Divider */}
          <div
            className="my-0.5 h-px w-6"
            style={{ background: 'var(--border)' }}
          />

          {/* Copy link */}
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopyLink}
            className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-[var(--surface-muted)]"
            style={{ color: copied ? 'var(--color-green)' : 'var(--text-secondary)' }}
            aria-label="Copy link"
            title="Copy link"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Check className="h-4.5 w-4.5" />
                </motion.div>
              ) : (
                <motion.div
                  key="link"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Link2 className="h-4.5 w-4.5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Email */}
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEmailShare}
            className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-[var(--surface-muted)]"
            style={{ color: 'var(--text-secondary)' }}
            aria-label="Share via email"
            title="Share via email"
          >
            <Mail className="h-4.5 w-4.5" />
          </motion.button>
        </div>
      </motion.div>
    );
  }

  // Mobile: bottom bar
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="fixed right-0 bottom-0 left-0 z-[var(--z-sticky)] border-t px-2 py-2 safe-area-pb"
      style={{
        background: 'var(--surface)',
        borderColor: 'var(--border-light)',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.08)',
      }}
    >
      <div className="flex items-center justify-around">
        {platforms.map((platform) => (
          <button
            key={platform.name}
            onClick={() => handleShare(platform)}
            className="flex flex-col items-center gap-0.5 px-2 py-1"
            aria-label={`Share on ${platform.name}`}
          >
            <span style={{ color: platform.color }}>{platform.icon}</span>
            <span
              className="text-[10px] font-medium"
              style={{ color: 'var(--text-muted)' }}
            >
              {platform.shareCount}
            </span>
          </button>
        ))}

        <button
          onClick={handleCopyLink}
          className="flex flex-col items-center gap-0.5 px-2 py-1"
          aria-label="Copy link"
        >
          <span style={{ color: copied ? 'var(--color-green)' : 'var(--text-secondary)' }}>
            {copied ? (
              <Check className="h-4.5 w-4.5" />
            ) : (
              <Link2 className="h-4.5 w-4.5" />
            )}
          </span>
          <span
            className="text-[10px] font-medium"
            style={{ color: 'var(--text-muted)' }}
          >
            {copied ? 'Copied' : 'Copy'}
          </span>
        </button>

        <button
          onClick={handleEmailShare}
          className="flex flex-col items-center gap-0.5 px-2 py-1"
          aria-label="Share via email"
        >
          <span style={{ color: 'var(--text-secondary)' }}>
            <Mail className="h-4.5 w-4.5" />
          </span>
          <span
            className="text-[10px] font-medium"
            style={{ color: 'var(--text-muted)' }}
          >
            Email
          </span>
        </button>

        {/* Native share button */}
        {typeof navigator !== 'undefined' && 'share' in navigator && (
          <button
            onClick={() =>
              navigator.share({
                title: pageTitle,
                text: propDescription || pageTitle,
                url: pageUrl,
              })
            }
            className="flex flex-col items-center gap-0.5 px-2 py-1"
            aria-label="More share options"
          >
            <span style={{ color: 'var(--color-primary)' }}>
              <Share2 className="h-4.5 w-4.5" />
            </span>
            <span
              className="text-[10px] font-medium"
              style={{ color: 'var(--text-muted)' }}
            >
              More
            </span>
          </button>
        )}
      </div>
    </motion.div>
  );
}
