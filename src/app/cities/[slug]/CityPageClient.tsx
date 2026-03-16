'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
  Share2,
  Bookmark,
  BookmarkCheck,
  ChevronLeft,
  ChevronRight,
  X,
  Check,
  Copy,
  Maximize2,
  Eye,
  MapPin,
  Utensils,
  Bed,
  Compass,
  Info,
  Map,
  Navigation,
  Landmark,
} from 'lucide-react'

/* ─── Types ─── */

interface Section {
  id: string
  label: string
  icon: React.ReactNode
}

/* ─── Section Navigation ─── */

const sections: Section[] = [
  { id: 'overview', label: 'Overview', icon: <Eye className="w-4 h-4" /> },
  { id: 'attractions', label: 'Attractions', icon: <Landmark className="w-4 h-4" /> },
  { id: 'stay', label: 'Where to Stay', icon: <Bed className="w-4 h-4" /> },
  { id: 'eat', label: 'Restaurants', icon: <Utensils className="w-4 h-4" /> },
  { id: 'activities', label: 'Activities', icon: <Compass className="w-4 h-4" /> },
  { id: 'getting-there', label: 'Getting There', icon: <Navigation className="w-4 h-4" /> },
  { id: 'practical', label: 'Practical Info', icon: <Info className="w-4 h-4" /> },
  { id: 'map', label: 'Map', icon: <Map className="w-4 h-4" /> },
  { id: 'nearby', label: 'Nearby', icon: <MapPin className="w-4 h-4" /> },
]

/* ─── Scroll Spy Hook ─── */

function useScrollSpy(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}

/* ─── Section Navigation Bar ─── */

export function SectionNav() {
  const sectionIds = sections.map((s) => s.id)
  const activeSection = useScrollSpy(sectionIds)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!navRef.current) return
    const activeEl = navRef.current.querySelector(`[data-section="${activeSection}"]`)
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [activeSection])

  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      const offset = 140
      const y = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [])

  return (
    <div className="sticky top-[calc(var(--header-height,5rem)+3px)] z-30 bg-[var(--surface)]/95 backdrop-blur-md border-b border-[var(--border-light)] shadow-sm">
      <div className="container-morocco">
        <nav
          ref={navRef}
          className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-2 -mx-1"
          aria-label="Page sections"
        >
          {sections.map((section) => (
            <button
              key={section.id}
              data-section={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                'flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all shrink-0',
                activeSection === section.id
                  ? 'bg-[var(--color-primary)] text-white shadow-md'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-muted)]'
              )}
            >
              {section.icon}
              <span className="hidden sm:inline">{section.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}

/* ─── Share Button ─── */

export function ShareButton({ cityName }: { cityName: string }) {
  const [copied, setCopied] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const handleShare = useCallback(async () => {
    const url = window.location.href
    const title = `${cityName} Travel Guide - CityGuide`

    if (navigator.share) {
      try {
        await navigator.share({ title, url })
        return
      } catch {
        // User cancelled or share failed, fall through to copy
      }
    }

    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API not available
    }
  }, [cityName])

  const shareToSocial = useCallback(
    (platform: string) => {
      const url = encodeURIComponent(window.location.href)
      const title = encodeURIComponent(`${cityName} Travel Guide - CityGuide`)

      const urls: Record<string, string> = {
        twitter: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
        facebook: `https://facebook.com/sharer/sharer.php?u=${url}`,
        whatsapp: `https://wa.me/?text=${title}%20${url}`,
      }

      if (urls[platform]) {
        window.open(urls[platform], '_blank', 'width=600,height=400')
      }
      setShowMenu(false)
    },
    [cityName]
  )

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm font-medium text-white hover:bg-white/20 transition-all"
        aria-label="Share this city"
      >
        {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
        <span className="hidden sm:inline">{copied ? 'Copied!' : 'Share'}</span>
      </button>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            className="absolute right-0 top-full mt-2 w-48 rounded-lg bg-[var(--surface)] border border-[var(--border)] shadow-xl p-2 z-50"
          >
            <button
              onClick={handleShare}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-[var(--surface-muted)] transition-colors text-left"
            >
              <Copy className="w-4 h-4 text-[var(--text-muted)]" />
              Copy Link
            </button>
            <button
              onClick={() => shareToSocial('twitter')}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-[var(--surface-muted)] transition-colors text-left"
            >
              <span className="w-4 h-4 text-center text-[var(--text-muted)] font-bold">X</span>
              Twitter / X
            </button>
            <button
              onClick={() => shareToSocial('facebook')}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-[var(--surface-muted)] transition-colors text-left"
            >
              <span className="w-4 h-4 text-center text-[var(--color-secondary)] font-bold">f</span>
              Facebook
            </button>
            <button
              onClick={() => shareToSocial('whatsapp')}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-[var(--surface-muted)] transition-colors text-left"
            >
              <span className="w-4 h-4 text-center text-[var(--color-green)] font-bold">W</span>
              WhatsApp
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside handler */}
      {showMenu && (
        <div className="fixed inset-0 z-40" onClick={() => setShowMenu(false)} aria-hidden />
      )}
    </div>
  )
}

/* ─── Bookmark Button ─── */

export function BookmarkButton({ citySlug }: { citySlug: string }) {
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    try {
      const bookmarks = JSON.parse(localStorage.getItem('cityguide-bookmarks') || '[]')
      setSaved(bookmarks.includes(citySlug))
    } catch {
      // localStorage not available
    }
  }, [citySlug])

  const toggleBookmark = useCallback(() => {
    try {
      const bookmarks = JSON.parse(localStorage.getItem('cityguide-bookmarks') || '[]') as string[]
      const updated = saved
        ? bookmarks.filter((s: string) => s !== citySlug)
        : [...bookmarks, citySlug]
      localStorage.setItem('cityguide-bookmarks', JSON.stringify(updated))
      setSaved(!saved)
    } catch {
      // localStorage not available
    }
  }, [citySlug, saved])

  return (
    <button
      onClick={toggleBookmark}
      className={cn(
        'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all',
        saved
          ? 'bg-[var(--color-accent)] text-white'
          : 'glass text-white hover:bg-white/20'
      )}
      aria-label={saved ? 'Remove bookmark' : 'Save city'}
    >
      {saved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
      <span className="hidden sm:inline">{saved ? 'Saved' : 'Save'}</span>
    </button>
  )
}

/* ─── Image Gallery ─── */

export function ImageGallery({ images, cityName }: { images: string[]; cityName: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = useCallback(() => {
    setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  }, [images.length])

  const handleNext = useCallback(() => {
    setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1))
  }, [images.length])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, handlePrev, handleNext])

  if (images.length === 0) return null

  return (
    <>
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.slice(0, 4).map((img, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveIndex(i)
              setIsOpen(true)
            }}
            className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
            aria-label={`View ${cityName} photo ${i + 1}`}
          >
            <Image
              src={img}
              alt={`${cityName} gallery photo ${i + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <Maximize2 className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {/* Show count on last thumbnail if more images */}
            {i === 3 && images.length > 4 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">+{images.length - 4}</span>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-10"
              aria-label="Close gallery"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm">
              {activeIndex + 1} / {images.length}
            </div>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePrev()
              }}
              className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-[90vw] h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[activeIndex]}
                alt={`${cityName} photo ${activeIndex + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
