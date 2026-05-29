"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { TutorialCard } from "./TutorialCard";
import { categoryLabels, difficultyLabels, type Tutorial, type Category, type Difficulty } from "@/lib/content/tutorials";

interface TutorialFiltersProps {
  tutorials: Tutorial[];
  locale: string;
}

export function TutorialFilters({ tutorials, locale }: TutorialFiltersProps) {
  const isBg = locale === "bg";
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | "all">("all");

  const categories = useMemo(() => {
    const cats = [...new Set(tutorials.map((t) => t.category))] as Category[];
    return ["all" as const, ...cats];
  }, [tutorials]);

  const filtered = useMemo(() => {
    return tutorials.filter((t) => {
      const matchesQuery =
        !query ||
        t.title[locale as "bg" | "en"].toLowerCase().includes(query.toLowerCase()) ||
        t.description[locale as "bg" | "en"].toLowerCase().includes(query.toLowerCase()) ||
        t.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()));
      const matchesCategory = selectedCategory === "all" || t.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === "all" || t.difficulty === selectedDifficulty;
      return matchesQuery && matchesCategory && matchesDifficulty;
    });
  }, [tutorials, query, selectedCategory, selectedDifficulty, locale]);

  const hasFilters = query || selectedCategory !== "all" || selectedDifficulty !== "all";

  const difficultyOptions: (Difficulty | "all")[] = ["all", "beginner", "intermediate", "advanced", "expert"];

  const difficultyLabel = {
    bg: { all: "Всички", beginner: "Начинаещ", intermediate: "Среден", advanced: "Напреднал", expert: "Експерт" },
    en: { all: "All", beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced", expert: "Expert" },
  };

  return (
    <div className="space-y-6">
      {/* Filters bar */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={isBg ? "Търси уроци..." : "Search tutorials..."}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-muted/30 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
          />
          {query && (
            <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Difficulty filter */}
        <div className="flex items-center gap-1 bg-muted/30 border border-border rounded-xl p-1">
          {difficultyOptions.map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDifficulty(d)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                selectedDifficulty === d
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {difficultyLabel[locale as "bg" | "en"][d]}
            </button>
          ))}
        </div>
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              "px-3 py-1.5 rounded-full text-xs font-medium border transition-all",
              selectedCategory === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-muted/30 text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
            )}
          >
            {cat === "all"
              ? (isBg ? "Всички" : "All")
              : categoryLabels[locale as "bg" | "en"][cat]}
          </button>
        ))}
        {hasFilters && (
          <button
            onClick={() => { setQuery(""); setSelectedCategory("all"); setSelectedDifficulty("all"); }}
            className="px-3 py-1.5 rounded-full text-xs font-medium border border-destructive/40 text-destructive hover:bg-destructive/10 transition-colors flex items-center gap-1"
          >
            <X className="h-3 w-3" />
            {isBg ? "Изчисти" : "Clear"}
          </button>
        )}
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {filtered.length} {isBg ? "урока намерени" : "tutorials found"}
        </p>
      </div>

      {/* Tutorial grid */}
      {filtered.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-muted-foreground">
            {isBg ? "Няма намерени уроци." : "No tutorials found."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((tutorial, i) => (
            <TutorialCard key={tutorial.slug} tutorial={tutorial} locale={locale} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
