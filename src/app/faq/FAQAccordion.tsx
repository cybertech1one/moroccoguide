'use client';

// =====================================================================
// FAQ Accordion Component
// Smooth expand/collapse with height animation, lucide-react icons,
// and keyboard accessibility. Supports category-level expand-all.
// =====================================================================

import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronRight, Search, X } from 'lucide-react';

// ── Single accordion item ────────────────────────────────────────────

interface FAQAccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQAccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FAQAccordionProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [answer, isOpen]);

  return (
    <div
      className="rounded-xl border overflow-hidden transition-all duration-200"
      style={{
        borderColor: isOpen
          ? 'var(--color-primary-200)'
          : 'var(--border-light)',
        boxShadow: isOpen ? 'var(--shadow-sm)' : 'none',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 px-5 py-4 text-left transition-colors duration-200 cursor-pointer"
        aria-expanded={isOpen}
        style={{
          backgroundColor: isOpen ? 'var(--color-primary-50)' : 'transparent',
        }}
      >
        <span
          className="flex-shrink-0 mt-0.5 transition-transform duration-200"
          style={{
            color: 'var(--color-primary)',
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
          }}
          aria-hidden="true"
        >
          <ChevronRight size={20} />
        </span>
        <span
          className="font-semibold text-base"
          style={{
            fontFamily: 'var(--font-heading)',
            color: 'var(--text-primary)',
          }}
        >
          {question}
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentHeight + 32}px` : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div
          ref={contentRef}
          className="px-5 pb-5 pl-14 text-sm leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}

// ── Search bar for filtering FAQs ────────────────────────────────────

interface FAQSearchProps {
  query: string;
  onChange: (q: string) => void;
  resultCount: number;
  totalCount: number;
}

export function FAQSearch({
  query,
  onChange,
  resultCount,
  totalCount,
}: FAQSearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="mb-10">
      <div
        className="relative max-w-xl mx-auto"
      >
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors"
          style={{
            borderColor: query ? 'var(--color-primary-200)' : 'var(--border)',
            backgroundColor: 'var(--surface)',
          }}
        >
          <Search
            size={20}
            style={{ color: 'var(--text-muted)', flexShrink: 0 }}
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search all questions (e.g. visa, safety, food...)"
            className="flex-1 bg-transparent outline-none text-sm"
            style={{ color: 'var(--text-primary)' }}
            aria-label="Search FAQ questions"
          />
          {query && (
            <button
              onClick={() => {
                onChange('');
                inputRef.current?.focus();
              }}
              className="flex-shrink-0 p-1 rounded-md transition-colors cursor-pointer"
              style={{ color: 'var(--text-muted)' }}
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>
        {query && (
          <p
            className="text-xs mt-2 text-center"
            style={{ color: 'var(--text-muted)' }}
          >
            Showing {resultCount} of {totalCount} questions
          </p>
        )}
      </div>
    </div>
  );
}

// ── Category section with expand-all ─────────────────────────────────

interface FAQCategorySectionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  faqs: { question: string; answer: string }[];
  openItems: Set<string>;
  onToggle: (key: string) => void;
  categoryKey: string;
}

export function FAQCategorySection({
  id,
  title,
  icon,
  faqs,
  openItems,
  onToggle,
  categoryKey,
}: FAQCategorySectionProps) {
  const allOpen = faqs.every((_, i) => openItems.has(`${categoryKey}-${i}`));

  const toggleAll = useCallback(() => {
    faqs.forEach((_, i) => {
      const key = `${categoryKey}-${i}`;
      if (allOpen) {
        if (openItems.has(key)) onToggle(key);
      } else {
        if (!openItems.has(key)) onToggle(key);
      }
    });
  }, [faqs, categoryKey, allOpen, openItems, onToggle]);

  return (
    <section id={id} className="mb-14 scroll-mt-24">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{
              backgroundColor: 'var(--color-primary-50)',
              color: 'var(--color-primary)',
            }}
          >
            {icon}
          </div>
          <div>
            <h2
              className="text-2xl font-bold"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--text-primary)',
              }}
            >
              {title}
            </h2>
            <p
              className="text-xs mt-0.5"
              style={{ color: 'var(--text-muted)' }}
            >
              {faqs.length} question{faqs.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
        <button
          onClick={toggleAll}
          className="text-xs font-medium px-3 py-1.5 rounded-md border transition-colors cursor-pointer"
          style={{
            borderColor: 'var(--border)',
            color: 'var(--text-muted)',
          }}
        >
          {allOpen ? 'Collapse all' : 'Expand all'}
        </button>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const key = `${categoryKey}-${index}`;
          return (
            <FAQAccordionItem
              key={key}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems.has(key)}
              onToggle={() => onToggle(key)}
            />
          );
        })}
      </div>
    </section>
  );
}

// ── Default export: legacy compatibility ─────────────────────────────

export default function FAQAccordion({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <FAQAccordionItem
      question={question}
      answer={answer}
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
    />
  );
}
