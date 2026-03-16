'use client';

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type ReactNode,
  type KeyboardEvent,
} from 'react';
import { cn } from '@/lib/utils';

interface Tab {
  id: string;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  tabs: Tab[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  variant?: 'underline' | 'pill';
  size?: 'sm' | 'md';
  className?: string;
  children?: ReactNode;
}

interface TabPanelProps {
  id: string;
  activeTab: string;
  children: ReactNode;
  className?: string;
}

function Tabs({
  tabs,
  activeTab: controlledActive,
  onTabChange,
  variant = 'underline',
  size = 'md',
  className,
}: TabsProps) {
  const [internalActive, setInternalActive] = useState(tabs[0]?.id ?? '');
  const activeTab = controlledActive ?? internalActive;
  const scrollRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const setTabRef = useCallback(
    (id: string) => (el: HTMLButtonElement | null) => {
      if (el) {
        tabRefs.current.set(id, el);
      } else {
        tabRefs.current.delete(id);
      }
    },
    [],
  );

  /* Animate the underline indicator */
  useEffect(() => {
    if (variant !== 'underline') return;
    const activeEl = tabRefs.current.get(activeTab);
    const indicator = indicatorRef.current;
    const container = scrollRef.current;

    if (activeEl && indicator && container) {
      const containerRect = container.getBoundingClientRect();
      const tabRect = activeEl.getBoundingClientRect();
      indicator.style.width = `${tabRect.width}px`;
      indicator.style.transform = `translateX(${tabRect.left - containerRect.left + container.scrollLeft}px)`;
    }
  }, [activeTab, variant]);

  const handleTabClick = useCallback(
    (tabId: string) => {
      setInternalActive(tabId);
      onTabChange?.(tabId);
    },
    [onTabChange],
  );

  /* Keyboard navigation */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      const enabledTabs = tabs.filter((t) => !t.disabled);
      const currentIndex = enabledTabs.findIndex((t) => t.id === activeTab);

      let nextIndex = currentIndex;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextIndex = currentIndex < enabledTabs.length - 1 ? currentIndex + 1 : 0;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        nextIndex = currentIndex > 0 ? currentIndex - 1 : enabledTabs.length - 1;
      } else if (e.key === 'Home') {
        e.preventDefault();
        nextIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        nextIndex = enabledTabs.length - 1;
      }

      if (nextIndex !== currentIndex) {
        const nextTab = enabledTabs[nextIndex];
        handleTabClick(nextTab.id);
        tabRefs.current.get(nextTab.id)?.focus();
      }
    },
    [tabs, activeTab, handleTabClick],
  );

  return (
    <div
      ref={scrollRef}
      role="tablist"
      aria-orientation="horizontal"
      onKeyDown={handleKeyDown}
      className={cn(
        'relative overflow-x-auto scrollbar-none',
        variant === 'underline' && 'border-b border-border-light',
        className,
      )}
    >
      <div className="flex items-center gap-1 min-w-max">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;

          return (
            <button
              key={tab.id}
              ref={setTabRef(tab.id)}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              disabled={tab.disabled}
              onClick={() => handleTabClick(tab.id)}
              className={cn(
                'inline-flex items-center gap-2 font-heading font-medium whitespace-nowrap',
                'transition-all duration-200',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                tab.disabled && 'opacity-40 cursor-not-allowed',

                /* Underline variant */
                variant === 'underline' && [
                  size === 'sm' ? 'px-3 pb-2.5 pt-1 text-xs' : 'px-4 pb-3 pt-1.5 text-sm',
                  isActive
                    ? 'text-primary'
                    : 'text-text-muted hover:text-text-primary',
                ],

                /* Pill variant */
                variant === 'pill' && [
                  size === 'sm' ? 'px-3 py-1.5 text-xs rounded-lg' : 'px-4 py-2 text-sm rounded-xl',
                  isActive
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-text-muted hover:text-text-primary hover:bg-sand-100',
                ],
              )}
            >
              {tab.icon && (
                <span className="shrink-0 [&>svg]:h-4 [&>svg]:w-4" aria-hidden="true">
                  {tab.icon}
                </span>
              )}
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Animated gradient underline indicator */}
      {variant === 'underline' && (
        <div
          ref={indicatorRef}
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
          aria-hidden="true"
        />
      )}
    </div>
  );
}

Tabs.displayName = 'Tabs';

/* ---- Tab Panel ---- */

function TabPanel({ id, activeTab, children, className }: TabPanelProps) {
  if (id !== activeTab) return null;

  return (
    <div
      role="tabpanel"
      id={`tabpanel-${id}`}
      aria-labelledby={`tab-${id}`}
      tabIndex={0}
      className={cn('focus:outline-none', className)}
    >
      {children}
    </div>
  );
}

TabPanel.displayName = 'TabPanel';

export { Tabs, TabPanel };
export type { TabsProps, TabPanelProps, Tab };
