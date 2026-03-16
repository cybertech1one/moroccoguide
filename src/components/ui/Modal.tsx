'use client';

import {
  useEffect,
  useCallback,
  useRef,
  type ReactNode,
  type KeyboardEvent,
} from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showArch?: boolean;
  className?: string;
}

const sizeStyles = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  full: 'max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)]',
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring' as const, damping: 25, stiffness: 300 },
  },
  exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.15 } },
};

function Modal({
  open,
  onClose,
  title,
  description,
  children,
  size = 'md',
  showArch = true,
  className,
}: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  /* Close on Escape */
  const handleKeyDown = useCallback(
    (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  /* Body scroll lock + keyboard */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
      /* Focus trap: focus the dialog */
      contentRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, handleKeyDown]);

  /* Close on overlay click */
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlayRef.current) onClose();
    },
    [onClose],
  );

  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          ref={overlayRef}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.2 }}
          onClick={handleOverlayClick}
          className={cn(
            'fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4',
            'bg-black/50 backdrop-blur-sm',
          )}
          aria-modal="true"
          role="dialog"
          aria-label={title}
          aria-describedby={description ? 'modal-description' : undefined}
        >
          <motion.div
            ref={contentRef}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            tabIndex={-1}
            className={cn(
              'relative w-full bg-surface rounded-2xl shadow-xl overflow-hidden',
              'focus:outline-none',
              sizeStyles[size],
              className,
            )}
          >
            {/* Moroccan Arch Header */}
            {showArch && title && (
              <div className="relative">
                {/* Arch decorative element */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary" />

                <div className="relative px-6 pt-6 pb-4">
                  {/* Arch shape decoration behind title */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-gradient-to-b from-primary/5 to-transparent arch-shape" />

                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-display text-xl font-bold text-text-primary">
                        {title}
                      </h2>
                      {description && (
                        <p
                          id="modal-description"
                          className="mt-1 text-sm text-text-muted"
                        >
                          {description}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={onClose}
                      className={cn(
                        'shrink-0 p-2 rounded-lg text-text-muted',
                        'hover:bg-sand-100 hover:text-text-primary',
                        'transition-colors duration-200',
                        'focus-visible:outline-2 focus-visible:outline-primary',
                      )}
                      aria-label="Close dialog"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                {/* Arabesque divider */}
                <div className="arabesque-divider mx-6 text-xs">&#10022;</div>
              </div>
            )}

            {/* Header without arch */}
            {!showArch && title && (
              <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-4">
                <div>
                  <h2 className="font-heading text-lg font-bold text-text-primary">
                    {title}
                  </h2>
                  {description && (
                    <p id="modal-description" className="mt-1 text-sm text-text-muted">
                      {description}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className={cn(
                    'shrink-0 p-2 rounded-lg text-text-muted',
                    'hover:bg-sand-100 hover:text-text-primary',
                    'transition-colors duration-200',
                  )}
                  aria-label="Close dialog"
                >
                  <X size={20} />
                </button>
              </div>
            )}

            {/* Close-only (no title) */}
            {!title && (
              <button
                type="button"
                onClick={onClose}
                className={cn(
                  'absolute top-4 right-4 z-10 p-2 rounded-lg',
                  'text-text-muted hover:bg-sand-100 hover:text-text-primary',
                  'transition-colors duration-200',
                )}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            )}

            {/* Body */}
            <div className="px-6 pb-6 pt-2 max-h-[70vh] overflow-y-auto">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

Modal.displayName = 'Modal';

export { Modal };
export type { ModalProps };
