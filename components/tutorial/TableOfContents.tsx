"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { List } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
  locale: string;
}

export function TableOfContents({ items, locale }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin">
      <div className="rounded-xl border border-border bg-muted/20 p-4">
        <div className="flex items-center gap-2 mb-3">
          <List className="h-4 w-4 text-muted-foreground" />
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {locale === "bg" ? "Съдържание" : "Contents"}
          </p>
        </div>
        <nav className="space-y-1">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "block text-sm transition-colors rounded-md px-2 py-1",
                item.level === 2 ? "pl-2" : "pl-5",
                activeId === item.id
                  ? "text-primary font-medium bg-primary/5"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
