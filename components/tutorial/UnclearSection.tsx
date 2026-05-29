"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  HelpCircle, Send, CheckCircle2, Trash2, MessageSquare,
  X, Clock, CornerDownLeft, StickyNote, ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface UnclearItem {
  id: string;
  tutorialSlug: string;
  tutorialTitle: string;
  text: string;
  submittedAt: string;
  locale: string;
  reply?: string;
  repliedAt?: string;
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

export function saveReply(id: string, reply: string): UnclearItem[] {
  const items = loadUnclearItems().map((i) =>
    i.id === id ? { ...i, reply: reply.trim(), repliedAt: new Date().toISOString() } : i
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  return items;
}

export function deleteReply(id: string): UnclearItem[] {
  const items = loadUnclearItems().map((i) =>
    i.id === id ? { ...i, reply: undefined, repliedAt: undefined } : i
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  return items;
}

function formatDate(iso: string, locale: string): string {
  return new Date(iso).toLocaleString(locale === "bg" ? "bg-BG" : "en-GB", {
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  });
}

interface UnclearSectionProps {
  tutorialSlug: string;
  tutorialTitle: string;
  locale: string;
}

export function UnclearSection({ tutorialSlug, tutorialTitle, locale }: UnclearSectionProps) {
  const isBg = locale === "bg";

  const [notes, setNotes] = useState<UnclearItem[]>([]);
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [replyingId, setReplyingId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

  useEffect(() => {
    const all = loadUnclearItems();
    setNotes(
      all
        .filter((i) => i.tutorialSlug === tutorialSlug)
        .sort((a, b) => new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime())
    );
    setMounted(true);
  }, [tutorialSlug]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) { setError(true); return; }
    const newItem = saveUnclearItem({ tutorialSlug, tutorialTitle, text: trimmed, locale });
    setNotes((prev) => [...prev, newItem]);
    setText("");
    setError(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  function handleDelete(id: string) {
    setDeletingId(id);
    setTimeout(() => {
      deleteUnclearItem(id);
      setNotes((prev) => prev.filter((i) => i.id !== id));
      setDeletingId(null);
    }, 300);
  }

  function handleStartReply(id: string, existing?: string) {
    setReplyingId(id);
    setReplyText(existing ?? "");
  }

  function handleCancelReply() {
    setReplyingId(null);
    setReplyText("");
  }

  function handleSubmitReply(id: string) {
    if (!replyText.trim()) return;
    const updated = saveReply(id, replyText);
    setNotes(
      updated
        .filter((i) => i.tutorialSlug === tutorialSlug)
        .sort((a, b) => new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime())
    );
    setReplyingId(null);
    setReplyText("");
  }

  function handleDeleteReply(id: string) {
    const updated = deleteReply(id);
    setNotes(
      updated
        .filter((i) => i.tutorialSlug === tutorialSlug)
        .sort((a, b) => new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime())
    );
  }

  return (
    <div className="mt-10 space-y-4">

      {/* Existing notes for this tutorial */}
      {mounted && notes.length > 0 && (
        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 sm:p-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <StickyNote className="h-4 w-4 text-amber-500" />
              <span className="font-semibold text-foreground text-sm">
                {isBg ? "Твоите бележки за този урок" : "Your notes for this tutorial"}
              </span>
              <span className="text-xs text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-full">
                {notes.length}
              </span>
            </div>
            <Link
              href={`/${locale}/questions`}
              className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              {isBg ? "Всички бележки" : "All notes"}
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="space-y-3">
            {notes.map((item) => (
              <div
                key={item.id}
                className={cn(
                  "group rounded-xl border border-amber-500/15 bg-card transition-all duration-300",
                  deletingId === item.id && "opacity-0 scale-95"
                )}
              >
                {/* Note text */}
                <div className="p-4">
                  <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap mb-3">
                    {item.text}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {formatDate(item.submittedAt, locale)}
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleStartReply(item.id, item.reply)}
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                      >
                        <MessageSquare className="h-3.5 w-3.5" />
                        {item.reply
                          ? (isBg ? "Редактирай отговора" : "Edit reply")
                          : (isBg ? "Отговори" : "Reply")}
                      </button>
                      <span className="text-muted-foreground/30">·</span>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-rose-500 transition-colors"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        {isBg ? "Изтрий" : "Delete"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Existing reply */}
                {item.reply && replyingId !== item.id && (
                  <div className="border-t border-amber-500/10 bg-primary/5 rounded-b-xl px-4 py-3">
                    <div className="flex items-start gap-2">
                      <CornerDownLeft className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-primary mb-1">
                          {isBg ? "Моят отговор" : "My reply"}
                        </p>
                        <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                          {item.reply}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDeleteReply(item.id)}
                        className="shrink-0 text-muted-foreground/50 hover:text-rose-500 transition-colors opacity-0 group-hover:opacity-100"
                        title={isBg ? "Изтрий отговора" : "Delete reply"}
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Reply form */}
                {replyingId === item.id && (
                  <div className="border-t border-amber-500/10 bg-primary/5 rounded-b-xl px-4 py-3">
                    <div className="flex items-center gap-2 mb-2">
                      <CornerDownLeft className="h-3.5 w-3.5 text-primary" />
                      <p className="text-xs font-semibold text-primary">
                        {isBg ? "Напиши отговор" : "Write a reply"}
                      </p>
                    </div>
                    <textarea
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder={isBg
                        ? "Сега, след като научих повече, разбирам, че…"
                        : "Now that I've learned more, I understand that…"}
                      rows={3}
                      autoFocus
                      className="w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 transition-colors"
                    />
                    <div className="flex items-center justify-end gap-2 mt-2">
                      <button
                        onClick={handleCancelReply}
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-muted/40"
                      >
                        <X className="h-3.5 w-3.5" />
                        {isBg ? "Откажи" : "Cancel"}
                      </button>
                      <button
                        onClick={() => handleSubmitReply(item.id)}
                        disabled={!replyText.trim()}
                        className="flex items-center gap-1.5 text-xs font-semibold text-primary-foreground bg-primary hover:bg-primary/90 transition-colors px-3 py-1.5 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <Send className="h-3.5 w-3.5" />
                        {isBg ? "Запиши" : "Save"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add new note form */}
      <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 sm:p-8">
        <div className="flex items-start gap-3 mb-5">
          <HelpCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <h2 className="font-bold text-foreground text-lg">
              {isBg ? "Нещо не ти е напълно ясно?" : "Something not fully clear?"}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {isBg
                ? "Запиши какво точно — ще се запази тук и в твоите бележки."
                : "Write down exactly what — it will be saved here and in your notes."}
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="flex items-center gap-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 px-4 py-3 text-sm font-medium text-teal-600 dark:text-teal-400">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            {isBg ? "Записано! Ще се появи по-горе." : "Saved! It will appear above."}
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
    </div>
  );
}
