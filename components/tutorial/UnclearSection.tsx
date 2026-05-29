"use client";

import { useState } from "react";
import { HelpCircle, Send, CheckCircle2, Trash2 } from "lucide-react";

export interface UnclearItem {
  id: string;
  tutorialSlug: string;
  tutorialTitle: string;
  text: string;
  submittedAt: string;
  locale: string;
}

const STORAGE_KEY = "seo_academy_unclear_items";

export function saveUnclearItem(item: Omit<UnclearItem, "id" | "submittedAt">): UnclearItem {
  const newItem: UnclearItem = {
    ...item,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    submittedAt: new Date().toISOString(),
  };
  const existing = loadUnclearItems();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...existing, newItem]));
  return newItem;
}

export function loadUnclearItems(): UnclearItem[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function deleteUnclearItem(id: string): void {
  const items = loadUnclearItems().filter((i) => i.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

interface UnclearSectionProps {
  tutorialSlug: string;
  tutorialTitle: string;
  locale: string;
}

export function UnclearSection({ tutorialSlug, tutorialTitle, locale }: UnclearSectionProps) {
  const isBg = locale === "bg";
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) {
      setError(true);
      return;
    }
    saveUnclearItem({ tutorialSlug, tutorialTitle, text: trimmed, locale });
    setText("");
    setError(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <div className="mt-10 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 sm:p-8">
      <div className="flex items-start gap-3 mb-5">
        <HelpCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
        <div>
          <h2 className="font-bold text-foreground text-lg">
            {isBg ? "Нещо не ти е напълно ясно?" : "Something not fully clear?"}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {isBg
              ? "Запиши какво точно — ще се запази в твоите бележки за по-късен преглед."
              : "Write down exactly what — it will be saved in your notes for later review."}
          </p>
        </div>
      </div>

      {submitted ? (
        <div className="flex items-center gap-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 px-4 py-3 text-sm font-medium text-teal-600 dark:text-teal-400">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          {isBg
            ? "Записано! Можеш да прегледаш всички бележки на страницата с въпроси."
            : "Saved! You can review all notes on the questions page."}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <textarea
            value={text}
            onChange={(e) => { setText(e.target.value); setError(false); }}
            placeholder={isBg
              ? "Напр. Не разбирам как sameAs линковете помагат на AI… или Каква е разликата между Entity SEO и GEO на практика?"
              : "E.g. I don't understand how sameAs links help AI… or What's the practical difference between Entity SEO and GEO?"}
            rows={4}
            className={`w-full rounded-xl border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 resize-none focus:outline-none focus:ring-2 focus:ring-amber-500/40 transition-colors ${
              error ? "border-rose-500/50 bg-rose-500/5" : "border-border hover:border-amber-500/30"
            }`}
          />
          {error && (
            <p className="text-xs text-rose-500">
              {isBg ? "Напиши нещо преди да запишеш." : "Write something before saving."}
            </p>
          )}
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              {isBg
                ? "Записва се само локално в браузъра ти."
                : "Saved locally in your browser only."}
            </p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600 transition-colors"
            >
              <Send className="h-3.5 w-3.5" />
              {isBg ? "Запиши" : "Save"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
