import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  showHome?: boolean;
  className?: string;
}

function Breadcrumb({ items, showHome = true, className }: BreadcrumbProps) {
  const allItems: BreadcrumbItem[] = showHome
    ? [{ label: 'Home', href: '/' }, ...items]
    : items;

  /* Schema.org BreadcrumbList structured data */
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: item.href } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <nav aria-label="Breadcrumb" className={cn('py-3', className)}>
        <ol className="flex items-center flex-wrap gap-1 text-sm">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            const isHome = index === 0 && showHome;

            return (
              <li key={index} className="inline-flex items-center gap-1">
                {index > 0 && (
                  <ChevronRight
                    size={14}
                    className="text-sand-400 shrink-0 mx-0.5"
                    aria-hidden="true"
                  />
                )}

                {isLast ? (
                  <span
                    className="text-text-primary font-medium truncate max-w-[200px]"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : item.href ? (
                  <Link
                    href={item.href}
                    className={cn(
                      'inline-flex items-center gap-1 text-text-muted',
                      'hover:text-primary transition-colors duration-200',
                      'truncate max-w-[200px]',
                    )}
                  >
                    {isHome && <Home size={14} className="shrink-0" aria-hidden="true" />}
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <span className="text-text-muted truncate max-w-[200px]">
                    {isHome && <Home size={14} className="inline mr-1 shrink-0" aria-hidden="true" />}
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

Breadcrumb.displayName = 'Breadcrumb';

export { Breadcrumb };
export type { BreadcrumbProps, BreadcrumbItem };
