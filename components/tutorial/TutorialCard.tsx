"use client";

import Link from "next/link";
import { Clock, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Tutorial } from "@/lib/content/tutorials";
import { categoryLabels, difficultyLabels, difficultyColors } from "@/lib/content/tutorials";

interface TutorialCardProps {
  tutorial: Tutorial;
  locale: string;
  index?: number;
}

export function TutorialCard({ tutorial, locale, index = 0 }: TutorialCardProps) {
  const isBg = locale === "bg";
  const cat = categoryLabels[locale as "bg" | "en"][tutorial.category];
  const diff = difficultyLabels[locale as "bg" | "en"][tutorial.difficulty];
  const diffColor = difficultyColors[tutorial.difficulty];

  return (
    <Link
      href={`/${locale}/tutorials/${tutorial.slug}`}
      className="group flex flex-col h-full rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
    >
      {/* Top badges */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-medium text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-full">
          {cat}
        </span>
        <div className="flex items-center gap-1.5">
          {tutorial.new && (
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-teal-500/15 text-teal-500">
              {isBg ? "НОВО" : "NEW"}
            </span>
          )}
          {tutorial.featured && (
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-bold text-foreground text-base leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
        {tutorial.title[locale as "bg" | "en"]}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
        {tutorial.description[locale as "bg" | "en"]}
      </p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {tutorial.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-[10px] font-medium bg-muted/40 text-muted-foreground px-2 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-5 pt-4 border-t border-border/40 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className={cn("text-[11px] font-semibold px-2 py-0.5 rounded-full", diffColor)}>
            {diff}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {tutorial.readTime} {isBg ? "мин." : "min"}
          </span>
        </div>
        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
      </div>
    </Link>
  );
}
